import { fireEvent, screen } from "@testing-library/react";
import Sidebar from "./Sidebar";
import { componentRender } from "@/shared/lib/tests/componentRender";

describe("sidebar", () => {
    test("have sidebar", () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });
    test("toogle sidebar", () => {
        componentRender(<Sidebar />);
        const toogleBtn = screen.getByTestId("sidebar-toogle");
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        fireEvent.click(toogleBtn);
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    });
});
