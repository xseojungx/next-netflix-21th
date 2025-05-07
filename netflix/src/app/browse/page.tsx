import NetflixIcon from "@/assets/images/NetflixIcon.svg";
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
      <div className="flex h-[26rem] w-full flex-col items-center justify-between bg-gray-500 py-2">
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
    </div>
  );
};

export default Home;
