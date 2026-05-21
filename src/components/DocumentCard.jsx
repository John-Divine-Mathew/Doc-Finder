import { FileText } from "lucide-react";
import { motion } from "framer-motion";

const DocumentCard = ({ doc }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-[#1e293b]
      border border-white/10
      rounded-2xl p-5 shadow-lg cursor-pointer"
    >

      <div className="flex items-start justify-between">

        <div className="flex gap-4">

          <div className="bg-blue-500 p-3 rounded-xl">
            <FileText />
          </div>

          <div>
            <h2 className="font-semibold text-lg">
              {doc.name}
            </h2>

            <p className="text-sm text-gray-400 mt-1">
              {doc.content}
            </p>

            <div className="flex gap-4 mt-3 text-sm text-gray-400">
              <span>{doc.type}</span>
              <span>{doc.size}</span>
              <span>{doc.owner}</span>
            </div>

          </div>

        </div>

      </div>

    </motion.div>
  );
};

export default DocumentCard;