import React from 'react'
import { GridList, GridListTile, Typography } from '@material-ui/core';

const Interests = props => {
  const { classes, onClick, history } = props

  return (
    // <h1>Hit interests</h1>
    <center>
      <GridList cellHeight={150}>
        <GridListTile cols={2} >
          <Typography>What Interests You?</Typography>
        </GridListTile>
      </GridList>
    </center>
  )
}

export default Interests;