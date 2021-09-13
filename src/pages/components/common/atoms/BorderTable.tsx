import { Descriptions, DescriptionsProps } from 'antd';
import { FC } from 'react';

const BorderTable: FC<DescriptionsProps> = (props) => {
  return (
    <Descriptions
      bordered
      {...props}
      labelStyle={{ border: '1px solid #888', padding: '5px 14px', fontWeight: 'bold' }}
      contentStyle={{ border: '1px solid #888', padding: '5px 14px' }}>
      {props.children}
    </Descriptions>
  );
};

export default BorderTable;
