import { QuestionTagType } from "@/constants/Questions";
import Link from "next/link";
import Image from "next/image";

// component
import RenderTag from "./RenderTag";

// util
import timeFormatter from "@/utility/timeFormatter";

type QuestionCardPropType = {
  title: string;
  tags: QuestionTagType[];
  author: string;
  authorImgSrc: string;
  upvotes: number;
  views: number;
  answers: number;
  createdAt: string;
};

export default function QuestionCard({
  title,
  tags,
  author,
  authorImgSrc,
  upvotes,
  views,
  answers,
  createdAt,
}: QuestionCardPropType) {
  return (
    <section className="card-wrapper rounded-[10px] p-9 sm:px-11">
      {/* Question Titles */}
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
          {/* <p className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {timeFormatter(createdAt)}
          </p> */}

          {/* need to work on the question id! */}
          <Link
            href="/question/id"
            className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1"
          >
            {title}
          </Link>
        </div>
      </div>
      {/* Tags */}
      <div className="mt-3.5 flex flex-wrap gap-2">
        {tags?.map(({ _id, name }) => (
          <RenderTag
            _id={_id}
            key={_id}
            name={name}
            showCount={false}
            showActive={false}
            useLink={true}
          />
        ))}
      </div>
      <div className="flex-between mt-6 w-full flex-wrap gap-3">
        {/* Profile Image & User name & posted time */}
        <Link className="flex-center gap-1" href="/">
          <Image
            src={authorImgSrc}
            alt="profile image"
            width={16}
            height={16}
            loading="lazy"
            className="rounded-full object-contain"
          />
          <p className="body-medium text-dark400_light700 flex items-center gap-3">
            {author}
            <span className="small-regular line-clamp-1 font-light max-sm:hidden">
              asked {timeFormatter(createdAt)}
            </span>
          </p>
        </Link>

        {/* Upvotes answers and views */}
        <div className="flex items-center gap-3 max-sm:flex-wrap max-sm:justify-start">
          {/* Upvotes */}
          <div className="flex-center flex-wrap gap-1">
            <Image
              src="/assets/icons/like.svg"
              alt="upvote icon"
              width={16}
              height={16}
              className="object-contain"
            />
            <p className="small-medium text-dark400_light800 flex items-center gap-1">
              {upvotes}{" "}
              <span className="small-regular line-clamp-1 ">Vote</span>
            </p>
          </div>

          {/* Answers */}
          <div className="flex-center flex-wrap gap-1">
            <Image
              src="/assets/icons/message.svg"
              alt="message icon"
              width={16}
              height={16}
              className="object-contain"
            />
            <p className="small-medium text-dark400_light800 flex items-center gap-1">
              {answers}{" "}
              <span className="small-regular line-clamp-1 ">Answers</span>
            </p>
          </div>

          {/* Views */}
          <div className="flex-center flex-wrap gap-1">
            <Image
              src="/assets/icons/eye.svg"
              alt="view icon"
              width={16}
              height={16}
              className="object-contain"
            />
            <p className="small-medium text-dark400_light800 flex items-center gap-1">
              {views} <span className="small-regular line-clamp-1 ">Views</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
