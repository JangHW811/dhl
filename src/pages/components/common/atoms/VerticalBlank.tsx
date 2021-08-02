import React, { FC } from 'react';

interface PropTypes {
  width: number | string;
}

const VerticalBlank: FC<PropTypes> = (props: PropTypes) => {
  return <div style={{ marginLeft: props.width }} />;
};

export default VerticalBlank;
