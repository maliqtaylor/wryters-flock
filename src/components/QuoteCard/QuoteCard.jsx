import React from "react";


function QuoteCard({user, quote, handleDeleteQuote}) {
    return (
        <>
        <div>
            <div>

            <h2>Quote:</h2>
            <h3>{quote.quote}</h3>
            <h2>Author:</h2>
            <h3>{quote.author}</h3>
            <h2>Added By:</h2>
            <h3>{quote.addedBy.name}</h3>
            </div>
            <button type="submit" className="deleteQuote"
            onClick={() => handleDeleteQuote(quote._id)}
            >
                DELETE
            </button>
        </div>
        </>
    )
}

export default QuoteCard;

// import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import { red } from '@material-ui/core/colors';
// import DescriptionTwoToneIcon from '@material-ui/icons/DescriptionTwoTone';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import ThumbUpTwoToneIcon from '@material-ui/icons/ThumbUpTwoTone';
// import ThumbDownTwoToneIcon from '@material-ui/icons/ThumbDownTwoTone';
// import DeleteOutlineTwoToneIcon from '@material-ui/icons/DeleteOutlineTwoTone';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: 500,
//     margin: 10,
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },

// }));

// function QuoteCard({ user, quote, handleDeleteQuote }) {


//   return (
//     <Card className={classes.root}>
//       <CardHeader
//         subheader={quote.addedBy.name}
//       />
//       <CardContent>
//         <Typography variant="body2" color="textSecondary" component="p">
//           Quote: {quote.quote}
//         </Typography>
//         <Typography variant="body2" color="textSecondary" component="p">
//           Author: {quote.author}
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="like">
//           <ThumbUpTwoToneIcon />
//         </IconButton>
//         <IconButton aria-label="like">
//           <ThumbDownTwoToneIcon />
//         </IconButton>

//         |

//         {user._id === entry.owner._id ?
//           <IconButton aria-label="like">
//             <DeleteOutlineTwoToneIcon />
//           </IconButton>
//           : null
//         }

//         <IconButton
//           className={clsx(classes.expand, {
//             [classes.expandOpen]: expanded,
//           })}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </IconButton>
//       </CardActions>
//     </Card>
//   )
// }


// export default QuoteCard;