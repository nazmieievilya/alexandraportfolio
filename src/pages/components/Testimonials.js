import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

const Testimonials = () => {
    useEffect(() => {
    Aos.init({duration: 1200});
    }, [])

    const data = useStaticQuery(graphql`
        query NewQuery {
            allFile(filter: {ext: {regex: "/(jpg)/"}, name: {in: ["author-1","author-2"]}}) {
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
        
    `)

    








    


  return (
      <div  id='testimonials' >
          <TestimonialsContainer>
        <TopLine>
            Testimonials
        </TopLine>
        
        <ContentWrapper>
            <ColumnOne>
            {data.allCommentsJson.edges.map((image, key) => (
                   <div data-aos="fade-right" ><Comments key={key} src={image.node.img.childImageSharp.fluid.src} /></div>
                   ))}
            </ColumnOne>
        <ColumnTwo>
            {data.allFile.edges.map((image, key) => (
                   <div data-aos="fade-left" ><Images key={key} fluid={image.node.childImageSharp.fluid} /></div>
                   ))}
            </ColumnTwo>
            
        </ContentWrapper>
    </TestimonialsContainer>
      </div>
    
  )
}

export default Testimonials

const TestimonialsContainer = styled.div`
    width: 100%;
    padding: 5rem calc((100vw - 1300px) / 2);
  
    

    @media screen and (max-width: 768px) {
        padding-top: 1rem;
        margin: 0;
    }

`

const TopLine = styled.div`
    font-size: 2rem;
    text-align: center;
    font-family: sans-serif;
    margin-bottom: 1rem;
    color: #000;



`

const ColumnOne = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    align-items: center;

`



const ColumnTwo = styled.div`
   
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 2rem;
    grid-gap: 10px;
    

    

`

const ContentWrapper = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 10rem;
    @media screen and (max-width: 768px) {
        padding: 5px;
    }
    

`

const Images = styled(Img)`
   
    border-radius: 10px;
    height: 100%;

`

const Comments = styled.img`
    width: 100%;
    height: auto;

`