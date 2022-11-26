import React from "react";
import { Link } from "react-router-dom";

import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import Stack from "@mui/material/Stack";

export default function UserTableItem({ user, removeUser }) {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.phone}</TableCell>
      <TableCell>{user.address}</TableCell>
      <TableCell>
        <Stack direction="row" spacing={2}>
          <Button
            component={Link}
            to={`/${user.id}`}
            variant="contained"
            startIcon={<EditIcon />}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            endIcon={<DeleteIcon />}
            onClick={removeUser}
          >
            Delete
          </Button>
        </Stack>
      </TableCell>
    </TableRow>
  );
}
