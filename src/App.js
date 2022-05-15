import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main';
import Footer from './components/Footer/Footer';

import { Col } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Header />
      <>
        <Row>
          <Col xs={2}>
            <Sidebar />
          </Col>

          <Col>
            <Main />
          </Col>
        </Row>
      </>

      <Footer />
    </div>
  );
}

export default App;
