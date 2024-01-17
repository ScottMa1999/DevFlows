"use client";
import { SheetClose } from "@/components/ui/sheet";
import { SignedOut } from "@clerk/clerk-react";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const NavContent = () => {
  return (
    <SignedOut>
      <div className="flex flex-col gap-3">
        <SheetClose asChild>
          <Link href="/sign-in">
            <Button className="small-medium text-dark200_light900 mt-[1.5rem] min-h-[41px] w-full rounded-lg border-[1px] border-black px-4 py-3 shadow-none hover:bg-black hover:text-white hover:duration-300 dark:border-white dark:bg-white dark:text-black">
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
  );
};

export default NavContent;
