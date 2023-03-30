import React from 'react';
import { useDispatch } from 'react-redux';

import { Avatar, Menu, Dropdown, Button, Space } from 'antd';

import {
  AppstoreOutlined,
  SettingOutlined,
  MailOutlined,
  LogoutOutlined,
  BellOutlined,
  DownOutlined,
} from '@ant-design/icons';

import photo from 'style/images/photo.png';

import { logout } from 'redux/auth/actions';
import history from 'utils/history';
import uniqueId from 'utils/uinqueId';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    // initialize the error state
    this.state = { hasError: false };
  }

  // if an error happened, set the state to true
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    // if error happened, return a fallback component
    if (this.state.hasError) {
      return <>Oh no! Epic fail!</>;
    }

    return this.props.children;
  }
}

export default function HeaderContent() {
  const dispatch = useDispatch();

  const profileDropdown = (
    <div className="profileDropdown" style={{ minWidth: '200px' }}>
      <div className="pad5">
        <Avatar size="large" className="last" src={photo} style={{ float: 'left' }} />
        <div className="info">
          <p className="strong">Salah Eddine Lalami</p>
          <p>Lalami.sdn@gmail.com</p>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );

  const items = [
    {
      label: profileDropdown,
      key: '0',
    },
    {
      type: 'divider',
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: '1',
    },

    {
      label: '3rd menu item',
      key: '3',
    },
  ];

  return (
    <div className="headerIcon" style={{ position: 'absolute', right: 0, zIndex: '99' }}>
      <Dropdown
        menu={{
          items,
        }}
        trigger={['click']}
      >
        <Avatar className="last" src={photo} />
      </Dropdown>

      <Avatar icon={<AppstoreOutlined />} />

      <Avatar icon={<BellOutlined />} />
    </div>
  );
}
