import { useState } from "react";
import { FolderCard } from "@/components/FolderCard";
import { FolderMenu } from "@/components/FolderMenu";
import { useLinks } from "../Hooks/useLinks";
import FolderTools from "@/components/FolderTools";
import search from "../Assets/image/Search.svg";
import styles from "@/styles/FolderMain.module.css";
import { useFolder } from "../Hooks/useFolder";

export function FolderMain() {
  const { currentMenu, setCurrentMenu } = useFolder();
  const [folderCurrentId, setFolderCurrentId] = useState();
  const { handleLinks, links } = useLinks();
  const [searchValue, setSearchValue] = useState("");

  const handleMenuChange = (newMenu, id) => {
    setCurrentMenu(newMenu);
    handleLinks(id);
    setFolderCurrentId(id);
  };

  const handleInputValue = () => {
    setSearchValue("");
  };

  const handleSearchData = (e) => {
    setSearchValue(e.target.value);
  };

  const lowerQuery = searchValue.toLowerCase();
  const filteredLinks = links.filter(
    (link) =>
      link.url?.toLowerCase().includes(lowerQuery) ||
      link.title?.toLowerCase().includes(lowerQuery) ||
      link.description?.toLowerCase().includes(lowerQuery)
  );

  const linkArray = filteredLinks ? filteredLinks : links;

  return (
    <>
      <div className={styles.searchContainer}>
        <div className={styles.search}>
          <input
            className={styles.searchInput}
            placeholder="링크를 검색해 보세요."
            value={searchValue}
            onChange={handleSearchData}
          ></input>
          <img
            src={search}
            className={styles.searchImg}
            alt="검색 아이콘"
            onClick={handleInputValue}
          ></img>
        </div>
      </div>

      <FolderMenu onMenuChange={handleMenuChange} />

      <div className={styles.titleContainer}>
        <div className={styles.title}>{currentMenu}</div>
        {currentMenu !== "전체" && folderCurrentId && (
          <FolderTools id={folderCurrentId} currentMenu={currentMenu} />
        )}
      </div>

      {linkArray && linkArray.length ? (
        <div className={styles.cardContainer}>
          {linkArray.map((card) => (
            <FolderCard key={card.id} cardInfo={card}></FolderCard>
          ))}
        </div>
      ) : (
        <div className={styles.noLink}>저장된 링크가 없습니다.</div>
      )}
    </>
  );
}
