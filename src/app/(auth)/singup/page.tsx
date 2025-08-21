"use client";

import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import { useState } from "react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Signup: ${name} - ${email}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full Name"
      />
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
      />
      <Button>Sign Up</Button>
    </form>
  );
}
