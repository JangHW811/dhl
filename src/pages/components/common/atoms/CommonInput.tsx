import { Input, InputProps, Row } from 'antd';
import React, { FC } from 'react';
import styled, { css } from 'styled-components';

interface HeaderInterface extends InputProps {
  errorMessage?: string;
}
const CommonInput: FC<HeaderInterface> = (props) => {
  return (
    <Row>
      <ComInput {...props} errorMessage={!!props.errorMessage} />
      <ErrorMessage>{props.errorMessage}</ErrorMessage>
    </Row>
  );
};

const ComInput = styled(Input)<{ errorMessage: boolean }>`
  ${({ errorMessage }) =>
    errorMessage &&
    css`
      border-color: red;
    `}
  height: 40px;
`;

const ErrorMessage = styled.p`
  padding: 6px 12px;
  color: red;
  font-size: 14px;
`;

export default CommonInput;
