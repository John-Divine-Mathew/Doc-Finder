import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = ({
  toggleSidebar,
  sidebarOpen,
  setShowSupport,
}) => {

  const handleLogout = () => {

    localStorage.clear();

    window.location.reload();
  };

  return (
    <motion.div
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="
        fixed
        top-0
        left-0
        right-0
        h-20
        z-50
        glass-card
        border-b
        border-white/40
        soft-shadow
      "
    >

      <div className="h-full px-8 flex items-center justify-between">

        {/* LEFT */}
        <div className="flex items-center gap-5">

          {/* MENU */}
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={toggleSidebar}
            className="
              w-11
              h-11
              rounded-2xl
              bg-white
              border
              border-gray-200
              flex
              items-center
              justify-center
              hover:bg-gray-50
            "
          >

            {sidebarOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}

          </motion.button>

          {/* LOGO */}
          <div className="flex items-center gap-4">

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

            <div>

              <h1 className="text-xl font-semibold tracking-tight text-gray-800">
                Doc-Finder
              </h1>

              <p className="text-sm text-gray-500 mt-1">
                HIROTEC Enterprise Portal
              </p>

            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">

          <motion.button
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setShowSupport(true)}
            className="
              px-5
              py-3
              rounded-2xl
              bg-white
              border
              border-gray-200
              text-sm
              font-medium
              hover:bg-gray-50
            "
          >
            Support
          </motion.button>

          <motion.button
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleLogout}
            className="
              px-5
              py-3
              rounded-2xl
              bg-gray-900
              text-white
              text-sm
              font-medium
              hover:bg-black
              glow-button
            "
          >
            Logout
          </motion.button>

        </div>

      </div>

    </motion.div>
  );
};

export default Navbar;