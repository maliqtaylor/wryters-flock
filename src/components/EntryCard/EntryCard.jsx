import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import DescriptionTwoToneIcon from '@material-ui/icons/DescriptionTwoTone';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ThumbUpTwoToneIcon from '@material-ui/icons/ThumbUpTwoTone';
import ThumbDownTwoToneIcon from '@material-ui/icons/ThumbDownTwoTone';
import DeleteOutlineTwoToneIcon from '@material-ui/icons/DeleteOutlineTwoTone';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    margin: 10,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },

}));

function EntryCard({ user, entry, props }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <Card className={classes.root}>
      <CardHeader
        title={entry.title}
        subheader={entry.owner.name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Genre: {entry.genre}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Category: {entry.classification}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="like">
          <ThumbUpTwoToneIcon />
        </IconButton>
        <IconButton aria-label="like">
          <ThumbDownTwoToneIcon />
        </IconButton>

        |
        < Link to={
          {
            pathname: '/entry',
            state: { content: entry.content.content, id_num: entry._id }
          }} >
          <IconButton aria-label="like">
            <DescriptionTwoToneIcon />
          </IconButton>
        </Link>
        |

        {user._id === entry.owner._id ?
          <IconButton aria-label="like">
            <DeleteOutlineTwoToneIcon 
              onClick ={() => props.handleDeleteEntry(entry._id)}
            />
          </IconButton>
          : null
        }

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>
            {entry.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default EntryCard;