import React, { FC } from 'react';
import { CSSProperties } from 'styled-components';

interface PropTypes {
  marginVertical?: number | string;
  marginHorizontal?: number | string;
  color?: string;
  height?: number;
  flex?: number;
  style?: CSSProperties;
}

const HorizontalLine: FC<PropTypes> = ({ marginHorizontal = -1, ...props }) => (
  <div
    style={{
      width: props.flex !== undefined ? '100%' : undefined,
      flex: props.flex,
      height: props.height === undefined ? 1 : props.height,
      marginLeft: props.marginVertical,
      marginRight: props.marginVertical,
      marginTop: marginHorizontal,
      marginBottom: marginHorizontal,
      borderBottomWidth: props.height === undefined ? 1 : props.height,
      borderColor: props.color,
      borderRadius: 1,
      ...props.style,
    }}
  />
);

export default HorizontalLine;
