import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  textField: {
    alignItems: "center",
  },
}));

const InputText = ({ onFormSubmit }) => {
  const classes = useStyles();
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onFormSubmit(term);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="outlined-full-width"
        className={classes.textField}
        onChange={(e) => setTerm(e.target.value)}
        value={term}
        label="Search"
        style={{ margin: 8 }}
        placeholder="Country"
        helperText="Find out amazing places !"
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        variant="filled"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
};

export default InputText;
