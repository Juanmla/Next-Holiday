import { makeStyles } from "@material-ui/core/styles";
import { Table, TableBody } from "@material-ui/core/";
import { TableCell } from "@material-ui/core";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "country", label: "Country", minWidth: 100 },
  { id: "description", label: "Description", minWidth: 170, align: "center" },
  { id: "type", label: "Type", align: "center", minWidth: 170 },
];

const TableData = ({ holidayData }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody tabIndex={-1}>
            {holidayData !== undefined &&
              holidayData.map((place) => (
                <TableRow>
                  <TableCell key={place.name}>{place.name}</TableCell>
                  <TableCell key={place.country.name}>
                    {place.country.name}
                  </TableCell>
                  <TableCell key={place.description}>
                    {place.description}
                  </TableCell>
                  <TableCell key={place.type} align="center">
                    {place.type}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TableData;
