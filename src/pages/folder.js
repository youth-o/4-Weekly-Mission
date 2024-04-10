import { useState, useEffect } from "react";
import { FolderMain } from "../components/Folder/FolderMain";
import { Nav } from "../components/common/Nav";
import { Footer } from "../components/common/Footer";
import { getProfile } from "../api/SharedPageApi";
import { FolderHeader } from "../components/Folder/FolderHeader";

function FolderPage() {
  const [profile, setProfile] = useState(null);

  const getData = async () => {
    const userData = await getProfile();
    setProfile(userData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Nav profile={profile}></Nav>
      <FolderHeader></FolderHeader>
      <FolderMain></FolderMain>
      <Footer></Footer>
    </>
  );
}

export default FolderPage;
