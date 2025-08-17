import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Navbar from "./Navbar";

const meta: Meta<typeof Navbar> = {
  title: "Components/Navbar",
  component: Navbar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    links: ["Home", "About", "Services", "Contact"],
  },
};

export const FewLinks: Story = {
  args: {
    links: ["Login", "Register"],
  },
};

export const ManyLinks: Story = {
  args: {
    links: ["Dashboard", "Profile", "Settings", "Support", "Logout"],
  },
};
