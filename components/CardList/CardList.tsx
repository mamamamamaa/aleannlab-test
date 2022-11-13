import { FC } from "react";
import { job } from "../../types";
import JobCard from "../JobCard/JobCard";

type propsType = {
  jobs: job[];
};

const CardList: FC<propsType> = ({ jobs }) => {
  return (
    <ul>
      {jobs.length > 0 &&
        jobs.map((job) => (
          <li className="not-last:mb-2" key={job.id}>
            <JobCard job={job} />
          </li>
        ))}
    </ul>
  );
};

export default CardList;
