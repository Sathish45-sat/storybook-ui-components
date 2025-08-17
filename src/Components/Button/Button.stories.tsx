import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Click Me",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Cancel",
    variant: "secondary",
  },
};

export const Danger: Story = {
  args: {
    label: "Delete",
    variant: "danger",
  },
};
