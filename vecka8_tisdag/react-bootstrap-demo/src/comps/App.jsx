import '../styles/App.css'
import Footer from './Footer'
import Header from './Header'
import TodoList from './TodoList'
import { Row, Col } from 'react-bootstrap'

function App() {

  return (
    <div>
      <Header />
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="text-center">
            <TodoList />
          </div>
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

export default App
