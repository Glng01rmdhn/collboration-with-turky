import fototurky  from "./assets/foto.jpg"
import fotogalang from "./assets/galang.jpg"

export default function App() {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Ini Project react-turky</h1>
        <img
          src={fototurky}
          alt="Foto Besar"
          className="w-full max-w-4xl rounded-2xl shadow-lg"
        />

<h1 className="text-4xl font-bold text-gray-800 ">Ini Project react-galang</h1>
        <img
          src={fotogalang}
          alt="Foto Besar"
          className="w-full max-w-4xl rounded-2xl shadow-lg"
        />



      </div>

    );
  }


   