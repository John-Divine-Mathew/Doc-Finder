const SearchBar = ({ search, setSearch }) => {

  return (
    <div className="w-full flex justify-center">

      <div
        className="
          w-full
          bg-white
          border
          border-gray-200
          rounded-2xl
          shadow-sm
          px-6
          py-5
          transition-all
          duration-300
          hover:shadow-md
        "
      >

        <div className="flex items-center justify-between gap-4">

          {/* INPUT */}
          <input
            type="text"
            placeholder="Search company documents..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              flex-1
              bg-[#f9fafb]
              border
              border-gray-200
              rounded-xl
              px-5
              py-4
              outline-none
              text-gray-700
              text-sm
              focus:ring-2
              focus:ring-blue-500
              transition-all
            "
          />

          {/* BUTTON */}
          <button
            className="
              px-8
              py-4
              rounded-xl
              bg-gray-900
              text-white
              text-sm
              font-medium
              hover:bg-black
              transition-all
            "
          >
            Search
          </button>

        </div>

      </div>

    </div>
  );
};

export default SearchBar;