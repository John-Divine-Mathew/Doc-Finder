import {
  Menu,
  Search,
  Bell,
  FileText,
  LayoutDashboard,
  FolderOpen,
  Settings,
  CircleHelp,
  LogOut,
} from "lucide-react";

import { useState } from "react";

const Dashboard = () => {

  const [open,setOpen] =
    useState(true);

  const documents = [

    {
      name:"Manufacturing_Report.pdf",
      size:"2.4 MB",
      type:"PDF",
    },

    {
      name:"Employee_Data.xlsx",
      size:"1.2 MB",
      type:"Excel",
    },

    {
      name:"Automation_Process.docx",
      size:"1.9 MB",
      type:"Word",
    },

    {
      name:"Project_Presentation.pptx",
      size:"4.8 MB",
      type:"PPT",
    },

  ];

  const menus = [

    {
      icon:<LayoutDashboard size={18}/>,
      name:"Dashboard",
    },

    {
      icon:<FolderOpen size={18}/>,
      name:"Documents",
    },

    {
      icon:<FileText size={18}/>,
      name:"Reports",
    },

    {
      icon:<Settings size={18}/>,
      name:"Settings",
    },

  ];

  return (

    <div className="flex min-h-screen">

      {/* SIDEBAR */}

      <aside
        className={`
          bg-white
          border-r
          border-gray-200
          h-screen
          fixed
          left-0
          top-0
          z-50
          transition-all
          duration-300
          flex
          flex-col
          justify-between
          ${
            open
            ?
            "w-[270px]"
            :
            "w-[88px]"
          }
        `}
      >

        {/* TOP */}

        <div>

          {/* LOGO */}

          <div
            className="
              h-24
              px-6
              border-b
              border-gray-100
              flex
              items-center
              justify-between
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
                  bg-blue-600
                  text-white
                  flex
                  items-center
                  justify-center
                  font-semibold
                  text-lg
                "
              >
                H
              </div>

              {open && (

                <div>

                  <h1
                    className="
                      text-lg
                      font-semibold
                    "
                  >
                    Doc-Finder
                  </h1>

                  <p
                    className="
                      text-sm
                      text-gray-400
                    "
                  >
                    HIROTEC Enterprise
                  </p>

                </div>

              )}

            </div>

            <button
              onClick={() =>
                setOpen(!open)
              }
              className="
                w-10
                h-10
                rounded-xl
                hover:bg-gray-100
                flex
                items-center
                justify-center
              "
            >

              <Menu size={18}/>

            </button>

          </div>

          {/* MENUS */}

          <div className="p-4 space-y-2">

            {menus.map((item,index)=>(

              <button
                key={index}
                className={`
                  w-full
                  h-14
                  px-4
                  rounded-2xl
                  flex
                  items-center
                  gap-4
                  transition-all
                  ${
                    index===0
                    ?
                    "bg-blue-600 text-white"
                    :
                    "hover:bg-gray-100 text-gray-600"
                  }
                `}
              >

                {item.icon}

                {open && item.name}

              </button>

            ))}

          </div>

        </div>

        {/* SUPPORT */}

        <div
          className="
            p-4
            border-t
            border-gray-100
          "
        >

          {/* SUPPORT CARD */}

          {open && (

            <div
              className="
                card
                p-5
                mb-4
                bg-blue-50
                border-blue-100
              "
            >

              <div
                className="
                  flex
                  items-center
                  gap-3
                  mb-4
                "
              >

                <div
                  className="
                    w-12
                    h-12
                    rounded-2xl
                    bg-blue-600
                    text-white
                    flex
                    items-center
                    justify-center
                  "
                >

                  <CircleHelp size={20}/>

                </div>

                <div>

                  <h3
                    className="
                      font-semibold
                    "
                  >
                    Support
                  </h3>

                  <p
                    className="
                      text-sm
                      text-gray-500
                    "
                  >
                    Automation Team
                  </p>

                </div>

              </div>

              <div className="space-y-2 text-sm">

                <p>
                  <span className="font-medium">
                    Developer:
                  </span>
                  {" "}
                  JOHN DIVINE MATHEW
                </p>

                <p>
                  <span className="font-medium">
                    Email:
                  </span>
                  {" "}
                  mathewdivine95@gmail.com
                </p>

                <p>
                  <span className="font-medium">
                    Hours:
                  </span>
                  {" "}
                  Mon - Fri
                </p>

              </div>

            </div>

          )}

          {/* LOGOUT */}

          <button
            className="
              w-full
              h-14
              rounded-2xl
              border
              border-gray-200
              flex
              items-center
              justify-center
              gap-3
              hover:bg-gray-50
            "
          >

            <LogOut size={18}/>

            {open && "Logout"}

          </button>

        </div>

      </aside>

      {/* MAIN */}

      <main
        className={`
          flex-1
          transition-all
          duration-300
          ${
            open
            ?
            "ml-[270px]"
            :
            "ml-[88px]"
          }
        `}
      >

        {/* NAVBAR */}

        <header
          className="
            h-24
            px-8
            bg-white/80
            backdrop-blur-xl
            border-b
            border-gray-200
            flex
            items-center
            justify-between
            sticky
            top-0
            z-40
          "
        >

          {/* SEARCH */}

          <div
            className="
              flex
              items-center
              gap-4
              w-full
              max-w-[420px]
            "
          >

            <div
              className="
                relative
                flex-1
              "
            >

              <Search
                size={18}
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-gray-400
                "
              />

              <input
                type="text"
                placeholder="Search documents..."
                className="
                  input
                  pl-11
                "
              />

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

            <button
              className="
                w-12
                h-12
                rounded-2xl
                border
                border-gray-200
                flex
                items-center
                justify-center
                hover:bg-gray-50
              "
            >

              <Bell size={18}/>

            </button>

            <button
              className="
                primary-btn
              "
            >
              Upload
            </button>

          </div>

        </header>

        {/* CONTENT */}

        <div className="p-8">

          {/* HERO */}

          <section
            className="
              card
              p-10
              fade-in
            "
          >

            <h1
              className="
                text-4xl
                font-semibold
                leading-tight
              "
            >
              Enterprise
              <br />
              Document Management
            </h1>

            <p
              className="
                text-gray-500
                mt-5
                max-w-2xl
                leading-relaxed
              "
            >
              Securely manage internal
              company files, reports,
              spreadsheets and enterprise
              documents in one centralized
              platform.
            </p>

          </section>

          {/* GRID */}

          <section
            className="
              grid
              grid-cols-1
              xl:grid-cols-[1.6fr_0.9fr]
              gap-8
              mt-8
            "
          >

            {/* LEFT */}

            <div className="space-y-8">

              {/* DOCUMENTS */}

              <div
                className="
                  card
                  p-8
                  fade-in
                "
              >

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
                        text-2xl
                        font-semibold
                      "
                    >
                      Company Documents
                    </h2>

                    <p
                      className="
                        text-gray-500
                        mt-1
                      "
                    >
                      Recent enterprise files
                    </p>

                  </div>

                  <button
                    className="
                      primary-btn
                    "
                  >
                    View All
                  </button>

                </div>

                {/* TABLE */}

                <div className="space-y-4">

                  {documents.map((doc,index)=>(

                    <div
                      key={index}
                      className="
                        border
                        border-gray-100
                        rounded-2xl
                        p-5
                        flex
                        items-center
                        justify-between
                        hover-lift
                        hover:shadow-lg
                      "
                    >

                      <div
                        className="
                          flex
                          items-center
                          gap-5
                        "
                      >

                        <div
                          className="
                            w-14
                            h-14
                            rounded-2xl
                            bg-blue-50
                            text-blue-600
                            flex
                            items-center
                            justify-center
                          "
                        >

                          <FileText size={22}/>

                        </div>

                        <div>

                          <h3
                            className="
                              font-semibold
                              text-lg
                            "
                          >
                            {doc.name}
                          </h3>

                          <p
                            className="
                              text-gray-400
                              mt-1
                              text-sm
                            "
                          >
                            {doc.type}
                            {" • "}
                            {doc.size}
                          </p>

                        </div>

                      </div>

                      <button
                        className="
                          primary-btn
                        "
                      >
                        Open
                      </button>

                    </div>

                  ))}

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="space-y-8">

              {/* ACTIVITY */}

              <div
                className="
                  card
                  p-8
                  fade-in
                "
              >

                <h2
                  className="
                    text-xl
                    font-semibold
                    mb-6
                  "
                >
                  Recent Activity
                </h2>

                <div className="space-y-4">

                  {[
                    "Manufacturing report updated",
                    "Excel file downloaded",
                    "New project document uploaded",
                  ].map((item,index)=>(

                    <div
                      key={index}
                      className="
                        p-4
                        rounded-2xl
                        bg-gray-50
                        text-sm
                        text-gray-600
                      "
                    >
                      {item}
                    </div>

                  ))}

                </div>

              </div>

              {/* QUICK ACCESS */}

              <div
                className="
                  card
                  p-8
                  fade-in
                "
              >

                <h2
                  className="
                    text-xl
                    font-semibold
                    mb-6
                  "
                >
                  Quick Access
                </h2>

                <div className="space-y-4">

                  {[
                    "PDF Reports",
                    "Excel Sheets",
                    "Project Files",
                    "Automation Docs",
                  ].map((item,index)=>(

                    <button
                      key={index}
                      className="
                        w-full
                        h-14
                        rounded-2xl
                        border
                        border-gray-200
                        hover:bg-gray-50
                        text-left
                        px-5
                      "
                    >
                      {item}
                    </button>

                  ))}

                </div>

              </div>

            </div>

          </section>

        </div>

      </main>

    </div>
  );
};

export default Dashboard;