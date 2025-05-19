export const API_URI = `${import.meta.env.VITE_BACKEND_URI}/api/v1`;

// Admin Panel
export const ADMIN_PANEL_URI = `${API_URI}/admin-panel`;
export const ADMIN_PANEL_GET_ALL_DATA_URI = `${ADMIN_PANEL_URI}/get-all-data`;
export const ADMIN_PANEL_SAVE_ALL_DATA_URI = `${ADMIN_PANEL_URI}/save-all-data`;

// Identity
export const IDENTITY_URI = `${API_URI}/identity`;
export const GET_USER_INFO_URI = `${IDENTITY_URI}/get-user-info`;
export const GET_SELF_USER_INFO_URI = `${IDENTITY_URI}/get-self-user-info`;
export const GET_USER_INFO_ADMIN_URI = `${IDENTITY_URI}/get-user-info-for-admin`;
export const GET_LEADERBOARD_URI = `${IDENTITY_URI}/get-leaderboard-page-by-best-ranking`;
export const USER_LOGOUT_URI = `${IDENTITY_URI}/logout`;
export const USER_LOGIN_URI = `${IDENTITY_URI}/login`;
export const USER_REGISTER_URI = `${IDENTITY_URI}/register`;
export const TOKEN_REFRESH_URI = `${IDENTITY_URI}/refresh`;
export const UPDATE_USER_INFO_URI = `${IDENTITY_URI}/update-own-user-info`;

// Images
export const IMAGES_URI = `${API_URI}/images`;
export const getImageUriByName = (imageName: string) =>
	`${IMAGES_URI}/get-by-name/${imageName}`;
export const UPLOAD_IMAGE_URI = `${IMAGES_URI}/upload`;

// Work Applications
export const WORK_APPLICATIONS_URI = `${API_URI}/work-applications`;
export const WORK_APPLICATION_CREATE_URI = `${WORK_APPLICATIONS_URI}/create`;
export const WORK_APPLICATION_APPROVE_URI = `${WORK_APPLICATIONS_URI}/confirm`;
export const WORK_APPLICATION_REJECT_URI = `${WORK_APPLICATIONS_URI}/reject`;
export const GET_WORK_APPLICATION_URI = `${WORK_APPLICATIONS_URI}/get-from-queue`;

// Colleague Reports
export const WORK_PARTICIPANTS_REPORTS_URI = `${API_URI}/work-colleague-reports`;
export const CREATE_WORK_PARTICIPANT_MARKS_URI = `${WORK_PARTICIPANTS_REPORTS_URI}/create-marks`;

// Work Reports
export const WORK_REPORTS_URI = `${API_URI}/work-report-complains`;
export const CREATE_WORK_REPORT_URI = `${WORK_REPORTS_URI}/create`;
export const WORK_REPORT_APPROVE_URI = `${WORK_REPORTS_URI}/confirm`;
export const WORK_REPORT_REJECT_URI = `${WORK_REPORTS_URI}/reject`;
export const GET_WORK_REPORT_URI = `${WORK_REPORTS_URI}/get-from-queue`;

// Works
export const WORKS_URI = `${API_URI}/works`;
export const GET_WORKS_LOOKUP_URI = `${WORKS_URI}/get-all-lookup`;
export const GET_SINGLE_WORK_URI = `${WORKS_URI}/get-by-id`;
export const GET_WORK_HISTORY_URI = `${WORKS_URI}/get-all-own-take-part-in`;
export const JOIN_WORK_URI = `${WORKS_URI}/take-part-in-self`;
export const JOIN_WORK_FIRST_URI = `${WORKS_URI}/take-part-in-first-self`;
export const LEAVE_WORK_URI = `${WORKS_URI}/leave-from-participation-self`;
