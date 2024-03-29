import React from "react";
import searchIcon from "../Assets/image/Search.svg";
import { SharedCard } from "@/components/SharedCard";
import "@/styles/Main.module.css";

export function SharedMain({ cards }) {
  return (
    <>
      <div className="searchContainer">
        <div className="search">
          <input
            className="searchInput"
            placeholder="링크를 검색해 보세요."
          ></input>
          <img src={searchIcon} className="searchImg" alt="검색 아이콘"></img>
        </div>
      </div>

      <div className="cardContainer">
        {cards &&
          cards.map((card) => (
            <SharedCard cardInfo={card} key={card.id}></SharedCard>
          ))}
      </div>
    </>
  );
}
