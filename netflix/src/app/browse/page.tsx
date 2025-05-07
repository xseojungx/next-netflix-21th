import NetflixIcon from "@/assets/images/NetflixIcon.svg";
import PlusIcon from "@/assets/images/PlusIcon.svg";
import PlayIcon from "@/assets/images/PlayIcon.svg";
import InfoIcon from "@/assets/images/InfoIcon.svg";
import Top10 from "@/assets/images/Top10.svg";

const Home = () => {
  const HeaderList = [
    {
      key: 0,
      name: "Netflix",
    },
    {
      key: 1,
      name: "TV Shows",
    },
    {
      key: 2,
      name: "Movies",
    },
    {
      key: 3,
      name: "My List",
    },
  ];
  return (
    <div className="h-full w-full bg-black">
      <div className="flex h-[26rem] w-full flex-col items-center justify-between bg-[lightgray] bg-[linear-gradient(180deg,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.00)_87.26%,#000_100%),url('/MovieThumbnail.svg')] bg-cover bg-[50%] bg-no-repeat py-2">
        <header className="flex w-full justify-between px-4 py-6">
          {HeaderList.map((item) => (
            <button
              type="button"
              className="flex cursor-pointer items-center text-[1.125rem] leading-[1.875rem]"
              key={item.key}
            >
              {item.name === "Netflix" ? <NetflixIcon /> : item.name}
            </button>
          ))}
        </header>
        <div className="flex items-center gap-2">
          <Top10 />
          <h1 className="text-[.875rem] leading-5 font-bold">
            #2 in Nigeria Today
          </h1>
        </div>
      </div>

      {/* Play Bar */}
      <div className="flex w-full justify-between px-12 py-4">
        <button
          type="button"
          className="flex w-12 cursor-pointer flex-col items-center justify-between"
        >
          <PlusIcon />
          <span className="text-[.875rem] leading-[1.25rem]">My List</span>
        </button>
        <button
          type="button"
          className="flex shrink-0 cursor-pointer items-center gap-[1.125rem] rounded-[.375rem] bg-[#C3C4C4] py-2 pr-[.625rem] pl-5 hover:bg-[#8a8a8a]"
        >
          <PlayIcon />
          <span className="text-[1.25rem] leading-[1.875rem] font-semibold text-black">
            Play
          </span>
        </button>
        <button
          type="button"
          className="flex w-12 cursor-pointer flex-col items-center justify-between"
        >
          <InfoIcon />
          <span className="text-[.875rem] leading-[1.25rem]">Info</span>
        </button>
      </div>

      {/* Movie List */}
      <main className="flex flex-col gap-5 pt-11 pb-8">
        <div className="flex flex-col gap-4 px-4">
          <h2 className="text-[1.625rem] leading-5 font-bold">Previews</h2>
          <div className="no-scrollbar flex gap-2 overflow-x-scroll">
            <img
              src={"/MovieThumbnail.svg"}
              className="h-25 w-25 shrink-0 cursor-pointer rounded-full object-cover"
            />
            <img
              src={"/MovieThumbnail.svg"}
              className="h-25 w-25 shrink-0 cursor-pointer rounded-full object-cover"
            />
            <img
              src={"/MovieThumbnail.svg"}
              className="h-25 w-25 shrink-0 cursor-pointer rounded-full object-cover"
            />
            <img
              src={"/MovieThumbnail.svg"}
              className="h-25 w-25 shrink-0 cursor-pointer rounded-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 px-4">
          <h2 className="h2">Continue Watching for Emelnalo</h2>
          <div className="no-scrollbar flex gap-2 overflow-x-scroll">
            <img
              src={"/MovieThumbnail.svg"}
              className="h-44 w-25 shrink-0 cursor-pointer rounded-[.125rem] object-cover"
            />
            <img
              src={"/MovieThumbnail.svg"}
              className="h-44 w-25 shrink-0 cursor-pointer rounded-[.125rem] object-cover"
            />
            <img
              src={"/MovieThumbnail.svg"}
              className="h-44 w-25 shrink-0 cursor-pointer rounded-[.125rem] object-cover"
            />
            <img
              src={"/MovieThumbnail.svg"}
              className="h-44 w-25 shrink-0 cursor-pointer rounded-[.125rem] object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 px-4">
          <h2 className="h2">Netflix Originals</h2>
          <div className="no-scrollbar flex gap-2 overflow-x-scroll">
            <img
              src={"/MovieThumbnail.svg"}
              className="h-63 w-39 shrink-0 cursor-pointer rounded-[.125rem] object-cover"
            />
            <img
              src={"/MovieThumbnail.svg"}
              className="h-63 w-39 shrink-0 cursor-pointer rounded-[.125rem] object-cover"
            />
            <img
              src={"/MovieThumbnail.svg"}
              className="h-63 w-39 shrink-0 cursor-pointer rounded-[.125rem] object-cover"
            />
            <img
              src={"/MovieThumbnail.svg"}
              className="h-63 w-39 shrink-0 cursor-pointer rounded-[.125rem] object-cover"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
