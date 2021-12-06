import { useState, useEffect } from "react";
import useHoliday from "../hooks/useHoliday";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import InputText from "../components/InputText";
import TableData from "../components/TableData";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const Menu = () => {
  const classes = useStyles();
  const [hits, fetchData] = useHoliday("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, [hits]);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <InputText onFormSubmit={fetchData} />
        </Grid>
        <Grid item xs={12}>
          {loading ? <TableData holidayData={hits} /> : <div>Loading...</div>}
        </Grid>
      </Grid>
    </div>
  );
};

export default Menu;
