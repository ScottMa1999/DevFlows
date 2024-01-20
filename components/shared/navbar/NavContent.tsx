"use client";
import { SheetClose } from "@/components/ui/sheet";
import { SignedOut } from "@clerk/clerk-react";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/constants/SidebarLinks";

const NavContent = () => {
  // hook
  const currentPathName = usePathname();

  // effects ---testing purposes---
  useEffect(() => {
    console.log(currentPathName);
  }, [currentPathName]);

  return (
    <section>
      {/* Other buttons */}
      <section className="flex h-full flex-col gap-5 pt-16">
        {sidebarLinks?.map(({ label, route, imgURL }) => {
          // find out current active link
          const isActive = currentPathName === route;
          return (
            <SheetClose asChild key={label}>
              <Link
                href={route}
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
                <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                  {label}
                </p>
              </Link>
            </SheetClose>
          );
        })}
      </section>
      {/* Login and Signup button */}
      <SignedOut>
        <div className="flex flex-col gap-3">
          <SheetClose asChild>
            <Link href="/sign-in">
              <Button className="small-medium text-dark200_light900 min-h-[41px] w-full rounded-lg border-[1px] border-black p-4 shadow-none hover:bg-black hover:text-white hover:duration-300 dark:border-white dark:bg-white dark:text-black">
                Log in
              </Button>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/sign-up">
              <Button className="small-medium min-h-[41px] w-full rounded-lg border-none bg-primary-500 px-4 py-3 text-white shadow-none hover:bg-orange-400 hover:text-white hover:duration-300">
                Sign up
              </Button>
            </Link>
          </SheetClose>
        </div>
      </SignedOut>
    </section>
  );
};

export default NavContent;
