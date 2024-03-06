import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

// context
import { useThemeProvider } from "@/contexts/ThemeProvider";

export default function NoResult() {
  // theme provider
  const { mode } = useThemeProvider();

  return (
    <section className="text-dark100_light900 my-[5rem] flex h-[395px] w-[351px] flex-col items-center justify-center">
      {/* Illustration Icon */}
      {mode === "light" ? (
        <Image
          src="/assets/images/light-illustration.png"
          alt="illustration image"
          width={351}
          height={351}
          quality={100}
        />
      ) : (
        <Image
          src="/assets/images/dark-illustration.png"
          alt="illustration image"
          width={351}
          height={351}
          quality={100}
        />
      )}

      <section className="mt-[30px] flex w-full flex-col items-center justify-center gap-[14px] text-center">
        {/* Questions texts */}
        <h1 className="h2-bold text-dark200_light900">
          There&apos;s no question to show
        </h1>
        <p>
          Be the first to break the silence 🚀 Ask a Question and kickstart the
          discussion. Our query could be the next big thing others learn from.
          Get involved!
        </p>

        {/* Ask a Question Button */}
        <Link
          href="/ask-question"
          className="flex justify-center max-sm:w-full"
        >
          <Button className="primary-gradient inline-flex h-9 min-h-[46px] items-center justify-center rounded-md bg-slate-900 px-8 py-3 text-sm font-medium !text-light-900 shadow transition-colors hover:bg-slate-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90 dark:focus-visible:ring-slate-300">
            Ask a Question
          </Button>
        </Link>
      </section>
    </section>
  );
}
