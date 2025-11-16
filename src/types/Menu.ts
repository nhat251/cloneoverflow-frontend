export interface IMenuItem {
  title: string;
  to?: string;
  icon?: React.ReactNode;
  indent?: boolean;
  separate?: boolean;
}