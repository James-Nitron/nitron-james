import React from 'react';
import styled from 'styled-components/macro';
import { Avatar, Typography, Row, Col, Alert, Divider, Layout } from 'antd';
import James from './assets/JAMES.jpeg';
import Nitron from './assets/NITRON__HALF.png';
import CV from './assets/CV.pdf';

import './app.css';
import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout;
const { Title, Text, Paragraph } = Typography;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 99vh;
  background-color: white;
`;

const Section = styled(Col)`
  h3.ant-typography {
    color: #3366ff;
  }
`;

const HighlightSpan = styled.span`
  color: #3366ff;
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
            href={CV}
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
    <Content>
      <Row style={{ marginTop: 8 }}>
        <Col span={12} offset={6} style={{ display: 'flex', justifyContent: 'center' }}>
          <Avatar size={80} src={James} style={{ marginBottom: 8 }} />
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 22, offset: 1 }} sm={{ span: 12, offset: 6 }} md={{ span: 8, offset: 8 }}>
          <Title level={1} style={{ fontSize: 30, color: '#3366ff', textAlign: 'center', marginBottom: 8 }}>
            James Stephens
          </Title>
        </Col>
        <Col xs={{ span: 22, offset: 1 }} sm={{ span: 12, offset: 6 }} md={{ span: 8, offset: 8 }}>
          <Title style={{ textAlign: 'center' }} level={4}>
            React / Frontend Developer
          </Title>
        </Col>
      </Row>
      <Row gutter={[0, 8]}>
        <Section span={12} offset={6} style={{ display: 'flex', justifyContent: 'center' }}>
          <Alert
            message="Available"
            type="success"
            showIcon
            style={{ textAlign: 'center', fontSize: 14, marginTop: 8 }}
          />
        </Section>
      </Row>
      <Row gutter={[0, 8]}>
        <Section xs={{ span: 22, offset: 1 }} sm={{ span: 12, offset: 6 }} md={{ span: 12, offset: 6 }}>
          <Divider />
          <Title level={3}>About</Title>
          <Paragraph style={{ fontSize: 16 }}>
            James is an experienced self-taught Front-End web developer from London, England. He has a huge passion for
            technology and design which combined with he&apos;s drive for clean re-usable code helps our clients
            improve/bring their project/s to life.
          </Paragraph>
          <Paragraph style={{ fontSize: 16 }}>
            He spends his free time with friends and family, playing games and listening to music.
          </Paragraph>
        </Section>
      </Row>
      <Row gutter={[0, 8]}>
        <Section xs={{ span: 22, offset: 1 }} sm={{ span: 12, offset: 6 }} md={{ span: 12, offset: 6 }}>
          <Title level={3}>Recommendations</Title>
          <blockquote style={{ fontStyle: 'italic' }}>
            James is a great person to have on any team. He is a developer that thinks outside the box, is very detail
            oriented, and willing to both teach/mentor others as well as learn from others. James would always be
            involved in my interviewing for new members of my team as he could always ask the right question or give a
            good problem to solve to the interviewee. Would hire James again in the future if the opportunity came up.
          </blockquote>
          <HighlightSpan>David Williams - Competency Center Lead - Web Development at Shell</HighlightSpan>
        </Section>
      </Row>
      <Row>
        <Section xs={{ span: 22, offset: 1 }} sm={{ span: 12, offset: 6 }} md={{ span: 12, offset: 6 }}>
          <Title level={3}>Contact</Title>
          <Text style={{ fontSize: 16 }}>
            Get in touch! Send an email to <HighlightSpan>james.stephens@nitrondevelpments.co.uk</HighlightSpan> or
            connect with him on&nbsp;
            <Link href="https://www.linkedin.com/in/james-stephens-000/" target="_blank">
              Linkedin
            </Link>
          </Text>
        </Section>
      </Row>
    </Content>
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
