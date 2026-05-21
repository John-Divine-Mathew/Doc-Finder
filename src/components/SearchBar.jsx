const SearchBar = ({
  search,
  setSearch,
}) => {

  return (
    <div
      className="
        glass
        premium-border
        soft-shadow
        rounded-[28px]
        p-4
      "
    >

      <div
        className="
          flex
          items-center
          gap-4
        "
      >

        <input
          type="text"
          placeholder="Search company documents..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="
            input-style
            flex-1
          "
        />

        <button
          className=" 
            primary-btn
          "
        >
          Search
        </button>

      </div>

    </div>
  );
};

export default SearchBar;