import Image from "next/image";
import Preview from "@/assets/search-preview.png";
import PlayIcon from "@/assets/PlayIcon.svg";
const MovieCard = () => {
  return (
    <div className="box-border flex h-19 w-full cursor-pointer items-center border-0 bg-[#424242] pr-3">
      <Image
        style={{ objectFit: "contain" }}
        src={Preview}
        alt="영화 표지"
        height={76}
        width={146}
      />
      <span className="b1 ml-2 line-clamp-2 flex-1 leading-[1.4] text-white">
        제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목
      </span>
      <button type="button" className="cursor-not-allowed">
        <PlayIcon />
      </button>
    </div>
  );
};
export default MovieCard;
