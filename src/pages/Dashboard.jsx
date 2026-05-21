import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import UploadZone from "../components/UploadZone";
import DocumentTable from "../components/DocumentTable";
import DocumentViewer from "../components/DocumentViewer";
import SupportModal from "../components/SupportModal";

import { mockDocuments } from "../data/mockDocuments";

const Dashboard = () => {

  const savedDocs =
    localStorage.getItem("documents");

  const [documents, setDocuments] =
    useState(
      savedDocs
        ? JSON.parse(savedDocs)
        : mockDocuments
    );

  const [search, setSearch] =
    useState("");

  const [selectedDoc, setSelectedDoc] =
    useState(null);

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const [showSupport, setShowSupport] =
    useState(false);

  useEffect(() => {

    localStorage.setItem(
      "documents",
      JSON.stringify(documents)
    );

  }, [documents]);

  /* UPLOAD */

  const handleUpload = (files) => {

    const newDocs = files.map(
      (file, index) => ({

        id: Date.now() + index,

        name: file.name,

        type: file.name
          .split(".")
          .pop()
          .toUpperCase(),

        size:
          (
            file.size /
            1024 /
            1024
          ).toFixed(2) + " MB",

        owner:"Current User",

        uploadDate:
          new Date().toLocaleDateString(),

        url: URL.createObjectURL(file),

      })
    );

    setDocuments((prev) => [
      ...newDocs,
      ...prev,
    ]);
  };

  /* SEARCH */

  const filteredDocs =
    documents.filter((doc) =>
      doc.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-[#f4f7fb]">

      {/* NAVBAR */}
      <Navbar
        toggleSidebar={() =>
          setSidebarOpen(!sidebarOpen)
        }
      />

      {/* SIDEBAR */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        setShowSupport={setShowSupport}
      />

      {/* MAIN */}
      <main className="pt-28 pb-12 px-5">

        <div className="max-w-6xl mx-auto">

          {/* HERO */}
          <section
            className="
              glass
              soft-shadow
              premium-border
              rounded-[30px]
              px-8
              py-10
              text-center
            "
          >

            <div
              className="
                inline-flex
                items-center
                px-4
                py-2
                rounded-full
                bg-blue-50
                text-blue-700
                text-sm
                font-medium
                mb-5
              "
            >
              Enterprise Management Platform
            </div>

            <h1
              className="
                text-3xl
                md:text-5xl
                font-semibold
                tracking-tight
                text-gray-800
                leading-tight
              "
            >
              HIROTEC
              <br />
              Document Portal
            </h1>

            <p
              className="
                text-gray-500
                mt-5
                max-w-2xl
                mx-auto
                leading-relaxed
              "
            >
              Professional enterprise
              document management system
              for secure document handling.
            </p>

          </section>

          {/* SEARCH */}
          <div className="mt-8 flex justify-center">

            <div className="w-full max-w-4xl">

              <SearchBar
                search={search}
                setSearch={setSearch}
              />

            </div>

          </div>

          {/* UPLOAD */}
          <div className="mt-8 flex justify-center">

            <div className="w-full max-w-4xl">

              <UploadZone
                onUpload={handleUpload}
              />

            </div>

          </div>

          {/* TABLE */}
          <div className="mt-8">

            <DocumentTable
              documents={filteredDocs}
              onSelect={setSelectedDoc}
            />

          </div>

        </div>

      </main>

      {/* VIEWER */}
      <DocumentViewer
        selectedDoc={selectedDoc}
        onClose={() =>
          setSelectedDoc(null)
        }
      />

      {/* SUPPORT */}
      <SupportModal
        showSupport={showSupport}
        setShowSupport={setShowSupport}
      />

    </div>
  );
};

export default Dashboard;