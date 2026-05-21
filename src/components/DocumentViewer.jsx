import { motion, AnimatePresence } from "framer-motion";

const DocumentViewer = ({
  selectedDoc,
  onClose,
}) => {

  return (
    <AnimatePresence>

      {selectedDoc && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
            fixed
            inset-0
            bg-black/40
            backdrop-blur-sm
            z-50
            flex
            items-center
            justify-center
            p-6
          "
        >

          <motion.div
            initial={{
              scale: 0.94,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0.94,
              opacity: 0,
            }}
            className="
              bg-white
              w-full
              max-w-7xl
              h-[92vh]
              rounded-3xl
              overflow-hidden
              soft-shadow
              flex
              flex-col
            "
          >

            {/* HEADER */}
            <div
              className="
                px-8
                py-5
                border-b
                border-gray-100
                flex
                items-center
                justify-between
              "
            >

              <div>

                <h2 className="text-xl font-semibold text-gray-800">
                  {selectedDoc.name}
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  {selectedDoc.owner}
                </p>

              </div>

              <div className="flex items-center gap-3">

                <a
                  href={selectedDoc.url}
                  download
                  className="
                    px-5
                    py-3
                    rounded-2xl
                    bg-blue-600
                    text-white
                    text-sm
                    font-medium
                  "
                >
                  Download
                </a>

                <button
                  onClick={onClose}
                  className="
                    px-5
                    py-3
                    rounded-2xl
                    border
                    border-gray-200
                    hover:bg-gray-50
                  "
                >
                  Close
                </button>

              </div>

            </div>

            {/* PDF */}
            <div className="flex-1 bg-gray-100 p-5">

              <iframe
                src={selectedDoc.url}
                title="preview"
                className="
                  w-full
                  h-full
                  rounded-2xl
                  bg-white
                  border
                  border-gray-200
                "
              />

            </div>

          </motion.div>

        </motion.div>
      )}

    </AnimatePresence>
  );
};

export default DocumentViewer;