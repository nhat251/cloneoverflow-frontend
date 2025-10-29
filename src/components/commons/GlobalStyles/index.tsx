import { ReactNode } from 'react';
import './GlobalStyles.module.scss';

interface GlobalStylesProps {
  children: ReactNode;
}

function GlobalStyles({ children }: GlobalStylesProps) {
  return <>{children}</>;
}

export default GlobalStyles;
