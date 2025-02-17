import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { YMapComponentsProvider } from 'ymap3-components';

import ThemeProvider from '@/components/providers/ThemeProvider/index.tsx';

import '@/styles/index.css';

import { App } from './App.tsx';

createRoot(document.getElementById('root')!).render(
	<YMapComponentsProvider
		apiKey={import.meta.env.VITE_YANDEX_MAP_API_KEY}
		lang='en_EN'
	>
		<StrictMode>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</StrictMode>
	</YMapComponentsProvider>
);
