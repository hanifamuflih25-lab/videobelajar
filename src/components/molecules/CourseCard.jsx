import ratingImg from "../../assets/images/Rating.png";

function CourseCard({ item }) {
  return (
    <div className="flex flex-col bg-white border border-gray-200 rounded-xl p-4 w-full max-w-[450px] mx-auto shadow-md transition hover:shadow-lg">

     
      {item.img && (
        <div className="flex sm:hidden gap-4">
          <img
            src={item.img || item.image}
            className="w-[100px] h-[100px] rounded-lg object-cover"
          />

          <div className="flex flex-col justify-center gap-2 flex-1">
            <p className="text-base font-bold font-poppins text-gray-900 line-clamp-2">
              {item.title || "Big 4 Auditor Financial Analyst"}
            </p>

            <div className="flex items-center gap-2">
              <img
                src={item.profile || item.profileImg}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <span className="text-sm font-medium">
                  {item.teacher || "Jenna Ortega"}
                </span>
                <p className="text-[11px] text-gray-500">
                  {item.job || "Senior Accountant"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      
      <div className="hidden sm:flex flex-col gap-3">
        <img
          src={item.img || item.image}
          className="w-full h-[180px] rounded-lg object-cover"
        />

        <p className="text-lg font-bold font-poppins text-gray-900">
          {item.title || "Big 4 Auditor Financial Analyst"}
        </p>

        <p className="text-sm font-poppins text-[#333333]">
          {item.description ||
            "Mulai transformasi dengan instruktur profesional, harga yang terjangkau..."}
        </p>

        <div className="flex items-center gap-3">
          <img
            src={item.profile || item.profileImg}
            className="w-9 h-9 rounded-full object-cover"
          />
          <div>
            <span className="text-base font-medium">
              {item.teacher || "Jenna Ortega"}
            </span>
            <p className="text-sm text-gray-500">
              {item.job || "Senior Accountant"}
            </p>
          </div>
        </div>
      </div>

      
      <div className="flex justify-between items-center mt-3">
        <div className="flex items-center gap-2">
          <img src={ratingImg} className="w-[80px] md:w-[90px]" />
          <p className="text-xs md:text-sm text-gray-500 underline">
            3.5 (86)
          </p>
        </div>

        <div className="text-base md:text-lg font-bold text-green-500">
          {item.price || "Rp 300K"}
        </div>
      </div>

    </div>
  );
}

export default CourseCard;