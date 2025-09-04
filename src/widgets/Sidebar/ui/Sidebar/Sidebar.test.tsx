import { fireEvent, render, screen } from "@testing-library/react";
import Sidebar from "./Sidebar";
import { withTranslation } from "react-i18next";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation";

describe("sidebar", () => {
  test("have sidebar", () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });
  test("toogle sidebar", () => {
    renderWithTranslation(<Sidebar />);
    const toogleBtn = screen.getByTestId("sidebar-toogle");
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    fireEvent.click(toogleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
