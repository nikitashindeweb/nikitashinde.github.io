import React from 'react';
import {
  Grid,
  Rating
} from '@mui/material';

import css from './Home.module.css'

class SkillRating extends React.Component {

  render() {
    const { title, rating } = this.props

    return (
      <Grid item md={6}>
        <Grid container>
          <Grid item md={7} className={css['skill_title']}>
            <span>{title}</span>
          </Grid>

          <Grid item md={5}>
            <Rating name="read-only" value={rating} readOnly size="small" />
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default SkillRating;