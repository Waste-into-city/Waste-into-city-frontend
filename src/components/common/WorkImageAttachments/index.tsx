import { ChangeEvent, MouseEventHandler, useRef } from 'react';

import attachmentIcon from '@/assets/icons/svg/attachment_icon.svg';
import closeIcon from '@/assets/icons/svg/cross_icon.svg';
import { Button } from '@/components/ui/Button';
import { ALLOWED_IMAGE_TYPES } from '@/constants/allowedImageTypes';
import { useNotifications } from '@/store/notifications/useNotifications';
import { NotificationTypes } from '@/types/notificationTypes';
import { validateWorkImageApplications } from '@/utils/validators/workImageApplications';

import {
	ATTACH_LABEL,
	ATTACHMENTS_COUNT_EXCEEDED_MESSAGE,
	FILE_SIZE_EXCEEDED_MESSAGE,
	MAX_ATTACHMENTS_COUNT,
} from './constants';
import * as S from './styled';
import { WorkImageAttachmentsProps } from './types';

export const WorkImageAttachments = ({
	attachments,
	setAttachments,
}: WorkImageAttachmentsProps) => {
	const { appendNotification } = useNotifications();
	const attachmentInputRef = useRef<HTMLInputElement>(null);

	const handleAttachmentsChange = (
		changeEvent: ChangeEvent<HTMLInputElement>
	) => {
		const attachedFiles = changeEvent.target.files
			? [...changeEvent.target.files]
			: [];

		if (attachedFiles.length + attachments.length > MAX_ATTACHMENTS_COUNT) {
			appendNotification(
				NotificationTypes.Error,
				ATTACHMENTS_COUNT_EXCEEDED_MESSAGE
			);
			return;
		}

		if (!validateWorkImageApplications(attachedFiles)) {
			appendNotification(
				NotificationTypes.Error,
				FILE_SIZE_EXCEEDED_MESSAGE
			);
			return;
		}

		setAttachments((prevAttachments) => [
			...prevAttachments,
			...attachedFiles.map((file) => ({
				url: URL.createObjectURL(file),
				file,
			})),
		]);
	};

	const handleAttachButtonClick: MouseEventHandler = (mouseEvent) => {
		mouseEvent.stopPropagation();
		mouseEvent.preventDefault();
		attachmentInputRef.current?.click();
	};

	const handleAttachmentRemoveButtonClick =
		(attachmentUrl: string): MouseEventHandler =>
		(mouseEvent) => {
			mouseEvent.stopPropagation();
			mouseEvent.preventDefault();
			setAttachments((prevAttachments) =>
				prevAttachments.filter(({ url }) => url !== attachmentUrl)
			);
		};

	return (
		<S.AttachmentsWrapper>
			<S.AttachButtonPart>
				<h2>{ATTACH_LABEL}</h2>
				<Button onClick={handleAttachButtonClick}>
					<img src={attachmentIcon} />
				</Button>
			</S.AttachButtonPart>
			<S.AttachmentsList $isNotEmpty={attachments.length > 0}>
				{attachments.map(({ url }) => (
					<S.AttachmentItem key={url}>
						<img src={url} />
						<Button
							onClick={handleAttachmentRemoveButtonClick(url)}
						>
							<img src={closeIcon} />
						</Button>
					</S.AttachmentItem>
				))}
			</S.AttachmentsList>
			<input
				ref={attachmentInputRef}
				accept={ALLOWED_IMAGE_TYPES}
				type='file'
				hidden
				onChange={handleAttachmentsChange}
				multiple
			/>
		</S.AttachmentsWrapper>
	);
};
