import React from "react";
import Image from "next/image";
import Link from "next/link";

// Shadcn Sheet Component
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// component
import NavContent from "./NavContent";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/icons/hamburger.svg"
          alt="menu button"
          width={30}
          height={30}
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="background-light900_dark200 border-none"
      >
        <section className="flex-between flex">
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/assets/images/site-logo.svg"
              alt="DevFlow Logo"
              width={23}
              height={23}
            />
            <p className="h2-bold text-dark100_light900 font-spaceGrotesk">
              Dev<span className="text-primary-500">Overflow</span>
            </p>
          </Link>
        </section>

        <div>
          <NavContent />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
