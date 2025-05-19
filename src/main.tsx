import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { YMapComponentsProvider } from 'ymap3-components';

import { LogoutProvider } from '@/components/providers/LogoutProvider';
import ThemeProvider from '@/components/providers/ThemeProvider';

import '@/styles/index.css';

import { App } from './App.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
	<YMapComponentsProvider
		apiKey={import.meta.env.VITE_YANDEX_MAP_API_KEY}
		lang='en_EN'
	>
		<StrictMode>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider>
					<LogoutProvider>
						<App />
					</LogoutProvider>
				</ThemeProvider>
			</QueryClientProvider>
		</StrictMode>
	</YMapComponentsProvider>
);
