const StatsCards = () => {

  const cards = [
    { title: "Total Documents", value: "1,245" },
    { title: "Recent Uploads", value: "58" },
    { title: "Storage Usage", value: "78%" },
    { title: "Favorites", value: "120" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

      {cards.map((card, index) => (

        <div
          key={index}
          className="
            bg-white
            border
            border-gray-200
            rounded-2xl
            p-6
            shadow-sm
            hover:shadow-md
            transition-all
            duration-300
          "
        >

          <h2 className="text-sm text-gray-500 font-medium">
            {card.title}
          </h2>

          <p className="text-3xl font-semibold mt-3 text-gray-800">
            {card.value}
          </p>

        </div>

      ))}

    </div>
  );
};

export default StatsCards;