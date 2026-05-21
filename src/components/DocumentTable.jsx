import { motion } from "framer-motion";

const DocumentTable = ({
  documents,
  onSelect,
}) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="
        glass-card
        border
        border-white/50
        rounded-3xl
        soft-shadow
        overflow-hidden
      "
    >

      {/* HEADER */}
      <div className="px-8 py-6 border-b border-gray-100">

        <h2 className="text-xl font-semibold text-gray-800">
          Company Documents
        </h2>

      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-white/60">

            <tr className="text-left text-sm text-gray-500">

              <th className="px-8 py-5 font-medium">
                File Name
              </th>

              <th className="px-8 py-5 font-medium">
                Type
              </th>

              <th className="px-8 py-5 font-medium">
                Owner
              </th>

              <th className="px-8 py-5 font-medium">
                Uploaded
              </th>

              <th className="px-8 py-5 font-medium">
                Size
              </th>

            </tr>

          </thead>

          <tbody>

            {documents.map((doc) => (

              <motion.tr
                whileHover={{
                  backgroundColor:
                    "rgba(248,250,252,1)",
                }}
                key={doc.id}
                onClick={() => onSelect(doc)}
                className="
                  border-t
                  border-gray-100
                  cursor-pointer
                "
              >

                <td className="px-8 py-6 font-medium text-gray-800">
                  {doc.name}
                </td>

                <td className="px-8 py-6 text-gray-600">
                  {doc.type}
                </td>

                <td className="px-8 py-6 text-gray-600">
                  {doc.owner}
                </td>

                <td className="px-8 py-6 text-gray-600">
                  {doc.uploadDate}
                </td>

                <td className="px-8 py-6 text-gray-600">
                  {doc.size}
                </td>

              </motion.tr>

            ))}

          </tbody>

        </table>

      </div>

    </motion.div>
  );
};

export default DocumentTable;