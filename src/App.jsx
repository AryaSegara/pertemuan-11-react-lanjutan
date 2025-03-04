import { useState, lazy, Suspense } from "react";
import ExpensiveComponent from "./components/ExpensiveComponent";

// Lazy Loading untuk komponen berat
const HeavyComponent = lazy( () => import("./components/HeavyComponent"));

// lazy(() => import("./components/HeavyComponent")) → Memuat komponen secara dinamis.
// Suspense → Menampilkan fallback (loading) saat komponen sedang dimuat.
 

function App() {
  const [count, setCount] = useState(0);
  const [showHeavy, setShowHeavy] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold">Contoh Mengoptimalkan Kinerja React </h1>

      {/* Button untuk update state */}
      <div className="mt-4 flex gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md shadow"
        >
          Increment Count
        </button>

      {/* Komponen React.memo */}
      <ExpensiveComponent count={count} />
      </div>


      <button
          onClick={() => setShowHeavy(true)}
          className="px-4 py-2 mt-10 bg-green-600 text-white rounded-md shadow"
        >
          Ini proses Lazy Loading
        </button>

      {/* Lazy Loading dengan Suspense */}
      {showHeavy && (
        <Suspense fallback={<p className="mt-4 text-gray-600">Loading.....</p>}>
          <HeavyComponent />
        </Suspense>
      )}
    </div>
  );
}

export default App;

// Lazy Loading (React.lazy) → HeavyComponent dimuat hanya saat tombol diklik.
// Suspense → Menampilkan loading sementara komponen sedang dimuat.
// Memoization (React.memo) → ExpensiveComponent tidak akan dirender ulang kecuali count berubah.
