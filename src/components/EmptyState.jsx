const EmptyState = () => {

  return (
    <div
      className="
        bg-white
        border
        border-gray-200
        rounded-2xl
        p-16
        text-center
      "
    >

      <h2 className="text-2xl font-semibold text-gray-700">
        No Documents Found
      </h2>

      <p className="text-gray-500 mt-3">
        Try another search or upload a new document.
      </p>

    </div>
  );
};

export default EmptyState;