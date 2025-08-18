"use client";

import { useQuery } from "@tanstack/react-query";

async function fetchProfile() {
  const res = await fetch("/api/profile", { credentials: "include" });
  if (!res.ok) throw new Error("Failed to fetch profile");
  return res.json();
}

export default function ProfilePage() {
  const { data, isLoading, isError } = useQuery(["profile"], fetchProfile);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading profile</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      <p>Username: {data.username}</p>
      <p>Bio: {data.bio}</p>
    </div>
  );
}
