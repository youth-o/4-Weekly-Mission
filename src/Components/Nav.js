import React from "react";
import logo from "../Assets/image/logo.svg";

export function Nav({ profile }) {
  return (
    <>
      <nav>
        <div className="nav">
          <div>
            <a href="index.html">
              <img className="logo" src={logo} alt="로고 사진" />
            </a>
          </div>
          {profile ? (
            <div className="profile">
              <img
                src={profile.image}
                alt="userProfileImg"
                className="profileImg"
              ></img>
              <span className="userEmail">{profile.email}</span>
            </div>
          ) : (
            <a href="../Pages/signIn.html" className="loginBtn btnS">
              로그인
            </a>
          )}
        </div>
      </nav>
    </>
  );
}
