import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import { useAppContext } from 'context/appContext';
import logoIcon from 'style/images/logo-icon.png';
import logoText from 'style/images/logo-text.png';

import {
  DesktopOutlined,
  SettingOutlined,
  CustomerServiceOutlined,
  FileTextOutlined,
  FileSyncOutlined,
  DashboardOutlined,
  TeamOutlined,
  UserOutlined,
  CreditCardOutlined,
  BankOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu, Item } = Menu;

export default function Navigation() {
  const { state: stateApp, appContextAction } = useAppContext();
  const { isNavMenuClose } = stateApp;
  const { navMenu } = appContextAction;
  const [showLogoApp, setLogoApp] = useState(isNavMenuClose);

  useEffect(() => {
    if (isNavMenuClose) {
      setLogoApp(isNavMenuClose);
    }
    const timer = setTimeout(() => {
      if (!isNavMenuClose) {
        setLogoApp(isNavMenuClose);
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [isNavMenuClose]);
  const onCollapse = () => {
    navMenu.collapse();
  };

  const itemsMenu = [
    {
      label: (
        <>
          <Link to={'/'} />
          Dashboard)
        </>
      ),
      key: 'Dashboard',
      icon: <DashboardOutlined />,
    },
    {
      label: (
        <>
          <Link to={'/'} />
          Customer)
        </>
      ),
      key: 'Customer',
      icon: <CustomerServiceOutlined />,
    },
  ];
  return (
    <>
      <Sider collapsible collapsed={isNavMenuClose} onCollapse={onCollapse} className="navigation">
        <div className="logo">
          <img
            src={logoIcon}
            alt="Logo"
            // style={{ margin: "0 auto 40px", display: "block" }}
          />

          {!showLogoApp && (
            <img src={logoText} alt="Logo" style={{ marginTop: '3px', marginLeft: '10px' }} />
          )}
        </div>
        <Menu mode="inline" items={itemsMenu}></Menu>
      </Sider>
    </>
  );
}
