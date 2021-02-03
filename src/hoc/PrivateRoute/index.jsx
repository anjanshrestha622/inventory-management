import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Header, Footer, SideBar } from '../../component';
import { Layout } from 'antd';
import PropTypes from 'prop-types';

const { Sider, Content } = Layout;

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLogin = () => localStorage.getItem('ims-session') || null;

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? (
          <>
            <Layout style={{ minHeight: '100vh' }}>
              <Sider>
                <SideBar />
              </Sider>
              <Layout>
                <Header />
                <Content>
                  <Component {...props} />
                </Content>
                <Footer />
              </Layout>
            </Layout>
          </>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

export default PrivateRoute;
