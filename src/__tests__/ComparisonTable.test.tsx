import React from "react";
import { render, screen } from "@testing-library/react";
import ComparisonTable from "../components/ComparisonTable";
import "@testing-library/jest-dom/extend-expect";

describe("ComparisonTable Component", () => {
  test("displays the correct overall winner", () => {
    // Mock character data for testing
    const character1 = {
      name: "Luke Skywalker",
      height: "172",
      mass: "77",
      hair_color: "blond",
      skin_color: "fair",
      eye_color: "blue",
      birth_year: "19BBY",
      gender: "male",
    };
    const character2 = {
      name: "Darth Vader",
      height: "202",
      mass: "136",
      hair_color: "none",
      skin_color: "white",
      eye_color: "yellow",
      birth_year: "41.9BBY",
      gender: "male",
    };

    render(<ComparisonTable character1={character1} character2={character2} />);

    const expectedWinner = "Darth Vader";

    const overallWinnerElement = screen.getByText(
      `Overall Winner: ${expectedWinner}`
    );

    expect(overallWinnerElement).toBeInTheDocument();
  });
});
