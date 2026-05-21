const Breadcrumb = () => {

  return (
    <div className="flex items-center gap-2 text-sm text-gray-500">

      <span>Home</span>

      <span>/</span>

      <span className="text-gray-800 font-medium">
        Documents
      </span>

    </div>
  );
};

export default Breadcrumb;