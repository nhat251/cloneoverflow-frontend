import { type PropsWithChildren } from 'react';
import './GlobalStyles.css';

function GlobalStyles({ children }: PropsWithChildren) {
  return <>{children}</>;
}

export default GlobalStyles;
