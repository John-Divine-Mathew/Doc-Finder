import { motion } from "framer-motion";

const SearchBar = ({
  search,
  setSearch,
}) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="
        glass-card
        border
        border-white/50
        rounded-3xl
        soft-shadow
        p-5
      "
    >

      <div className="flex items-center gap-4">

        <input
          type="text"
          placeholder="Search company documents..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="
            flex-1
            bg-white
            border
            border-gray-200
            rounded-2xl
            px-6
            py-4
            outline-none
            focus:ring-4
            focus:ring-blue-100
            text-gray-700
            text-sm
          "
        />

        <motion.button
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="
            px-8
            py-4
            rounded-2xl
            bg-blue-600
            text-white
            font-medium
            glow-button
          "
        >
          Search
        </motion.button>

      </div>

    </motion.div>
  );
};

export default SearchBar;