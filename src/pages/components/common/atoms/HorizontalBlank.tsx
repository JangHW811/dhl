import React, { FC } from 'react';

interface PropTypes {
  height: number | string;
}
const HorizontalBlank: FC<PropTypes> = (props: PropTypes) => {
  return <div style={{ marginTop: props.height }} />;
};

export default HorizontalBlank;
