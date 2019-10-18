import React from "react"
import { graphql } from "gatsby"
import TitlePage from "../components/TitlePage"
import SEO from "../components/seo"

import * as S from "../components/Content/styled" 

// The normal <a> tag is modified here (so that internal links use gatsby-link/LocalizedLink
// More info:
// https://www.gatsbyjs.org/docs/mdx/customizing-components/
const Page = props => {
  const post = props.data.markdownRemark

  return (
    <>
      <SEO 
        title={post.frontmatter.title} 
        description={post.frontmatter.description} 
        image={post.frontmatter.image} 
      />
      <TitlePage text={post.frontmatter.title} />
      <S.Content>        
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </S.Content>
    </>
  )
}

export const query = graphql`
  query Page($locale: String!, $title: String!) {
    markdownRemark(
      frontmatter: { title: { eq: $title } }
      fields: { locale: { eq: $locale } }
    ) {
      frontmatter {
        title
        description
        image
      }
      html
    }
  }
`

export default Page