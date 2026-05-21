const RecentFiles = ({ documents }) => {

  return (
    <div
      className="
        bg-white
        border
        border-gray-200
        rounded-2xl
        shadow-sm
      "
    >

      <div className="px-6 py-5 border-b">

        <h2 className="text-lg font-semibold text-gray-800">
          Recently Opened Files
        </h2>

      </div>

      <div className="divide-y">

        {documents.slice(0, 5).map((doc) => (

          <div
            key={doc.id}
            className="
              px-6
              py-4
              hover:bg-gray-50
              transition-all
              cursor-pointer
            "
          >

            <h3 className="font-medium text-gray-800">
              {doc.name}
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              {doc.uploadDate}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
};

export default RecentFiles;