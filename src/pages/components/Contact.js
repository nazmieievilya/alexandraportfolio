import React from "react";
import ContactBg from "src/assets/images/xauqra-6.jpg";
import styled from "styled-components";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { colors } from "data/colors";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div data-aos="fade-up" id="contact">
      <ContactContainer>
        <ContactBackground>
          <ContactContent>
            <h1>Contact me</h1>
            <FormWrap>
              <label htmlFor="email">
                <input type="email" placeholder="не робе(((" id="email" />
              </label>
            </FormWrap>
          </ContactContent>
        </ContactBackground>
      </ContactContainer>
    </div>
  );
};

export default Contact;

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  :before {
    margin: 0;
    padding: 0;
  }
  :after {
    margin: 0;
    padding: 0;
  }
`;

const ContactBackground = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${ContactBg}) no-repeat center;
  background-size: cover;
  height: 700px;
  width: 80%;
  padding: 5rem;
  align-items: center;
  color: ${colors.white};
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1200) {
    width: 100%;
    padding: 2rem;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0rem;
  }
`;
const ContactContent = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 6rem;
  font-family: sans-serif;
`;

const FormWrap = styled.div`
  margin: 1rem;
`;
