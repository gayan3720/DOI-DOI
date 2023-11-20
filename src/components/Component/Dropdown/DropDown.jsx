import React from 'react';
import { Dropdown, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const DropDown = ({ props }) => {
  return (
    <Dropdown
      menu={{ items: props.items }}
      open={props.showDrop ? true : false}
      overlayStyle={{ background: 'transparent' }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <UserOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default DropDown;
