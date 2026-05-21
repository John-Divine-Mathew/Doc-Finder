const DocumentViewer = ({ selectedDoc, onClose }) => {

  if (!selectedDoc) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-6">

      <div
        className="
          bg-white
          w-full
          max-w-6xl
          h-[90vh]
          rounded-3xl
          shadow-2xl
          overflow-hidden
          flex
          flex-col
        "
      >

        {/* HEADER */}
        <div
          className="
            border-b
            border-gray-200
            px-8
            py-5
            flex
            items-center
            justify-between
            bg-white
          "
        >

          {/* LEFT */}
          <div>

            <h2 className="text-xl font-semibold text-gray-800">
              {selectedDoc.name}
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              {selectedDoc.owner} • {selectedDoc.size}
            </p>

          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">

            <a
              href={selectedDoc.url}
              download
              className="
                px-5
                py-3
                rounded-xl
                bg-gray-900
                text-white
                text-sm
                hover:bg-black
                transition-all
              "
            >
              Download
            </a>

            <button
              onClick={onClose}
              className="
                px-5
                py-3
                rounded-xl
                border
                border-gray-300
                hover:bg-gray-100
                transition-all
              "
            >
              Close
            </button>

          </div>

        </div>

        {/* PDF PREVIEW */}
        <div className="flex-1 bg-gray-100 p-5 overflow-hidden">

          <iframe
            src={selectedDoc.url}
            title="preview"
            className="
              w-full
              h-full
              rounded-2xl
              border
              border-gray-200
              bg-white
            "
          />

        </div>

      </div>

    </div>
  );
};

export default DocumentViewer;