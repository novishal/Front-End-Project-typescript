import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
export function DataTable({ data, columns, loading = false, selectable = false, onRowSelect, }) {
    const [sortConfig, setSortConfig] = useState(null);
    const [selectedRows, setSelectedRows] = useState(new Set());
    const sortedData = React.useMemo(() => {
        if (!sortConfig)
            return data;
        return [...data].sort((a, b) => {
            const aVal = a[sortConfig.key];
            const bVal = b[sortConfig.key];
            if (aVal < bVal)
                return sortConfig.direction === "asc" ? -1 : 1;
            if (aVal > bVal)
                return sortConfig.direction === "asc" ? 1 : -1;
            return 0;
        });
    }, [data, sortConfig]);
    const toggleSort = (key) => {
        setSortConfig((prev) => {
            if (!prev || prev.key !== key)
                return { key, direction: "asc" };
            if (prev.direction === "asc")
                return { key, direction: "desc" };
            return null; // clear sorting
        });
    };
    const toggleRow = (id) => {
        if (!selectable)
            return;
        setSelectedRows((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            }
            else {
                newSet.add(id);
            }
            if (onRowSelect) {
                onRowSelect(data.filter((row) => newSet.has(row.id)));
            }
            return newSet;
        });
    };
    if (loading) {
        return _jsx("div", { role: "status", "aria-live": "polite", className: "p-4 text-center", children: "Loading..." });
    }
    if (!data || data.length === 0) {
        return _jsx("div", { role: "status", "aria-live": "polite", className: "p-4 text-center", children: "No data available" });
    }
    return (_jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "min-w-full border-collapse border border-gray-200", role: "table", "aria-label": "Data Table", children: [_jsx("thead", { children: _jsxs("tr", { className: "bg-gray-100", children: [selectable && _jsx("th", { className: "p-2 border border-gray-200", children: "Select" }), columns.map((col) => (_jsxs("th", { onClick: () => col.sortable && toggleSort(col.dataIndex), className: `p-2 border border-gray-200 cursor-pointer select-none ${col.sortable ? "hover:bg-gray-200" : ""}`, scope: "col", "aria-sort": sortConfig?.key === col.dataIndex
                                    ? sortConfig.direction === "asc"
                                        ? "ascending"
                                        : "descending"
                                    : "none", children: [col.title, col.sortable &&
                                        sortConfig?.key === col.dataIndex &&
                                        (sortConfig.direction === "asc" ? " 🔼" : " 🔽")] }, col.key)))] }) }), _jsx("tbody", { children: sortedData.map((row) => (_jsxs("tr", { className: "hover:bg-gray-50", onClick: () => selectable && toggleRow(row.id), role: "row", "aria-selected": selectedRows.has(row.id), children: [selectable && (_jsx("td", { className: "p-2 border border-gray-200 text-center", children: _jsx("input", { type: "checkbox", checked: selectedRows.has(row.id), onChange: () => toggleRow(row.id), "aria-label": `Select row ${row.id}` }) })), columns.map((col) => (_jsx("td", { className: "p-2 border border-gray-200", children: String(row[col.dataIndex]) }, col.key)))] }, row.id))) })] }) }));
}
