import React from 'react';
import styles from './Detail.module.scss';
import User from '../../assets/Imgs/user1.jpg'
import Flower from '../../assets/Imgs/flower.jpg'
import Map from '../../assets/Imgs/gmap.png'
import {ReactComponent as CatLogo} from '../../assets/SVGs/logo-cat.svg';
import {ReactComponent as HomeLogo} from '../../assets/SVGs/home.svg';
import {ReactComponent as UserLogo} from '../../assets/SVGs/user.svg';
import {ReactComponent as InfoLogo} from '../../assets/SVGs/info.svg';
import {ReactComponent as PeopleLogo} from '../../assets/SVGs/people-outline.svg';
import {ReactComponent as CommentLogo} from '../../assets/SVGs/comment-outline.svg';
import {ReactComponent as CheckLogo} from '../../assets/SVGs/check-outline.svg';
import {ReactComponent as LikeLogo} from '../../assets/SVGs/like-outline.svg';
import {ReactComponent as DateFromLogo} from '../../assets/SVGs/date-from.svg';
import {ReactComponent as DateToLogo} from '../../assets/SVGs/date-to.svg';
const Detail = props => {
  return (
    <div className={`${styles.root}`}>
      <Header></Header>
      <Banner></Banner>
      <Content></Content>
      <Time></Time>
      <Place></Place>
      <Feedback></Feedback>
      <Footer></Footer>
    </div>
  );
};

const Header = props => {
  return (
    <div className={`${styles["header"]}`}>
        <HomeLogo className={`${styles['logo']} ${styles['home']}`}></HomeLogo>
        <CatLogo className={`${styles['logo']} ${styles['cat']}`}></CatLogo>
        <UserLogo className={`${styles['logo']} ${styles['user']}`}></UserLogo>
    </div>
  );
};

const Banner = props => {
  return (
    <div className={`${styles["banner"]} ${styles["container"]}`}>
      <div className={`${styles["channel-name"]}`}>channel name</div>
      <div className={`${styles["title"]}`}>Activity Title Name Make it <br></br>Longer May Longer than One Line</div>
      <div className={`${styles["user"]}`}>
        <div className={`${styles["user-image"]}`}><img src={User} alt="user"/></div>
        <div className={`${styles["user-info"]}`}>
          <div className={`${styles["user-name"]}`}>Username</div>
          <div className={`${styles["published-date"]}`}>Published 2 days ago</div>
        </div>
      </div>
    </div>
  );
};

const Content = props => {
  return (
    <div className={`${styles["content"]}`}>
      <div className={`${styles["item-container"]}`}>
        <div className={`${styles["item"]}`}>
          <InfoLogo className={`${styles["logo"]}`}></InfoLogo>
          Details
        </div>
        <div className={`${styles["item"]}`}>
          <PeopleLogo className={`${styles["logo"]}`}></PeopleLogo>
          Participants
        </div>
        <div className={`${styles["item"]}`}>
          <CommentLogo className={`${styles["logo"]}`}></CommentLogo>
          Comments
        </div>
      </div>
      <div className={`${styles["image-list"]} ${styles["container"]}`}>
        <img src={Flower} alt="flower" />
        <img src={Flower} alt="flower" />
        <img src={Flower} alt="flower" />
      </div>
      <div className={`${styles["text"]} ${styles["container"]}`}>
      [No longer than 300 chars] Vivamus sagittis, diam in lobortis, sapien arcu mattis erat, vel aliquet sem urna et risus. Ut feugiat sapien mi potenti. Maecenas et enim odio. Nullam massa metus, varius quis vehicula sed, pharetra mollis erat. In quis viverra velit. Vivamus placerat, est nec hendrerit varius, enim dui hendrerit magna, ut pulvinar nibh lorem vel lacus. Mauris a orci iaculis, hendrerit eros sed, gravida leo. In dictum mauris vel augue varius there is south north asim
      </div>
      <div className={`${styles["overlay"]}`}></div>
      <div className={`${styles["button"]}`}>view all</div>
    </div>
  );
};

const Time = props => {
  return (
    <div className={`${styles["time"]}`}>
      <div className={`${styles["container"]}`}>
        <div className={`${styles["title"]}`}>When</div>
        <div className={`${styles["time-container"]}`}>
          <div className={`${styles["item"]}`}>
            <div className={`${styles["date"]}`}><DateFromLogo className={`${styles["logo"]}`}></DateFromLogo>15 April 2015</div>
            <div className={`${styles["hour"]}`}>8:30<span>am</span></div>
          </div>
          <div className={`${styles["item"]}`}>
            <div className={`${styles["date"]}`}><DateToLogo className={`${styles["logo"]}`}></DateToLogo>15 April 2015</div>
            <div className={`${styles["hour"]}`}>8:30<span>am</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Place = props => {
  return (
    <div className={`${styles["place"]}`}>
      <div className={`${styles["container"]}`}>
        <div className={`${styles["title"]}`}>Where</div>
        <div className={`${styles["address"]}`}>
          Marina Bay Sands<br></br>
          <span>10 Bayfront Ave, S018956</span>
        </div>
        <div className={`${styles["map"]}`}>
          <img src={Map} alt="map" />
        </div>
      </div>
    </div>
  );
};

const Feedback = props => {
  return (
    <div className={`${styles["feedback"]} ${styles["container"]}`}>
      
    </div>
  );
};

const Footer = props => {
  return (
    <div className={`${styles["footer"]}`}>
      <div className={`${styles["footer-container"]}`}>
        <div className={`${styles["comment-like"]}`}>
          <div className={`${styles["item"]}`}><CommentLogo className={`${styles["logo"]}`}></CommentLogo></div>
          <div className={`${styles["item"]}`}><LikeLogo className={`${styles["logo"]}`}></LikeLogo></div>
        </div>
        <div className={`${styles["join"]}`}><CheckLogo className={`${styles["logo"]}`}></CheckLogo>Join</div>
      </div>
    </div>
  );
};

export default Detail;