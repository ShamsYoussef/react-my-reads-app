import Notification from "./../components/Notification";
import { ERRORS } from './../utils/constants';

const NotFound = () => {
  return <Notification message={ERRORS.pageNotFound} severity="error" />;
};

export default NotFound;
