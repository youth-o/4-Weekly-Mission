import { useEffect, useState } from "react";
import { getFolderName } from "../API/FolderPageApi";

export const useFolderName = () => {
  const [folderNames, setFolderNames] = useState([]);

  const fetchFolders = async () => {
    try {
      const { data } = await getFolderName();
      setFolderNames(data);
    } catch (error) {
      console.error("폴더 목록을 불러오는 데 실패했습니다.", error);
    }
  };

  useEffect(() => {
    fetchFolders();
  }, []);

  return { folderNames };
};
