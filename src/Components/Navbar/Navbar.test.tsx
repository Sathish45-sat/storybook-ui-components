import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar Component", () => {
  test("renders app title", () => {
    render(<Navbar links={["Home", "About"]} />);
    expect(screen.getByText("MyApp")).toBeInTheDocument();
  });

  test("renders all provided links", () => {
    const links = ["Home", "About", "Contact"];
    render(<Navbar links={links} />);
    links.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });

  test("renders no extra links when empty array passed", () => {
    render(<Navbar links={[]} />);
    const listItems = screen.queryAllByRole("listitem");
    expect(listItems).toHaveLength(0);
  });
});
