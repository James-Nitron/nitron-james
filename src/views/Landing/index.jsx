import React from 'react';
import styled from 'styled-components/macro';
import { Typography, Row, Col, Layout, Image } from 'antd';
import Mountains from '../../assets/Landing.jpg';
import Nitron from '../../assets/NITRON__FULL INVERTED.png';

const { Content } = Layout;
const { Title, Text, Paragraph } = Typography;

const Landing = () => (
  <Content>
    <Row>
      <Col span={24}>
        <Image width="100%" preview={false} src={Mountains} />
      </Col>
    </Row>
  </Content>
);

export default Landing;
