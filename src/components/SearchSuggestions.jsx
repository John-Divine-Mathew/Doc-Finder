const SearchSuggestions = ({ documents }) => {

  return (
    <div
      className="
        bg-white
        border
        border-gray-200
        rounded-2xl
        shadow-sm
        p-5
      "
    >

      <h2 className="text-sm font-medium text-gray-500 mb-4">
        Smart Suggestions
      </h2>

      <div className="flex flex-wrap gap-3">

        {documents.slice(0, 5).map((doc) => (

          <button
            key={doc.id}
            className="
              px-4
              py-2
              rounded-xl
              bg-gray-100
              text-sm
              hover:bg-gray-200
              transition-all
            "
          >
            {doc.name}
          </button>

        ))}

      </div>

    </div>
  );
};

export default SearchSuggestions;