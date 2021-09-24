import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import { BgImage } from "gbimage-bridge";

function Background({ children, imgName }) {
  const data = useStaticQuery(graphql`
    query BackgroundImages {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { eq: "background" }
        }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData(
              quality: 50
              webpOptions: { quality: 70 }
              width: 2000
            )
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
  return <BgImage image={image}>{children}</BgImage>;
}

export default Background;
