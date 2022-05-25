import React from "react";
import useLoadData from "../../hooks/useLoadData";
import Loading from "../Shared/Loading/Loading";
import Parts from "./Parts";

const CarParts = () => {
  const url = "http://localhost:5000/tools";
  const { storeData: carsParts, loading } = useLoadData(url);
  if (loading) {
    return <Loading />;
  }
  const newCarParts = [...carsParts].reverse();
  const sliceCarParts = newCarParts.slice(0, 6);
  return (
    <div className="my-20 py-10 bg-white shadow-sm">
      <h2 className="text-center text-2xl mb-4">Cars All Parts Here</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center  gap-8">
        {sliceCarParts.map((parts) => (
          <Parts key={parts?._id} parts={parts} />
        ))}
      </div>
    </div>
  );
};

export default CarParts;
