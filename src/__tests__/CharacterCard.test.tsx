import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";
import CharacterCard from "../components/CharacterCard";

describe("CharacterCard Component", () => {
  const character = { name: "Luke Skywalker" };
  const image = "path/to/luke-skywalker.jpg";

  test("renders character name", () => {
    render(<CharacterCard character={character} image={image} />);
    const nameElement = screen.getByText(character.name);
    expect(nameElement).toBeInTheDocument();
  });

  test("renders character image", () => {
    render(<CharacterCard character={character} image={image} />);
    const imageElement = screen.getByAltText(character.name);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", image);
  });
});
