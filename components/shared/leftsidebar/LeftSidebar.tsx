"use client";
import { sidebarLinksHome } from "@/constants/SidebarLinks";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SignOutButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function LeftSideBar() {
  // states
  const pathname = usePathname();

  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky left-0 top-0 flex h-screen w-fit flex-col justify-between  overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      {/* Home, Community, Collections, Find jobs .etc buttons */}
      <section className="flex flex-1 flex-col gap-6">
        {sidebarLinksHome?.map(({ imgURL, route, label }) => {
          const isActive = route === pathname;
          return (
            <Link
              href={route}
              key={label}
              className={`${
                isActive
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-dark300_light900"
              } flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                src={imgURL}
                alt={label}
                width={20}
                height={20}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p
                className={`${
                  isActive
                    ? "base-bold max-lg:hidden"
                    : "base-medium max-lg:hidden"
                }`}
              >
                {label}
              </p>
            </Link>
          );
        })}
      </section>

      {/* if signed out -> show Login & Signup button */}
      <SignedOut>
        <div className="flex flex-col gap-3">
          <Link href="/sign-in">
            <Button className="small-medium text-dark200_light900 group min-h-[41px] w-full rounded-lg border-[1px] border-black p-4 shadow-none hover:bg-black hover:text-white hover:duration-300 dark:border-white dark:bg-white dark:text-black">
              <p className="max-lg:hidden">Log in</p>
              <Image
                src="/assets/icons/account.svg"
                alt="login icon"
                width={20}
                height={20}
                className="invert group-hover:invert-0 dark:group-hover:invert lg:hidden"
              />
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button className="small-medium min-h-[41px] w-full rounded-lg border-none bg-primary-500 px-4 py-3 text-white shadow-none hover:bg-orange-400 hover:text-white hover:duration-300">
              <p className="max-lg:hidden">Sign up</p>
              <Image
                src="/assets/icons/sign-up.svg"
                alt="signup button"
                width={20}
                height={20}
                className="lg:hidden"
              />
            </Button>
          </Link>
        </div>
      </SignedOut>

      {/* if signed in -> show Logout button */}
      <SignedIn>
        <SignOutButton>
          <Link
            href="/"
            className="small-medium inline-flex h-9 min-h-[41px] w-full items-center gap-4 rounded-lg bg-white px-4 py-3 text-sm font-medium text-slate-900 shadow-none transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-transparent dark:text-white  dark:focus-visible:ring-slate-300"
          >
            <Image
              src="/assets/icons/log-out.svg"
              alt="logout button"
              width={20}
              height={20}
              className="dark:invert"
            />
            <p className="base-medium max-lg:hidden">Logout</p>
          </Link>
        </SignOutButton>
      </SignedIn>
    </section>
  );
}
