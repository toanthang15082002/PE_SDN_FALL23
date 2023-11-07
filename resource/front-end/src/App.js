import { Col, Container, Row } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Header from './templates/Header';
import Tutorials from './components/Tutorials.js';
// import TutorialComment from './components/TutorialComment';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Col>
            <h2 style={{ textAlign: 'center' }}>Tutorial Online Courses</h2>
          </Col>
          <Routes>
            <Route path='/' element={<Tutorials />} />
          </Routes>
        </Row>

      </Container>
    </BrowserRouter >
  );
}

export default App;
