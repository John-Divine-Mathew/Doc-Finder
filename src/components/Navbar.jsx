import { Menu } from "lucide-react";

const Navbar = ({
  toggleSidebar,
}) => {

  return (
    <header
      className="
        fixed
        top-0
        left-0
        right-0
        z-50
        h-20
        glass
        premium-border
        soft-shadow
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          h-full
          px-5
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
            gap-5
          "
        >

          {/* MENU */}
          <button
            onClick={toggleSidebar}
            className="
              w-12
              h-12
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

            <Menu size={20} />

          </button>

          {/* LOGO */}
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
                bg-gradient-to-br
                from-blue-600
                to-blue-700
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

              <h1
                className="
                  text-xl
                  font-semibold
                  text-gray-800
                "
              >
                Doc-Finder
              </h1>

              <p
                className="
                  text-sm
                  text-gray-500
                "
              >
                HIROTEC Enterprise
              </p>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
};

export default Navbar;