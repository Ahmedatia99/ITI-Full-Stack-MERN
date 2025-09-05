import React, { useState } from "react";


export default function App() {
  const sampleMovies = [
  {
    id: 1,
    title: "The Quantum Heist",
    poster:"https://images.unsplash.com/photo-1517602302552-471fe67acf66?q=80&w=1200&auto=format&fit=crop",
    ticketsLeft: 5,
  },
  {
    id: 2,
    title: "Echoes of Mars",
    poster:
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=1200&auto=format&fit=crop",
    ticketsLeft: 1,
  },
  {
    id: 3,
    title: "Neon Nights",
    poster:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop",
    ticketsLeft: 2,
  },
  {
    id: 4,
    title: "Silent Horizon",
    poster:
      "https://images.unsplash.com/photo-1512070679279-8988d32161be?q=80&w=1200&auto=format&fit=crop",
    ticketsLeft: 0,
  },
];
  const [movies, setMovies] = useState(sampleMovies);

  const handleBuy = (id) => {
    setMovies((prev) =>
      prev.map((m) =>
        m.id === id && m.ticketsLeft > 0
          ? { ...m, ticketsLeft: m.ticketsLeft - 1 }
          : m
      )
    );
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 py-10">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="mb-6 text-2xl font-bold tracking-tight text-gray-900">
          🎬 Movies
        </h1>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {movies.map((movie) => {
            const isSoldOut = movie.ticketsLeft === 0;
            const isLastTicket = movie.ticketsLeft === 1;

            return (
              <div
                key={movie.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition hover:shadow-lg"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Badge */}
                  {isSoldOut ? (
                    <span className="absolute left-3 top-3 rounded-full bg-gray-900/90 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white">
                      Sold Out
                    </span>
                  ) : isLastTicket ? (
                    <span className="absolute left-3 top-3 rounded-full bg-red-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                      Last ticket
                    </span>
                  ) : (
                    <span className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white">
                      {movie.ticketsLeft} left
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <h3 className="line-clamp-1 text-lg font-semibold text-gray-900">
                    {movie.title}
                  </h3>

                  <div className="mt-3 flex items-center justify-between">
                    <p className="text-sm text-gray-500">
                      Tickets: {movie.ticketsLeft}
                    </p>
                  </div>

                  <div className="mt-auto pt-4">
                    <button
                      type="button"
                      onClick={() => handleBuy(movie.id)}
                      disabled={isSoldOut}
                      aria-label={
                        isSoldOut
                          ? `${movie.title} is sold out`
                          : `Buy ticket for ${movie.title}`
                      }
                      className={[
                        "w-full rounded-2xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2",
                        isSoldOut
                          ? "cursor-not-allowed bg-gray-300 text-gray-600"
                          : isLastTicket
                          ? "bg-red-600 text-white hover:bg-red-700 focus:ring-red-600"
                          : "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-600",
                      ].join(" ")}
                    >
                      {isSoldOut ? "Sold Out" : "Buy Now"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
