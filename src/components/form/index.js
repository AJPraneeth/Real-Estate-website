import React from "react";

import {
  Container,
  FormGroup,
  Input,
  Select,
  Option,
  Label,
  SubmitInput,
  RangeInput,
  TextArea,
  Span,
  Button,
  FormSearch,
  ResetButton,
} from "./styles/form";

const Form = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};
Form.Select = ({ children, ...restProps }) => {
  return <Select {...restProps}>{children}</Select>;
};
Form.Option = ({ children, ...restProps }) => {
  return <Option {...restProps}>{children}</Option>;
};
Form.FormGroup = ({ children, ...restProps }) => {
  return <FormGroup {...restProps}>{children}</FormGroup>;
};
Form.TextArea = ({ children, ...restProps }) => {
  return <TextArea {...restProps}>{children}</TextArea>;
};
Form.Input = ({ children, ...restProps }) => {
  return <Input {...restProps} />;
};

Form.Button = ({ children, ...restProps }) => {
  return <Button {...restProps} />;
};

Form.ResetButton = ({ children, ...restProps }) => {
  return <ResetButton {...restProps} />;
};

Form.SubmitInput = ({ children, ...restProps }) => {
  return <SubmitInput {...restProps} />;
};

Form.RangeInput = ({ children, ...restProps }) => {
  return <RangeInput {...restProps} />;
};

Form.Label = ({ children, ...restProps }) => {
  return <Label {...restProps}>{children}</Label>;
};

Form.Span = ({ children, ...restProps }) => {
  return <Span {...restProps}>{children}</Span>;
};

Form.FormSearch = ({ children, ...restProps }) => {
  return <FormSearch {...restProps}>{children}</FormSearch>;
};

export default Form;
