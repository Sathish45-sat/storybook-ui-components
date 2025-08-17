import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Card from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "Default Card",
    content: "This is a simple card component with text content.",
  },
};

export const WithImage: Story = {
  args: {
    title: "Beautiful Landscape",
    content: "This card has an image at the top.",
    imageUrl: "https://picsum.photos/400/200", // Random sample image
  },
};

export const LongContent: Story = {
  args: {
    title: "Card with Long Content",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
};
