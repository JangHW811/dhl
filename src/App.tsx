import { Layout } from 'antd';
import React from 'react';
import { Route } from 'react-router-dom';
import './App.less';
import CommonLayout from './pages/components/common/organisms/CommonLayout';
import HomePage from './pages/home';
import LoginPage from './pages/login';

function App() {
  return (
    <div className='App'>
      <Layout>
        <CommonLayout>
          <Route exact path='/' component={HomePage} />
          <Route path='/login' component={LoginPage} />
        </CommonLayout>
      </Layout>
    </div>
  );
}

export default App;
