import * as React from "react";
import {
  Box,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  SelectProps,
  SelectChangeEvent,
} from "@mui/material";


export interface IGlobalDropdown extends Omit<SelectProps, 'onChange'> {
  dropdownValue: any;
  onChange?: (event: SelectChangeEvent<any>, child: React.ReactNode) => void;
}

const GlobalDropdown = (props: IGlobalDropdown): JSX.Element => {

  const { onChange, ...rest } = props;


  // const handleChange = (event: SelectChangeEvent<any>) => {
  //   setDropdownValue(event.target.value as string);
  // };

  return (
    <Box sx={{ display: "flex"}}>
      <FormControl variant="standard" fullWidth={props.fullWidth}>
        {/* <InputLabel id="demo-simple-select-label">Select</InputLabel> */}
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="Select"
          value={props.dropdownValue}
          onChange={props.onChange}
          {...rest}
        >
          {/* <MenuItem value={1}>Markets</MenuItem>
          <MenuItem value={2}>Reports By Type</MenuItem> */}
          {props.children}
        </Select>
      </FormControl>
    </Box>
  );
};
export default GlobalDropdown;