import { ReactNode } from "react";

export default interface NavComponentProps {
  to: string,
  title?: string,
  icon?: ReactNode,
  img?: string
}


