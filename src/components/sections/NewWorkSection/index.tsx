import { WorkInfoForm } from '@/components/common/WorkInfoForm';

import { formInitialValues } from './constants';

export default function NewWorkSection() {
	return (
		<WorkInfoForm
			initialValues={formInitialValues}
			onSubmit={() => Promise.resolve()}
		/>
	);
}
