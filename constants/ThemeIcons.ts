// utility
import { determineLightMode } from "@/utility/determinMode";

// types
export type themesType = {
  value: string;
  label: string;
  icon: string;
};

export const themesIcons = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  {
    value: "system",
    label: "System",
    icon: `${
      determineLightMode() ? "/assets/icons/sun.svg" : "/assets/icons/moon.svg"
    }`,
  },
];
