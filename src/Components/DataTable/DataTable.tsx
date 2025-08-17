// src/components/DataTable/DataTable.tsx
import React, { useMemo, useState } from "react";

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
  onRowSelect?: (rows: T[]) => void;
}

export function DataTable<T>({
  data, columns, loading, selectable, onRowSelect,
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = useState<string>();
  const [asc, setAsc] = useState(true);
  const [selected, setSelected] = useState<Set<number>>(new Set());

  const sorted = useMemo(() => {
    if (!sortKey) return data;
    return [...data].sort((a: any, b: any) => {
      const av = a[sortKey], bv = b[sortKey];
      if (av < bv) return asc ? -1 : 1;
      if (av > bv) return asc ? 1 : -1;
      return 0;
    });
  }, [data, sortKey, asc]);

  function toggleSelect(i: number) {
    if (!selectable) return;
    const next = new Set(selected);
    next.has(i) ? next.delete(i) : next.add(i);
    setSelected(next);
    onRowSelect?.(Array.from(next).map(idx => sorted[idx]));
  }

  if (loading) return <div role="status" aria-live="polite">Loading…</div>;
  if (!sorted.length) return <div role="note">No data</div>;

  return (
    <table className="w-full text-sm" role="table" aria-label="Data table">
      <thead>
        <tr>
          {selectable && <th className="p-2" />}
          {columns.map(c => (
            <th key={c.key} className="p-2 text-left">
              <button
                className="font-medium"
                aria-label={c.sortable ? `Sort by ${c.title}` : undefined}
                disabled={!c.sortable}
                onClick={() => {
                  if (sortKey === c.dataIndex) setAsc(!asc);
                  else { setSortKey(c.dataIndex as string); setAsc(true); }
                }}
              >
                {c.title}{c.sortable && (sortKey === c.dataIndex ? (asc ? " ▲" : " ▼") : " ⇅")}
              </button>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sorted.map((row, i) => (
          <tr key={i} className="border-t">
            {selectable && (
              <td className="p-2">
                <input
                  type="checkbox"
                  aria-label={`Select row ${i + 1}`}
                  checked={selected.has(i)}
                  onChange={() => toggleSelect(i)}
                />
              </td>
            )}
            {columns.map(c => (
              <td key={c.key} className="p-2">{String(row[c.dataIndex] ?? "")}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
