const DocumentTable = ({ documents, onSelect }) => {

  return (
    <div
      className="
        bg-white
        border
        border-gray-200
        rounded-2xl
        shadow-sm
        overflow-hidden
      "
    >

      {/* HEADER */}
      <div className="px-6 py-5 border-b bg-gray-50">

        <h2 className="text-lg font-semibold text-gray-800">
          Company Documents
        </h2>

      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-white border-b">

            <tr className="text-left text-sm text-gray-500">

              <th className="px-6 py-4 font-medium">
                File Name
              </th>

              <th className="px-6 py-4 font-medium">
                Type
              </th>

              <th className="px-6 py-4 font-medium">
                Owner
              </th>

              <th className="px-6 py-4 font-medium">
                Uploaded
              </th>

              <th className="px-6 py-4 font-medium">
                Size
              </th>

            </tr>

          </thead>

          <tbody>

            {documents.map((doc) => (

              <tr
                key={doc.id}
                onClick={() => onSelect(doc)}
                className="
                  border-b
                  hover:bg-gray-50
                  transition-all
                  duration-200
                  cursor-pointer
                "
              >

                <td className="px-6 py-5 font-medium text-gray-800">
                  {doc.name}
                </td>

                <td className="px-6 py-5 text-gray-600">
                  {doc.type}
                </td>

                <td className="px-6 py-5 text-gray-600">
                  {doc.owner}
                </td>

                <td className="px-6 py-5 text-gray-600">
                  {doc.uploadDate}
                </td>

                <td className="px-6 py-5 text-gray-600">
                  {doc.size}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default DocumentTable; 