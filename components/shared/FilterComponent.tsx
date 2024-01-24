"use client";
import React from "react";
import { HomePageFiltersPropType } from "@/constants/Filter";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FilterComponentPropType = {
  className: string;
  placeholder: string;
  content: HomePageFiltersPropType[];
};

export default function FilterComponent({
  className,
  placeholder,
  content,
}: FilterComponentPropType) {
  return (
    <React.Fragment>
      <Select>
        <SelectTrigger
          className={`body-regular light-border background-light800_dark300 text-dark500_light700 flex h-9 min-h-[56px] w-full items-center justify-between rounded-md border border-slate-200 bg-transparent px-5 py-2.5 text-sm shadow-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-300 sm:w-[180px] sm:min-w-[170px]${className}`}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {content?.map(({ name, value }) => (
            <SelectItem
              key={name}
              value={value}
              className="hover:background-light800_dark300 text-dark500_light700 cursor-pointer py-[0.85rem]"
            >
              {value}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </React.Fragment>
  );
}
