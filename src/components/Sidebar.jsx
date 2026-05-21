const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
  setShowSupport,
}) => {

  const menus = [
    "Dashboard",
    "All Documents",
    "PDF Files",
    "Word Files",
    "Excel Files",
    "PPT Files",
    "Recent Files",
    "Settings",
  ];

  const logout = () => {

    localStorage.clear();

    window.location.reload();
  };

  return (
    <>
      {/* OVERLAY */}
      {sidebarOpen && (

        <div
          onClick={() =>
            setSidebarOpen(false)
          }
          className="
            fixed
            inset-0
            bg-black/20
            backdrop-blur-sm
            z-40
          "
        />

      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed
          top-0
          left-0
          h-full
          w-80
          bg-white
          border-r
          border-gray-200
          z-50
          flex
          flex-col
          justify-between
          transform
          transition-transform
          duration-300
          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >

        {/* TOP */}
        <div>

          {/* HEADER */}
          <div
            className="
              h-20
              border-b
              border-gray-200
              px-6
              flex
              items-center
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
                "
              >
                H
              </div>

              <div>

                <h2
                  className="
                    text-lg
                    font-semibold
                    text-gray-800
                  "
                >
                  Doc-Finder
                </h2>

                <p
                  className="
                    text-sm
                    text-gray-500
                  "
                >
                  Enterprise System
                </p>

              </div>

            </div>

          </div>

          {/* MENUS */}
          <div className="p-5 space-y-2">

            {menus.map((menu, index) => (

              <button
                key={index}
                className="
                  w-full
                  text-left
                  px-5
                  py-4
                  rounded-2xl
                  text-gray-700
                  font-medium
                  hover:bg-gray-100
                "
              >
                {menu}
              </button>

            ))}

          </div>

        </div>

        {/* BOTTOM */}
        <div className="p-5 space-y-3">

          {/* SUPPORT */}
          <button
            onClick={() =>
              setShowSupport(true)
            }
            className="
              w-full
              h-14
              rounded-2xl
              border
              border-gray-200
              bg-white
              font-medium
              hover:bg-gray-50
            "
          >
            Support
          </button>

          {/* LOGOUT */}
          <button
            onClick={logout}
            className="
              w-full
              h-14
              rounded-2xl
              bg-gray-900
              text-white
              font-medium
              hover:bg-black
            "
          >
            Logout
          </button>

        </div>

      </aside>
    </>
  );
};

export default Sidebar;