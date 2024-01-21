"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";

export default function GlobalSearch() {
  // states
  const [input, setInput] = useState("");

  return (
    <section className="relative w-full max-w-[600px] max-lg:hidden">
      <div className="background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-lg px-4">
        <Image
          src="/assets/icons/search.svg"
          alt="search icon"
          width={20}
          height={20}
          className="cursor-pointer"
        />
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search"
          className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none dark:text-white"
        />
      </div>
    </section>
  );
}
