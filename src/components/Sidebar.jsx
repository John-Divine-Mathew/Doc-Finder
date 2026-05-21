import { motion, AnimatePresence } from "framer-motion";

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
}) => {

  const menus = [
    "Dashboard",
    "All Documents",
    "Recent Files",
    "Favorites",
    "Shared Files",
    "Uploads",
    "System Access",
    "Settings",
  ];

  return (
    <AnimatePresence>

      {sidebarOpen && (

        <>
          {/* OVERLAY */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="
              fixed
              inset-0
              bg-black/20
              backdrop-blur-[2px]
              z-40
            "
          />

          {/* SIDEBAR */}
          <motion.div
            initial={{ x: -320 }}
            animate={{ x: 0 }}
            exit={{ x: -320 }}
            transition={{
              type: "spring",
              damping: 24,
            }}
            className="
              fixed
              top-24
              left-6
              bottom-6
              w-72
              rounded-3xl
              glass-card
              border
              border-white/50
              soft-shadow
              z-50
              overflow-hidden
            "
          >

            <div className="p-6">

              <div className="space-y-2">

                {menus.map((menu, index) => (

                  <motion.button
                    key={index}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className="
                      w-full
                      text-left
                      px-5
                      py-4
                      rounded-2xl
                      text-gray-700
                      font-medium
                      hover:bg-white
                    "
                  >
                    {menu}
                  </motion.button>

                ))}

              </div>

            </div>

          </motion.div>
        </>
      )}

    </AnimatePresence>
  );
};

export default Sidebar;