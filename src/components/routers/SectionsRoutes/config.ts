import { FC, lazy, LazyExoticComponent } from 'react';

import { ROUTES } from '@/constants/routes';

type RouteSection = {
	route: string;
	section: LazyExoticComponent<FC>;
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
	},
	{
		route: ROUTES.ACCOUNT,
		section: getLazySection('UserAccountSection'),
	},
	{
		route: ROUTES.WORKS,
		section: getLazySection('UserWorksSection'),
	},
	{
		route: ROUTES.WORK_INFO + '/:id',
		section: getLazySection('WorkInfoSection'),
	},
	{
		route: ROUTES.RATE_WORK_PARTICIPANTS + '/:id',
		section: getLazySection('WorkParticipantsRateSection'),
	},
	{
		route: ROUTES.REPORT_WORK + '/:id',
		section: getLazySection('WorkReportSection'),
	},
	{
		route: '/errors',
		section: getLazySection('ErrorsSection'),
	},
];

export const config = {
	ROUTE_SECTIONS,
};
