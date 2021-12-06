import { Link } from "react-router-dom";

import holidayimg from "../assets/holidayimg.jpg";
import Grid from "@material-ui/core/Grid";
import Typrography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  img: {
    width: "100%",
    height: "auto",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  t1: {
    position: "absolute",
    fontSize: "80px",
    fontFamily: "Segoe UI",
    color: "black",
    top: "60%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    letterSpacing: "4px",
    textShadow: "3px 3px goldenRod",
    fontWeight: "bold",
    "&:hover": {
      color: "#F5FFFA",
    },
  },
  t2: {
    position: "absolute",
    fontSize: "25px",
    color: "black",
    top: "70%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    letterSpacing: "1px",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid>
        <Link to="/menu">
          <Typrography variant="h1" className={classes.t1}>
            Nxt Holiday
          </Typrography>
          <Typrography variant="h2" className={classes.t2}>
            Discover a new adventure
          </Typrography>
        </Link>
        <img src={holidayimg} alt="vacation.img" className={classes.img} />
      </Grid>
    </div>
  );
};

export default Home;
