import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";
import Layout from "../components/Layout";
import BackgroundImage from "../assets/star-wars-characters-background.jpg";

describe("Layout Component", () => {
  test("renders star wars character showdown in layout", () => {
    render(<Layout children={undefined} />);
    const linkElement = screen.getByText(/Star Wars Character Showdown/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("applies background image", () => {
    render(<Layout children={undefined} />);
    const layoutContainer = screen.getByTestId("layout-container");
    expect(layoutContainer).toHaveStyle(`
      background: url(${BackgroundImage});
      background-size: cover;
      background-position: center;
    `);
  });
});
