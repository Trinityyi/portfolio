import React from 'react';
import { graphql } from 'gatsby';

import Header from '../components/Header';
import Layout from '../components/Layout';
import Meta from '../components/Meta';
import Section from '../components/Section';

const Index = ({
  data: {
    site: {
      siteMetadata: {
        author
      }
    },
    avatar,
    splash,
    allMarkdownRemark
  }
}) => (
  <Layout>
    <Meta/>
    <Header
      author={author}
      avatarSrc={avatar.childImageSharp.fixed.src}
      splashSrc={splash.childImageSharp.fixed.src}
    />
    {allMarkdownRemark.nodes.map(s =>
      <Section
        title={s.frontmatter.title}
        htmlContent={s.html}
        key={s.frontmatter.title}
      />
    )}
  </Layout>
);

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author {
          name
          summary
          location
          social {
            email
            github
            linkedin
          }
        }
      }
    }
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 120, height: 120, quality: 95) {
          src
        }
      }
    }
    splash: file(absolutePath: { regex: "/splash.jpg/" }) {
      childImageSharp {
        fixed(width: 1200, height: 1800, quality: 90) {
          src
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___order], order: ASC }) {
      nodes {
        html
        frontmatter {
          title
        }
      }
    }
  }
`;
