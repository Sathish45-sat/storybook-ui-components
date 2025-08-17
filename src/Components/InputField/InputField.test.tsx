import { render, screen, fireEvent } from "@testing-library/react";
import InputField from "./InputField";

describe("InputField Component", () => {
  test("renders with placeholder text", () => {
    render(<InputField placeholder="Enter your name" />);
    const inputElement = screen.getByPlaceholderText("Enter your name");
    expect(inputElement).toBeInTheDocument();
  });

  test("renders as text input by default", () => {
    render(<InputField placeholder="Default input" />);
    const inputElement = screen.getByPlaceholderText("Default input");
    expect(inputElement).toHaveAttribute("type", "text");
  });

  test("renders as password input when type=password", () => {
    render(<InputField placeholder="Enter password" type="password" />);
    const inputElement = screen.getByPlaceholderText("Enter password");
    expect(inputElement).toHaveAttribute("type", "password");
  });

  test("calls onChange handler when typing", () => {
    const handleChange = jest.fn();
    render(<InputField placeholder="Type here" onChange={handleChange} />);
    const inputElement = screen.getByPlaceholderText("Type here");

    fireEvent.change(inputElement, { target: { value: "Hello" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(inputElement).toHaveValue("Hello");
  });
});
