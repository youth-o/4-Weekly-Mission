import React from "react";
import facebookImg from "../Assets/image/facebook.svg";
import twitterImg from "../Assets/image/twitter.svg";
import youtubeImg from "../Assets/image/youtube.svg";
import instaImg from "../Assets/image/instagram.svg";
import "@/styles/Footer.module.css";

export function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="footer-copyright">©codeit - 2023</div>
          <div>
            <a className="footer-contents" href="/privacy/">
              Privacy Policy
            </a>
            <a className="footer-contents" href="/faq/">
              FAQ
            </a>
          </div>
          <div className="footer-website">
            <a href="https://www.facebook.com/" target="_blank">
              <img
                className="footer-image"
                src={facebookImg}
                alt="페이스북 로고"
              />
            </a>
            <a href="https://twitter.com/?lang=ko" target="_blank">
              <img
                className="footer-image"
                src={twitterImg}
                alt="트위터 로고"
              />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <img
                className="footer-image"
                src={youtubeImg}
                alt="유튜브 로고"
              />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <img
                className="footer-image"
                src={instaImg}
                alt="인스타그램 로고"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
