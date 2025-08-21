"use client";
import { useQuery } from "@tanstack/react-query";

interface Company {
  id: string;
  name: string;
}

async function fetchCompanies(): Promise<Company[]> {
  const res = await fetch("/api/companies");
  if (!res.ok) throw new Error("Failed to fetch companies");
  return res.json();
}

export default function CompanyPage() {
  const { data, isLoading, isError } = useQuery<Company[]>({
    queryKey: ["companies"],
    queryFn: fetchCompanies,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading companies</p>;

  return (
    <div>
      <h1>Companies</h1>
      <ul>
        {data?.map((company) => (
          <li key={company.id}>{company.name}</li>
        ))}
      </ul>
    </div>
  );
}
