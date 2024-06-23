import * as React from "react";
import TextField, { StandardTextFieldProps } from "@mui/material/TextField";

export interface IGlobalTextField extends StandardTextFieldProps {
  type?: string;
}

const GlobalTextField = (props: IGlobalTextField): JSX.Element => {
  const { type, ...rest } = props;
  return (
    <TextField
      {...rest}
      type={props.type}
    />
  );
};
export default GlobalTextField;
