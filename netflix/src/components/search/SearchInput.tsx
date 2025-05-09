import Image from "next/image";
import SearchIcon from "@/assets/SearchIcon.svg";
import ExitIcon from "@/assets/ExitIcon.svg";

const SearchInput = () => {
  return (
    <div className="flex h-13 w-full max-w-md items-center gap-1 bg-[#424242] px-5 py-2">
      <Image src={SearchIcon} alt="" className="h-5 w-5 cursor-pointer" />
      <input
        type="text"
        placeholder="Search for a show, movie, genre, e.t.c."
        className="flex-1 bg-transparent text-white placeholder-zinc-500 focus:outline-none"
      />
      <Image src={ExitIcon} alt="" className="cursor-pointer" />
    </div>
  );
};
export default SearchInput;
