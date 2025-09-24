"use client";
import { useState, useEffect } from "react";

export default function CardTitle({ text }: { text: string }) {
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle(text); 
  }, [text]);

  return (
    <h3 className="text-center text-sm md:text-lg font-bold text-neutral-800 mt-4">
      {title}
    </h3>
  );
}
