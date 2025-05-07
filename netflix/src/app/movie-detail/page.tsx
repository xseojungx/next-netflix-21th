import PreviewImg from "@/assets/movie-detail-preview.png";
import Image from "next/image";

const MovieDetail = () => {
  return (
    <div className="flex h-full w-full flex-col items-center bg-black">
      {/* 상단 프리뷰 사진 */}
      <section className="relative h-[26rem] w-full">
        <Image src={PreviewImg} fill alt="어쩌구" />
        <div className="absolute bottom-0 left-0 h-full w-full [background:linear-gradient(180deg,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.00)_87.26%,#000_100%)]" />
      </section>
      <section className="flex w-full flex-col items-center pt-4">
        {/* 플레이 버튼 */}
        <button className="h-[45px] w-[303px] shrink-0 cursor-not-allowed space-x-4 rounded-[5.625px] text-[20.462px] leading-[30px] font-semibold tracking-[-0.061px] text-black [background:#C4C4C4]">
          <span>►</span>
          <span>Play</span>
        </button>
        <article className="m-8 flex flex-col items-center space-y-6 text-white">
          <p className="h1 w-full">Previews</p>
          <p className="b2 w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quam
            dui, vivamusLorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sit quam dui, vivamusLorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sit quam dui, vivamus
          </p>
        </article>
      </section>
    </div>
  );
};
export default MovieDetail;
