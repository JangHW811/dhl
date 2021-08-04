import { Input, InputProps, Row } from 'antd';
import React, { FC } from 'react';
import styled, { css } from 'styled-components';

interface HeaderInterface extends InputProps {
  message?: string;
}
const CommonInput: FC<HeaderInterface> = (props) => {
  return (
    <Row>
      <ComInput {...props} message={props.message} />
      {!!props.message && <ErrorMessageFont>{props.message}</ErrorMessageFont>}
    </Row>
  );
};

const ComInput = styled(Input)<{ message?: string }>`
  ${({ message }) =>
    message &&
    css`
      border-color: red;
    `}
  height: 40px;
`;

const ErrorMessageFont = styled.p`
  padding: 6px 12px;
  color: red;
  font-size: 14px;
`;

export default CommonInput;
