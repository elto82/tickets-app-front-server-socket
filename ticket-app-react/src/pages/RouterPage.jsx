import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Enter, CreateTicket, Cola, Desktop } from '.';
import { useContext } from 'react';
import { UiContext } from '../context/UiContext';

const { Sider, Content } = Layout;
export const RouterPage = () => {
  const { menu } = useContext(UiContext);
  return (
    <Router>
      <Layout >
        <Sider
          collapsedWidth={0}
          breakpoint="sm"
          hidden={menu}
          style={{ height: "100vh" }}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[ '1' ]}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: <Link to="/ingresar">Ingresar</Link>,
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: <Link to="/cola">Cola de tickets</Link>
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: <Link to="/crear-ticket">Crear Ticket</Link>
              },
            ]}
          />
        </Sider>
        <Layout>

          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: '#fff',
            }}
          >
            <Routes>
              <Route path="/ingresar" element={<Enter />} />
              <Route path="/cola" element={<Cola />} />
              <Route path="/crear-ticket" element={<CreateTicket />} />
              <Route path="/desktop" element={<Desktop />} />
              <Route path="/*" element={<Enter />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};
