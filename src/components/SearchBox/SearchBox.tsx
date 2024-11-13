import React from "react";
import TextField from "@mui/material/TextField";
import { SearchBoxProps } from "@/types/news";
import Grid2 from "@mui/material/Grid2";

const SearchBox: React.FC<SearchBoxProps> = ({
  placeholder,
  onChange,
  value,
  ...props
}) => {
  return (
    <Grid2 container sx={{ my: 3 }}>
      <Grid2 size={{ xs: 12, lg: 6 }}>
        <TextField
          variant="outlined"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          fullWidth
          {...props}
        />
      </Grid2>
    </Grid2>
  );
};

export default SearchBox;
