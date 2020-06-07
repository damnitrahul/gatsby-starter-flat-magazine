import React from 'react';
import { AdContainer } from './style';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
function AdsSidebar() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "demo-ad.png" }) {
        childImageSharp {
          fluid {
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
        <Image fluid={data.file.childImageSharp.fluid} />
      </div>
    </AdContainer>
  );
}

export default AdsSidebar;
