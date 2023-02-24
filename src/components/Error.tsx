import Alert from "@mui/material/Alert";
import { ErrorContainer } from "./styles/Error.styled";

interface ErrorProps {
  message: string;
  margin?: string;
}

const Error: React.FC<ErrorProps> = ({ message, margin }) => {
  return (
    <ErrorContainer margin={margin}>
      <Alert severity="error">{message}</Alert>
    </ErrorContainer>
  );
};

export default Error;
