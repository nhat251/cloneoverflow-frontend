interface NotificationProps {
  title: string;
  message: string;
}

function Notification({ title, message }: NotificationProps) {
  return (
    <div>
      <strong>{title}</strong>
      <div>{message}</div>
    </div>
  );
}
export default Notification