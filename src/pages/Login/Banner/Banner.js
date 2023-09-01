import React from "react";
import styles from "./Banner.module.scss";
import typography from "../../../global-styles/typography.module.scss";
import bannerImage from "../../../assets/login-page-icons/bannerImage.png";
import PrimaryButton from "../../../components/Buttons/PrimaryButton/PrimaryButton";

function Banner({ loginMethod, onLoginBtnClick }) {
  const loginBtnHandler = () => {
    onLoginBtnClick(true);
  };

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.ctaText}>
        <h5 className={`${typography.h5Bold} ${styles.title}`}>
          Zippee Riders,
        </h5>
        <p className={`${typography.t2Lite} ${styles.subTitle}`}>
          Time to Learn and Grow with our Rider Training
        </p>
      </div>
      <div className={styles.cta}>
        <img src={bannerImage} alt="#" className={styles.bannerImage} />
        <PrimaryButton onClick={loginBtnHandler}>
          {loginMethod === "mobile"
            ? "Login with Mobile Number"
            : "Login with Email"}
        </PrimaryButton>
      </div>
    </div>
  );
}

export default Banner;
