import Link from "next/link";
import HomeIcon from "@/components/icons/HomeIcon";
import SearchIcon from "@/components/icons/SearchIcon";
import ComingSoonIcon from "@/components/icons/ComingSoonIcon";
import DownloadsIcon from "@/components/icons/DownloadsIcon";
import MoreIcon from "@/components/icons/MoreIcon";

const NAVBAR_ITEMS = [
  {
    key: 0,
    name: "Home",
    destination: "/browse",
    icon: HomeIcon,
  },
  {
    key: 1,
    name: "Search",
    destination: "/search",
    icon: SearchIcon,
  },
  {
    key: 2,
    name: "Coming Soon",
    destination: "/",
    icon: ComingSoonIcon,
  },
  {
    key: 3,
    name: "Downloads",
    destination: "/",
    icon: DownloadsIcon,
  },
  {
    key: 4,
    name: "More",
    destination: "/",
    icon: MoreIcon,
  },
];

const NavBar = () => {
  return (
    <nav className="fixed bottom-0 flex h-fit w-full max-w-[375px] bg-black py-2">
      {NAVBAR_ITEMS.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.key}
            href={item.destination}
            className="flex w-full cursor-pointer flex-col items-center justify-center gap-1 text-center text-[.5rem] font-medium text-white"
          >
            <Icon />
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};
export default NavBar;
