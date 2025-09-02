import React from "react";
import { InputField } from "./components/InputField/InputField";
import { DataTable } from "./components/DataTable/DataTable";
import type { Column } from "./components/DataTable/DataTable";


interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}

const data: User[] = [
  { id: 1, name: "Vishal", age: 25, email: "vishal@example.com" },
  { id: 2, name: "Jason", age: 30, email: "jason@example.com" },
  { id: 3, name: "Pablo", age: 22, email: "pablo@example.com" },
];

const columns: Column<User>[] = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "age", title: "Age", dataIndex: "age", sortable: true },
  { key: "email", title: "Email", dataIndex: "email" },
];

function App() {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-xl font-bold">InputField Demo</h1>
      <InputField label="Name" placeholder="Enter your name" />

      <h1 className="text-xl font-bold">DataTable Demo</h1>
      <DataTable<User>
        data={data}
        columns={columns}
        selectable
        onRowSelect={(rows: User[]) => console.log(rows)}
      />
    </div>
  );
}
export default App;
