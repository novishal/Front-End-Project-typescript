import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { DataTable } from "./components/DataTable/DataTable";
import { InputField } from "./components/InputField/InputField";
function App() {
    const columns = [
        { key: "name", title: "Name", dataIndex: "name", sortable: true },
        { key: "age", title: "Age", dataIndex: "age", sortable: true },
        { key: "email", title: "Email", dataIndex: "email" },
    ];
    const data = [
        { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
        { id: 2, name: "Bob", age: 30, email: "bob@example.com" },
        { id: 3, name: "Charlie", age: 22, email: "charlie@example.com" },
    ];
    return (_jsxs("div", { className: "p-4", children: [_jsx(InputField, {}), _jsx("div", { className: "mt-6", children: _jsx(DataTable, { data: data, columns: columns, selectable: true }) })] }));
}
export default App;
