import React from "react";
import styled from "styled-components";
import Video from "src/assets/videos/home.mp4";
import { Link } from "gatsby";
import { colors } from "data/colors";
const Home = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg src={Video} autoPlay loop muted playsInline type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <HeroH1>CG artist</HeroH1>
          <HeroP>Deal with digital portraits</HeroP>
          <LinkW to="/#works">Check out my works</LinkW>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};
export default Home;

const HeroContainer = styled.div`
  background-color: ${colors.blackBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: ${colors.white};
  margin-top: -80px;
  font-family: sans-serif;

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(
        100deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(100deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }
`;

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100 vw - 1300px) / 2);
`;

const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: ${colors.white};
  line-height: 1.1;
`;

const HeroH1 = styled.h1`
  font-size: clamp(1.5rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  padding: 0 1rem;
`;
const HeroP = styled.p`
  font-size: clamp(1rem, 3vw, 3rem);
  margin-bottom: 2rem;
`;

const LinkW = styled(Link)`
  background: ${({ primary }) => (primary ? "white" : "black")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "16px 40px" : "16px 32px")};
  color: ${colors.white};
  font-size: ${({ big }) => (big ? "20px" : "16px")};
  outline: none;
  border: none;
  min-width: 100px;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? "50px" : "none")};

  &:hover {
    background: ${({ primary }) => (primary ? "black" : "white")};
    color: black;
  }
`;
