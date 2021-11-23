import React, { useEffect } from "react";
import Layout from "../Layout";
import { Container, Headers } from "./Intro.styles";
interface CongratulateProps {
  navigator: (url: string) => void;
}
const Intro: React.FC<CongratulateProps> = ({ navigator }) => {
  useEffect(() => {
    setTimeout(() => {
      navigator("init");
    }, 2000);
  }, [navigator]);

  return (
    <Layout>
      <Container>
        <Headers>
          <div className="spans">
            Wanna <span className="B">B</span>
            <span className="T">t</span>
            <span className="I">i</span>
          </div>
        </Headers>
        새로운 나를 만나다
      </Container>
    </Layout>
  );
};

export default Intro;
