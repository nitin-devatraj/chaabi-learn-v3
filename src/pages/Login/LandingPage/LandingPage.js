import React from "react";
import styles from "./LandingPage.module.scss";
import typography from "../../../global-styles/global-styles.module.scss";
import bannerImage from "../../../assets/images/pages/login/landing-page/bannerImage.png";
import PrimaryButton from "../../../components/Buttons/PrimaryButton/PrimaryButton";

function LandingPage({ loginMethod, isLoginBtnClick }) {
  const loginBtnHandler = () => {
    isLoginBtnClick(true);
  };

  return (
    <div className={styles.landingPageContainer}>
      <div className={styles.cta}>
        <div className={styles.ctaText}>
          <h5 className={typography.h5Bold}>Zippee Riders,</h5>
          <p className={typography.t2Lite}>
            Time to Learn and Grow with our Rider Training
          </p>
        </div>
        <img src={bannerImage} alt="#" className={styles.bannerImage} />
      </div>
      <PrimaryButton
        onClick={loginBtnHandler}
        className={styles.loginBtn}
        type="submit"
      >
        {loginMethod === "mobile"
          ? "Login with Mobile Number"
          : "Login with Email"}
      </PrimaryButton>
    </div>
  );
}

export default LandingPage;
