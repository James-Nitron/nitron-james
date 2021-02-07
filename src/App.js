import React from 'react';
import styled from 'styled-components/macro';
import { Switch, Route, Link, useLocation } from 'react-router-dom';
import { Avatar, Typography, Row, Col, Alert, Divider, Layout, Menu } from 'antd';

import Nitron from './assets/NITRON__HALF.png';
import download from './assets/CV.pdf';

import People from './views/People';

import './app.css';
import 'antd/dist/antd.css';
import Landing from './views/Landing';

const { Header, Content, Footer } = Layout;
const { Title, Text, Paragraph } = Typography;
const { Item } = Menu;

const SWrapper = styled.div`
  background-color: white;
`;

const Image = styled.img`
  width: 100px;
  height: auto;
`;

const SHeader = styled(Header)`
  position: fixed;
  z-index: 1;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const SMenu = styled(Menu)`
  background-color: unset;
  border: unset;
`;

const SText = styled(Text)`
  color: white;
`;

const App = () => {
  const location = useLocation();
  return (
    <SWrapper>
      <SHeader>
        <SMenu mode="horizontal" selectedKeys={[location.pathname]}>
          <Item key="/">
            <Link to="/">
              <SText>Home</SText>
            </Link>
          </Item>
          <Item key="/people">
            <Link to="/people">
              <SText>People</SText>
            </Link>
          </Item>
        </SMenu>
        {/* <Link
            href={download}
            target="_blank"
            download="James Stephens CV"
            rel="noopener noreferrer"
            style={{ fontSize: 16 }}
          >
            CV
          </Link> */}
      </SHeader>
      <Switch>
        <Route path="/people">
          <People />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
      <Footer style={{ backgroundColor: 'unset' }}>
        <Row>
          <Col span={8} offset={8} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image alt="Nitron Logo" src={Nitron} />
          </Col>
        </Row>
      </Footer>
    </SWrapper>
  );
};

export default App;
