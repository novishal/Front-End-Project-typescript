import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { InputField } from "./components/InputField/InputField";
import { DataTable } from "./components/DataTable/DataTable";
const data = [
    { id: 1, name: "Vishal", age: 25, email: "vishal@example.com" },
    { id: 2, name: "Jason", age: 30, email: "jason@example.com" },
    { id: 3, name: "Pablo", age: 22, email: "pablo@example.com" },
];
const columns = [
    { key: "name", title: "Name", dataIndex: "name", sortable: true },
    { key: "age", title: "Age", dataIndex: "age", sortable: true },
    { key: "email", title: "Email", dataIndex: "email" },
];
function App() {
    return (_jsxs("div", { className: "p-4 space-y-6", children: [_jsx("h1", { className: "text-xl font-bold", children: "InputField Demo" }), _jsx(InputField, { label: "Name", placeholder: "Enter your name" }), _jsx("h1", { className: "text-xl font-bold", children: "DataTable Demo" }), _jsx(DataTable, { data: data, columns: columns, selectable: true, onRowSelect: (rows) => console.log(rows) })] }));
}
export default App;
