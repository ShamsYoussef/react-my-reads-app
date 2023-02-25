import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import routesConfig from "./RouteConfig";

describe("App", () => {
  const setupRouter = (route?: string[]) => {
    const router = createMemoryRouter(routesConfig, {
      ...(route && { initialEntries: [...route] })
    });

    render(<RouterProvider router={router} />);
  };

  it("Should verify page content for default route (Home)", async () => {
    await setupRouter();

    const header = await screen.getByText("MyReads");

    expect(header).toBeInTheDocument();
  });
});
