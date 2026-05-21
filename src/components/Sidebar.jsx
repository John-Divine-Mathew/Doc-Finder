const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {

  const menus = [
    "Dashboard",
    "All Documents",
    "Recent Files",
    "Favorites",
    "Shared Files",
    "Uploads",
    "System Manager Access",
    "Settings",
  ];

  return (
    <>
      {/* OVERLAY */}
      <div
        onClick={() => setSidebarOpen(false)}
        className={`
          fixed inset-0 bg-black/30 backdrop-blur-[2px] z-30 transition-all duration-300

          ${sidebarOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
          }
        `}
      />

      {/* SIDEBAR */}
      <div
        className={`
          fixed top-16 left-0 h-[calc(100vh-64px)] w-64 bg-white border-r border-gray-200 z-40 shadow-xl transition-all duration-300 ease-in-out

          ${sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full"
          }
        `}
      >

        {/* MENU */}
        <div className="p-5">

          <div className="space-y-2">

            {menus.map((menu, index) => (

              <button
                key={index}
                className="
                  w-full
                  text-left
                  px-4
                  py-3
                  rounded-xl
                  text-gray-700
                  font-medium
                  hover:bg-gray-100
                  hover:translate-x-1
                  transition-all
                  duration-200
                "
              >
                {menu}
              </button>

            ))}

          </div>

        </div>

      </div>
    </>
  );
};

export default Sidebar;