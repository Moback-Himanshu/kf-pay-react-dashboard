import * as React from "react";
import TextField, { StandardTextFieldProps } from "@mui/material/TextField";

export interface IGlobalTextField {
  name: string;
  type?: string;
  onChange: Function;
  label: string;
  value: string;
  placeholder?: string;
  fullWidth:boolean;
}

const GlobalTextField = (props: IGlobalTextField): JSX.Element => {
 
  const { name, type, value, label, placeholder, onChange,fullWidth } = props;
  return (
    <TextField
      name={name}
      type={type || "text"}
      value={value}
      placeholder={placeholder}
      label={label}
      onChange={(e) => onChange(e)}
      fullWidth={fullWidth}
    />
  );
};
export default GlobalTextField;
