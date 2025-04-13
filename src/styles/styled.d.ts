import 'styled-components';

import { IBaseTheme } from './baseTheme';
import { IColoredTheme } from './coloredTheme';

declare module 'styled-components' {
	export interface DefaultTheme extends IBaseTheme, IColoredTheme {}
}
