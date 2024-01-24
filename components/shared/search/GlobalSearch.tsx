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
          className="paragraph-regular no-focus placeholder text-dark400_light700 flex h-9 w-full rounded-md border border-none border-slate-200 bg-transparent px-3 py-1 text-sm shadow-none outline-none transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300"
        />
      </div>
    </section>
  );
}
