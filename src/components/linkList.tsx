import { useDispatch, useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { deleteUrl, getAllUrls } from "../store/actions";
import { Dispatch, useEffect } from "react";

const LinkList = () => {
  const urls: readonly IUrl[] = useSelector((state: UrlState) => state.urls);
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(getAllUrls());
  }, []);

  return (
    <div className="box">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="left">Url</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {urls.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="left">
                  <a target="_blank" href={row.url}>
                    {row.url}
                  </a>
                </TableCell>
                <TableCell align="right">
                  <Button onClick={() => dispatch(deleteUrl(row.id))}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default LinkList;
