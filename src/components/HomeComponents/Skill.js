import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
    skillText: {
      color: 'white'
    }
  },
}));

const skillImage = {
  javascript: require('../../assets/skillSvg/javascript.svg'),
  typescript: require('../../assets/skillSvg/typescript.svg'),
  html5: require('../../assets/skillSvg/html5.svg'),
  css3: require('../../assets/skillSvg/css3.svg'),
  reactjs: require('../../assets/skillSvg/reactjs.svg'),
  materialui: require('../../assets/skillSvg/materialui.svg'),
  redux: require('../../assets/skillSvg/redux.svg'),
  graphql: require('../../assets/skillSvg/graphql.svg'),
  nodejs: require('../../assets/skillSvg/nodejs.svg'),
  mongodb: require('../../assets/skillSvg/mongodb.svg'),
  sql: require('../../assets/skillSvg/sql.svg'),
  redis: require('../../assets/skillSvg/redis.svg')
}

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Chip
                avatar={<Avatar alt="Natacha" src={skillImage.javascript} className={classes.skillText}/>}
                label="Javascript"
                color="secondary"
    />
    <Chip
                avatar={<Avatar alt="Natacha" src={skillImage.typescript} />}
                label="Typescript"
                color="secondary"
    />
    <Chip
                avatar={<Avatar alt="Natacha" src={skillImage.html5} />}
                label="HTML"
                color="secondary"
    />
    <Chip
                avatar={<Avatar alt="Natacha" src={skillImage.css3} />}
                label="CSS"
                color="secondary"
    />
    <Chip
                avatar={<Avatar alt="Natacha" src={skillImage.reactjs}/>}
                label="ReactJs"
                color="secondary"
    />
    <Chip
                avatar={<Avatar alt="Natacha" src={skillImage.materialui}/>}
                label="MaterialUi"
                color="secondary"
    />
    <Chip
                avatar={<Avatar alt="Natacha" src={skillImage.redux} />}
                label="Redux"
                color="secondary"
    />
    <Chip
                avatar={<Avatar alt="Natacha" src={skillImage.graphql} />}
                label="GraphQL"
                color="secondary"
    />
    <Chip
                avatar={<Avatar alt="Natacha" src={skillImage.nodejs} />}
                label="NodeJs"
                color="secondary"
    />
    <Chip
                avatar={<Avatar alt="Natacha" src={skillImage.mongodb} />}
                label="MongoDB"
                color="secondary"
    />
    <Chip
                avatar={<Avatar alt="Natacha" src={skillImage.redis} />}
                label="Redis"
                color="secondary"
    />
    </div>
  )
}