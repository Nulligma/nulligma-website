import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

function ThemeImage({ imgName, theme }) {
  const data = useStaticQuery(graphql`
    query ThemeImages {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { eq: "theme" }
        }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData
          }
          name
        }
      }
    }
  `);
  var image;
  data.allFile.nodes.forEach(function (node) {
    if (node.name === `${imgName}-${theme}`) {
      image = getImage(node);
    }
  });
  return (
    <div>
      <GatsbyImage image={image} alt={imgName} />
    </div>
  );
}

export default ThemeImage;
