import { Content } from 'antd/lib/layout/layout';
import { CSSProperties, FC } from 'react';

interface HeaderInterface {
  children: React.ReactNode | React.ReactNodeArray;
  center?: boolean;
  justifyCenter?: boolean;
  alignCenter?: boolean;
  spaceBetween?: boolean;
  direction?: 'row' | 'column';
  flex?: number;
  style?: CSSProperties;
}
const CommonContainer: FC<HeaderInterface> = ({
  children,
  center,
  justifyCenter,
  alignCenter,
  spaceBetween,
  direction = 'column',
  flex = 1,
  style,
}) => {
  console.log(style);
  const defaultStyle: CSSProperties = {
    background: 'white',
    width: '100%',
    height: '100%',
    padding: 25,
    display: 'flex',
    flexDirection: direction,
    justifyContent: (spaceBetween && 'space-between') || (justifyCenter && 'center') || (center && 'center') || undefined,
    // default: flex-start
    alignItems: (alignCenter && 'center') || (center && 'center') || undefined,
    flex,
    ...style,
  };

  return <Content style={defaultStyle}>{children}</Content>;
};

export default CommonContainer;
