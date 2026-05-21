const UploadZone = ({
  onUpload,
}) => {

  const handleFiles = (e) => {

    const files =
      Array.from(e.target.files);

    onUpload(files);
  };

  return (
    <div
      className="
        glass
        premium-border
        soft-shadow
        rounded-[30px]
        p-10
        text-center
      "
    >

      <input
        type="file"
        multiple
        onChange={handleFiles}
        className="hidden"
        id="uploadInput"
      />

      <label
        htmlFor="uploadInput"
        className="
          block
          cursor-pointer
        "
      >

        <h2
          className="
            text-2xl
            font-semibold
            text-gray-800
          "
        >
          Upload Documents
        </h2>

        <p
          className="
            text-gray-500
            mt-3
          "
        >
          Drag and drop files here
          or click to browse
        </p>

        <p
          className="
            text-sm
            text-gray-400
            mt-2
          "
        >
          PDF, Word, Excel, PPT,
          TXT and Images Supported
        </p>

      </label>

    </div>
  );
};

export default UploadZone;