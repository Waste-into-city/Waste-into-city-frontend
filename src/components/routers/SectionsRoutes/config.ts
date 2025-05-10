import { FC, lazy, LazyExoticComponent } from 'react';

import { ROUTES } from '@/constants/routes';

type RouteSection = {
	route: string;
	section: LazyExoticComponent<FC>;
	isAuthRoute: boolean;
};

const getLazySection = (sectionName: string) =>
	lazy<FC>(async () => ({
		default: (
			await import(`@/components/sections/${sectionName}/index.tsx`)
		).default,
	}));

const ROUTE_SECTIONS: RouteSection[] = [
	{
		route: ROUTES.NEW_WORK,
		section: getLazySection('NewWorkSection'),
		isAuthRoute: true,
	},
	{
		route: ROUTES.ACCOUNT,
		section: getLazySection('UserAccountSection'),
		isAuthRoute: true,
	},
	{
		route: ROUTES.WORKS,
		section: getLazySection('UserWorksSection'),
		isAuthRoute: true,
	},
	{
		route: ROUTES.WORK_INFO + '/:id',
		section: getLazySection('WorkInfoSection'),
		isAuthRoute: false,
	},
	{
		route: ROUTES.WORKS_GROUP,
		section: getLazySection('WorksGroupSection'),
		isAuthRoute: false,
	},
	{
		route: ROUTES.RATE_WORK_PARTICIPANTS + '/:id',
		section: getLazySection('WorkParticipantsRateSection'),
		isAuthRoute: true,
	},
	{
		route: ROUTES.REPORT_WORK + '/:id',
		section: getLazySection('WorkReportSection'),
		isAuthRoute: true,
	},
	{
		route: '/errors',
		section: getLazySection('ErrorsSection'),
		isAuthRoute: true,
	},
];

export const config = {
	ROUTE_SECTIONS,
};
