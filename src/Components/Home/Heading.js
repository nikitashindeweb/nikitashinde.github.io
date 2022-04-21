import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Divider,
} from '@mui/material';


import css from './Home.module.css'

class Heading extends React.Component {

  render() {
    const { title, thought, thought_by } = this.props

    return (
      <Box>
        <Grid container alignItems="center" justifyContent="center" className={css['margin-top-30']}>
          <Grid item md={12}>
            <Typography variant="h2" className={css['heading']}>{title}</Typography>
          </Grid>

          {thought && <React.Fragment>
            <Grid item md={12} className={css['though_text']}>“{thought}”</Grid>
            <Grid item md={12} className={css['though_by']}>– {thought_by}</Grid>
          </React.Fragment>}

          <Grid item md={8}>
            <Divider variant="middle" />
          </Grid>
        </Grid>
      </Box>
    )
  }
}

export default Heading;