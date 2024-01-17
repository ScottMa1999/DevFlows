"use client";
import React from "react";
import Image from "next/image";

// Menubar from Shadcn
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

// Hooks
import { useThemeProvider } from "@/contexts/ThemeProvider";

// Themes constants
import { themesIcons, themesType } from "@/constants/ThemeIcons";

const ThemeIcon = () => {
  // hooks
  const { mode, setMode } = useThemeProvider();

  // function expressions
  const ToggleThemeChange = (item: themesType) => {
    setMode(item.value);
    if (item.value !== "system") {
      localStorage.theme = item.value;
    } else {
      localStorage.removeItem("theme");
    }
  };

  return (
    <Menubar className="relative border-none bg-transparent p-0 shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200">
          {mode === "light" ? (
            <Image
              src="/assets/icons/sun.svg"
              alt="sun icon"
              width={20}
              height={20}
              className="active-theme"
            />
          ) : (
            <Image
              src="/assets/icons/moon.svg"
              alt="moon icon"
              width={20}
              height={20}
              className="active-theme"
            />
          )}
        </MenubarTrigger>
        <MenubarContent className="absolute right-[-3rem] mt-3 min-w-[120px] rounded border py-2 dark:border-dark-400 dark:bg-dark-300">
          {themesIcons.map((item) => (
            <MenubarItem
              key={item.value}
              className="flex cursor-pointer items-center gap-4 px-2.5 py-2 hover:bg-slate-200 hover:duration-300 dark:hover:bg-slate-700"
              onClick={() => ToggleThemeChange(item)}
            >
              <Image
                src={item.icon}
                alt={item.value}
                width={16}
                height={16}
                className={`${mode === item.value && "active-theme"}`}
              />
              <p
                className={`body-semibold ${
                  mode === item.value
                    ? "text-primary-500"
                    : "text-dark100_light900"
                }`}
              >
                {item.label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default ThemeIcon;
