import iconMoon from "../assets/images/icon-moon.svg";
import iconSun from "../assets/images/icon-sun.svg";
import { useTheme } from "../hooks/useTheme";
import { Logo } from "./Logo";

export function Header() {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <header className='app-header'>
      <div className='flex items-center gap-150'>
        <Logo />
        <span className='text-[24px] font-semibold leading-[1.3] text-neutral-900 dark:text-neutral-0'>
          Extensions
        </span>
      </div>
      <button
        className='theme-toggle'
        aria-label='Toggle theme'
        type='button'
        onClick={toggleTheme}
      >
        <img
          src={isDarkMode ? iconSun : iconMoon}
          alt={isDarkMode ? "Switch to light theme" : "Switch to dark theme"}
          className='w-[22px] h-[22px]'
        />
      </button>
    </header>
  );
}
