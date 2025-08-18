"use client";

import { useQuery } from "@tanstack/react-query";

async function fetchCompanies() {
  const res = await fetch("/api/companies", { credentials: "include" });
  if (!res.ok) throw new Error("Failed to fetch companies");
  return res.json();
}

export default function CompanyPage() {
  const { data, isLoading, isError } = useQuery(["companies"], fetchCompanies);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading companies</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Companies</h1>
      <ul>
        {data.map((company: any) => (
          <li key={company.id} className="mb-2">
            <p className="font-semibold">{company.name}</p>
            <p className="text-gray-600">{company.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
