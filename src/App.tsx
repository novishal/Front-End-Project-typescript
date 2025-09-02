import { DataTable, Column } from "./components/DataTable/DataTable";
import { InputField } from "./components/InputField/InputField";

interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}

function App() {
  const columns: Column<User>[] = [
    { key: "name", title: "Name", dataIndex: "name", sortable: true },
    { key: "age", title: "Age", dataIndex: "age", sortable: true },
    { key: "email", title: "Email", dataIndex: "email" },
  ];

  const data: User[] = [
    { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
    { id: 2, name: "Bob", age: 30, email: "bob@example.com" },
    { id: 3, name: "Charlie", age: 22, email: "charlie@example.com" },
  ];

  return (
    <div className="p-4">
      {/* Render InputField */}
      <InputField />

      {/* Render DataTable */}
      <div className="mt-6">
        <DataTable<User> data={data} columns={columns} selectable />
      </div>
    </div>
  );
}

export default App;
