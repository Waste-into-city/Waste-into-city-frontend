import { useErrorMessages } from '@/store/messages/useErrorMessages';

const ErrorsSection = () => {
	const { messages } = useErrorMessages();
	return (
		<>
			<h1>Errors</h1>
			{messages.map((msg) => (
				<p key={msg}>{msg}</p>
			))}
		</>
	);
};

export default ErrorsSection;
