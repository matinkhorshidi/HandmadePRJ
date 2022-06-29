import React, { Component } from 'react';
import { Col, Row } from 'antd';
import TextContainer from './TextContainer';

const TwoColCountainer = ({
  Name,
  Header,
  subHeader,
  id,
  btnTxt,
  btnLink,
  btn2Txt,
  btn2Link,
}) => {
  return (
    <Row>
      <Col xs={24} sm={24} md={14} lg={14} xl={14}>
        <div className="text-content-2">
          <TextContainer
            Name={Name}
            Header={Header}
            subHeader={subHeader}
            id={id}
            btnTxt={btnTxt}
            btnLink={btnLink}
            btn2Txt={btn2Txt}
            btn2Link={btn2Link}
          />
        </div>
      </Col>
      <Col xs={24} sm={24} md={10} lg={10} xl={10}>
        <Row justify="space-evenly" style={{ marginTop: '5rem' }}>
          <Col
            xs={2}
            sm={4}
            md={6}
            lg={8}
            xl={8}
            style={{
              textAlign: 'center',
              width: '50%',
              padding: '2.3rem',
            }}
          >
            <img src="/img/love_icon.png" alt="logo" className="love-img" />
            <p>Making Games is Our Love</p>
          </Col>
          <Col
            xs={2}
            sm={4}
            md={6}
            lg={8}
            xl={8}
            style={{
              textAlign: 'center',
              width: '50%',
              padding: '2rem',
            }}
          >
            <img src="/img/you_icon.png" alt="logo" className="love-img" />
            <p>You Playing Them Is The Best Part</p>
          </Col>
          <Col
            xs={2}
            sm={4}
            md={6}
            lg={8}
            xl={8}
            style={{
              textAlign: 'center',
              width: '50%',
              padding: '2rem',
            }}
          >
            <img src="/img/crazy_icon.png" alt="logo" className="love-img" />
            <p>Well Make Them Mind Blowing</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default TwoColCountainer;
