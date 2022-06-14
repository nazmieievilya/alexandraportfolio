import React, { useEffect } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Aos from "aos";
import "aos/dist/aos.css";

const WorksQuery = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  const data = useStaticQuery(graphql`
    query WorksQuery {
      allWorksJson {
        edges {
          node {
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
        }
      }
    }
  `);

  function getWorks(data) {
    const worksArray = [];
    data.allWorksJson.edges.forEach((item, index) => {
      worksArray.push(
        <div data-aos="fade-right">
          <WorkCard key={index}>
            <WorksImg
              key={index}
              src={item.node.img.childImageSharp.fluid.src}
              fluid={item.node.img.childImageSharp.fluid}
            />
          </WorkCard>
        </div>
      );
    });

    return worksArray;
  }

  return <WorksWrapper>{getWorks(data)}</WorksWrapper>;
};

export default WorksQuery;



const WorksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  align-items: center;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    gap: 0;
    grid-template-columns: 1fr;
  }
`;

const WorkCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 500px;
  position: relative;
  transition: 0.2s ease;
`;

const WorksImg = styled(Img)`
  height: 100%;
  max-width: 100%;
  position: absolute;
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(70%);
  }
`;
