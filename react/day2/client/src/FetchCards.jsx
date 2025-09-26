import React, { useEffect, useState } from "react";

export default function ApiCards() {
  const [data, setData] = useState([]);
  const [expanded, setExpanded] = useState({});
  const [view, setView] = useState("grid");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setData(res.products))
      .catch((err) => console.error(err));
  }, []);

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const categories = ["all", ...new Set(data.map((item) => item.category))];

  const filteredData = data.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      category === "all" ? true : item.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-between items-center">
        <input
          type="text"
          placeholder="🔍 Search products..."
          className="border rounded-lg px-4 py-2 w-full sm:w-1/3 shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border rounded-lg px-4 py-2 w-full sm:w-1/4 shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat, i) => (
            <option key={i} value={cat}>
              {cat.toUpperCase()}
            </option>
          ))}
        </select>
        <div className="flex gap-2">
          <button
            onClick={() => setView("grid")}
            className={`px-4 py-2 rounded-lg shadow-sm transition ${
              view === "grid"
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            🟦 Grid
          </button>
          <button
            onClick={() => setView("list")}
            className={`px-4 py-2 rounded-lg shadow-sm transition ${
              view === "list"
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            📋 List
          </button>
        </div>
      </div>

      {/* Cards */}
      <div
        className={`grid gap-8 ${
          view === "grid"
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            : "grid-cols-1"
        }`}
      >
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md overflow-hidden border hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
                {item.title}
              </h2>
              <p className="text-gray-600 text-sm mb-3">
                {expanded[item.id]
                  ? item.description
                  : item.description.split(" ").slice(0, 15).join(" ") + "..."}
              </p>
              <button
                onClick={() => toggleExpand(item.id)}
                className="text-indigo-600 hover:underline text-sm mb-3"
              >
                {expanded[item.id] ? "Show less ▲" : "Show more ▼"}
              </button>

              <div className="flex justify-between items-center mt-2">
                <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium">
                  {item.category}
                </span>
                <p className="text-lg font-bold text-indigo-700">
                  💲{item.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
