import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import TestimonialsQuery from "src/pages/components/TestimonialsQuery";
const Testimonials = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <div data-aos="fade-right" id="testimonials">
      <TestimonialsContainer>
        <TopLine>Testimonials</TopLine>

        <ContentWrapper>
          <TestimonialsQuery />
        </ContentWrapper>
      </TestimonialsContainer>
    </div>
  );
};

export default Testimonials;

const TestimonialsContainer = styled.div`
  width: 100%;
  padding: 5rem calc((100vw - 1300px) / 2);

  @media screen and (max-width: 768px) {
    padding: 0rem;
  }
`;

const TopLine = styled.div`
  font-size: 2rem;
  text-align: center;
  font-family: sans-serif;
  margin-bottom: 1rem;
  color: black;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 10rem;
  @media screen and (max-width: 768px) {
    padding: 5px;
  }
`;
