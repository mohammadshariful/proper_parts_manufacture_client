import React, { useEffect, useState } from "react";
import Parts from "./Parts";

const CarParts = () => {
  const [carsParts, setCarParts] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setCarParts(data);
      });
  }, []);

  return (
    <div className="my-20 py-10 bg-white shadow-sm">
      <h2 className="text-center text-2xl mb-4">Cars All Parts Here</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center  gap-8">
        {carsParts.map((parts) => (
          <Parts key={parts?._id} parts={parts} />
        ))}
      </div>
    </div>
  );
};

export default CarParts;
