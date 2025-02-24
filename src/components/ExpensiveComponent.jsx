/* eslint-disable react/prop-types */
import { memo } from "react";

const ExpensiveComponent = ({ count }) => {
  console.log("Rendering ExpensiveComponent");

  return (
    <div className="p-4 bg-yellow-400 text-black rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold">Component</h2>
      <p>Hitungan: {count}</p>
    </div>
  );
};

export default memo(ExpensiveComponent);

// memo(ExpensiveComponent) → Komponen hanya akan dirender ulang jika nilai count berubah.
// Jika state lain berubah, komponen ini tidak akan dirender ulang