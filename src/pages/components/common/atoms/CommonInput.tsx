import { Input, InputProps } from 'antd';
import React, { FC } from 'react';
import styled from 'styled-components';

interface HeaderInterface extends InputProps {}
const CommonInput: FC<HeaderInterface> = (props) => {
  return <ComInput {...props} />;
};

const ComInput = styled(Input)`
  height: 40px;
`;

export default CommonInput;
