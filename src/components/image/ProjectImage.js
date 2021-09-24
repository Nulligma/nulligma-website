import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

function ProjectImage({ imgName }) {
  const data = useStaticQuery(graphql`
    query ProjectImages {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { eq: "project" }
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
    if (node.name === imgName) {
      image = getImage(node);
    }
  });
  return <GatsbyImage image={image} alt={imgName} />;
}

export default ProjectImage;
