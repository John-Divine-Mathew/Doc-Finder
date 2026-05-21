const QuickActions = () => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

      <button
        className="
          bg-white
          border
          border-gray-200
          rounded-2xl
          p-6
          text-left
          hover:shadow-md
          transition-all
        "
      >

        <h2 className="text-lg font-semibold text-gray-800">
          Upload Files
        </h2>

        <p className="text-sm text-gray-500 mt-2">
          Add new company documents
        </p>

      </button>

      <button
        className="
          bg-white
          border
          border-gray-200
          rounded-2xl
          p-6
          text-left
          hover:shadow-md
          transition-all
        "
      >

        <h2 className="text-lg font-semibold text-gray-800">
          Recent Files
        </h2>

        <p className="text-sm text-gray-500 mt-2">
          Open recently viewed documents
        </p>

      </button>

      <button
        className="
          bg-white
          border
          border-gray-200
          rounded-2xl
          p-6
          text-left
          hover:shadow-md
          transition-all
        "
      >

        <h2 className="text-lg font-semibold text-gray-800">
          Favorites
        </h2>

        <p className="text-sm text-gray-500 mt-2">
          Access starred documents
        </p>

      </button>

    </div>
  );
};

export default QuickActions;