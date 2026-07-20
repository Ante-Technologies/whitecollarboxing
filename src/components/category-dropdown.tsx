"use client";

import { useRouter } from "next/navigation";
import { categoryList } from "@/lib/posts";

export function CategoryDropdown() {
  const router = useRouter();

  return (
    <select
      aria-label="News Categories"
      defaultValue=""
      onChange={(e) => {
        if (e.target.value) router.push(e.target.value);
      }}
      className="w-full border border-border bg-white px-3 py-2 text-sm text-foreground outline-none focus:border-accent"
    >
      <option value="" disabled>
        Select Category
      </option>
      {categoryList.map((cat) => (
        <option key={cat.key} value={cat.path}>
          {cat.indent ? "\u00A0\u00A0\u00A0" : ""}
          {cat.label}
          {"\u00A0\u00A0"}({cat.count})
        </option>
      ))}
    </select>
  );
}
