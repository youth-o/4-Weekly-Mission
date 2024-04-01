import React from "react";
import styles from "@/styles/Card.module.css";
import Image from "next/image";

export function SharedCard({ cardInfo }) {
  const { imageSource, createdAt, description, url } = cardInfo;

  const inputDate = new Date(createdAt);
  const year = inputDate.getFullYear();
  const month = (inputDate.getMonth() + 1).toString().padStart(2, "0");
  const day = inputDate.getDate().toString().padStart(2, "0");
  const createdAtDate = `${year}. ${month}. ${day}`;

  const getCreatedFrom = () => {
    const now = new Date();
    const timeDifference = now - inputDate;

    const minutes = Math.floor(timeDifference / (1000 * 60));
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));
    const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30 * 12));

    if (minutes < 2) {
      return "1 minute ago";
    }
    if (minutes <= 59) {
      return `${minutes} minutes ago`;
    }
    if (hours < 1) {
      return "1 hour ago";
    }
    if (hours <= 23) {
      return `${hours} hours ago`;
    }
    if (days < 1) {
      return "1 day ago";
    }
    if (days <= 30) {
      return `${days} days ago`;
    }
    if (months < 1) {
      return "1 month ago";
    }
    if (months <= 11) {
      return `${months} months ago`;
    }
    if (years < 1) {
      return "1 year ago";
    }
    const remainingMonths = months % 12;
    return `${Math.floor(years)} years ago`;
  };

  return (
    <>
      <main>
        <a href={url} target="_blank">
          <div className={styles.sharedCard}>
            <div className={styles.cardImgContainer}>
              <Image
                src={imageSource}
                width={340}
                height={200}
                className={styles.cardImg}
                alt="카드 이미지"
              />
            </div>
            <div className={styles.cardContents}>
              <p className={styles.createdFrom}>{getCreatedFrom(createdAt)}</p>
              <p className={styles.description}>{description}</p>
              <p className={styles.createdAt}>{createdAtDate}</p>
            </div>
          </div>
        </a>
      </main>
    </>
  );
}
