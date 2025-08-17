import type { Meta, StoryObj } from "@storybook/react-webpack5";
import InputField from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const TextInput: Story = {
  args: {
    placeholder: "Enter your name",
    type: "text",
  },
};

export const PasswordInput: Story = {
  args: {
    placeholder: "Enter your password",
    type: "password",
  },
};

export const EmailInput: Story = {
  args: {
    placeholder: "Enter your email",
    type: "email",
  },
};
