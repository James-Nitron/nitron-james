import React from 'react';
import styled from 'styled-components/macro';
import { Typography, Row, Col, Layout, Image, Card } from 'antd';
import Mountains from '../../assets/Landing.jpg';
import Nitron from '../../assets/NITRON__FULL INVERTED.png';

const { Content } = Layout;
const { Title, Text, Paragraph } = Typography;

const SCard = styled(Card)`
  .ant-card-head {
    border-bottom: unset;
  }
`;

const SRow = styled(Row)`
  display: flex;
  align-items: center;
  min-height: 80vh;
  background-color: #fafafa;
  margin-right: 0;
`;

const Landing = () => (
  <Content>
    <Row>
      <Col span={24}>
        <Image width="100%" preview={false} src={Mountains} />
      </Col>
    </Row>
    <SRow gutter={24}>
      <Col xs={{ span: 22, offset: 1 }} sm={{ span: 12, offset: 6 }} lg={{ span: 6, offset: 6 }}>
        <SCard style={{ backgroundColor: 'unset' }} title={<Title level={3}>Who we are.</Title>} bordered={false}>
          <Paragraph style={{ fontSize: 16 }}>
            We believe in the future and want to help businesses to create, advance and inspire. We don&apos;t shy away
            from complexity or scale and are always looking to push the boundaries of what&apos;s possible.
          </Paragraph>
        </SCard>
      </Col>
      <Col xs={{ span: 22, offset: 1 }} sm={{ span: 12, offset: 6 }} lg={{ span: 6, offset: 0 }}>
        <SCard title={<Title level={3}>Our services.</Title>} bordered={false}>
          <Paragraph style={{ fontSize: 16 }}>
            We are committed to producing quality, high-end engaging and innovative websites, web applications & digital
            experiences. We look to the future and only use the best technical solutions & frameworks available. We
            listen, advise and deliver.
          </Paragraph>
        </SCard>
      </Col>
    </SRow>
  </Content>
);

export default Landing;
