const SupportModal = ({ showSupport, setShowSupport }) => {

  if (!showSupport) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">

      <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-8 relative">

        {/* CLOSE BUTTON */}
        <button
          onClick={() => setShowSupport(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
        >
          ×
        </button>

        {/* TITLE */}
        <div className="text-center">

          <h2 className="text-2xl font-semibold text-gray-800">
            Support Information
          </h2>

          <p className="text-sm text-gray-500 mt-2">
            Internal Development Contact
          </p>

        </div>

        {/* CONTENT */}
        <div className="mt-8 space-y-5">

          <div>
            <p className="text-sm text-gray-500">
              Developer
            </p>

            <h3 className="text-lg font-medium text-gray-800">
              JOHN DIVINE MATHEW J
            </h3>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Email
            </p>

            <h3 className="text-lg font-medium text-gray-800">
              mathewdivine95@gmail.com
            </h3>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Phone & WhatsApp
            </p>

            <h3 className="text-lg font-medium text-gray-800">
              +91 9626749641
            </h3>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Department
            </p>

            <h3 className="text-lg font-medium text-gray-800">
              Automation Team
            </h3>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Working Hours
            </p>

            <h3 className="text-lg font-medium text-gray-800 leading-relaxed">
              9:00 AM - 6:00 PM from Monday to Friday
            </h3>
          </div>

        </div>

      </div>

    </div>
  );
};

export default SupportModal;