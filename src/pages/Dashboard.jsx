import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import UploadZone from "../components/UploadZone";
import DocumentTable from "../components/DocumentTable";
import DocumentViewer from "../components/DocumentViewer";
import SupportModal from "../components/SupportModal";
import Breadcrumb from "../components/Breadcrumb";
import EmptyState from "../components/EmptyState";

import { mockDocuments } from "../data/mockDocuments";

const Dashboard = () => {

  /* ======================================
     LOCAL STORAGE
  ====================================== */

  const savedDocs = localStorage.getItem("documents");

  const [documents, setDocuments] = useState(
    savedDocs
      ? JSON.parse(savedDocs)
      : mockDocuments
  );

  /* ======================================
     STATES
  ====================================== */

  const [search, setSearch] = useState("");

  const [selectedDoc, setSelectedDoc] = useState(null);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [showSupport, setShowSupport] = useState(false);

  /* ======================================
     SAVE DOCUMENTS
  ====================================== */

  useEffect(() => {

    localStorage.setItem(
      "documents",
      JSON.stringify(documents)
    );

  }, [documents]);

  /* ======================================
     FILE UPLOAD
  ====================================== */

  const handleUpload = (files) => {

    const newDocs = files.map((file, index) => ({

      id: Date.now() + index,

      name: file.name,

      type: file.name.split(".").pop().toUpperCase(),

      size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,

      owner: "Current User",

      uploadDate: new Date().toLocaleDateString(),

      url: URL.createObjectURL(file),

    }));

    setDocuments((prev) => [...newDocs, ...prev]);
  };

  /* ======================================
     SEARCH FILTER
  ====================================== */

  const filteredDocs = documents.filter((doc) =>
    doc.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  /* ======================================
     MAIN UI
  ====================================== */

  return (
    <div className="min-h-screen bg-[#f5f7fa] overflow-x-hidden">

      {/* NAVBAR */}
      <Navbar
        toggleSidebar={() =>
          setSidebarOpen(!sidebarOpen)
        }
        sidebarOpen={sidebarOpen}
        setShowSupport={setShowSupport}
      />

      {/* SIDEBAR */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* MAIN CONTENT */}
      <div className="pt-28 pb-14 px-6">

        {/* CENTER CONTAINER */}
        <div className="max-w-7xl mx-auto flex flex-col gap-8">

          {/* BREADCRUMB */}
          <Breadcrumb />

          {/* PAGE HEADER */}
          <div
            className="
              bg-white
              border
              border-gray-200
              rounded-3xl
              p-10
              shadow-sm
              text-center
              hover:shadow-md
              transition-all
              duration-300
            "
          >

            <h1 className="text-4xl font-semibold text-gray-800 tracking-tight">
              Enterprise Document Portal
            </h1>

            <p className="text-gray-500 mt-4 text-sm leading-relaxed max-w-2xl mx-auto">
              Securely manage, upload, access and search
              company documents through the HIROTEC
              internal document management platform.
            </p>

          </div>

          {/* SEARCH BAR */}
          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          {/* UPLOAD AREA */}
          <UploadZone
            onUpload={handleUpload}
          />

          {/* DOCUMENT TABLE */}
          {filteredDocs.length > 0 ? (

            <DocumentTable
              documents={filteredDocs}
              onSelect={setSelectedDoc}
            />

          ) : (

            <EmptyState />

          )}

        </div>

      </div>

      {/* DOCUMENT VIEWER */}
      <DocumentViewer
        selectedDoc={selectedDoc}
        onClose={() =>
          setSelectedDoc(null)
        }
      />

      {/* SUPPORT MODAL */}
      <SupportModal
        showSupport={showSupport}
        setShowSupport={setShowSupport}
      />

    </div>
  );
};

export default Dashboard;