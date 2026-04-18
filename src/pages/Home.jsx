import { useEffect, useState } from "react";
import MainLayout from "../components/Layout/mainLayout";
import CourseCard from "../components/molecules/CourseCard";
import { useStore } from "../store/useStore";
import bege from "../assets/images/content-four.jpg";
import ratingImg from "../assets/images/Rating.png";
import newsletterBg from "../assets/images/newsletter.jpg";

import content1 from "../assets/images/content-one.jpg";
import content2 from "../assets/images/content-two.jpg";
import content3 from "../assets/images/content-three.jpg";
import content4 from "../assets/images/content-four.jpg";
import content5 from "../assets/images/content-five.jpg";
import content6 from "../assets/images/content-six.jpg";
import content7 from "../assets/images/content-seven.jpg";
import content8 from "../assets/images/content-eight.jpg";
import content9 from "../assets/images/content-nine.jpg";

import profile1 from "../assets/images/cowok-abu.png";
import profile2 from "../assets/images/orang-pink.png";
import profile3 from "../assets/images/orang-biru.png";

const contents = [
  { id: 1, img: content1, profile: profile1 },
  { id: 2, img: content2, profile: profile2 },
  { id: 3, img: content3, profile: profile3 },
  { id: 4, img: content4, profile: profile1 },
  { id: 5, img: content5, profile: profile2 },
  { id: 6, img: content6, profile: profile3 },
  { id: 7, img: content7, profile: profile1 },
  { id: 8, img: content8, profile: profile2 },
  { id: 9, img: content9, profile: profile3 },
];

function Home() {
  const coursesFromStore = useStore((state) => state.courses);
  const fetchCourses = useStore((state) => state.fetchCourses);

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  useEffect(() => {
    setCourses(coursesFromStore);
  }, [coursesFromStore]);

  return (
    <MainLayout>

    
      <div className="w-full max-w-[1300px] mx-auto my-7 px-4">
        <div className="relative rounded-xl overflow-hidden shadow-lg text-white xl:h-[400px]">

          <img
            src={bege}
            alt="background"
            className="absolute w-full h-full object-cover top-0 left-0 brightness-[0.2]"
          />

          <div className="relative z-10 py-10 sm:py-14 xl:py-16 text-center px-4">
            <h1 className="text-2xl sm:text-3xl xl:text-5xl font-poppins font-bold mb-4 xl:px-48">
              Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!
            </h1>

            <p className="text-sm sm:text-base font-normal mb-6 leading-relaxed font-poppins md:px-12 xl:px-32">
              Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
              pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
              berpartisipasi dalam latihan interaktif yang akan meningkatkan
              pemahaman Anda.
            </p>

            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg w-full sm:w-auto text-sm font-medium transition">
              Temukan Video Course untuk Dipelajari!
            </button>
          </div>

        </div>
      </div>

      <div className="mt-5 px-4 md:px-6 xl:px-20 mx-auto">
        <div className="text-left">
          <h1 className="text-xl sm:text-2xl font-semibold text-black mb-2 leading-tight">
            Koleksi Video Pembelajaran Unggulan
          </h1>
          <p className="text-sm font-medium text-gray-700 mb-6">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-4 h-[52px]">
          <a className="relative text-[15.5px] font-medium text-[#f64920] whitespace-nowrap after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:w-[62px] after:h-[4px] after:bg-[#f64920] after:bottom-0">
            Semua kelas
          </a>

          <a className="text-[15.5px] font-medium text-gray-800 hover:text-[#f64920] whitespace-nowrap">
            Pemasaran
          </a>

          <a className="text-[15.5px] font-medium text-gray-800 hover:text-[#f64920] whitespace-nowrap">
            Desain
          </a>

          <a className="text-[15.5px] font-medium text-gray-800 hover:text-[#f64920] whitespace-nowrap">
            Pengembangan Diri
          </a>

          <a className="text-[15.5px] font-medium text-gray-800 hover:text-[#f64920] whitespace-nowrap">
            Bisnis
          </a>
        </div>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 py-10 px-4 md:px-6 xl:px-20">

        {contents.map((item) => (
          <div
            key={item.id}
            className="flex flex-col bg-white border border-gray-200 rounded-xl p-4 w-full max-w-[450px] mx-auto shadow-md transition hover:shadow-lg"
          >
            <div className="flex sm:hidden gap-4">
              <img
                src={item.img}
                alt="content"
                className="w-[100px] h-[100px] rounded-lg object-cover flex-shrink-0"
              />

              <div className="flex flex-col justify-center gap-2 flex-1">
                <p className="text-base font-bold font-poppins text-gray-900 line-clamp-2">
                  Big 4 Auditor Financial Analyst
                </p>

                <div className="flex items-center gap-2">
                  <img
                    src={item.profile}
                    alt="profile"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">Jenna Ortega</span>
                    <p className="text-[11px] text-gray-500">Senior Accountant</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden sm:flex flex-col gap-3">
              <img
                src={item.img}
                alt="content"
                className="w-full h-[180px] rounded-lg object-cover"
              />

              <p className="text-lg font-bold font-poppins text-gray-900">
                Big 4 Auditor Financial Analyst
              </p>

              <p className="text-sm font-poppins text-[#333333]">
                Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={item.profile}
                  alt="profile"
                  className="w-9 h-9 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-base font-medium">Jenna Ortega</span>
                  <p className="text-sm text-gray-500">
                    Senior Accountant di <span className="text-[#333333] font-poppins">Gojek</span>
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
                Rp 300K
              </div>
            </div>
          </div>
        ))}

       
        {courses.map((item) => (
          <div
            key={item.id}
            className="flex flex-col bg-white border border-gray-200 rounded-xl p-4 w-full max-w-[450px] mx-auto shadow-md transition hover:shadow-lg"
          >
            <img
              src={item.image}
              alt="content"
              className="w-full h-[180px] rounded-lg object-cover"
            />

            <p className="text-lg font-bold font-poppins text-gray-900 mt-3">
              {item.title}
            </p>

            <p className="text-sm font-poppins text-[#333333]">
              {item.description}
            </p>

            <div className="flex items-center gap-3 mt-3">
              <img
                src={item.profileImg}
                className="w-9 h-9 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <span className="text-base font-medium">{item.teacher}</span>
                <p className="text-sm text-gray-500">{item.job}</p>
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
                {item.price}
              </div>
            </div>
          </div>
        ))}
      </div>

    
      <div className="w-full max-w-7xl mx-auto my-14 px-4">
        <div className="relative rounded-xl overflow-hidden shadow-lg text-white">

          <img
            src={newsletterBg}
            className="absolute w-full h-full object-cover top-0 left-0 brightness-[0.2]"
          />

          <div className="relative z-10 py-12 md:py-16 px-6 flex flex-col items-center text-center">
            <p className="text-sm font-bold text-gray-300 tracking-wider mb-2">
              NEWSLETTER
            </p>

            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold mb-4">
              Mau Belajar Lebih Banyak?
            </h1>

            <p className="text-sm md:text-base max-w-md mb-6">
              Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
              spesial dari program-program terbaik hariesok.id
            </p>

            <div className="w-full max-w-md bg-white rounded-lg flex flex-col sm:flex-row overflow-hidden">
              <input
                type="email"
                placeholder="Masukkan Emailmu"
                className="flex-1 px-4 py-3 text-gray-900 font-poppins text-sm"
              />
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-medium text-sm px-5 py-3 transition">
                Subscribe
              </button>
            </div>
          </div>

        </div>
      </div>

    </MainLayout>
  );
}

export default Home;