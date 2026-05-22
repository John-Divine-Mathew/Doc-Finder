import { useRef, useState } from "react";

import {
  Search,
  Bell,
  Moon,
  Sun,
  FileText,
  UploadCloud,
  CircleHelp,
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
            h-24
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
              gap-4
            "
          >

            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-gradient-to-br
                from-green-500
                to-green-600
                text-white
                flex
                items-center
                justify-center
                font-bold
                text-xl
                shadow-lg
              "
            >
              H
            </div>

            <div>

              <h1
                className="
                  text-2xl
                  font-bold
                "
              >
                HIROTEC INDIA
              </h1>

              <p
                className={`
                  text-sm
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
              gap-4
            "
          >

            {/* DARK MODE */}

            <button
              onClick={() =>
                setDark(!dark)
              }
              className={`
                w-12
                h-12
                rounded-2xl
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
                <Sun size={18}/>
                :
                <Moon size={18}/>
              }

            </button>

            {/* SUPPORT */}

            <button
              onClick={() =>
                setSupportOpen(true)
              }
              className="
                h-12
                px-5
                rounded-2xl
                bg-gradient-to-r
                from-orange-400
                to-orange-500
                text-white
                font-medium
                shadow-lg
                hover:scale-[1.03]
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
                h-12
                px-5
                rounded-2xl
                font-medium
                transition-all
                hover:scale-[1.03]
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

                <LogOut size={17}/>
                Logout

              </div>

            </button>

          </div>

        </div>

      </header>

      {/* MAIN */}

      <main
        className="
          max-w-7xl
          mx-auto
          px-8
          py-12
        "
      >

        {/* HERO */}

        <section
          className={`
            rounded-[36px]
            p-14
            text-center
            border
            backdrop-blur-xl
            shadow-[0_20px_60px_rgba(15,23,42,0.08)]
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
              text-5xl
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
              max-w-3xl
              mx-auto
              mt-6
              text-lg
              ${
                dark
                ?
                "text-gray-400"
                :
                "text-gray-600"
              }
            `}
          >
            Securely manage company
            documents with modern
            enterprise technology.
          </p>

        </section>

        {/* SEARCH */}

        <section
          className="
            mt-10
            flex
            justify-center
          "
        >

          <div
            className={`
              w-full
              max-w-3xl
              h-16
              rounded-2xl
              border
              flex
              items-center
              px-5
              gap-4
              backdrop-blur-xl
              shadow-lg
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
              size={20}
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
              "
            />

            <Bell
              size={18}
              className="
                text-gray-400
              "
            />

          </div>

        </section>

        {/* DRAG DROP */}

        <section className="mt-12">

          <div
            onDrop={handleDrop}
            onDragOver={(e)=>
              e.preventDefault()
            }
            className={`
              rounded-[36px]
              border-2
              border-dashed
              p-16
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
                mb-6
              "
            >

              <div
                className="
                  w-24
                  h-24
                  rounded-full
                  bg-green-100
                  text-green-600
                  flex
                  items-center
                  justify-center
                "
              >

                <UploadCloud size={38}/>

              </div>

            </div>

            <h2
              className="
                text-3xl
                font-bold
              "
            >
              Drag & Drop Files
            </h2>

            <p
              className="
                mt-4
                text-gray-500
              "
            >
              Upload PDFs, Word,
              Excel and PPT files
            </p>

            {/* HIDDEN INPUT */}

            <input
              type="file"
              multiple
              ref={fileInputRef}
              className="hidden"
              onChange={(e)=>
                handleFiles(e.target.files)
              }
            />

            {/* BUTTON */}

            <button
              onClick={() =>
                fileInputRef.current.click()
              }
              className="
                mt-8
                h-12
                px-7
                rounded-2xl
                bg-gradient-to-r
                from-green-500
                to-green-600
                text-white
                font-medium
                shadow-lg
                hover:scale-[1.03]
                transition-all
              "
            >
              Browse Files
            </button>

          </div>

        </section>

        {/* DOCUMENTS */}

        <section className="mt-12">

          <div className="mb-7">

            <h2
              className="
                text-3xl
                font-bold
              "
            >
              Company Documents
            </h2>

            <p
              className="
                mt-2
                text-gray-500
              "
            >
              Secure enterprise file access
            </p>

          </div>

          {/* TABLE */}

          <div
            className={`
              rounded-[36px]
              overflow-hidden
              backdrop-blur-xl
              border
              shadow-[0_20px_60px_rgba(15,23,42,0.08)]
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
                px-8
                py-5
                text-sm
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
                  px-8
                  py-6
                  items-center
                  transition-all
                  hover:bg-white/40
                "
              >

                <div
                  className="
                    flex
                    items-center
                    gap-4
                  "
                >

                  <div
                    className="
                      w-12
                      h-12
                      rounded-2xl
                      bg-green-100
                      text-green-600
                      flex
                      items-center
                      justify-center
                    "
                  >

                    <FileText size={20}/>

                  </div>

                  <h3
                    className="
                      font-semibold
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
                      h-11
                      px-5
                      rounded-xl
                      bg-gradient-to-r
                      from-green-500
                      to-green-600
                      text-white
                      font-medium
                      shadow-md
                      hover:scale-[1.03]
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
              max-w-lg
              rounded-[36px]
              p-10
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

            <button
              onClick={() =>
                setSupportOpen(false)
              }
              className="
                absolute
                right-5
                top-5
                w-10
                h-10
                rounded-full
                hover:bg-gray-100
                flex
                items-center
                justify-center
              "
            >

              <X size={18}/>

            </button>

            <h2
              className="
                text-3xl
                font-bold
                mb-8
              "
            >
              Support Team
            </h2>

            <div className="space-y-5">

              <div>
                <p className="text-sm text-gray-400">
                  Developer
                </p>
                <h3 className="font-semibold">
                  JOHN DIVINE MATHEW J
                </h3>
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  Email
                </p>
                <h3 className="font-semibold">
                  mathewdivine95@gmail.com
                </h3>
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  Phone & WhatsApp
                </p>
                <h3 className="font-semibold">
                  +91 9626749641
                </h3>
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  Department
                </p>
                <h3 className="font-semibold">
                  Automation Team
                </h3>
              </div>

            </div>

          </div>

        </div>

      )}

    </div>

  );

};

export default Dashboard;