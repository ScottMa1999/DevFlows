// components
import QuestionCard from "./QuestionCard";

// constants
import { QuestionCards as QuestionCardsContent } from "@/constants/Questions";

export default function QuestionCards() {
  return (
    <section className="mt-10 flex w-full flex-col gap-6">
      {QuestionCardsContent?.map((card) => (
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
  );
}
