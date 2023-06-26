import NavBar from "@/components/NavBar";
import Seo from "@/components/Seo";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const API_KEY = "a995ddaefd02120cffba2ce5d93b8eac";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(`/api/movies`)).json();
      // console.log(data);
      setMovies(results);
    })();
  }, []);

  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`);
  };

  return (
    <div>
      <div className="container">
        <Seo title="Home" />
        {!movies && <h4>Loading ...</h4>}
        {movies.map((movie) => (
          <Link
            onClick={() => onClick(movie.id)}
            href={`/movies/${movie.id}`}
            key={movie.id}
          >
            <div className="movie">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
              <h4>{movie.original_title}</h4>
            </div>
          </Link>
        ))}
      </div>

      <style jsx global>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
