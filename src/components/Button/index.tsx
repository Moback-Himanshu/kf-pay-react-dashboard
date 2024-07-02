import * as React from "react";
import Button from "@mui/material/Button";
import {  ButtonBaseProps } from "@mui/material";

export interface IGlobalButton  {
  buttonText: string;
  size: "small" | "medium" | "large";
  variant: "text" | "contained" | "outlined";
  color: "primary" | "secondary" | "success" | "error";
  disabled: boolean;
  onClick: Function;
  fullWidth:boolean;
}

const GlobalButton = (props: IGlobalButton): JSX.Element => {
  const { buttonText, size, variant, color, disabled, onClick,fullWidth } = props;
  return (
    <Button
      color={color}
      variant={variant}
      disabled={disabled}
      size={size}
      onClick={() => onClick()}
      fullWidth={fullWidth}
    >
      {buttonText}
    </Button>
  );
};
export default GlobalButton;
