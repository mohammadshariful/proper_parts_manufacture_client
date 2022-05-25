import { useEffect, useState } from "react";

const useLoadData = (url) => {
  const [storeData, setStoreData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setStoreData(result);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.dir(err);
      });
  }, [url]);
  return { storeData, loading };
};

export default useLoadData;
