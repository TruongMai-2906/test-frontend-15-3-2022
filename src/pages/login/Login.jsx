import React from 'react';
import styles from './Login.module.scss';
import BackgroundImage from '../../assets/Imgs/Street-Dance-01.jpg';
import {ReactComponent as CatLogo} from '../../assets/SVGs/logo-cat.svg';
import {ReactComponent as UserLogo} from '../../assets/SVGs/user.svg';
import {ReactComponent as PasswordLogo} from '../../assets/SVGs/password.svg';
const bannerType = {
  companyName: "BLACK CAT",
  slogan: "FIND THE MOST LOVED ACTIVITIES",
}

const Login = props => {
  return (
    <div className={`${styles.root}`}>
      <Background src={BackgroundImage}></Background>
      <Banner {...bannerType}></Banner>
      <Form></Form>
      <SigninButon></SigninButon>
    </div>
  );
};

const Banner = props => {
  return (
    <div className={`${styles.banner}`}>
        <div className={`${styles['slogan']}`}>{props.slogan}</div>
        <div className={`${styles['name']}`}>{props.companyName}</div>
        <CatLogo className={`${styles['logo']}`}></CatLogo>
    </div>
  );
};

const Background = props => {
  return (
    <div className={`${styles["background-container"]}`}>
      <img src={props.src} alt="background" className={`${styles["background"]}`}/>
      <div className={`${styles["overlay"]}`}></div>
    </div>
  );
};

const Form = props => {
  return (
    <div className={`${styles["login-container"]}`}>
      <div className={`${styles["input-container"]}`}>
        <UserLogo className={`${styles["user-logo"]}`}></UserLogo>
        <input type="text" className={`${styles["input"]}`}/>
      </div>
      <div className={`${styles["input-container"]}`}>
        <PasswordLogo className={`${styles["user-logo"]}`}></PasswordLogo>
        <input type="password" className={`${styles["input"]}`}/>
      </div>
    </div>
  );
};

const SigninButon = props => {
  return (
    <div className={`${styles["footer"]}`}>
      SIGN IN
    </div>
  );
};

export default Login;