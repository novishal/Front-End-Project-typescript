import React, { useState } from "react";

export interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}

export function DataTable<T extends { id: string | number }>({
  data,
  columns,
  loading = false,
  selectable = false,
  onRowSelect,
}: DataTableProps<T>) {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof T;
    direction: "asc" | "desc";
  } | null>(null);

  const [selectedRows, setSelectedRows] = useState<Set<string | number>>(
    new Set()
  );

  const sortedData = React.useMemo(() => {
    if (!sortConfig) return data;
    return [...data].sort((a, b) => {
      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];
      if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig]);

  const toggleSort = (key: keyof T) => {
    setSortConfig((prev) => {
      if (!prev || prev.key !== key) return { key, direction: "asc" };
      if (prev.direction === "asc") return { key, direction: "desc" };
      return null; // clear sorting
    });
  };

  const toggleRow = (id: string | number) => {
    if (!selectable) return;
    setSelectedRows((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      if (onRowSelect) {
        onRowSelect(data.filter((row) => newSet.has(row.id)));
      }
      return newSet;
    });
  };

  if (loading) {
    return <div role="status" aria-live="polite" className="p-4 text-center">Loading...</div>;
  }

  if (!data || data.length === 0) {
    return <div role="status" aria-live="polite" className="p-4 text-center">No data available</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-200" role="table" aria-label="Data Table">
        <thead>
          <tr className="bg-gray-100">
            {selectable && <th className="p-2 border border-gray-200">Select</th>}
            {columns.map((col) => (
              <th
                key={col.key}
                onClick={() => col.sortable && toggleSort(col.dataIndex)}
                className={`p-2 border border-gray-200 cursor-pointer select-none ${
                  col.sortable ? "hover:bg-gray-200" : ""
                }`}
                scope="col"
                aria-sort={
                  sortConfig?.key === col.dataIndex
                    ? sortConfig.direction === "asc"
                      ? "ascending"
                      : "descending"
                    : "none"
                }
              >
                {col.title}
                {col.sortable &&
                  sortConfig?.key === col.dataIndex &&
                  (sortConfig.direction === "asc" ? " 🔼" : " 🔽")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row) => (
            <tr
              key={row.id}
              className="hover:bg-gray-50"
              onClick={() => selectable && toggleRow(row.id)}
              role="row"
              aria-selected={selectedRows.has(row.id)}
            >
              {selectable && (
                <td className="p-2 border border-gray-200 text-center">
                  <input
                    type="checkbox"
                    checked={selectedRows.has(row.id)}
                    onChange={() => toggleRow(row.id)}
                    aria-label={`Select row ${row.id}`}
                  />
                </td>
              )}
              {columns.map((col) => (
                <td key={col.key} className="p-2 border border-gray-200">
                  {String(row[col.dataIndex])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
