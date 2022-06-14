import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const ColumnOne = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;
`;

const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 2rem;
  grid-gap: 10px;
`;
const Images = styled(Img)`
  border-radius: 10px;
  height: 100%;
`;

const Comments = styled.img`
  width: 100%;
  height: auto;
`;
const TestimonialsQuery = () => {
  const data = useStaticQuery(graphql`
    query NewQuery {
      allFile(
        filter: {
          ext: { regex: "/(jpg)/" }
          name: { in: ["author-1", "author-2"] }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      allCommentsJson {
        edges {
          node {
            img {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  `);
  return (
    <>
      <ColumnOne>
        {data.allCommentsJson.edges.map((image, key) => (
          <Comments key={key} src={image.node.img.childImageSharp.fluid.src} />
        ))}
      </ColumnOne>
      <ColumnTwo>
        {data.allFile.edges.map((image, key) => (
          <Images key={key} fluid={image.node.childImageSharp.fluid} />
        ))}
      </ColumnTwo>
    </>
  );
};
export default TestimonialsQuery;


