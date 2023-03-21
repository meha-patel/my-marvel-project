import * as React from "react";
import {styled} from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import CardMedia from "@mui/material/CardMedia";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {useDispatch} from "react-redux";
import {updateFavourite} from "../../store/actions/marvel-actions";
import {Box} from "@mui/system";

const ExpandMore = styled((props) => {
  const {expand, ...other} = props;
  return <IconButton {...other} />;
})(({theme, expand}) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ExpandableDescriptionCard = ({character}) => {
  const [expanded, setExpanded] = React.useState(true);
  const dispatch = useDispatch();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const favouriteHandler = (id) => {
    dispatch(updateFavourite(id));
  };

  const {id, name, comics, thumbnail, isFavourite} = character;

  return (
    <div>
      {character && (
        <Box
          sx={{
            display: "flex",
            width: "100%",
            margin: "auto",
            justifyContent: "center",
          }}
        >
          <Card
            sx={{
              display: "block",
              maxWidth: 345,
              minWidth: 300,
              margin: 4,
              boxShadow: 3,
            }}
          >
            <CardHeader
              sx={{maxWidth: 345, minWidth: 300, cursor: "pointer"}}
              title={name}
            />
            <CardMedia
              component="img"
              height="194"
              image={`${thumbnail.path}/portrait_incredible.jpg`}
              alt="Marvel Image"
              sx={{cursor: "pointer"}}
            />
            <CardActions
              disableSpacing
              sx={{display: "flex", justifyContent: "flex-end"}}
            >
              <IconButton
                color={isFavourite ? "primary" : "gray"}
                aria-label="add to favorites"
                onClick={() => favouriteHandler(id)}
              >
                <FavoriteIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Comics:</Typography>
                {comics.items.map((comic) => (
                  <Typography paragraph key={comic.name}>{comic.name}</Typography>
                ))}
              </CardContent>
            </Collapse>
          </Card>
        </Box>
      )}
    </div>
  );
};

export default ExpandableDescriptionCard;
