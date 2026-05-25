import React from "react";

const SearchBar = ({
  search,
  setSearch,
  handleSearch
}) => {

  return (

    <div
      className="
        w-full
        flex
        justify-center
      "
    >

      <div
        className="
          w-full
          max-w-4xl
          relative
        "
      >

        {/* SEARCH INPUT */}

        <input
          type="text"
          placeholder="Search company documents..."
          value={search}
          onChange={(e)=>{

            setSearch(
              e.target.value
            );

            handleSearch(
              e.target.value
            );

          }}
          className="
            w-full
            h-14
            px-6
            rounded-2xl
            bg-white/90
            backdrop-blur-md
            border
            border-gray-200
            shadow-sm
            text-sm
            text-gray-700
            outline-none
            transition-all
            duration-300
            focus:ring-4
            focus:ring-blue-100
            focus:border-blue-400
          "
        />

      </div>

    </div>

  );

};

export default SearchBar;