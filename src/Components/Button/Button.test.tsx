import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
  test("renders button with label", () => {
    render(<Button label="Submit" />);
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  test("applies correct variant styles", () => {
    const { rerender } = render(<Button label="Primary" variant="primary" />);
    expect(screen.getByText("Primary")).toHaveClass("bg-blue-600");

    rerender(<Button label="Secondary" variant="secondary" />);
    expect(screen.getByText("Secondary")).toHaveClass("bg-gray-200");

    rerender(<Button label="Danger" variant="danger" />);
    expect(screen.getByText("Danger")).toHaveClass("bg-red-600");
  });

  test("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" onClick={handleClick} />);
    fireEvent.click(screen.getByText("Click Me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
