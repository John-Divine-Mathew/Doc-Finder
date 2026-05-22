import { useState } from "react";

import {
  Search,
  Bell,
  Moon,
  CircleHelp,
  LogOut,
  FileText,
  UploadCloud,
  X,
} from "lucide-react";

const Dashboard = () => {

  const [dark,setDark] = useState(false);

  const [supportOpen,setSupportOpen] =
    useState(false);

  const documents = [

    {
      name:"Manufacturing_Report.pdf",
      type:"PDF",
      size:"2.4 MB",
    },

    {
      name:"Automation_Process.docx",
      type:"WORD",
      size:"1.8 MB",
    },

    {
      name:"Employee_Data.xlsx",
      type:"EXCEL",
      size:"1.2 MB",
    },

    {
      name:"Project_Presentation.pptx",
      type:"PPT",
      size:"4.8 MB",
    },

  ];

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
          "bg-[#f4f7fb] text-[#111827]"
        }
      `}
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
            "bg-white/80 border-gray-200"
          }
        `}
      >
        <div className="bg-animation"></div>

        <div
          className="
            max-w-7xl
            mx-auto
            px-6
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

            {/* LOGO */}

            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-blue-600
                text-white
                flex
                items-center
                justify-center
                font-bold
                text-lg
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
                ${
                  dark
                  ?
                  "bg-white/10 hover:bg-white/20"
                  :
                  "bg-white border border-gray-200 hover:bg-gray-50"
                }
              `}
            >

              <Moon size={18}/>

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
                bg-blue-600
                text-white
                font-medium
                hover:scale-[1.02]
                transition-all
              "
            >
              Support
            </button>

            {/* LOGOUT */}

          <button
  onClick={() => {

    localStorage.clear();

    alert("Logged out successfully");

    window.location.reload();

  }}
  className={`
    h-12
    px-5
    rounded-2xl
    font-medium
    transition-all
    ${
      dark
      ?
      "bg-red-500/20 hover:bg-red-500/30"
      :
      "bg-red-50 text-red-600 hover:bg-red-100"
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
          px-6
          py-10
        "
      >

        {/* HERO */}

        <section
          className={`
            rounded-[32px]
            p-12
            text-center
            border
            shadow-[0_20px_60px_rgba(15,23,42,0.08)]
            ${
              dark
              ?
              "bg-[#111827] border-white/10"
              :
              "bg-white border-gray-200"
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
            Enterprise
            <br />
            Document Management
          </h1>

          <p
            className={`
              max-w-3xl
              mx-auto
              mt-6
              text-lg
              leading-relaxed
              ${
                dark
                ?
                "text-gray-400"
                :
                "text-gray-500"
              }
            `}
          >
            Securely upload, manage,
            search and preview enterprise
            company documents in one
            centralized platform for
            HIROTEC INDIA employees.
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
              shadow-lg
              ${
                dark
                ?
                "bg-[#111827] border-white/10"
                :
                "bg-white border-gray-200"
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
              placeholder="Search company documents..."
              className={`
                flex-1
                bg-transparent
                outline-none
                text-[15px]
                ${
                  dark
                  ?
                  "placeholder:text-gray-500"
                  :
                  "placeholder:text-gray-400"
                }
              `}
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
              max-w-4xl
              rounded-[28px]
              border-2
              border-dashed
              p-14
              text-center
              transition-all
              hover:scale-[1.01]
              ${
                dark
                ?
                "bg-[#111827] border-white/10"
                :
                "bg-white border-blue-200"
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
                  bg-blue-100
                  text-blue-600
                  flex
                  items-center
                  justify-center
                "
              >

                <UploadCloud size={34}/>

              </div>

            </div>

            <h2
              className="
                text-2xl
                font-semibold
              "
            >
              Drag & Drop Documents
            </h2>

            <p
              className={`
                mt-3
                ${
                  dark
                  ?
                  "text-gray-400"
                  :
                  "text-gray-500"
                }
              `}
            >
              Upload PDF, Word, Excel,
              PPT and enterprise files
            </p>

            <button
              className="
                mt-7
                h-12
                px-6
                rounded-2xl
                bg-blue-600
                text-white
                font-medium
                hover:scale-[1.02]
                transition-all
              "
            >
              Browse Files
            </button>

          </div>

        </section>

        {/* DOCUMENTS */}

        <section className="mt-12">

          <div
            className="
              flex
              items-center
              justify-between
              mb-6
            "
          >

            <div>

              <h2
                className="
                  text-3xl
                  font-bold
                "
              >
                Company Documents
              </h2>

              <p
                className={`
                  mt-2
                  ${
                    dark
                    ?
                    "text-gray-400"
                    :
                    "text-gray-500"
                  }
                `}
              >
                Enterprise document access
                system
              </p>

            </div>

          </div>

          {/* DOCUMENT TABLE */}

          <div
            className={`
              rounded-[28px]
              overflow-hidden
              border
              shadow-[0_20px_60px_rgba(15,23,42,0.08)]
              ${
                dark
                ?
                "bg-[#111827] border-white/10"
                :
                "bg-white border-gray-200"
              }
            `}
          >

            {/* HEAD */}

            <div
              className={`
                grid
                grid-cols-4
                px-8
                py-5
                text-sm
                font-semibold
                border-b
                ${
                  dark
                  ?
                  "border-white/10 text-gray-300"
                  :
                  "border-gray-200 text-gray-500"
                }
              `}
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
                className={`
                  grid
                  grid-cols-4
                  px-8
                  py-6
                  items-center
                  transition-all
                  hover:bg-blue-50/40
                  ${
                    dark
                    ?
                    "border-white/5 hover:bg-white/5"
                    :
                    "border-gray-100"
                  }
                `}
              >

                {/* NAME */}

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
                      bg-blue-100
                      text-blue-600
                      flex
                      items-center
                      justify-center
                    "
                  >

                    <FileText size={20}/>

                  </div>

                  <div>

                    <h3
                      className="
                        font-semibold
                      "
                    >
                      {doc.name}
                    </h3>

                  </div>

                </div>

                <div>{doc.type}</div>

                <div>{doc.size}</div>

                <div>

                  <button
                    className="
                      h-11
                      px-5
                      rounded-xl
                      bg-blue-600
                      text-white
                      font-medium
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
              max-w-lg
              rounded-[32px]
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
                mb-6
              "
            >
              Support Details
            </h2>

            <div className="space-y-4">

              <div>

                <p className="text-sm text-gray-400">
                  Developer
                </p>

                <h3 className="font-semibold mt-1">
                  JOHN DIVINE MATHEW J
                </h3>

              </div>

              <div>

                <p className="text-sm text-gray-400">
                  Email
                </p>

                <h3 className="font-semibold mt-1">
                  mathewdivine95@gmail.com
                </h3>

              </div>

              <div>

                <p className="text-sm text-gray-400">
                  Phone & WhatsApp
                </p>

                <h3 className="font-semibold mt-1">
                  +91 9626749641
                </h3>

              </div>

              <div>

                <p className="text-sm text-gray-400">
                  Department
                </p>

                <h3 className="font-semibold mt-1">
                  Automation Team
                </h3>

              </div>

              <div>

                <p className="text-sm text-gray-400">
                  Working Hours
                </p>

                <h3 className="font-semibold mt-1">
                  9:00 AM - 6:00 PM
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