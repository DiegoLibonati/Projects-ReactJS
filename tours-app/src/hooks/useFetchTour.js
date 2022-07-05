import { useEffect, useState } from "react";
import { getTours } from "../helpers/getTours";

export const useFetchTour = () => {
  const [information, setInformation] = useState([]);

  const getInformation = async () => {
    const getInfo = await getTours();
    setInformation(getInfo);
  };

  useEffect(() => {
    getInformation();
  }, []);

  return {
    information,
    setInformation,
  };
};
