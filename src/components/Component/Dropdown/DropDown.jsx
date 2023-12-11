import React from 'react';
import { Avatar, Dropdown, Space } from 'antd';

const DropDown = ({ props }) => {
  console.log(props);
  return (
    <Dropdown
      menu={{ items: props.items }}
      open={props.showDrop ? true : false}
      overlayStyle={{ background: 'transparent' }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Avatar
          style={{ backgroundColor: 'gray' }}
          icon={props.icon !== null ? props.icon : null}
        />
      </a>
    </Dropdown>
  );
};

export default DropDown;
