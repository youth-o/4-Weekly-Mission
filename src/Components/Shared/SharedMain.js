import { SharedCard } from "@/components/Shared/SharedCard";
import styles from "@/styles/FolderMain.module.css";
import Image from "next/image";

export function SharedMain({ cards }) {
  return (
    <>
      <div className={styles.searchContainer}>
        <div className={styles.search}>
          <input
            className={styles.searchInput}
            placeholder="링크를 검색해 보세요."
          ></input>
          <Image
            src="/images/Search.svg"
            className={styles.searchImg}
            width={16}
            height={16}
            alt="검색 아이콘"
          />
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
