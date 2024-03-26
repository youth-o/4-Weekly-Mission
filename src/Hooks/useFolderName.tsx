import { useEffect, useState } from "react";
import { getFolderName } from "../API/FolderPageApi";

export const useFolderName = () => {
  const [folderNames, setFolderNames] = useState([]);

  const fetchFolders = async () => {
    try {
      const fetchedFolders = await getFolderName();
      setFolderNames(fetchedFolders);
    } catch (error) {
      // 오류 처리를 원하는 대로 수행하세요
      console.error("폴더 목록을 불러오는 데 실패했습니다.", error);
    }
  };

  useEffect(() => {
    fetchFolders();
  }, []);

  return { folderNames };
};
