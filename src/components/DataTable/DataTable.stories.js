import { DataTable } from "./DataTable";
const columns = [
    { key: "name", title: "Name", dataIndex: "name", sortable: true },
    { key: "age", title: "Age", dataIndex: "age", sortable: true },
    { key: "email", title: "Email", dataIndex: "email" },
];
const data = [
    { id: 1, name: "Vishal", age: 25, email: "vishal@example.com" },
    { id: 2, name: "Jason", age: 30, email: "jason@example.com" },
    { id: 3, name: "Pablo", age: 22, email: "pablo@example.com" },
];
const meta = {
    title: "Components/DataTable",
    component: (DataTable),
};
export default meta;
export const Default = {
    args: {
        data,
        columns,
    },
};
export const Loading = {
    args: {
        data: [],
        columns,
        loading: true,
    },
};
export const Empty = {
    args: {
        data: [],
        columns,
    },
};
export const Selectable = {
    args: {
        data,
        columns,
        selectable: true,
        onRowSelect: (rows) => console.log("Selected rows:", rows),
    },
};
