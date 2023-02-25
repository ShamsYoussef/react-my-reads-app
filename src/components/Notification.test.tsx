import { render, screen } from "@testing-library/react";
import Notification from "./Notification";

describe("Notification component", () => {
  const setupNotification = (message: string) => {
    render(<Notification message={message} severity="info" />);

    const notificationEl = screen.getByTestId("notification") as HTMLElement;

    return notificationEl;
  };

  it("renders Notification correctly", () => {
    const notificationEl = setupNotification("");

    expect(notificationEl).toBeInTheDocument();
  });

  it("Should render message correctly", () => {
    const message = "something went wrong";

    const notificationEl = setupNotification(message);

    expect(notificationEl.textContent).toBe(message);
  });
});
