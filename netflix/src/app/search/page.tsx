import SearchInput from "@/components/search/SearchInput";
import MovieCard from "@/components/search/MovieCard";
const SearchPage = () => {
  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-black pt-11">
      <SearchInput />
      <section className="mb-12 flex min-h-10 flex-col pt-5">
        <p className="h1 ml-2 text-white">Top Searches</p>
        <article className="mt-5 flex h-fit w-full flex-1 flex-col space-y-[3px] overflow-y-auto">
          <MovieCard />
        </article>
      </section>
    </div>
  );
};
export default SearchPage;
