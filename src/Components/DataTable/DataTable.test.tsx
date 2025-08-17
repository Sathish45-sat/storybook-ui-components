
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { DataTable, Column } from "./DataTable";

interface RowData {
  id: number;
  name: string;
  age: number;
}

const columns: Column<RowData>[] = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "age", title: "Age", dataIndex: "age", sortable: true },
];

const data: RowData[] = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
];

describe("DataTable", () => {
  it("renders table with data", () => {
    render(<DataTable<RowData> data={data} columns={columns} />);
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
  });

  it("shows loading state", () => {
    render(<DataTable<RowData> data={[]} columns={columns} loading />);
    expect(screen.getByRole("status")).toHaveTextContent("Loading…");
  });

  it("shows empty state when no data", () => {
    render(<DataTable<RowData> data={[]} columns={columns} />);
    expect(screen.getByRole("note")).toHaveTextContent("No data");
  });

  it("sorts data when column header clicked", () => {
    render(<DataTable<RowData> data={data} columns={columns} />);
    const ageHeader = screen.getByRole("button", { name: /sort by age/i });

    fireEvent.click(ageHeader);
    const rowsAsc = screen.getAllByRole("row");
    expect(rowsAsc[1]).toHaveTextContent("Alice");
    expect(rowsAsc[2]).toHaveTextContent("Bob");

    fireEvent.click(ageHeader);
    const rowsDesc = screen.getAllByRole("row");
    expect(rowsDesc[1]).toHaveTextContent("Bob");
    expect(rowsDesc[2]).toHaveTextContent("Alice");
  });

  it("allows row selection", () => {
    const handleSelect = jest.fn();
    render(
      <DataTable<RowData>
        data={data}
        columns={columns}
        selectable
        onRowSelect={handleSelect}
      />
    );

    const checkboxes = screen.getAllByRole("checkbox");
    fireEvent.click(checkboxes[0]);
    expect(handleSelect).toHaveBeenCalledWith([data[0]]);
  });
});
