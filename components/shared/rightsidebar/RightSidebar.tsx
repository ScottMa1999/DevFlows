import { topQuestions, popularTags } from "@/constants/SidebarLinks";
import Link from "next/link";
import Image from "next/image";
import RenderTag from "../RenderTag";

export default function RightSidebar() {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      {/* Top Questions */}
      <section>
        {/* Top Questions title */}
        <h1 className="h3-bold text-dark200_light900">Top Questions</h1>
        {/* Top Questions content */}
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {topQuestions?.map(({ id, question, route }) => (
            <section key={id}>
              <Link
                href={route}
                className="group flex items-center justify-between gap-7"
              >
                <p className="body-medium text-dark500_light700">{question}</p>
                <Image
                  src="/assets/icons/chevron-right.svg"
                  alt="right-arrow icon"
                  loading="lazy"
                  width={20}
                  height={20}
                  className="invert group-hover:translate-x-1 group-hover:duration-150 dark:invert-0 "
                />
              </Link>
            </section>
          ))}
        </div>
      </section>

      {/* Popular Tags */}
      <section className="mt-16">
        {/* Popular Tags title */}
        <h1 className="h3-bold text-dark200_light900">Popular Tags</h1>
        {/* Popular Tags content */}
        <div className="mt-7 flex flex-col gap-4">
          {popularTags?.map(({ id, topic, posts, route }) => (
            <section key={id}>
              <RenderTag
                _id={id}
                name={topic}
                totalQuestions={posts}
                showCount={true}
                showActive={false}
                useLink={true}
                className="flex w-full justify-between"
              />
            </section>
          ))}
        </div>
      </section>
    </section>
  );
}
