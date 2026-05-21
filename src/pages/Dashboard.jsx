import { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import UploadZone from "../components/UploadZone";
import DocumentTable from "../components/DocumentTable";
import DocumentViewer from "../components/DocumentViewer";
import SupportModal from "../components/SupportModal";

import { mockDocuments } from "../data/mockDocuments";

const Dashboard = () => {

  const [documents, setDocuments] = useState(mockDocuments);

  const [search, setSearch] = useState("");

  const [selectedDoc, setSelectedDoc] = useState(null);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [showSupport, setShowSupport] = useState(false);

  /* FILE UPLOAD */
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

  /* SEARCH */
  const filteredDocs = documents.filter((doc) =>
    doc.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f4f6f8] overflow-x-hidden">

      {/* NAVBAR */}
      <Navbar
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        sidebarOpen={sidebarOpen}
        setShowSupport={setShowSupport}
      />

      {/* SIDEBAR */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* MAIN CONTENT */}
      <div className="pt-28 px-6 pb-12">

        {/* CENTER CONTAINER */}
        <div className="max-w-6xl mx-auto flex flex-col gap-8">

          {/* PAGE TITLE */}
          <div className="text-center">

            <h1 className="text-3xl font-semibold text-gray-800">
              Enterprise Document Portal
            </h1>

            <p className="text-gray-500 mt-3 text-sm">
              Securely access, search, upload and manage company documents
            </p>

          </div>

          {/* SEARCH */}
          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          {/* UPLOAD */}
          <UploadZone onUpload={handleUpload} />

          {/* DOCUMENT TABLE */}
          <DocumentTable
            documents={filteredDocs}
            onSelect={setSelectedDoc}
          />

        </div>

      </div>

      {/* DOCUMENT VIEWER */}
      <DocumentViewer
        selectedDoc={selectedDoc}
        onClose={() => setSelectedDoc(null)}
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