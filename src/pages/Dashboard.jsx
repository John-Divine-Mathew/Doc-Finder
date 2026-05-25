import { useRef, useState } from "react";

import * as pdfjsLib from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min?url";

import mammoth from "mammoth";

import {
  Search,
  Bell,
  Moon,
  Sun,
  FileText,
  UploadCloud,
  LogOut,
  X,
} from "lucide-react";

pdfjsLib.GlobalWorkerOptions.workerSrc =
  pdfWorker;

const Dashboard = () => {

  // STATES

  const [dark, setDark] =
    useState(false);

  const [supportOpen, setSupportOpen] =
    useState(false);

  const [search, setSearch] =
    useState("");

  const [documents, setDocuments] =
    useState([]);

  const [filteredDocs, setFilteredDocs] =
    useState([]);

  const [selectedFile, setSelectedFile] =
    useState(null);

  const [previewOpen, setPreviewOpen] =
    useState(false);

  const fileInputRef = useRef();

  // READ FILE CONTENT

  const readFileContent = async(file) => {

    const extension =
      file.name
        .split(".")
        .pop()
        .toLowerCase();

    try {

      // PDF

      if(extension === "pdf") {

        const arrayBuffer =
          await file.arrayBuffer();

        const pdf =
          await pdfjsLib.getDocument({
            data:arrayBuffer,
          }).promise;

        let text = "";

        for(
          let i = 1;
          i <= pdf.numPages;
          i++
        ){

          const page =
            await pdf.getPage(i);

          const content =
            await page.getTextContent();

          const strings =
            content.items.map(
              (item)=>item.str
            );

          text += strings.join(" ");

        }

        return text;

      }

      // TXT

      if(extension === "txt") {

        return await file.text();

      }

      // DOCX

      if(extension === "docx") {

        const arrayBuffer =
          await file.arrayBuffer();

        const result =
          await mammoth.extractRawText({
            arrayBuffer,
          });

        return result.value;

      }

      return "";

    }

    catch(err){

      console.log(err);

      return "";

    }

  };

  // IMPORT FILES

  const handleFiles = async(files) => {

    const processedFiles = [];

    for(
      const file of Array.from(files)
    ){

      const content =
        await readFileContent(file);

      processedFiles.push({

        name:file.name,

        type:file.name
          .split(".")
          .pop()
          .toUpperCase(),

        size:`${(
          file.size /
          1024 /
          1024
        ).toFixed(2)} MB`,

        url:URL.createObjectURL(file),

        content,

      });

    }

    setDocuments((prev)=>[
      ...processedFiles,
      ...prev,
    ]);

    setFilteredDocs((prev)=>[
      ...processedFiles,
      ...prev,
    ]);

  };

  // SEARCH

  const handleSearch = (value) => {

    setSearch(value);

    if(value.trim() === ""){

      setFilteredDocs(documents);

      return;

    }

    const filtered =
      documents.filter((doc)=>{

        const keyword =
          value.toLowerCase();

        return (

          doc.name
            .toLowerCase()
            .includes(keyword)

          ||

          doc.content
            ?.toLowerCase()
            .includes(keyword)

        );

      });

    setFilteredDocs(filtered);

  };

  // DRAG DROP

  const handleDrop = (e) => {

    e.preventDefault();

    handleFiles(
      e.dataTransfer.files
    );

  };

  // OPEN FILE

  const openFile = (doc) => {

    setSelectedFile(doc);

    setPreviewOpen(true);

  };

  return (

    <div
      className={`
        min-h-screen
        transition-all
        duration-300
        ${
          dark
          ?
          "bg-[#0f172a] text-white"
          :
          "text-gray-800"
        }
      `}
      style={{
        background:dark
          ?
          "#0f172a"
          :
          "linear-gradient(90deg,#eefbf3 0%,#fff6ec 100%)",
      }}
    >

      {/* NAVBAR */}

      <header
        className={`
          sticky
          top-0
          z-50
          backdrop-blur-xl
          border-b
          ${
            dark
            ?
            "bg-[#111827]/90 border-white/10"
            :
            "bg-white/70 border-white/40"
          }
        `}
      >

        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            h-20
            flex
            items-center
            justify-between
          "
        >

          {/* LEFT */}

          <div
            className="
              flex
              items-center
              gap-3
            "
          >

            <div
              className="
                w-11
                h-11
                rounded-xl
                bg-gradient-to-br
                from-green-500
                to-green-600
                text-white
                flex
                items-center
                justify-center
                font-bold
              "
            >
              H
            </div>

            <div>

              <h1
                className="
                  text-base
                  font-semibold
                "
              >
                HIROTEC INDIA
              </h1>

              <p
                className={`
                  text-xs
                  ${
                    dark
                    ?
                    "text-gray-400"
                    :
                    "text-gray-500"
                  }
                `}
              >
                Enterprise Document Portal
              </p>

            </div>

          </div>

          {/* RIGHT */}

          <div
            className="
              flex
              items-center
              gap-3
            "
          >

            {/* IMPORT */}

            <button
              onClick={() =>
                fileInputRef.current.click()
              }
              className="
                h-10
                px-5
                rounded-xl
                bg-green-500
                text-white
                text-sm
                font-medium
                flex
                items-center
                gap-2
              "
            >

              <UploadCloud size={16}/>

              Import Drive

            </button>

            {/* DARK */}

            <button
              onClick={() =>
                setDark(!dark)
              }
              className="
                w-10
                h-10
                rounded-xl
                bg-white/10
                flex
                items-center
                justify-center
              "
            >

              {
                dark
                ?
                <Sun size={16}/>
                :
                <Moon size={16}/>
              }

            </button>

            {/* SUPPORT */}

            <button
              onClick={() =>
                setSupportOpen(true)
              }
              className="
                h-10
                px-5
                rounded-xl
                bg-orange-500
                text-white
                text-sm
              "
            >
              Support
            </button>

            {/* LOGOUT */}

            <button
              onClick={() =>
                window.location.reload()
              }
              className="
                h-10
                px-5
                rounded-xl
                bg-red-500/20
                text-sm
              "
            >

              <div
                className="
                  flex
                  items-center
                  gap-2
                "
              >

                <LogOut size={15}/>
                Logout

              </div>

            </button>

          </div>

        </div>

      </header>

      {/* MAIN */}

      <main
        className="
          max-w-6xl
          mx-auto
          px-6
          py-10
        "
      >

        {/* SEARCH */}

        <section
          className="
            flex
            justify-center
          "
        >

          <div
            className={`
              w-full
              max-w-3xl
              h-14
              rounded-2xl
              px-5
              flex
              items-center
              gap-3
              border
              ${
                dark
                ?
                "bg-[#111827] border-white/10"
                :
                "bg-white"
              }
            `}
          >

            <Search size={18}/>

            <input
              type="text"
              placeholder="Search file name or document content..."
              value={search}
              onChange={(e)=>
                handleSearch(
                  e.target.value
                )
              }
              className="
                flex-1
                bg-transparent
                outline-none
              "
            />

            <Bell size={17}/>

          </div>

        </section>

        {/* IMPORT */}

        <section className="mt-10">

          <div
            onDrop={handleDrop}
            onDragOver={(e)=>
              e.preventDefault()
            }
            className={`
              rounded-[30px]
              border-2
              border-dashed
              p-12
              text-center
              ${
                dark
                ?
                "bg-[#111827] border-white/10"
                :
                "bg-white/70 border-green-200"
              }
            `}
          >

            <UploadCloud
              size={40}
              className="
                mx-auto
                text-green-500
              "
            />

            <h2
              className="
                text-2xl
                font-semibold
                mt-5
              "
            >
              Import Entire Drive
            </h2>

            <p
              className="
                mt-3
                text-sm
                text-gray-500
              "
            >
              PDF, DOCX, TXT, Images
            </p>

            <input
              type="file"
              multiple
              webkitdirectory="true"
              directory=""
              ref={fileInputRef}
              className="hidden"
              onChange={(e)=>
                handleFiles(
                  e.target.files
                )
              }
            />

            <button
              onClick={() =>
                fileInputRef.current.click()
              }
              className="
                mt-6
                h-11
                px-6
                rounded-xl
                bg-green-500
                text-white
              "
            >
              Browse Drive
            </button>

          </div>

        </section>

        {/* DOCUMENTS */}

        <section className="mt-10">

          <div
            className={`
              rounded-[28px]
              overflow-hidden
              border
              ${
                dark
                ?
                "bg-[#111827] border-white/10"
                :
                "bg-white/70 border-white/50"
              }
            `}
          >

            <div
              className="
                grid
                grid-cols-4
                px-6
                py-4
                border-b
                text-xs
                font-semibold
              "
            >

              <div>File Name</div>
              <div>Type</div>
              <div>Size</div>
              <div>Action</div>

            </div>

            {
              filteredDocs.map((doc,index)=>(

                <div
                  key={index}
                  className="
                    grid
                    grid-cols-4
                    items-center
                    px-6
                    py-5
                    border-b
                  "
                >

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >

                    <FileText size={18}/>

                    <h3
                      className="
                        text-sm
                        font-medium
                      "
                    >
                      {doc.name}
                    </h3>

                  </div>

                  <div>{doc.type}</div>

                  <div>{doc.size}</div>

                  <div>

                    <button
                      onClick={() =>
                        openFile(doc)
                      }
                      className="
                        h-10
                        px-5
                        rounded-xl
                        bg-green-500
                        text-white
                        text-sm
                      "
                    >
                      Preview
                    </button>

                  </div>

                </div>

              ))
            }

          </div>

        </section>

      </main>

      {/* PREVIEW */}

      {
        previewOpen &&
        selectedFile && (

          <div
            className="
              fixed
              inset-0
              bg-black/50
              flex
              items-center
              justify-center
              z-50
              p-5
            "
          >

            <div
              className="
                w-full
                max-w-5xl
                h-[85vh]
                bg-white
                rounded-[30px]
                overflow-hidden
                flex
                flex-col
              "
            >

              <div
                className="
                  h-16
                  border-b
                  px-6
                  flex
                  items-center
                  justify-between
                "
              >

                <h2
                  className="
                    text-sm
                    font-semibold
                  "
                >
                  {selectedFile.name}
                </h2>

                <div
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >

                  <a
                    href={selectedFile.url}
                    download={selectedFile.name}
                    className="
                      h-10
                      px-5
                      rounded-xl
                      bg-green-500
                      text-white
                      text-sm
                      flex
                      items-center
                    "
                  >
                    Download
                  </a>

                  <button
                    onClick={() =>
                      setPreviewOpen(false)
                    }
                    className="
                      w-10
                      h-10
                      rounded-xl
                      border
                      flex
                      items-center
                      justify-center
                    "
                  >

                    <X size={16}/>

                  </button>

                </div>

              </div>

              <div
                className="
                  flex-1
                  bg-gray-100
                  p-5
                  overflow-auto
                "
              >

                {
                  (
                    selectedFile.type === "PNG" ||
                    selectedFile.type === "JPG" ||
                    selectedFile.type === "JPEG"
                  ) && (

                    <img
                      src={selectedFile.url}
                      alt=""
                      className="
                        max-h-full
                        mx-auto
                        rounded-2xl
                      "
                    />

                  )
                }

                {
                  selectedFile.type === "PDF" && (

                    <iframe
                      src={selectedFile.url}
                      title="preview"
                      className="
                        w-full
                        h-full
                        rounded-2xl
                        bg-white
                      "
                    />

                  )
                }

                {
                  (
                    selectedFile.type === "TXT" ||
                    selectedFile.type === "DOCX"
                  ) && (

                    <div
                      className="
                        bg-white
                        rounded-2xl
                        p-6
                        whitespace-pre-wrap
                        text-sm
                      "
                    >
                      {selectedFile.content}
                    </div>

                  )
                }

              </div>

            </div>

          </div>

        )
      }

    </div>

  );

};

export default Dashboard;