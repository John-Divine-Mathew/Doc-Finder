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
        rounded-3xl
        p-16
        text-center
        cursor-pointer
        hover:border-blue-500
        hover:bg-blue-50/20
        transition-all
        duration-300
        shadow-sm
        hover:shadow-md
      "
    >

      <input {...getInputProps()} />

      <h2 className="text-2xl font-semibold text-gray-800">
        Upload Documents
      </h2>

      <p className="text-gray-500 mt-4">
        Drag and drop files here or click to browse
      </p>

      <p className="text-sm text-gray-400 mt-2">
        PDF, Word, Excel, PPT, TXT and Images Supported
      </p>

    </div>
  );
};

export default UploadZone;