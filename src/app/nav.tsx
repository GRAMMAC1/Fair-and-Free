"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cva } from "class-variance-authority";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

import "./nav.css";

interface NavItem {
  name: string;
  href: string;
  isLink?: boolean;
  children?: NavItem[];
}

const navList: NavItem[] = [
  { name: "Events", href: "/foundation/justice-fund/events" },
  { name: "Declaration", href: "/declaration" },
  {
    name: "Foundation",
    href: "/foundation",
    children: [
      { name: "Justice Fund", href: "/foundation/justice-fund" },
      { name: "Tech Fairness Fund", href: "/foundation/tech-fairness-fund" },
    ],
  },
  { name: "About", href: "/about" },
];

function getNavList() {
  const now = new Date();
  const nextWednesday = new Date("2025-06-16");

  if (
    now >= nextWednesday &&
    !navList.find((item) => item.name === "Hackathon")
  ) {
    navList.unshift({
      name: "Hackathon",
      href: "/hackathon",
      isLink: true,
      children: [
        {
          name: "projects",
          href: "/hackathon/projects",
        },
      ],
    });
  }

  return navList;
}

// 样式变体
const menuItemStyles = cva(
  "relative px-5 py-2.5 cursor-pointer transition-colors rounded-[5px]",
  {
    variants: {
      isActive: {
        true: "text-[var(--selected-text-color)]",
        false: "hover:text-accent-foreground",
      },
    },
  }
);

const triggerStyles = cva(
  "bg-transparent h-auto hover:bg-[#9871FF]! hover:text-white! font-normal text-[16px] rounded-[40px]"
);

export default function Nav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === href;
    return pathname.startsWith(href);
  };

  const renderNavItem = (item: NavItem) => {
    const hasChildren = Boolean(item.children?.length);
    const active = isActive(item.href);

    if (hasChildren) {
      return (
        <NavigationMenuItem
          key={item.name}
          className={cn(menuItemStyles({ isActive: active }), "p-0")}
        >
          <NavigationMenuTrigger className={triggerStyles()}>
            {item.isLink ? (
              <Link href={item.href}>{item.name}</Link>
            ) : (
              item.name
            )}
          </NavigationMenuTrigger>
          <NavigationMenuContent
            style={{ background: "#9871FF", zIndex: 2, borderRadius: "40px" }}
            className="flex flex-col min-w-[200px] backdrop-blur-xs p-2 shadow-md"
          >
            {item.children?.map((child) => (
              <div
                className={`custom-group flex my-1 items-center`}
                key={child.name}
              >
                <Link
                  href={child.href}
                  className="block px-3 py-2 text-[16px] font-normal hover:font-bold rounded-sm text-white"
                >
                  {child.name}
                </Link>
                <div
                  className={`w-[7px] h-[7px] rounded-full bg-white opacity-0 transition-opacity`}
                />
              </div>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      );
    }

    return (
      <NavigationMenuItem
        key={item.name}
        className={cn(menuItemStyles({ isActive: active }), "p-0")}
      >
        <NavigationMenuLink
          asChild
          className="rounded-[40px] hover:bg-[#9871FF] hover:text-white text-[16px]"
        >
          <Link href={item.href} className="no-underline py-2 px-4">
            {item.name}
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    );
  };

  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="flex 2xl:gap-6 gap-0 text-[16px] font-normal">
        {getNavList().map(renderNavItem)}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
