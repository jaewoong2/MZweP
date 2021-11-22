import React from "react";
import Layout from "../Layout";
interface CongratulateProps {
  navigator: (url: string) => void;
}
const Congratulate: React.FC<CongratulateProps> = ({ navigator }) => {
  return <Layout>축하합니다~</Layout>;
};

export default Congratulate;
