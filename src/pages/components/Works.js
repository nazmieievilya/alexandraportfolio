import React, { useEffect } from "react";
import WorksQuery from "src/pages/components/WorksQuery";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import { colors } from "data/colors";
const Works = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <WorksContainer id="works">
      <div data-aos="fade-up">
        <WorksHeading>My works</WorksHeading>
      </div>
      <WorksQuery />
    </WorksContainer>
  );
};

export default Works;

const WorksContainer = styled.div`
  min-height: 600px;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: ${colors.white};
  color: red;
`;

const WorksHeading = styled.div`
  font-size: 2rem;
  text-align: center;
  font-family: sans-serif;
  margin-bottom: 1rem;
  color: black;
`;
