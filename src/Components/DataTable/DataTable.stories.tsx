
import type { Meta, StoryObj } from "@storybook/react";
import { DataTable, DataTableProps } from "./DataTable";

interface Row {
  name: string;
  age: number;
  role: string;
}

const columns = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "age", title: "Age", dataIndex: "age", sortable: true },
  { key: "role", title: "Role", dataIndex: "role" },
];

const data: Row[] = [
  { name: "Alice", age: 24, role: "Developer" },
  { name: "Bob", age: 30, role: "Designer" },
  { name: "Charlie", age: 28, role: "Manager" },
];

const meta: Meta<typeof DataTable<Row>> = {
  title: "Components/DataTable",
  component: DataTable<Row>,
};
export default meta;

type Story = StoryObj<typeof DataTable<Row>>;

export const Default: Story = {
  args: {
    data,
    columns,
  } as DataTableProps<Row>,
};

export const Loading: Story = {
  args: {
    data: [],
    columns,
    loading: true,
  } as DataTableProps<Row>,
};

export const Empty: Story = {
  args: {
    data: [],
    columns,
  } as DataTableProps<Row>,
};

export const Selectable: Story = {
  args: {
    data,
    columns,
    selectable: true,
  } as DataTableProps<Row>,
};
