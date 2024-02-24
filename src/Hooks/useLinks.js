import { useEffect, useState } from "react";
import { getLinkData } from "../API/FolderPageApi";

export const useLinks = () => {
  const [link, setLink] = useState([]);

  const fetchLinks = async (id) => {
    const links = await getLinkData(id);
    setLink(links.data);
    console.log(`links: ${links}`);
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  return { link, fetchLinks };
};
