"use client";

import { useQuery } from "@tanstack/react-query";

async function fetchProfile() {
  const res = await fetch("/api/profile");
  if (!res.ok) throw new Error("Failed to fetch profile");
  return res.json();
}

export default function ProfilePage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["profile"],
    queryFn: fetchProfile,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading profile</p>;

  return (
    <div>
      <h1>Profile</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
