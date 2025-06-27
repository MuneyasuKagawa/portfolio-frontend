"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { Button } from "@/components/ui/button";
import { motion, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState, useMemo } from "react";
import { useTranslation } from "@/lib/use-translation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollY } = useScroll();
  const navItemsRef = useRef<{ [key: string]: HTMLElement | null }>({});
  const { t } = useTranslation();

  const navItems = useMemo(() => [
    { name: t("header.home"), href: "#home", id: "home" },
    { name: t("header.about"), href: "#about", id: "about" },
    { name: t("header.projects"), href: "#projects", id: "projects" },
    { name: t("header.skills"), href: "#skills", id: "skills" },
    { name: t("header.contact"), href: "#contact", id: "contact" },
  ], [t]);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  useEffect(() => {
    const calculateActiveSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3; // 画面の1/3位置を基準に

      // 各セクションの位置を取得して、現在のスクロール位置と比較
      const sections = navItems.map((item) => {
        const element = document.getElementById(item.id);
        if (!element) return { id: item.id, top: 0, bottom: 0 };

        const rect = element.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = rect.bottom + window.scrollY;

        return { id: item.id, top, bottom };
      });

      // 現在のスクロール位置に基づいてアクティブなセクションを見つける
      for (const section of sections) {
        if (scrollPosition >= section.top && scrollPosition <= section.bottom) {
          setActiveSection(section.id);
          break;
        }
      }

      // もし一番上にいる場合はホームをアクティブに
      if (window.scrollY < 100) {
        setActiveSection("home");
      }

      // もし一番下にいる場合は最後のセクションをアクティブに
      if (
        window.scrollY + window.innerHeight >=
        document.body.scrollHeight - 100
      ) {
        setActiveSection(navItems[navItems.length - 1].id);
      }
    };

    // 初期化時に一度実行
    calculateActiveSection();

    // スクロールイベントの追加
    window.addEventListener("scroll", calculateActiveSection);

    // クリーンアップ
    return () => {
      window.removeEventListener("scroll", calculateActiveSection);
    };
  }, [navItems]);

  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      setIsOpen(false);
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for header height
        behavior: "smooth",
      });
    }
  };

  // 現在のアクティブなメニュー項目の位置と幅を取得
  const left = (() => {
    const ind = navItems.findIndex((item) => item.id === activeSection);
    if (ind === -1) return 0;

    // navItemsの最初の要素から現在の要素までの幅を合計
    return (
      navItems
        .slice(0, ind)
        .reduce(
          (acc, item) => acc + navItemsRef.current[item.id]!.offsetWidth,
          0
        ) +
      ind * 1.5 * 16
    );
  })();
  const activeItemDimensions = navItemsRef.current[activeSection]
    ? {
        width: navItemsRef.current[activeSection].offsetWidth,
        left: left,
      }
    : { width: 0, left: 0 };

  return (
    <motion.header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
{t("header.portfolio_title")}
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="relative hidden items-center gap-6 md:flex">
          <div className="relative flex items-center gap-6">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <Link
                  href={item.href}
                  className={`px-1 py-2 text-foreground/80 transition-colors hover:text-primary ${
                    activeSection === item.id ? "text-primary" : ""
                  }`}
                  onClick={(e) => handleClick(e, item.href)}
                  ref={(el) => {
                    if (el) navItemsRef.current[item.id] = el;
                  }}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}

            {/* Animated Underline Indicator */}
            <motion.div
              className="absolute bottom-0 h-0.5 bg-primary"
              animate={{
                width: activeItemDimensions.width,
                left: activeItemDimensions.left,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>

          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          className="bg-background/95 backdrop-blur-md md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <nav className="flex flex-col py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-3 transition-colors hover:bg-muted/50 ${
                  activeSection === item.id
                    ? "border-l-2 border-primary pl-3 text-primary"
                    : "text-foreground/80 hover:text-primary"
                }`}
                onClick={(e) => handleClick(e, item.href)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
