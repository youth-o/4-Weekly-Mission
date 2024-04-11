import { SharedHeader } from "../components/Shared/SharedHeader";
import { Nav } from "../components/common/Nav";
import { Footer } from "../components/common/Footer";
import { SharedMain } from "../components/Shared/SharedMain";
import { useState, useEffect } from "react";
import { getFolder, getProfile } from "../api/SharedPageApi";

function SharedPage() {
  const [profile, setProfile] = useState(null);
  const [folder, setFolder] = useState(null);
  const [cardLinks, setCardLinks] = useState([]);

  const getData = async () => {
    const userData = await getProfile();
    const { userProfileImage, userName, folderName, cardLinks } =
      await getFolder();
    setProfile(userData);
    setFolder({ userProfileImage, userName, folderName });
    setCardLinks(cardLinks);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Nav profile={profile}></Nav>
      <SharedHeader folder={folder}></SharedHeader>
      <SharedMain cards={cardLinks}></SharedMain>
      <Footer></Footer>
    </>
  );
}

export default SharedPage;
