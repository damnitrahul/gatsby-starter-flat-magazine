import React from 'react'
import PropTypes from 'prop-types'
import {Helmet} from 'react-helmet'
import {useStaticQuery, graphql} from 'gatsby'
import ogbanner from '../../images/ogbanner.jpg'
function SEO({description, meta, title}) {
  const data = useStaticQuery(
    graphql`
      query {
        sanitySiteSettings {
          description
          title
          siteURL
          author {
            name
          }
        }
      }
    `
  )
  // Formatting SiteURL if it ends with '/'
  const formatSiteURL = data.sanitySiteSettings.siteURL
  const lastChar = formatSiteURL.slice(formatSiteURL.length - 1)
  const siteURL = lastChar === '/' ? formatSiteURL.slice(0, -1) : formatSiteURL

  const metaDescription = description || data.sanitySiteSettings.description
  const metaTitle = title || data.sanitySiteSettings.title
  const metaBanner = siteURL + ogbanner

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en'
      }}
      title={metaTitle}
      titleTemplate={`%s | ${data.sanitySiteSettings.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: metaTitle
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: data.sanitySiteSettings.author.name
        },
        {
          name: `twitter:title`,
          content: metaTitle
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ]
        .concat(meta)
        .concat([
          {
            property: `twitter:image`,
            content: metaBanner
          },
          {
            property: `og:image`,
            content: metaBanner
          }
        ])}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired
}

export default SEO
