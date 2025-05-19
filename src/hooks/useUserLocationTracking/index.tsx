import { useCallback, useEffect, useState } from 'react';

import { useCurrentLocation } from '@/store/location/useCurrentLocation';
import { getDistanceBetweenPoints } from '@/utils/getDistanceBetweenPoints';

import {
	DEFAULT_CHECK_TIMEOUT,
	SLOW_CHECK_TIMEOUT,
	SPEED_BORDER,
	STORED_LOCATIONS,
} from './constants';
import { getCurrentLocation } from './helpers';
import { UserLocationRecord, UseUserLocationTrackingProps } from './types';

export const useUserLocationTracking = ({
	onFirstLocate,
}: UseUserLocationTrackingProps = {}) => {
	const { location, setLocation } = useCurrentLocation();
	const [refetchInterval, setRefetchInterval] = useState(
		DEFAULT_CHECK_TIMEOUT
	);
	const [locationRecords, setLocationRecords] = useState<
		Array<UserLocationRecord>
	>([]);
	const [userSpeedSum, setUserSpeedSum] = useState(0);

	const updateRecordsOnTimeout = useCallback(async () => {
		try {
			if (!location) {
				throw new Error();
			}

			const newLocation = await getCurrentLocation();
			const distanceToPrevPoint = getDistanceBetweenPoints(
				newLocation,
				locationRecords.length
					? locationRecords[locationRecords.length - 1].location
					: location
			);
			const newLocationSpeed = distanceToPrevPoint / refetchInterval;

			if (locationRecords.length < STORED_LOCATIONS) {
				setLocationRecords((prevRecords) => [
					...prevRecords,
					{ location: newLocation, speed: newLocationSpeed },
				]);
				setUserSpeedSum(
					(prevSpeedSum) => prevSpeedSum + newLocationSpeed
				);
			} else {
				const firstRecordSpeed = locationRecords[0].speed;
				setLocationRecords((prevRecords) => [
					...prevRecords.slice(1),
					{ location: newLocation, speed: newLocationSpeed },
				]);
				setUserSpeedSum(
					(prevSpeedSum) =>
						prevSpeedSum - firstRecordSpeed + newLocationSpeed
				);
			}

			setLocation(newLocation);
		} catch {
			setRefetchInterval(DEFAULT_CHECK_TIMEOUT);
			setLocationRecords([]);
			setUserSpeedSum(0);
		}
	}, [
		locationRecords,
		setLocationRecords,
		setUserSpeedSum,
		location,
		refetchInterval,
		setLocation,
	]);

	useEffect(() => {
		getCurrentLocation().then((startLocation) => {
			setLocation(startLocation);
			onFirstLocate?.(startLocation);
		});
	}, []);

	useEffect(() => {
		const timeoutHandler = setInterval(
			updateRecordsOnTimeout,
			refetchInterval
		);

		return () => {
			clearInterval(timeoutHandler);
		};
	}, [refetchInterval, updateRecordsOnTimeout]);

	useEffect(() => {
		if (locationRecords.length === STORED_LOCATIONS) {
			const newRefetchInterval =
				userSpeedSum / STORED_LOCATIONS < SPEED_BORDER
					? SLOW_CHECK_TIMEOUT
					: DEFAULT_CHECK_TIMEOUT;

			setRefetchInterval((prevInterval) =>
				newRefetchInterval !== prevInterval
					? newRefetchInterval
					: prevInterval
			);
		}
	}, [
		userSpeedSum,
		locationRecords.length,
		refetchInterval,
		setRefetchInterval,
	]);
};
