import type { ComponentType } from 'react';

export default interface RouteObject {
  path: string;
  component: ComponentType;
  layout?: ComponentType | null;
}
