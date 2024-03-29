import { useState, useEffect } from "react";
import { FolderMain } from "../components/FolderMain";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { getProfile } from "../API/SharedPageApi";
import { FolderHeader } from "../components/FolderHeader";

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
