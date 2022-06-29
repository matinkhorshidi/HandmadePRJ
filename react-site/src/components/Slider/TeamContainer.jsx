import React, { Component } from 'react';
import { Col, Row } from 'antd';
import TextContainer from './TextContainer';

const TeamContainer = ({
  Teams,
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
    <Row style={{ paddingTop: '8rem' }}>
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={16}
        xl={16}
        // style={{ paddingRight: '5rem' }}
      >
        <h2 className="Team-text">Team</h2>
        <h2 className="Team-header-text">We are the Handmade Interactive</h2>
        {/* Team */}
        <Row style={{ paddingRight: '5rem' }}>
          {Teams.map((Team) => {
            return (
              <Col className="gutter-row" span={3}>
                <div
                  style={{
                    padding: '1px 0',
                    textAlign: 'center',
                  }}
                >
                  <img
                    src={Team.profile}
                    alt={Team.name}
                    className="team-img"
                  />
                  <p style={{ margin: '0px', fontSize: '12px' }}>{Team.name}</p>
                  <p style={{ margin: '0px', fontWeight: 'bold' }}>
                    {' '}
                    {Team.job}
                  </p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Col>
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={8}
        xl={8}
        // style={{ backgroundColor: 'blue' }}
      >
        <h2 className="name-text">Culture</h2>
        <h2 className="sub-header-text">
          We are proud to have hybrid, work from home and on site work culture
          since 2018
        </h2>
        <Row>
          <Col
            xs={8}
            sm={8}
            md={8}
            lg={8}
            xl={8}
            style={{
              textAlign: 'start',
              padding: '5px',
            }}
          >
            <img src="/img/culture_3.png" alt="logo" className="culture-img" />
          </Col>
          <Col
            xs={8}
            sm={8}
            md={8}
            lg={8}
            xl={8}
            style={{
              textAlign: 'start',
              padding: '5px',
            }}
          >
            <img src="/img/culture_2.png" alt="logo" className="culture-img" />
          </Col>
          <Col
            xs={2}
            sm={4}
            md={6}
            lg={8}
            xl={8}
            style={{
              textAlign: 'start',
              padding: '5px',
            }}
          >
            <img src="/img/culture_1.png" alt="logo" className="culture-img" />
          </Col>
        </Row>
        <Row>
          {/* Partners*/}
          <h2 className="name-text">Partners</h2>
          <Row gutter={[24, 24]}>
            <Col className="gutter-row" span={6}>
              <div
                style={{
                  padding: 'auto 0',
                }}
              >
                <img
                  src="/img/kwalee_partner.png"
                  alt="partner"
                  className="partner-img"
                />
              </div>
            </Col>
            <Col className="gutter-row" span={68}>
              <div
                style={{
                  padding: '4px 0',
                }}
              >
                <img
                  src="/img/voodoo_partner.png"
                  alt="partner"
                  className="partner-img"
                />
              </div>
            </Col>
            <Col className="gutter-row" span={5}>
              <div
                style={{
                  padding: '4px 0',
                }}
              >
                <img
                  src="/img/applovin_partners.png"
                  alt="partner"
                  className="partner-img"
                />
              </div>
            </Col>
            <Col className="gutter-row" span={2}>
              <div
                style={{
                  padding: '1px 0',
                }}
              >
                <img
                  src="/img/jopio_partner.png"
                  alt="partner"
                  className="partner-img"
                />
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div
                style={{
                  padding: '8px 0',
                }}
              >
                <img src="/img/YSO.png" alt="partner" className="partner-img" />
              </div>
            </Col>
            <Col className="gutter-row" span={3}>
              <div
                style={{
                  padding: '4px 0',
                  marginTop: '-20px',
                }}
              >
                <img
                  src="/img/lion_partners copy 2.png"
                  alt="partner"
                  className="partner-img-lion"
                />
              </div>
            </Col>
            <Col className="gutter-row" span={2}>
              <div
                style={{
                  padding: '8px 0',
                  marginTop: '-20px',
                }}
              >
                <img
                  src="/img/martian_partnert.png"
                  alt="partner"
                  className="partner-img"
                />
              </div>
            </Col>
          </Row>
        </Row>
      </Col>
    </Row>
  );
};

export default TeamContainer;
