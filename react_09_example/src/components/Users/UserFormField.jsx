import React from "react";
import TextField from "@mui/material/TextField";

import Skeleton from "@mui/material/Skeleton";

export default function UserFormField({
  label,
  value,
  name,
  type = "text",
  changeInput,
  isLoading,
}) {
  return !isLoading ? (
    <TextField
      required
      label={label}
      value={value}
      onChange={changeInput}
      type={type}
      name={name}
    />
  ) : (
    <Skeleton
      variant="rectangular"
      sx={{
        mb: 2,
        width: "inherit",
       height: 50
      }}
    />
  );
}
