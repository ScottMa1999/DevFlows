"use client";
import { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";

export type LocalSearchPropType = {
  route: string;
  iconPosition: string;
  imgSrc: string;
  placeholder: string;
  otherClasses: string;
};

export default function LocalSearch({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClasses,
}: LocalSearchPropType) {
  // states
  const [localInput, setLocalInput] = useState<string | null>("");

  return (
    <section
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-1 rounded-[10px] px-4 ${otherClasses}`}
    >
      {/* Search Icon */}
      {iconPosition === "left" && (
        <Image
          src={imgSrc}
          alt="search icon"
          width={20}
          height={20}
          className="cursor-pointer"
        />
      )}
      {/* Search Input */}
      <Input
        type="text"
        placeholder={placeholder}
        value={localInput!}
        onChange={(e) => setLocalInput(e.target.value)}
        className="paragraph-regular no-focus placeholder text-dark400_light700 flex h-9 w-full rounded-md border border-none border-slate-200 bg-transparent px-3 py-1 text-sm shadow-none outline-none transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300"
      />
      {iconPosition === "right" && (
        <Image
          src={imgSrc}
          alt="search icon"
          width={20}
          height={20}
          className="cursor-pointer"
        />
      )}
    </section>
  );
}
