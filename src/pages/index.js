import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'

const IndexPage = ({ data }) => {
  console.log(data.allDodgyShopsCsv.edges)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>黑店list</h1>
      <List aria-label="">
        {data.allDodgyShopsCsv.edges.map(({ node }, index) => (
          <ListItem alignItems="flex-start">
            {/* <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar> */}
            <ListItemText
              primary={
                <Typography
                  component="span"
                  variant="body1"
                  color="textPrimary"
                >
                  {node.name_zh}
                </Typography>
              }
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    {node.address_zh}
                  </Typography>
                  <br />
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    {node.details}
                  </Typography>
                </>
              }
            />
          </ListItem>
        ))}
      </List>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage

export const IndexQuery = graphql`
  query {
    allDodgyShopsCsv {
      edges {
        node {
          name_zh
          sub_district_zh
          address_zh
          details
        }
      }
    }
  }
`
