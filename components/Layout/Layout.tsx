import { FC, ReactNode } from "react";
import style from "./Layout.module.css";
interface Props {
  children: ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
  return <div className={style.layout}>{children}</div>;
};

export default Layout;
