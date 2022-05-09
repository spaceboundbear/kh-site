import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import Sidebar from '../components/Sidebar/Sidebar';

const Home = () => {
  return (
    <>
      <Row>
        <Col xs={2}>
          <Sidebar />
        </Col>

        <Col>
          <div>
            <h1> test</h1>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Home;
