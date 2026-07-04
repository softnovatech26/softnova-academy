import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";

describe("Home course slider", () => {
  it("renders course cards with links to course detail pages", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText("Web Development")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /web development/i })).toHaveAttribute(
      "href",
      "/courses/web-development"
    );
  });
});
