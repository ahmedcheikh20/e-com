import {Navbar,Nav,Container, FormControl} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import store from '../redux/store'
import User  from "./User"


function navbar(){
  const state = store.getState()

    return(
<div>
  {console.log(state.authReducer.isAuth)}
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Link to='/'><Navbar.Brand href="#home">Nike</Navbar.Brand></Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Men</Nav.Link>
      <Nav.Link href="#pricing">Women</Nav.Link>
      <Nav.Link href="#pricing">Kid's</Nav.Link>
    </Nav>
      <User/>
  </Navbar.Collapse>
  </Container>
</Navbar>
</div>
    )
}

export default navbar