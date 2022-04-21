import React from 'react';
import {
  Grid,
} from '@mui/material';


import LocationOnIcon from '@mui/icons-material/LocationOn';

import css from './Home.module.css'

class Career extends React.Component {

  render() {
    const { company, job_name, job_duration, job_details, company_location } = this.props

    return (
      <React.Fragment>
        <Grid container justifyContent="center">
          <Grid item md={4} className={css['company']}>{company}</Grid>
          <Grid item md={6} className={css['job_name']}>{job_name}</Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item md={4} className={css['job_duration']}>{job_duration}</Grid>
          <Grid item md={6} className={css['job_details']}>
            <span>{job_details}</span>
            <p className={css['company_location']}><LocationOnIcon fontSize="small" /> <span>{company_location}</span></p>
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}

export default Career;