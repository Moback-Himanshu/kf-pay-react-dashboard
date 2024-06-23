import * as React from "react";
import Button from "@mui/material/Button";
import {  ButtonBaseProps } from "@mui/material";

export interface IGlobalButton extends ButtonBaseProps {
  className?: string;
  buttonText: string;
  size: "small" | "medium" | "large";
  variant: "text" | "contained" | "outlined";
  color: "primary" | "secondary" | "success" | "error";
  disabled: boolean;
  onClick: () => void;
}

const GlobalButton = (props: IGlobalButton): JSX.Element => {
  return (
    <Button
      color={props.color}
      variant={props.variant}
      disabled={props.disabled}
      size={props.size}
      onClick={() => props.onClick()}
    >
      {props.buttonText}
    </Button>
  );
};
export default GlobalButton;
