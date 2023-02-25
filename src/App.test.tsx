import { render, screen, waitFor } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import routesConfig from "./RouteConfig";
import { ERRORS, INPUT_PLACEHOLDER } from "./utils/constants";

describe("App", () => {
  const setupRouter = (route?: string[]) => {
    const router = createMemoryRouter(routesConfig, {
      ...(route && { initialEntries: [...route] })
    });

    render(<RouterProvider router={router} />);
  };

  it("Should verify page content for default route (Home)", () => {
    setupRouter();

    const header = screen.getByText("MyReads");

    expect(header).toBeInTheDocument();
  });

  it("Should verify search page content after navigation", async () => {
    setupRouter(["/", "/search"]);

    await waitFor(() => {
      const searchInput = screen.queryByPlaceholderText(INPUT_PLACEHOLDER);
      expect(searchInput).toBeInTheDocument();
    });
  });
});
