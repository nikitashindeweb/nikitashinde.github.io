import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Divider,
  Link,
  Button
} from '@mui/material';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import css from './Home.module.css';

import Heading from './Heading';
import Education from './Education';
import Career from './Career';
import SkillRating from './SkillRating';


class Home extends React.Component {

  getAge = () => {
    const current_year = (new Date()).getFullYear();
    const birth_year = 1998
    const age = current_year - birth_year;

    return age;
  }

  render() {

    return (
      <React.Fragment>
        <Heading title={`I'm Webdeveloper`} />

        <Box>
          <Grid container justifyContent="center" className={css['margin-top-30']}>
            {/* About  */}
            <Grid item md={2}>
              <Typography variant="h5" className={css['heading']}>
                About Me
              </Typography>
              <p className={css['about_me_text']}>
                I am an allround web developer. I have knowlege of backend as well as front end technologies. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you'll learn faster and much more. As the saying goes: 'two heads are better than one'.
              </p>
            </Grid>

            {/* Pic */}
            <Grid item md={2}>
              <Grid
                component="img"
                className={css['profile_pic']}
                sx={{
                  height: 200,
                  width: 200,
                }}
                alt="Nikita Shinde."
                src="profile.jpg"
              />
            </Grid>

            {/* Details */}
            <Grid item md={2}>
              <Typography variant="h5" className={css['heading']}>
                Details
              </Typography>

              <div>
                <div className={`${css.detail_main}`}>
                  <div className={`${css.detail_label}`}>Name</div>
                  <div className={`${css.detail_info}`}>Nikita Shinde</div>
                </div>

                <div className={`${css.detail_main}`}>
                  <div className={`${css.detail_label}`}>Age</div>
                  <div className={`${css.detail_info}`}>{this.getAge()}</div>
                </div>

                <div className={`${css.detail_main}`}>
                  <div className={`${css.detail_label}`}>Location</div>
                  <div className={`${css.detail_info}`}>Kalyan, Mumbai, India</div>
                </div>

                <div className={`${css.detail_main}`}>
                  <Link href="https://www.linkedin.com/in/nikita-shinde-271a48168" rel="stylesheet" target="_blank" >
                    <LinkedInIcon />
                  </Link>
                  <Link href="https://github.com/nikitashindeweb" rel="stylesheet" target="_blank" >
                    <GitHubIcon />
                  </Link>
                </div>

              </div>
            </Grid>
          </Grid>
        </Box>

        <Grid container justifyContent="center" className={`${css['margin-top-30']} ${css['margin-bottom-30']}`}>
          <Button variant="contained" className={css['resume_button']} href='resume.pdf' target='_blank' rel='noopener noreferrer'>
            Resume
          </Button>
        </Grid>

        {/* Education & Career */}
        <Box className={css['grey_box']}>
          <Heading
            title={`Experiences`}
            thought={`Thinking should become your capital asset, no matter whatever ups and downs you come across in your life.`}
            thought_by={`A.P.J. Abdul Kalam`}
          />

          <Grid container alignItems="center" justifyContent="center" className={css['margin-top-30']}>
            <Grid item md={7}>
              <Typography variant="h5" className={css['sub-title']}>
                Education
              </Typography>
            </Grid>
          </Grid>
          <Grid container alignItems="center" justifyContent="center">
            <Grid item md={8}>
              <Education
                university={'Mumbai University'}
                course_name={'MSC Computer Science'}
                course_time={'Mar 2018 - May 2020'}
                course_details={'These two years are very different in my life. Education became online as pandemic started, and I grew my skills into Cloud & Robotics.'}
                university_location={'Kalyan, Mumbai'}
                aggregate={`A Grade`}
              />

              <Education
                university={'Pune University'}
                course_name={'B.S.C. Computer Science'}
                course_time={'Mar 2015 - May 2018'}
                course_details={'Here I start my journey as a programmer, where I am attracted to coding, realizing this is what I want to learn. Here I start my basics of coding in languages like PHP, JAVA & HTML & grow further.'}
                university_location={'Baramati, Pune'}
                aggregate={`70%`}
              />

              <Education
                university={'Pune University'}
                course_name={'H.S.C Science'}
                course_time={'Mar 2013 - May 2015'}
                course_details={`In these years I enjoyed doing science, math and biology. I realized in my scope of interest that I wanted to do something with maths & solving problems & logic building, and so I started my career towards it.`}
                university_location={'Baramati, Pune'}
                aggregate={`58%`}
              />

              <Education
                university={'State Board Maharashtra, India'}
                course_name={'S.S.C'}
                course_time={'Mar 2012 - May 2013'}
                course_details={'Basic education is nothing but the foundation of what we are going to be, here I learned a lot from education to manners.'}
                university_location={'Baramati, Pune'}
                aggregate={`79%`}
              />
              <Divider variant="middle" />
            </Grid>
          </Grid>

          <Grid container alignItems="center" justifyContent="center" className={css['margin-top-30']}>
            <Grid item md={7}>
              <Typography variant="h5" className={css['sub-title']}>
                Careers
              </Typography>
            </Grid>
          </Grid>

          <Grid container alignItems="center" justifyContent="center">
            <Grid item md={8}>
              <Career
                company={'Citiustech Tech'}
                job_name={'Senior Software Engineer'}
                job_duration={'March 2022 - current'}
                job_details={'Working as Senior Software Engineer on MERN stack. The application is ReactJs based and uses nodeJs RestApi’s/GraphQL for backend.'}
                company_location={'Ambernath, Mumbai'}
              />

              <Career
                company={'Immenso Tech'}
                job_name={'Web Developer'}
                job_duration={'Oct 2019 - Feb 2022'}
                job_details={'Working as a Developer on ReactJs, NodeJs & MySql. The application is ReactJs based and uses nodeJs RestApi’s for backend. As a team we are working in a fully scrum way. As well have working experience in Laravel.'}
                company_location={'Ambernath, Mumbai'}
              />

              {/* 
              <Career
                company={'WebTodays'}
                job_name={'Full-stack Developer'}
                job_duration={'Feb 2019 - Oct 2019'}
                job_details={'As a Full-stack developer here are my responsibilities like understanding client requirements & providing the given application to the client on time. Here I worked on PHP , HTML while using ySql as the backend.'}
                company_location={'Kalyan, Mumbai'}
              />
               */}

              <Career
                company={'Bharatam research development India'}
                job_name={'Full-stack Developer'}
                job_duration={'May 2018 -  Oct 2019'}
                job_details={'As a Full-stack developer here are my responsibilities like understanding client requirements & providing the given application to the client on time. Here I worked on PHP, HTML while using Sql as the backend.'}
                company_location={'Kalyan, Mumbai'}
              />
            </Grid>
          </Grid>

        </Box>

        {/* Abilities */}
        <Box>
          <Heading
            title={`Abilities`}
            thought={`It's hard to beat a person who never gives up.`}
            thought_by={`Babe Ruth`}
          />

          <Grid container alignItems="center" justifyContent="center" className={css['margin-top-30']}>
            <Grid item md={7}>
              <Typography variant="h5" className={css['sub-title']}>
                Skills
              </Typography>
            </Grid>
          </Grid>

          <Grid container alignItems="center" justifyContent="center">
            <Grid item md={7}>
              <Grid container alignItems="center">
                <SkillRating title="ReactJs" rating={5} />
                <SkillRating title="NodeJs" rating={4} />
                <SkillRating title="GraphQl" rating={3} />
                <SkillRating title="ExpressJs" rating={3} />
                <SkillRating title="MySql" rating={5} />
                <SkillRating title="Laravel Framework" rating={5} />
                <SkillRating title="PHP" rating={5} />
                <SkillRating title="PostgreSql" rating={2} />
                <SkillRating title="Jquery" rating={5} />
                <SkillRating title="Scrum" rating={3} />
                <SkillRating title="Command line Inteface" rating={3} />
                <SkillRating title="Javascript" rating={4} />
                <SkillRating title="Ajax" rating={5} />
                <SkillRating title="AdonisJs Framework(nodeJs)" rating={5} />
                <SkillRating title="MaterialUi Framework(reactJs)" rating={5} />

              </Grid>
            </Grid>

            {/* TODO git link */}
            <Grid item md={8}>
              <Divider variant="middle" />
            </Grid>
          </Grid>

          <Grid container alignItems="center" justifyContent="center" className={css['margin-top-30']}>
            <Grid item md={7}>
              <Typography variant="h5" className={css['sub-title']}>
                Languages
              </Typography>
            </Grid>
          </Grid>

          <Grid container alignItems="center" justifyContent="center">
            <Grid item md={7}>
              <Grid container alignItems="center">
                <SkillRating title="English" rating={5} />
                <SkillRating title="Marathi" rating={5} />
                <SkillRating title="Hindi" rating={5} />
              </Grid>
            </Grid>
            <Grid item md={8}>
              <Divider variant="middle" />
            </Grid>
          </Grid>


          <Grid container alignItems="center" justifyContent="center" className={css['margin-top-30']}>
            <Grid item md={7}>
              <Typography variant="h5" className={css['sub-title']}>
                Tools
              </Typography>
            </Grid>
          </Grid>

          <Grid container alignItems="center" justifyContent="center">
            <Grid item md={7}>
              <Grid container alignItems="center">
                <SkillRating title="Git / Git Lab (3 year)" rating={5} />
                <SkillRating title="Jira" rating={4} />
                <SkillRating title="Insomnia" rating={5} />
                <SkillRating title="PostMan" rating={4} />
                <SkillRating title="Slack" rating={4} />
                <SkillRating title="Telescopes" rating={4} />
                <SkillRating title="VisualCode" rating={5} />
                <SkillRating title="Sublime" rating={5} />
                <SkillRating title="RequestBin" rating={5} />
                <SkillRating title="Linux" rating={5} />
                <SkillRating title="Windows" rating={5} />
                <SkillRating title="FileZilla" rating={3} />
              </Grid>
            </Grid>
          </Grid>
        </Box>

        {/* Project */}
        {/* TODO */}
        {/* <Box className={css['grey_box']}>
          <Heading title={`Projects`} />
        </Box> */}

        <Box className={css['dark_box']}>
          <Heading
            title={`Contact Me`}
            thought={`Start where you are. Use what you have. Do what you can.`}
            thought_by={`Arthur Ashe`} />

          <Grid container alignItems="center" justifyContent="center" className={`${css['margin-top-30']} ${css['margin-bottom-30']}`} >
            <Grid item md={4} >
              <p><Link>shindenikita111998@gmail.com</Link></p>
              <p><Link>8668785510</Link></p>

              <p>
                <LinkedInIcon className={'linked_in'} />
                <Link href="https://www.linkedin.com/in/nikita-shinde-271a48168" rel="stylesheet" target="_blank">
                  https://www.linkedin.com/in/nikita-shinde-271a48168
                </Link>
              </p>

            </Grid>
          </Grid>
        </Box>

      </React.Fragment >
    )
  }
}

export default Home;