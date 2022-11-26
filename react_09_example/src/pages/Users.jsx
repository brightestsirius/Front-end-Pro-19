import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import useUsers from "./../hooks/useUsers";
import UsersTable from "./../components/Users/UsersTable";

import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function Users() {
  const { users, removeUser, isLoading } = useUsers();

  return (
    <Fragment>
      <h1>Users</h1>
      <Button sx={{ mb: 2 }} component={Link} to="/create" variant="contained">
        Create user
      </Button>
      {!isLoading ? (
        <UsersTable users={users} removeUser={removeUser} />
      ) : (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </Fragment>
  );
}
