import Alert, { AlertColor } from "@mui/material/Alert";
import { NotificationContainer } from "./styles/Notification.styled";

interface NotificationProps {
  message: string;
  margin?: string;
  severity: AlertColor;
}

const Notification: React.FC<NotificationProps> = ({
  message,
  margin,
  severity
}) => {
  return (
    <NotificationContainer margin={margin}>
      <Alert severity={severity}>{message}</Alert>
    </NotificationContainer>
  );
};

export default Notification;
