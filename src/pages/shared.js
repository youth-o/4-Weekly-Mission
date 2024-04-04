import { SharedHeader } from "../components/SharedHeader";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { SharedMain } from "../components/SharedMain";
import { useState, useEffect } from "react";
import { getFolder, getProfile } from "../api/SharedPageApi";

function SharedPage() {
  const [profile, setProfile] = useState(null);
  const [folder, setFolder] = useState({
    userProfileImage: null,
  });
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
