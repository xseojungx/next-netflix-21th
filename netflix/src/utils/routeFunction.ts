import { useRouter } from "next/navigation";

export const goToMovieDetail = (router: ReturnType<typeof useRouter>, movieId: number) => {
  router.push(`/movie-detail?id=${movieId}`);
};