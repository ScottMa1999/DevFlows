"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// constants
import { HomePageFilters } from "@/constants/Filter";
import { QuestionCards } from "@/constants/Questions";

// components
import RenderTag from "@/components/shared/RenderTag";
import LocalSearch from "@/components/shared/search/LocalSearch";
import FilterComponent from "@/components/shared/FilterComponent";
import QuestionCard from "@/components/shared/QuestionCard";

const Home = () => {
  // states
  const [filter, setFilter] = useState<string | null>("");

  // effects
  useEffect(() => {
    console.log(filter);
  }, [filter]);

  return (
    <>
      {/* Title & Ask a question button */}
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient inline-flex h-9 min-h-[46px] items-center justify-center rounded-md bg-slate-900 px-4 py-3 text-sm font-medium !text-light-900 shadow transition-colors hover:bg-slate-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90 dark:focus-visible:ring-slate-300">
            Ask a Question
          </Button>
        </Link>
      </section>

      {/* Local Search Cpmponent */}
      <section className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        {/* Filter components for small devices */}
        <FilterComponent
          className="max-md:flex md:hidden"
          placeholder="Select a Filter"
          content={HomePageFilters}
        />
      </section>

      {/* Filter components */}
      <section className="mt-10 hidden flex-wrap gap-3 md:flex">
        {HomePageFilters.map(({ name, value }) => (
          <RenderTag
            key={name}
            _id={name}
            name={name}
            // whether we want to show the count of posts next to the tag
            showCount={false}
            // Whether we want the tag to be color changable
            showActive={true}
            // Whether we want to redirect after clicking the tag
            useLink={false}
            filter={filter!}
            setFilter={setFilter}
          />
        ))}
      </section>

      {/* Question card components */}
      <section className="mt-10 flex w-full flex-col gap-6">
        {QuestionCards?.map((card) => (
          <QuestionCard
            title={card.title}
            key={card._id}
            tags={card.tags}
            author={card.author}
            authorImgSrc=""
            upvotes={card.upvotes}
            answers={card.answers}
            views={card.views}
            createdAt={card.createdAt}
          />
        ))}
      </section>
    </>
  );
};

export default Home;
