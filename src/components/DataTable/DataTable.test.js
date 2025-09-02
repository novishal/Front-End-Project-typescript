import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, fireEvent } from "@testing-library/react";
import { DataTable } from "./DataTable";
const columns = [
    { key: "name", title: "Name", dataIndex: "name", sortable: true },
    { key: "age", title: "Age", dataIndex: "age", sortable: true },
];
const data = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
];
describe("DataTable", () => {
    test("renders data", () => {
        render(_jsx(DataTable, { data: data, columns: columns }));
        expect(screen.getByText("Alice")).toBeInTheDocument();
        expect(screen.getByText("Bob")).toBeInTheDocument();
    });
    test("shows loading state", () => {
        render(_jsx(DataTable, { data: [], columns: columns, loading: true }));
        expect(screen.getByText("Loading...")).toBeInTheDocument();
    });
    test("shows empty state", () => {
        render(_jsx(DataTable, { data: [], columns: columns }));
        expect(screen.getByText("No data available")).toBeInTheDocument();
    });
    test("allows row selection", () => {
        const handleSelect = jest.fn();
        render(_jsx(DataTable, { data: data, columns: columns, selectable: true, onRowSelect: handleSelect }));
        const checkbox = screen.getAllByRole("checkbox")[0];
        fireEvent.click(checkbox);
        expect(handleSelect).toHaveBeenCalledWith([{ id: 1, name: "Alice", age: 25 }]);
    });
});
