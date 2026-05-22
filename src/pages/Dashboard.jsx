import { useRef, useState } from "react";

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

const Dashboard = () => {

  const [dark,setDark] = useState(false);

  const [supportOpen,setSupportOpen] =
    useState(false);

  const [documents,setDocuments] =
    useState([
      {
        name:"Manufacturing_Report.pdf",
        type:"PDF",
        size:"2.4 MB",
        url:"#",
      },
      {
        name:"Automation_Process.docx",
        type:"WORD",
        size:"1.8 MB",
        url:"#",
      },
    ]);

  const fileInputRef = useRef(null);

  // FILE UPLOAD

  const handleFiles = (files) => {

    const uploadedFiles =
      Array.from(files).map((file)=>({

        name:file.name,

        type:file.name
          .split(".")
          .pop()
          .toUpperCase(),

        size:`${(file.size / 1024 / 1024)
          .toFixed(2)} MB`,

        url:URL.createObjectURL(file),

      }));

    setDocuments((prev)=>[
      ...uploadedFiles,
      ...prev,
    ]);

  };

  // DRAG DROP

  const handleDrop = (e) => {

    e.preventDefault();

    handleFiles(e.dataTransfer.files);

  };

  // OPEN FILE

  const openFile = (doc) => {

    if(doc.url !== "#"){

      window.open(doc.url,"_blank");

    }else{

      alert(
        "Demo file. Upload a real file to open preview."
      );

    }

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
          ""
        }
      `}
      style={{
        background: dark
          ? "#0f172a"
          : "linear-gradient(90deg,#eefbf3 0%,#fff6ec 100%)",
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
            px-8
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
                text-base
                shadow-md
              "
            >
              H
            </div>

            <div>

              <h1
                className="
                  text-lg
                  font-semibold
                  tracking-tight
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

            {/* DARK MODE */}

            <button
              onClick={() =>
                setDark(!dark)
              }
              className={`
                w-10
                h-10
                rounded-xl
                flex
                items-center
                justify-center
                transition-all
                hover:scale-105
                ${
                  dark
                  ?
                  "bg-white/10 hover:bg-white/20"
                  :
                  "bg-white border border-white/60 shadow-sm"
                }
              `}
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
                px-4
                rounded-xl
                bg-gradient-to-r
                from-orange-400
                to-orange-500
                text-white
                text-sm
                font-medium
                shadow-md
                hover:scale-[1.02]
                transition-all
              "
            >
              Support
            </button>

            {/* LOGOUT */}

            <button
              onClick={() =>
                window.location.reload()
              }
              className={`
                h-10
                px-4
                rounded-xl
                text-sm
                font-medium
                transition-all
                hover:scale-[1.02]
                ${
                  dark
                  ?
                  "bg-red-500/20 hover:bg-red-500/30"
                  :
                  "bg-white border border-white/50 shadow-sm"
                }
              `}
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

        {/* HERO */}

        <section
          className={`
            rounded-[28px]
            p-10
            text-center
            border
            backdrop-blur-xl
            shadow-[0_20px_60px_rgba(15,23,42,0.06)]
            ${
              dark
              ?
              "bg-[#111827] border-white/10"
              :
              "bg-white/70 border-white/50"
            }
          `}
        >

          <h1
            className="
              text-4xl
              font-bold
              leading-tight
            "
          >
            Smart Enterprise
            <br />
            Document Management
          </h1>

          <p
            className={`
              max-w-2xl
              mx-auto
              mt-4
              text-sm
              leading-7
              ${
                dark
                ?
                "text-gray-400"
                :
                "text-gray-600"
              }
            `}
          >
            Securely manage company documents
            with modern enterprise technology.
          </p>

        </section>

        {/* SEARCH */}

        <section
          className="
            mt-8
            flex
            justify-center
          "
        >

          <div
            className={`
              w-full
              max-w-2xl
              h-14
              rounded-xl
              border
              flex
              items-center
              px-4
              gap-3
              backdrop-blur-xl
              shadow-md
              ${
                dark
                ?
                "bg-[#111827] border-white/10"
                :
                "bg-white/80 border-white/50"
              }
            `}
          >

            <Search
              size={18}
              className="
                text-gray-400
              "
            />

            <input
              type="text"
              placeholder="Search enterprise documents..."
              className="
                flex-1
                bg-transparent
                outline-none
                text-sm
              "
            />

            <Bell
              size={16}
              className="
                text-gray-400
              "
            />

          </div>

        </section>

        {/* DRAG DROP */}

        <section className="mt-10">

          <div
            onDrop={handleDrop}
            onDragOver={(e)=>
              e.preventDefault()
            }
            className={`
              rounded-[28px]
              border-2
              border-dashed
              p-12
              text-center
              backdrop-blur-xl
              hover:scale-[1.01]
              transition-all
              ${
                dark
                ?
                "bg-[#111827] border-white/10"
                :
                "bg-white/70 border-green-200"
              }
            `}
          >

            <div
              className="
                flex
                justify-center
                mb-5
              "
            >

              <div
                className="
                  w-20
                  h-20
                  rounded-full
                  bg-green-100
                  text-green-600
                  flex
                  items-center
                  justify-center
                "
              >

                <UploadCloud size={32}/>

              </div>

            </div>

            <h2
              className="
                text-2xl
                font-semibold
              "
            >
              Drag & Drop Files
            </h2>

            <p
              className="
                mt-3
                text-sm
                text-gray-500
              "
            >
              Upload PDFs, Word,
              Excel and PPT files
            </p>

            <input
              type="file"
              multiple
              ref={fileInputRef}
              className="hidden"
              onChange={(e)=>
                handleFiles(e.target.files)
              }
            />

            <button
              onClick={() =>
                fileInputRef.current.click()
              }
              className="
                mt-6
                h-10
                px-6
                rounded-xl
                bg-gradient-to-r
                from-green-500
                to-green-600
                text-white
                text-sm
                font-medium
                shadow-md
                hover:scale-[1.02]
                transition-all
              "
            >
              Browse Files
            </button>

          </div>

        </section>

        {/* DOCUMENTS */}

        <section className="mt-10">

          <div className="mb-5">

            <h2
              className="
                text-2xl
                font-semibold
              "
            >
              Company Documents
            </h2>

            <p
              className="
                mt-1
                text-sm
                text-gray-500
              "
            >
              Secure enterprise file access
            </p>

          </div>

          {/* TABLE */}

          <div
            className={`
              rounded-[28px]
              overflow-hidden
              backdrop-blur-xl
              border
              shadow-[0_20px_60px_rgba(15,23,42,0.06)]
              ${
                dark
                ?
                "bg-[#111827] border-white/10"
                :
                "bg-white/70 border-white/50"
              }
            `}
          >

            {/* HEAD */}

            <div
              className="
                grid
                grid-cols-4
                px-6
                py-4
                text-xs
                font-semibold
                border-b
                text-gray-500
              "
            >

              <div>File Name</div>
              <div>Type</div>
              <div>Size</div>
              <div>Action</div>

            </div>

            {/* ROWS */}

            {documents.map((doc,index)=>(

              <div
                key={index}
                className="
                  grid
                  grid-cols-4
                  px-6
                  py-5
                  items-center
                  transition-all
                  hover:bg-white/40
                "
              >

                <div
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >

                  <div
                    className="
                      w-10
                      h-10
                      rounded-xl
                      bg-green-100
                      text-green-600
                      flex
                      items-center
                      justify-center
                    "
                  >

                    <FileText size={18}/>

                  </div>

                  <h3
                    className="
                      font-medium
                      text-sm
                    "
                  >
                    {doc.name}
                  </h3>

                </div>

                <div className="text-sm">
                  {doc.type}
                </div>

                <div className="text-sm">
                  {doc.size}
                </div>

                <div>

                  <button
                    onClick={() =>
                      openFile(doc)
                    }
                    className="
                      h-9
                      px-4
                      rounded-lg
                      bg-gradient-to-r
                      from-green-500
                      to-green-600
                      text-white
                      text-sm
                      font-medium
                      shadow-sm
                      hover:scale-[1.02]
                      transition-all
                    "
                  >
                    Open File
                  </button>

                </div>

              </div>

            ))}

          </div>

        </section>

      </main>

      {/* SUPPORT MODAL */}

      {supportOpen && (

        <div
          className="
            fixed
            inset-0
            bg-black/40
            backdrop-blur-sm
            flex
            items-center
            justify-center
            z-50
            p-5
          "
        >

          <div
            className={`
              w-full
              max-w-md
              rounded-[28px]
              p-8
              relative
              shadow-[0_20px_60px_rgba(15,23,42,0.15)]
              ${
                dark
                ?
                "bg-[#111827]"
                :
                "bg-white"
              }
            `}
          >

            {/* CLOSE */}

            <button
              onClick={() =>
                setSupportOpen(false)
              }
              className="
                absolute
                right-4
                top-4
                w-8
                h-8
                rounded-full
                hover:bg-gray-100
                flex
                items-center
                justify-center
              "
            >

              <X size={16}/>

            </button>

            <h2
              className="
                text-2xl
                font-semibold
                mb-2
              "
            >
              Support Details
            </h2>

            <p
              className="
                text-sm
                text-gray-500
                mb-6
                leading-6
              "
            >
              Contact the HIROTEC Support Team
              for technical assistance.
            </p>

            <div className="space-y-5">

              <div>

                <p className="text-xs text-gray-400">
                  Developer
                </p>

                <h3 className="text-sm font-medium mt-1">
                  JOHN DIVINE MATHEW J
                </h3>

              </div>

              <div>

                <p className="text-xs text-gray-400">
                  Email
                </p>

                <h3 className="text-sm font-medium mt-1">
                  mathewdivine95@gmail.com
                </h3>

              </div>

              <div>

                <p className="text-xs text-gray-400">
                  Phone & WhatsApp
                </p>

                <h3 className="text-sm font-medium mt-1">
                  +91 9626749641
                </h3>

              </div>

              <div>

                <p className="text-xs text-gray-400">
                  Department
                </p>

                <h3 className="text-sm font-medium mt-1">
                  Automation Team
                </h3>

              </div>

              <div>

                <p className="text-xs text-gray-400">
                  Working Hours
                </p>

                <h3 className="text-sm font-medium mt-1 leading-6">
                  9:00 AM - 6:00 PM from Monday to Friday
                  <br />
                </h3>

              </div>

            </div>

            {/* CLOSE BUTTON */}

            <button
              onClick={() =>
                setSupportOpen(false)
              }
              className="
                mt-8
                w-full
                h-10
                rounded-xl
                bg-gradient-to-r
                from-orange-400
                to-orange-500
                text-white
                text-sm
                font-medium
                shadow-md
                hover:scale-[1.01]
                transition-all
              "
            >
              Close
            </button>

          </div>

        </div>

      )}

    </div>

  );

};

export default Dashboard;