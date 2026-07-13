import { VscClose } from "react-icons/vsc";
import Logo from "./logo";

export default function MobileNav({
  isMobileNavOpen,
  setIsMobileNavOpen,
}: {
  isMobileNavOpen: boolean;
  setIsMobileNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-dvh z-10 md:hidden ${isMobileNavOpen ? "bg-black/80  " : ""} transition-colors  duration-600
    ${isMobileNavOpen ? "  pointer-events-auto" : "  pointer-events-none"}`}
    >
      <div
        className={`fixed top-0  w-full h-dvh bg-white transition-all duration-600    ${isMobileNavOpen ? "left-0" : "-left-200"}   `}
      >
        <div className="flex items-center border-b border-black/10 pl-4 ">
          <Logo />
          <button
            onClick={() => setIsMobileNavOpen(false)}
            className="ml-auto  h-15 px-4 border-l border-black/10  "
          >
            <VscClose
              size={24}
              className="transition-all duration-400  hover:rotate-180 "
            />
          </button>
        </div>
      </div>
    </div>
  );
}
