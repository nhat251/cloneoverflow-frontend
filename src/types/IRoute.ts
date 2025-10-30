import type { ComponentType } from 'react';

export interface IRoute {
  path: string;
  component: ComponentType;
  layout?: ComponentType | null;
}
