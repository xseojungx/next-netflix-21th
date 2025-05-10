import { useQuery } from "@tanstack/react-query";
import { MovieResponse, MovieDetails, TMDBQueryParams } from "@/types/tmdb";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_TMDB_API_BASE_URL;

const fetchTMDB = async <T>(
  endpoint: string,
  params: Record<string, string | number> = {},
): Promise<T> => {
  const queryParams = new URLSearchParams({
    api_key: API_KEY || "",
    language: "ko-KR",
    ...params,
  });

  const response = await fetch(`${BASE_URL}${endpoint}?${queryParams}`);
  if (!response.ok) {
    throw new Error("Failed to fetch data from TMDB");
  }
  return response.json();
};

export const usePopularMovies = () => {
  return useQuery<MovieResponse>({
    queryKey: ["popularMovies"],
    queryFn: () => fetchTMDB("/movie/popular"),
  });
};

export const useUpcomingMovies = (params: TMDBQueryParams = {}) => {
  return useQuery<MovieResponse>({
    queryKey: ["upcomingMovies", params],
    queryFn: () =>
      fetchTMDB("/movie/upcoming", params as Record<string, string | number>),
  });
};

export const useMovieDetails = (movieId: number) => {
  return useQuery<MovieDetails>({
    queryKey: ["movieDetails", movieId],
    queryFn: () =>
      fetchTMDB(`/movie/${movieId}`, { append_to_response: "videos" }),
    enabled: !!movieId,
  });
};

export const useSearchMovies = (
  query: string,
  params: TMDBQueryParams = {},
) => {
  return useQuery<MovieResponse>({
    queryKey: ["searchMovies", query, params],
    queryFn: () => fetchTMDB("/search/movie", { ...params, query }),
    enabled: !!query,
  });
};
