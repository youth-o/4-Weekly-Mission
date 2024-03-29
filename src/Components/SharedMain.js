import searchIcon from "../Assets/image/Search.svg";
import { SharedCard } from "@/components/SharedCard";
import styles from "@/styles/FolderMain.module.css";

export function SharedMain({ cards }) {
  return (
    <>
      <div className={styles.searchContainer}>
        <div className={styles.search}>
          <input
            className={styles.searchInput}
            placeholder="링크를 검색해 보세요."
          ></input>
          <img
            src={searchIcon}
            className={styles.searchImg}
            alt="검색 아이콘"
          ></img>
        </div>
      </div>

      <div className={styles.cardContainer}>
        {cards &&
          cards.map((card) => (
            <SharedCard cardInfo={card} key={card.id}></SharedCard>
          ))}
      </div>
    </>
  );
}
