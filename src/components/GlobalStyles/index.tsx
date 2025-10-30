import { type PropsWithChildren } from 'react';
import './GlobalStyles.module.scss';

function GlobalStyles({ children }: PropsWithChildren) {
  return <>{children}</>;
}

export default GlobalStyles;
