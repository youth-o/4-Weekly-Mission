import axios from "@/lib/axios";

const API_ADDRESS = "https://bootcamp-api.codeit.kr/api";

export async function getProfile(targetId) {
  const response = await axios.get(`${API_ADDRESS}/users/${targetId}`);
  const nextUser = await response.data;
  const userData = {
    email: nextUser.email,
    image: nextUser.profileImageSource,
  };

  if (!response.status === 400) {
    throw new Error("불러오는 데 실패했습니다.");
  }

  return userData;
}

export async function getFolder(targetId) {
  const response = await axios.get(`${API_ADDRESS}/folders/${targetId}`);
  const nextFolder = response.data;
  const folderData = {
    userProfileImage: nextFolder.folder.owner.profileImageSource,
    userName: nextFolder.folder.owner.name,
    folderName: nextFolder.folder.name,
    cardLinks: nextFolder.folder.links,
  };

  if (!response.status === 400) {
    throw new Error("불러오는 데 실패했습니다.");
  }

  return folderData;
}
