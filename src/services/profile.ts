export type Profile = {
  username: string;
  bio: string;
};

export async function getProfile(): Promise<Profile> {
  const res = await fetch("/api/profile", {
    credentials: "include",
  });
  if (!res.ok) throw new Error("Failed to fetch profile");
  return res.json();
}
