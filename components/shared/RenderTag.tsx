"use client";

import Link from "next/link";
import React from "react";

export type TagPropType = {
  _id: number | string;
  name: string;
  totalQuestions?: number;
  showCount?: boolean;
  className?: string;
  showActive?: boolean;
  useLink: boolean;
  filter?: string | null;
  setFilter?: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function RenderTag({
  _id,
  name,
  totalQuestions,
  showCount,
  className,
  showActive,
  useLink,
  filter,
  setFilter,
}: TagPropType) {
  // function expression
  const handleColorChangeAndFilterName = () => {
    if (setFilter) {
      if (filter && filter === name) {
        setFilter("");
      } else {
        setFilter(name);
      }
    }
  };

  if (useLink) {
    return (
      <Link href={`/tags/${_id}`} onClick={handleColorChangeAndFilterName}>
        <section key={_id} className={className}>
          {/* showActive determines whether we need the reusable component to handle background and text color changes */}
          {!showActive && (
            <div className="subtle-medium background-light800_dark300 text-light400_light500 inline-flex items-center rounded-md border border-none border-transparent bg-slate-900 px-4 py-2 text-xs font-semibold uppercase shadow transition-colors hover:bg-slate-900/80 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80 dark:focus:ring-slate-300">
              {name}
            </div>
          )}

          {showActive && (
            <div
              className={
                filter === name
                  ? "body-medium inline-flex h-9 cursor-pointer items-center justify-center rounded-lg bg-primary-100 px-6 py-3 text-sm font-medium capitalize text-primary-500 shadow-none transition-colors hover:bg-primary-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-dark-400 dark:text-primary-500 dark:hover:bg-dark-400 dark:focus-visible:ring-slate-300"
                  : "body-medium inline-flex h-9 cursor-pointer items-center justify-center rounded-lg bg-light-800 px-6 py-3 text-sm font-medium capitalize text-light-500 shadow-none transition-colors hover:bg-light-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-300 dark:focus-visible:ring-slate-300"
              }
            >
              {name}
            </div>
          )}

          {showCount && (
            <p className="small-medium text-dark500_light700">
              {totalQuestions}
            </p>
          )}
        </section>
      </Link>
    );
  } else {
    return (
      <section
        key={_id}
        className={className}
        onClick={handleColorChangeAndFilterName}
      >
        {/* showActive determines whether we need the reusable component to handle background and text color changes */}
        {!showActive && (
          <div className="body-medium inline-flex h-9 cursor-pointer items-center justify-center rounded-lg bg-light-800 px-6 py-3 text-sm font-medium capitalize text-light-500 shadow-none transition-colors hover:bg-light-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-300 dark:focus-visible:ring-slate-300">
            {name}
          </div>
        )}

        {showActive && (
          <div
            className={
              filter === name
                ? "body-medium inline-flex h-9 cursor-pointer items-center justify-center rounded-lg bg-primary-100 px-6 py-3 text-sm font-medium capitalize text-primary-500 shadow-none transition-colors hover:bg-primary-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-dark-400 dark:text-primary-500 dark:hover:bg-dark-400 dark:focus-visible:ring-slate-300"
                : "body-medium inline-flex h-9 cursor-pointer items-center justify-center rounded-lg bg-light-800 px-6 py-3 text-sm font-medium capitalize text-light-500 shadow-none transition-colors hover:bg-light-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-300 dark:focus-visible:ring-slate-300"
            }
          >
            {name}
          </div>
        )}

        {showCount && (
          <p className="small-medium text-dark500_light700">{totalQuestions}</p>
        )}
      </section>
    );
  }
}
