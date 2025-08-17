import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card Component", () => {
  test("renders with title and content", () => {
    render(<Card title="Test Title" content="Test Content" />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  test("renders with an image when imageUrl is provided", () => {
    const imageUrl = "https://picsum.photos/200";
    render(<Card title="Image Card" content="With image" imageUrl={imageUrl} />);
    const imageElement = screen.getByRole("img");
    expect(imageElement).toHaveAttribute("src", imageUrl);
    expect(imageElement).toHaveAttribute("alt", "Image Card");
  });

  test("does not render image if imageUrl is not provided", () => {
    render(<Card title="No Image Card" content="This card has no image" />);
    const images = screen.queryAllByRole("img");
    expect(images).toHaveLength(0);
  });
});
