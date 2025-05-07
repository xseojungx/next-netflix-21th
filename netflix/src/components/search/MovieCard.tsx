import Image from "next/image";
import Preview from "@/assets/search-preview.png";
import PlayIcon from "@/assets/PlayIcon.svg";
const MovieCard = () => {
  return (
    <div className="box-border flex h-[76px] w-full items-center border-0 bg-[#424242] pr-3">
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
      <PlayIcon />
    </div>
  );
};
export default MovieCard;
