import { goodPlugin } from './good.plugin';
import { inertPlugin } from './inert.plugin';
import { IPlugin } from './i-plugin';

export const plugins: IPlugin[] = [
  inertPlugin,
  goodPlugin
];
