import React from 'react';
import { AdContainer } from './style';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
function AdsSidebar() {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "ad-template.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <AdContainer>
      <div
        style={{
          width: '100%',
          position: 'sticky',
          top: '48px',
          borderRadius: '10px',
          border: '3px solid #d74034',
          overflow: 'hidden',
          maxWidth: '300px',
          margin: '0 auto'
        }}
      >
        <Image fluid={data.placeholderImage.childImageSharp.fluid} />
      </div>
    </AdContainer>
  );
}

export default AdsSidebar;
