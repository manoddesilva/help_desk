import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import StatusButton from "./mini/StatusButton";
import CategoryButton from "./mini/CategoryButton";
import zIndex from "@mui/material/styles/zIndex";

const columns = [
  { id: "taskId", label: "Task ID", minWidth: 100 },
  { id: "raisedBy", label: "Raised By", minWidth: 100 },
  {
    id: "department",
    label: "Department",
    minWidth: 100,
    align: "center",
  },
  {
    id: "date",
    label: "Date",
    minWidth: 100,
    align: "center",
  },
  {
    id: "category",
    label: "Category",
    minWidth: 100,
    align: "center",
  },
  {
    id: "status",
    label: "Status",
    minWidth: 100,
    align: "center",
  },
];

function createData(taskId, raisedBy, department, date, category, status) {
  return { taskId, raisedBy, department, date, category, status };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263, "other", "pending approval"),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  // createData('France', 'FR', 67022000, 640679),
  // createData('United Kingdom', 'GB', 67545757, 242495),
  // createData('Russia', 'RU', 146793744, 17098246),
  // createData('Nigeria', 'NG', 200962417, 923768),
  // createData('Brazil', 'BR', 210147125, 8515767),
];

const HomeTable1 = ({rows} ) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [categoryFilter, setCategoryFilter] = React.useState("All");
  const [statusFilter, setStatusFilter] = React.useState("All");
  

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChangeCategoryFilter = (event) => {
    setCategoryFilter(event.target.value);
    setPage(0);
  };

  const handleChangeStatusFilter = (event) => {
    setStatusFilter(event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", height: "400px", overflow: "hidden"  }} style={{zIndex:'-100'}}>
      <TableContainer sx={{ maxHeight: 350 }}>
        <Table /*stickyHeader*/ aria-label="sticky table">
          <TableHead >
            {/* <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, fontWeight: "bold" }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell key="buttons" style={{ minWidth: 150 }}></TableCell>
            </TableRow> */}
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} 
                align={column.align}
                style={{ minWidth: column.minWidth, fontWeight: "bold" }}>
                  
                  {column.id === "category" ? (
                    <select
                      value={categoryFilter}
                      onChange={handleChangeCategoryFilter}
                      style={{ width: "100%", fontWeight: "bold", alignItems:"center" }}
                    >
                      <option value="All">Category</option>
                      <option value="part and machinery">Part & Machinery</option>
                      <option value="building">Building</option>
                      <option value="fabrication">Fabrication</option>
                      <option value="health and safety">Health and Safety</option>
                      <option value="furniture">Furniture</option>
                      <option value="other">Other</option>
                      {/* Add more options based on your categories */}
                    </select>
                  ) :
                  column.id === "status" ? (
                    <select
                      value={statusFilter}
                      onChange={handleChangeStatusFilter}
                      style={{ width: "100%", fontWeight: "bold", alignItems:"center" }}
                    >
                      <option value="All">Status</option>
                      <option value="pending">Pending </option>
                      <option value="staff assigned">Staff Assigned</option>
                      <option value="send to manager">Send to Manager</option>
                      <option value="pending approval">Pending Approval</option>
                      <option value="approved">Approved</option>
                      <option value="rejected">Rejected</option>
                      <option value="completed">Compleated</option>
                      <option value="started">Started</option>
                      {/* Add more options based on your categories */}
                    </select>
                  ) :
                  (
                    column.label
                  )}
                </TableCell>
              ))}
              <TableCell key="buttons" style={{ minWidth: 150 }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .filter(
                (row) =>
                  categoryFilter === "All" || row.category === categoryFilter
              )
              .filter(
                (row) =>
                  statusFilter === "All" || row.status === statusFilter
              )
              .map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.taskId}
                  >
                    {/* {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })} */}
                    <TableCell key={columns[0].id}>{row.taskId}</TableCell>

                    <TableCell key={columns[1].id}>{row.raisedBy}</TableCell>

                    <TableCell key={columns[2].id} align={columns[2].align}>
                      {row.department}
                    </TableCell>

                    <TableCell key={columns[3].id} align={columns[3].align}>
                      {row.date}
                    </TableCell>

                    <TableCell key={columns[4].id} align={columns[4].align}>
                      <CategoryButton category={row.category}></CategoryButton>
                    </TableCell>

                    <TableCell key={columns[5].id} align={columns[5].align}>
                      <StatusButton status={row.status}></StatusButton>
                    </TableCell>

                    <TableCell
                      key="buttons"
                      align="center"
                      style={{ minWidth: 150 }}
                    >
                      <Button variant="contained" style={{ height: "25px" }}>
                        VIEW
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
export default HomeTable1;