import { useState, useEffect } from "react";
import ratingImg from "../../assets/images/Rating.png";
import { useStore } from "../../store/useStore";
import CourseCard from "../molecules/CourseCard";

function CourseCRUD() {

  const courses = useStore((state) => state.courses);
  const fetchCourses = useStore((state) => state.fetchCourses);
  const addCourse = useStore((state) => state.addCourse);
  const editCourse = useStore((state) => state.editCourse);
  const removeCourse = useStore((state) => state.removeCourse);

  
  const [title, setTitle] = useState("");
  const [teacher, setTeacher] = useState("");
  const [job, setJob] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [editingId, setEditingId] = useState(null);

  
  useEffect(() => {
    fetchCourses();
  }, []);

 
  const compressImage = (file, callback) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const maxWidth = 400;
        const scaleSize = maxWidth / img.width;

        canvas.width = maxWidth;
        canvas.height = img.height * scaleSize;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const compressedBase64 = canvas.toDataURL("image/jpeg", 0.6);
        callback(compressedBase64);
      };
    };

    reader.readAsDataURL(file);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    compressImage(file, setImage);
  };

  const handleProfileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    compressImage(file, setProfileImg);
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title,
      teacher,
      job,
      price,
      description,
      image,
      profileImg,
    };

    try {
      if (editingId) {
        await editCourse(editingId, payload);
        setEditingId(null);
      } else {
        await addCourse(payload);
      }

      setTitle("");
      setTeacher("");
      setJob("");
      setPrice("");
      setDescription("");
      setImage("");
      setProfileImg("");

    } catch (err) {
      console.log(err.message || "Gagal submit course");
    }
  };

 
  const handleEdit = (course) => {
    setTitle(course.title);
    setTeacher(course.teacher);
    setJob(course.job);
    setPrice(course.price);
    setDescription(course.description);
    setImage(course.image);
    setProfileImg(course.profileImg);
    setEditingId(course.id);
  };

  
  const handleDelete = async (id) => {
    try {
      await removeCourse(id);
    } catch (err) {
      console.log(err.message || "Gagal delete course");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      <h1 className="text-2xl font-poppins font-bold mb-6">
        Admin Manager
      </h1>

     
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl p-6 mb-10 grid md:grid-cols-2 gap-4"
      >

        <input
          type="text"
          placeholder="Judul Course"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded-lg px-4 py-2"
          required
        />

        <input
          type="text"
          placeholder="Nama Instruktur"
          value={teacher}
          onChange={(e) => setTeacher(e.target.value)}
          className="border rounded-lg px-4 py-2"
          required
        />

        <input
          type="text"
          placeholder="Profesi Instruktur"
          value={job}
          onChange={(e) => setJob(e.target.value)}
          className="border rounded-lg px-4 py-2"
          required
        />

        <input
          type="text"
          placeholder="Harga Course"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border rounded-lg px-4 py-2"
          required
        />

        <textarea
          placeholder="Deskripsi Course"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border rounded-lg px-4 py-2 md:col-span-2"
          rows="4"
          required
        />

        <div className="flex font-poppins items-center gap-4">
          <label className="bg-white hover:bg-green-500 text-black px-4 py-2 rounded-lg cursor-pointer border">
            Upload Gambar Course
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>

          {image && (
            <span className="text-sm text-green-600">
              Gambar berhasil dipilih
            </span>
          )}
        </div>

        <div className="flex font-poppins items-center gap-4">
          <label className="bg-white hover:bg-green-500 text-black px-4 py-2 rounded-lg cursor-pointer border">
            Upload Foto Instruktur
            <input
              type="file"
              accept="image/*"
              onChange={handleProfileUpload}
              className="hidden"
            />
          </label>

          {profileImg && (
            <span className="text-sm text-green-600">
              Foto instruktur dipilih
            </span>
          )}
        </div>

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white rounded-lg px-4 py-2 md:col-span-2"
        >
          {editingId ? "Update Course" : "Tambah Course"}
        </button>

      </form>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

        {courses.map((item) => (
          <div
            key={item.id}
            className="flex flex-col bg-white border border-gray-200 rounded-xl p-4 w-full max-w-[450px] mx-auto shadow-md transition hover:shadow-lg"
          >

            <div className="flex sm:hidden gap-4">
              <img
                src={item.image}
                alt="content"
                className="w-[100px] h-[100px] rounded-lg object-cover flex-shrink-0"
              />

              <div className="flex flex-col justify-center gap-2 flex-1">
                <p className="text-base font-bold font-poppins text-gray-900 line-clamp-2">
                  {item.title}
                </p>

                <div className="flex items-center gap-2">
                  <img
                    src={item.profileImg}
                    alt="profile"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">
                      {item.teacher}
                    </span>
                    <p className="text-[11px] text-gray-500">
                      {item.job}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden sm:flex flex-col gap-3">
              <img
                src={item.image}
                alt="content"
                className="w-full h-[180px] rounded-lg object-cover"
              />

              <p className="text-lg font-bold font-poppins text-gray-900">
                {item.title}
              </p>

              <p className="text-sm font-poppins text-[#333333] line-clamp-2">
                {item.description}
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={item.profileImg}
                  alt="profile"
                  className="w-9 h-9 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-base font-medium">
                    {item.teacher}
                  </span>
                  <p className="text-sm text-gray-500">
                    {item.job}
                  </p>
                </div>
              </div>
            </div>

            
            <div className="flex justify-between items-center mt-3">
              <div className="flex items-center gap-2">
                <img src={ratingImg} alt="rating" className="w-[80px] md:w-[90px]" />
                <p className="text-xs md:text-sm text-gray-500 underline">
                  3.5 (86)
                </p>
              </div>

              <div className="text-base md:text-lg font-bold text-green-500">
                {item.price}
              </div>
            </div>

            
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => handleEdit(item)}
                className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-white py-2 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(item.id)}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded"
              >
                Delete
              </button>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default CourseCRUD;