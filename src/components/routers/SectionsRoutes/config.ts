import { FC, lazy, LazyExoticComponent } from 'react';

import { ROUTES } from '@/constants/routes';
import { UserRoles } from '@/types/userRoles';

type RouteSection = {
	route: string;
	section: LazyExoticComponent<FC>;
	allowedRoles: Array<UserRoles>;
	isSelfPadded?: boolean;
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
		allowedRoles: [UserRoles.User, UserRoles.Admin],
	},
	{
		route: ROUTES.ACCOUNT,
		section: getLazySection('UserAccountSection'),
		allowedRoles: [UserRoles.Admin, UserRoles.Moderator, UserRoles.User],
	},
	{
		route: ROUTES.WORKS,
		section: getLazySection('UserWorksSection'),
		allowedRoles: [UserRoles.Admin, UserRoles.User],
	},
	{
		route: ROUTES.WORK_INFO + '/:id',
		section: getLazySection('WorkInfoSection'),
		allowedRoles: [
			UserRoles.Admin,
			UserRoles.Guest,
			UserRoles.Moderator,
			UserRoles.User,
		],
	},
	{
		route: ROUTES.WORKS_GROUP,
		section: getLazySection('WorksGroupSection'),
		allowedRoles: [
			UserRoles.Admin,
			UserRoles.Guest,
			UserRoles.Moderator,
			UserRoles.User,
		],
	},
	{
		route: ROUTES.RATE_WORK_PARTICIPANTS + '/:id',
		section: getLazySection('WorkParticipantsRateSection'),
		allowedRoles: [UserRoles.User, UserRoles.Admin],
	},
	{
		route: ROUTES.REPORT_WORK + '/:id',
		section: getLazySection('WorkReportSection'),
		allowedRoles: [UserRoles.Admin, UserRoles.User],
	},
	{
		route: ROUTES.WORK_REVIEW,
		section: getLazySection('WorkReviewSection'),
		allowedRoles: [UserRoles.Moderator],
		isSelfPadded: true,
	},
	{
		route: ROUTES.REPORT_REVIEW,
		section: getLazySection('ReportReviewSection'),
		allowedRoles: [UserRoles.Moderator],
		isSelfPadded: true,
	},
	{
		route: ROUTES.ADMIN_PANEL,
		section: getLazySection('AdminPanelSection'),
		allowedRoles: [UserRoles.Admin],
	},
];

export const config = {
	ROUTE_SECTIONS,
};
