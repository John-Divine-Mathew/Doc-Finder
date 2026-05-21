import { useDropzone } from "react-dropzone";

const UploadZone = ({ onUpload }) => {

  const { getRootProps, getInputProps } = useDropzone({
    multiple: true,

    onDrop: (acceptedFiles) => {
      onUpload(acceptedFiles);
    },
  });

  return (
    <div
      {...getRootProps()}
      className="
        bg-white
        border
        border-dashed
        border-gray-300
        rounded-2xl
        p-14
        text-center
        cursor-pointer
        hover:border-blue-500
        hover:bg-blue-50/30
        transition-all
        duration-300
        shadow-sm
      "
    >

      <input {...getInputProps()} />

      <h2 className="text-xl font-semibold text-gray-800">
        Upload Company Documents
      </h2>

      <p className="text-sm text-gray-500 mt-3">
        Drag and drop files here or click to browse
      </p>

      <p className="text-xs text-gray-400 mt-2">
        Supports PDF, Word, Excel, PPT, TXT and image files
      </p>

    </div>
  );
};

export default UploadZone;