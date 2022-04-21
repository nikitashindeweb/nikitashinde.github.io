import React from 'react';
import {
  Grid,
} from '@mui/material';


import LocationOnIcon from '@mui/icons-material/LocationOn';

import css from './Home.module.css'

class Education extends React.Component {

  render() {
    const { university, course_name, course_time, course_details, university_location, aggregate } = this.props

    return (
      <React.Fragment>
        <Grid container justifyContent="center">
          <Grid item md={4} className={css['university']}>{university}</Grid>
          <Grid item md={6} className={css['course_name']}>{course_name}</Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item md={4} className={css['course_time']}>{course_time}</Grid>
          <Grid item md={6} className={css['course_details']}>
            <Grid container justifyContent="center">
              <Grid item md={12}>{course_details}</Grid>
              <Grid item md={12} className={css['margin-top-10']}>
                <span className={css['aggregate']}>{aggregate}</span>
                <span className={css['university_location']}><LocationOnIcon fontSize="small" /> <span>{university_location}</span></span>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}

export default Education;