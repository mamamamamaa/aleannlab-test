import { ImLocation } from "react-icons/im";
import { CiBookmark } from "react-icons/ci";
import style from "./JobCard.module.css";

import StarRatings from "react-star-ratings";
import { FC } from "react";
import { job } from "../../types";

type jobType = {
  job: job;
};

const getRandomStat = () => Math.ceil(Math.random() * 5 + 1);

const JobCard: FC<jobType> = ({ job }) => {
  const { title, address, name, pictures } = job;
  const picPath = pictures[0];
  const stat = getRandomStat();

  return (
    <article className={style.card}>
      <div className="flex mr-auto">
        <div className="mr-6">
          <img className={style.image} src={picPath} alt={name} />
        </div>
        <div>
          <h2 className={style.cardTitle}>{title}</h2>
          <h3 className={style.extraData}>Department name • {name} </h3>
          <span className={style.location}>
            <ImLocation />
            {address}
          </span>
        </div>
      </div>
      {stat > 2 && (
        <StarRatings
          rating={stat}
          starRatedColor="#38415D"
          starDimension="19px"
          starSpacing="1px"
        />
      )}
      <div className={style.subContainer}>
        <div className={style.bookMarkBox}>
          <CiBookmark
            className={style.bookMarkIcon}
            size={32}
            color="#878D9D"
          />
        </div>
        <span className={style.pubDate}>Posted 2 days ago</span>
      </div>
    </article>
  );
};

export default JobCard;
