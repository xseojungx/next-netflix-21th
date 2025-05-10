import Image from "next/image";
import SearchIcon from "@/assets/images/SearchIcon.svg";
import ExitIcon from "@/assets/images/ExitIcon.svg";
import { useRouter } from "next/navigation";

const SearchInput = () => {
  const router = useRouter();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;
    router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  const handleClear = () => {
    router.push('/search');
  };

  return (
    <div className="flex h-13 w-full max-w-md items-center gap-1 bg-[#424242] px-5 py-2">
      <SearchIcon className="h-5 w-5 cursor-pointer" />
      <input
        type="text"
        placeholder="Search for a show, movie, genre, e.t.c."
        className="flex-1 bg-transparent text-white placeholder-zinc-500 focus:outline-none"
        onChange={handleSearch}
      />
      <ExitIcon 
        className="cursor-pointer" 
        onClick={handleClear}
      />
    </div>
  );
};
export default SearchInput;
