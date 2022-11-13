import { GetStaticProps } from "next";
import { job } from "../types";
import { FC } from "react";
import CardList from "../components/CardList/CardList";
// import axios from "axios";
//
// axios.defaults.baseURL =
//   "https://api.json-generator.com/templates/ZM1r0eic3XEy/data";
// axios.defaults.params = {
//   access_token: "wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu",
// };

// const data = await axios.get("").catch(() => ({ notFound: true }));
// return {
//   props: {
//     jobs: data,
//   },
// };

const TOKEN = "wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu0";

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=${TOKEN}`
  );
  console.log(res);
  const data = await res.json();
  console.log(data);
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      jobs: data,
    },
  };
};

type propsType = {
  jobs: job[];
};

const Jobs: FC<propsType> = ({ jobs }) => {
  return <CardList jobs={jobs} />;
};

export default Jobs;
