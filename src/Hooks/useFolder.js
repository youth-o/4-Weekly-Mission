import { useEffect, useState } from "react";
import { getFolderName } from "../API/FolderPageApi";

export const useFolder = () => {
  const [folder, setFolder] = useState([]);
  const [currentMenu, setCurrentMenu] = useState("전체");

  const fetchFolder = async () => {
    try {
      const data = await getFolderName();
      setFolder(data);
    } catch (error) {
      console.error("Error fetching folder:", error);
    }
  };

  useEffect(() => {
    fetchFolder();
  }, []);
  return { currentMenu, setCurrentMenu, folder };
};
