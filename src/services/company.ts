export type Company = {
  id: number;
  name: string;
  description: string;
};

export async function getCompanies(): Promise<Company[]> {
  const res = await fetch("/api/companies", {
    credentials: "include", 
  });
  if (!res.ok) throw new Error("Failed to fetch companies");
  return res.json();
}
