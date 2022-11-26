import React, {useMemo} from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";
import UserFormField from "./UserFormField";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

export default function UserForm({ createForm = false }) {
  const { userId } = useParams();
  const { user, changeFormItem, createFormUser, changeFormUser, isLoading } =
    useUser(userId);
  const navigation = useNavigate();

  const FIELDS = useMemo(() => [
    {
      label: "Name",
      value: user.name,
      type: "text",
      name: "name",
    },
    {
      label: "Email",
      value: user.email,
      type: "email",
      name: "email",
    },
    {
      label: "Phone",
      value: user.phone,
      type: "phone",
      name: "phone",
    },
    {
      label: "Address",
      value: user.address,
      type: "text",
      name: "address",
    },
  ], [user]);

  const changeInput = (e) => changeFormItem(e);

  const formCreate = async (e) => {
    e.preventDefault();
    await createFormUser();
    navigation(`/`);
  };

  const formChange = async (e) => {
    e.preventDefault();
    await changeFormUser();
    navigation(`/`);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { mb: 2, width: "inherit" },
        width: "40ch",
        mx: "auto",
      }}
      autoComplete="off"
      onSubmit={createForm ? formCreate : formChange}
    >
      {FIELDS.map((field) => (
        <UserFormField
          key={field.name}
          label={field.label}
          value={field.value}
          type={field.type}
          name={field.name}
          changeInput={changeInput}
          isLoading={isLoading}
        />
      ))}
      <Stack direction="row" spacing={2}>
        <Button type="submit" variant="contained" startIcon={<SendIcon />}>
          {createForm ? `Create user` : `Save changes`}
        </Button>
        <Button component={Link} to="/" variant="outlined">
          Back to Dashboard
        </Button>
      </Stack>
    </Box>
  );
}
