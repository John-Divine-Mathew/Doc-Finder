import { Menu, X } from "lucide-react";

const Navbar = ({
  toggleSidebar,
  sidebarOpen,
  setShowSupport,
}) => {

  const handleLogout = () => {

    localStorage.clear();

    alert("Logged out successfully");

    window.location.reload();
  };

  return (
    <div className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50 shadow-sm">

      <div className="h-full px-6 flex items-center justify-between">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-4">

          {/* BURGER */}
          <button
            onClick={toggleSidebar}
            className="
              p-2
              rounded-lg
              hover:bg-gray-100
              transition-all
              duration-200
            "
          >

            {sidebarOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}

          </button>

          {/* LOGO */}
          <div className="flex items-center gap-3">

            <div className="
              w-10
              h-10
              rounded-xl
              bg-blue-600
              text-white
              flex
              items-center
              justify-center
              font-bold
              shadow-sm
            ">
              H
            </div>

            <div>

              <h1 className="text-lg font-semibold text-gray-800 leading-none">
                Doc-Finder
              </h1>

              <p className="text-xs text-gray-500 mt-1">
                HIROTEC Internal Portal
              </p>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          <button
            onClick={() => setShowSupport(true)}
            className="
              px-4
              py-2
              text-sm
              border
              border-gray-300
              rounded-xl
              hover:bg-gray-100
              transition-all
            "
          >
            Support
          </button>

          <button
            onClick={handleLogout}
            className="
              px-4
              py-2
              text-sm
              bg-gray-900
              text-white
              rounded-xl
              hover:bg-black
              transition-all
            "
          >
            Logout
          </button>

        </div>

      </div>

    </div>
  );
};

export default Navbar;  