import React from "react";
import { useRouter } from "next/dist/client/router";
import * as style from "../styles/BannerCard.module.scss";

const BannerCard = ({ imageUrl, title, slug, catagory }) => {
  const router = useRouter();

  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={style.container}
    >
      <div className={style.contentWrapper}>
        <h1>{title}</h1>
        <p>{slug}</p>
        <button
          onClick={() => {
            router.push(`/catagories/${catagory}`);
          }}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default BannerCard;
