import React from 'react';
import styled from 'styled-components/macro';
import { Avatar, Typography, Row, Col, Alert, Divider, Layout } from 'antd';

import Nitron from './assets/NITRON__HALF.png';
import download from './assets/CV.pdf';

import People from './views/People';

import './app.css';
import 'antd/dist/antd.css';
import Landing from './views/Landing';

const { Header, Content, Footer } = Layout;
const { Title, Text, Paragraph } = Typography;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 99vh;
  background-color: white;
`;

const Link = styled.a`
  color: #3366ff !important;
`;

const Image = styled.img`
  width: 100px;
  height: auto;
`;

const App = () => (
  <Wrapper>
    <Header style={{ backgroundColor: 'unset' }}>
      <Row>
        <Col
          span={24}
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            height: 64,
          }}
        >
          <Link
            href={download}
            target="_blank"
            download="James Stephens CV"
            rel="noopener noreferrer"
            style={{ fontSize: 16 }}
          >
            CV
          </Link>
        </Col>
      </Row>
    </Header>
    <Landing />
    <People />
    <Footer style={{ backgroundColor: 'unset' }}>
      <Row>
        <Col span={8} offset={8} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Image alt="Nitron Logo" src={Nitron} />
        </Col>
      </Row>
    </Footer>
  </Wrapper>
);

export default App;
