"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono, Kodchasan } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import Nav from "./nav";
import { ContactLink } from "@/shared/contact-link";
import { useIsMobile } from "@/shared/use-is-mobile";
import { AnimatedHamburger } from "@/components/mobile/animated-hamburger";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kodchasan = Kodchasan({
  variable: "--font-kodchasan",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

// 移动端导航数据
interface NavItem {
  name: string;
  href: string;
  children?: NavItem[];
}

const navList: NavItem[] = [
  { name: "Hackathon", href: "/mobile/hackathon" },
  { name: "Events", href: "/mobile/events" },
  { name: "Declaration", href: "/mobile/declaration" },
  {
    name: "Foundation",
    href: "",
    children: [
      { name: "Justice Fund", href: "/mobile/foundation/justice-fund" },
      {
        name: "Tech Fairness Fund",
        href: "/mobile/foundation/tech-fairness-fund",
      },
    ],
  },
  { name: "About", href: "/mobile/about" },
];

// 移动端Layout组件
function MobileLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* 移动端背景 */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-[0.3]"
        style={{
          backgroundImage: `url('/images/background.svg')`,
          zIndex: -10,
        }}
      />
      <div
        className="fixed inset-0"
        style={{
          background: `linear-gradient(to bottom, white 65%, transparent)`,
          zIndex: -5,
        }}
      />

      {/* 移动端头部 */}
      <header className="sticky top-0 z-50 w-full h-16 bg-[var(--bg-header-color)] backdrop-blur-[3.8px] border-b border-gray-200/20">
        <div className="flex items-center justify-between h-full px-4">
          <Link href="/mobile" className="shrink-0">
            <Image
              src="/images/header-logo.svg"
              width={80}
              height={40}
              alt="fair3 logo"
              className="transition-transform duration-200 hover:scale-105"
            />
          </Link>

          <AnimatedHamburger isOpen={isMenuOpen} onClick={toggleMenu} />
        </div>

        {/* 移动端菜单 */}
        {isMenuOpen && (
          <>
            {/* 菜单内容 */}
            <div
              className={`fixed top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200/30 z-50 transform transition-all duration-300 ease-out ${
                isMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-full opacity-0"
              }`}
            >
              <nav className="px-4 py-6">
                <div className="space-y-4">
                  {navList.map((item, index) => (
                    <div
                      key={item.name}
                      className={`transform transition-all duration-300 ease-out ${
                        isMenuOpen
                          ? "translate-x-0 opacity-100"
                          : "translate-x-4 opacity-0"
                      }`}
                      style={{
                        transitionDelay: isMenuOpen
                          ? `${index * 100}ms`
                          : "0ms",
                      }}
                    >
                      <Link
                        href={item.href}
                        className="block py-2 text-[16px] font-medium text-[#353535] hover:text-[#7c49ff] transition-colors duration-200 rounded-lg hover:bg-white/50 px-2"
                        onClick={toggleMenu}
                      >
                        {item.name}
                      </Link>
                      {item.children && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.children.map((child, childIndex) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className={`block py-1 text-[14px] text-gray-600 hover:text-[#7c49ff] transition-all duration-200 rounded-lg hover:bg-white/30 px-2 transform ${
                                isMenuOpen
                                  ? "translate-x-0 opacity-100"
                                  : "translate-x-4 opacity-0"
                              }`}
                              style={{
                                transitionDelay: isMenuOpen
                                  ? `${index * 100 + childIndex * 50 + 50}ms`
                                  : "0ms",
                              }}
                              onClick={toggleMenu}
                            >
                              • {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* 移动端联系方式 */}
                <div
                  className={`mt-6 pt-4 border-t border-gray-200/50 transform transition-all duration-300 ease-out ${
                    isMenuOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isMenuOpen
                      ? `${navList.length * 100 + 100}ms`
                      : "0ms",
                  }}
                >
                  <div className="flex justify-center">
                    <ContactLink
                      Xlink="https://x.com/Fair3_community"
                      telegramCNLink="https://t.me/FAIR3_CTO_COMMUNITY"
                      githubLink="https://github.com/FAIR3CTO/Fair-and-Free"
                      gitbookLink="https://fair3.gitbook.io/fair3"
                    />
                  </div>
                </div>
              </nav>
            </div>
          </>
        )}
      </header>

      {/* 主要内容 */}
      <main className="min-h-screen">{children}</main>

      {/* 移动端页脚 */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200/30 mt-8">
        <div className="px-4 py-8">
          <div className="text-left">
            <h3 className="font-[Konkhmer Sleokchher] text-[32px] text-[#000] font-bold leading-tight">
              FAIR3
            </h3>
            <div className="mt-4 text-[12px] text-[#353535]">
              © 2025 FAIR3 Community. All rights reserved.
            </div>
          </div>

          <div className="mt-8">
            <h4 className="font-bold font-[Kodchasan] text-[20px] text-[#000] mb-6">
              Contact Us
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <Link
                  href="https://t.me/ElaraFair3Community"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <Image
                    src="/images/telegram.svg"
                    width={16}
                    height={16}
                    alt="Telegram"
                  />
                  <span className="text-[12px] text-[#000]">
                    @ElaraFair3Community
                  </span>
                </Link>
                <Link
                  href="https://t.me/KieranFair3Community"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <Image
                    src="/images/telegram.svg"
                    width={16}
                    height={16}
                    alt="Telegram"
                  />
                  <span className="text-[12px] text-[#000]">
                    @KieranFair3Community
                  </span>
                </Link>
              </div>
            </div>

            {/* 底部社交媒体图标 */}
            {/* <div className="flex gap-8 mt-8 pt-6 border-t border-gray-200/50">
              <Link href="https://x.com/Fair3_community" target="_blank">
                <Image
                  src="/images/x.svg"
                  width={32}
                  height={32}
                  alt="X"
                  className="hover:opacity-70 transition-opacity"
                />
              </Link>
              <Link href="https://t.me/ElaraFair3Community" target="_blank">
                <Image
                  src="/images/telegram.svg"
                  width={32}
                  height={32}
                  alt="Telegram"
                  className="hover:opacity-70 transition-opacity"
                />
              </Link>
              <Link href="https://t.me/KieranFair3Community" target="_blank">
                <Image
                  src="/images/telegram.svg"
                  width={32}
                  height={32}
                  alt="Telegram"
                  className="hover:opacity-70 transition-opacity"
                />
              </Link>
              <Link href="https://github.com/FAIR3CTO/Fair-and-Free" target="_blank">
                <Image
                  src="/images/github.svg"
                  width={32}
                  height={32}
                  alt="GitHub"
                  className="hover:opacity-70 transition-opacity"
                />
              </Link>
            </div> */}
          </div>
        </div>
      </footer>
    </>
  );
}

// 桌面端Layout组件
function DesktopLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.3]"
        style={{
          backgroundImage: `url('/images/background.svg')`,
          zIndex: -10,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, white 65%,transparent)`,
          zIndex: -5,
        }}
      />
      <header
        className={
          "flex relative w-full h-[108px] 2xl:justify-center 2xl:px-0 px-24 text-[var(--normal-text-color)] bg-[var(--bg-header-color)] backdrop-blur-[3.8px] z-50"
        }
      >
        <div className={"2xl:w-[1440px] w-full flex justify-between items-center"}>
          <Link href={"/"} className="shrink-0">
            <Image
              className={"mt-1"}
              src={"/images/header-logo.svg"}
              width={155}
              height={81}
              alt={"fair3 logo"}
            />
          </Link>
          <Nav />
          <ContactLink
            className="shrink-0"
            Xlink={"https://x.com/Fair3_community"}
            telegramCNLink={"https://t.me/FAIR3_CTO_COMMUNITY"}
            githubLink={"https://github.com/FAIR3CTO/Fair-and-Free"}
            gitbookLink={"https://fair3.gitbook.io/fair3"}
          />
        </div>
      </header>
      <div>{children}</div>
      <footer className="flex justify-center mt-[110px] pb-11">
        <div className="flex 2xl:w-[1440px] 2xl:mx-0 mx-24 w-full justify-between items-end text-[#353535] text-[15px] font-normal">
          <div>
            <h3 className={"font-[Konkhmer Sleokchher] text-[48px]"}>FAIR3</h3>
            <div className={"mt-8"}>
              © 2025 FAIR3 Community. All rights reserved.
            </div>
          </div>
          <div>
            <h3
              className={"font-bold font-[Kodchasan] text-[20px] text-[#000]"}
            >
              Contact Us
            </h3>
            <div className="flex mt-7">
              <Link
                href={"https://t.me/ElaraFair3Community"}
                target="_blank"
                className="flex items-center"
              >
                <Image
                  src={"/images/telegram.svg"}
                  width={20}
                  height={18}
                  alt={"Telegram CN Link"}
                />
                <span className={"ml-2.5 text-[#000]"}>
                  @ElaraFair3Community
                </span>
              </Link>
            </div>
            <div className="flex mt-7">
              <Link
                href={"https://t.me/KieranFair3Community"}
                target="_blank"
                className="flex items-center"
              >
                <Image
                  src={"/images/telegram.svg"}
                  width={20}
                  height={18}
                  alt={"Telegram CN Link"}
                />
                <span className={"ml-2.5 text-[#000]"}>
                  @KieranFair3Community
                </span>
              </Link>
            </div>
            <ContactLink className={"mt-7"} />
          </div>
        </div>
      </footer>
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setMounted(true);
  }, []);

  // 避免服务端渲染和客户端渲染不一致的问题
  if (!mounted) {
    return (
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${kodchasan.variable} antialiased relative`}
        >
          <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#7c49ff]"></div>
          </div>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        {isMobile ? (
          <MobileLayout>{children}</MobileLayout>
        ) : (
          <DesktopLayout>{children}</DesktopLayout>
        )}
      </body>
    </html>
  );
}
