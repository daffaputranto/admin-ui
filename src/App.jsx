import "./App.css";

function App() {
  return (
    <main className="min-h-screen bg-special-mainBg flex justify-center items-center">
      {/* container start */}
      <div className="w-full max-w-sm">

        {/* logo start */}
        <div className="flex justify-center font-poppins tracking-wide text-primary text-4xl">
          Logo
        </div>
        {/* logo end */}

        {/* form start */}
        <div className="mt-16">
          {/* isi form di sini */}
        </div>
        {/* form end */}

        {/* teks start */}
        <div className="my-9 px-7 flex flex-col justify-center items-center text-xs text-gray-03">
          Teks tambahan
        </div>
        {/* teks end */}

        {/* sign in with google start */}
        <div className="mb-8">
          Tombol Google
        </div>
        {/* sign in with google end */}

        {/* link start */}
        <div className="flex justify-center">
          Link lainnya
        </div>
        {/* link end */}

      </div>
      {/* container end */}
    </main>
  );
}

export default App;