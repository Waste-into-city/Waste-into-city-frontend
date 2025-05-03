import { WorkReportForm } from './types';

export const initialValues: WorkReportForm = {
	title: '',
	description: '',
};

export const REPORT_LABELS: Record<keyof WorkReportForm, string> = {
	title: 'Report Title',
	description: 'Report Description',
};

export const REPORT_FORM_LABEL = 'Fill work report';
export const REPORT_BUTTON_LABEL = 'Report Work';
