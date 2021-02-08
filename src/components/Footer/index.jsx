import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { Typography, Row, Col, List, Divider, Layout } from 'antd';
import Nitron from '../../assets/NITRON__SMALL.png';

const { Text } = Typography;
const { Item } = List;

const SFooter = styled(Layout.Footer)`
  min-height: 20vh;
  background-color: white;
`;

const SRow = styled(Row)`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  min-height: 20vh;
`;

const SCol = styled(Col)`
  display: flex;
  align-items: center;
  margin-bottom: 12;
`;

const SImage = styled.img`
  height: 16px;
  margin-right: 16px;
`;

const SText = styled(Text)`
  color: #6c757d;
  font-size: 16px;
`;

const SListItem = styled(Item)`
  border-bottom: unset !important;
  padding: 0 2px;
`;

const SLink = styled.a`
  color: #6c757d;
  font-size: 16px;
  transition: color ease-in-out 300ms;
  :hover {
    color: #3366ff;
  }
  :visited {
    color: #6c757d;
  }
`;

const Footer = () => (
  <SFooter>
    <Divider />
    <SRow>
      <SCol xs={{ span: 22, offset: 2 }} md={{ span: 10, offset: 0 }} lg={{ span: 8 }}>
        <SImage alt="Nitron Logo" src={Nitron} />
        <SText> &#169; 2021 Nitron Developments</SText>
      </SCol>
      <Col xs={{ span: 10, offset: 2 }} md={{ span: 4, offset: 0 }} lg={{ span: 2 }}>
        <List itemLayout="vertical">
          <SListItem>
            <Link to="/">
              <SText>Home</SText>
            </Link>
          </SListItem>
          <SListItem>
            <Link to="/people">
              <SText>People</SText>
            </Link>
          </SListItem>
        </List>
      </Col>
      <Col xs={{ span: 10, offset: 2 }} md={{ span: 4, offset: 0 }} lg={{ span: 2 }}>
        <List itemLayout="vertical">
          <SListItem>
            <SLink href="https://www.google.com/" target="_blank" rel="noreferrer">
              LinkedIn
            </SLink>
          </SListItem>
          <SListItem>
            <SLink href="https://www.google.com/" target="_blank" rel="noreferrer">
              Instagram
            </SLink>
          </SListItem>
        </List>
      </Col>
    </SRow>
  </SFooter>
);

export default Footer;
