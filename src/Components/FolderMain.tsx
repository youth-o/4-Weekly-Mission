import React, { useState } from "react";
import { FolderCard } from "./FolderCard";
import { FolderMenu } from "./FolderMenu";
import { useLinks } from "../Hooks/useLinks";
import FolderTools from "./FolderTools";
import search from "../Assets/image/Search.svg";
import "../Styles/FolderMain.css";
import { useFolder } from "../Hooks/useFolder";

export function FolderMain() {
  const { currentMenu, setCurrentMenu } = useFolder();
  const [folderCurrentId, setFolderCurrentId] = useState<number>();
  const { handleLinks, links } = useLinks();
  const [searchValue, setSearchValue] = useState<string>("");

  const handleMenuChange = (newMenu: string, id?: number): void => {
    setCurrentMenu(newMenu ?? "전체");
    handleLinks(id);
    setFolderCurrentId(id);
  };

  const handleInputValue = () => {
    setSearchValue("");
  };

  const handleSearchData = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      <div className="searchContainer">
        <div className="search">
          <input
            className="searchInput"
            placeholder="링크를 검색해 보세요."
            value={searchValue}
            onChange={handleSearchData}
          ></input>
          <img
            src={search}
            className="searchImg"
            alt="검색 아이콘"
            onClick={handleInputValue}
          ></img>
        </div>
      </div>

      <FolderMenu onMenuChange={handleMenuChange} />

      <div className="titleContainer">
        <div className="title">{currentMenu}</div>
        {currentMenu !== "전체" && folderCurrentId && (
          <FolderTools id={folderCurrentId} />
        )}
      </div>

      {linkArray && linkArray.length ? (
        <div className="cardContainer">
          {linkArray.map((card) => (
            <FolderCard key={card.id} cardInfo={card}></FolderCard>
          ))}
        </div>
      ) : (
        <div className="noLink">저장된 링크가 없습니다.</div>
      )}
    </>
  );
}
