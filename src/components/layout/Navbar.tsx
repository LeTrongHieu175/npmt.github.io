import { NavLink } from "react-router-dom";
import { useState } from "react";
import clsx from "clsx";
import Button from "../ui/Button";
import { useDarkMode } from "../../hooks/useDarkMode";

const navItems = [
  { label: "Trang chủ", to: "/", end: true },
  { label: "Giới thiệu", to: "/about" },
  { label: "Kinh nghiệm", to: "/experience" },
  { label: "Kỹ năng", to: "/skills" },
  { label: "Học vấn", to: "/education" },
  { label: "Giải thưởng", to: "/awards" },
  { label: "Sự kiện", to: "/events" },
  { label: "Liên hệ", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { mode, toggle } = useDarkMode();
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <header className="sticky top-0 z-50 border-b border-white/50 bg-white/70 backdrop-blur-lg dark:border-white/10 dark:bg-[#16161b]/80">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blush-300 to-lilac-400" />
          <div>
            <p className="font-display text-lg font-semibold">Nguyễn Phan Mỹ Tiên</p>
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Quản lí nhà hàng</p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                clsx(
                  "text-sm font-semibold text-muted transition hover:text-blush-400",
                  isActive && "text-blush-400"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`${baseUrl}cv.pdf`} className="hidden xl:block">
            <Button variant="outline">Download CV</Button>
          </a>
          <Button variant="ghost" onClick={toggle} aria-label="Toggle dark mode">
            {mode === "dark" ? "🌙" : "☀️"}
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slategray/60 text-xl text-muted transition hover:text-blush-400 lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/40 bg-white/80 px-4 py-4 dark:border-white/10 dark:bg-[#1a1a20] lg:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  clsx(
                    "text-sm font-semibold text-muted transition hover:text-blush-400",
                    isActive && "text-blush-400"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="mt-4 flex items-center gap-3">
              <a href={`${baseUrl}cv.pdf`}>
                <Button variant="outline">Download CV</Button>
              </a>
              <Button variant="ghost" onClick={toggle} aria-label="Toggle dark mode">
                {mode === "dark" ? "🌙" : "☀️"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
