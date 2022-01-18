import {  Nav, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import store from "../redux/store";
import { logout } from '../redux/actions/authActions'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

function User() {
  const state = store.getState();
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleSubmit=()=>{
    dispatch(logout(navigate))
  }
  if (!state.authReducer.isAuth) {
    return (
      <Nav>
        <Link to="/registre">
          {" "}
          <Nav.Link href="#deets">Registre </Nav.Link>
        </Link>
        <Link to="/Login">
          {" "}
          <Nav.Link href="#memes">Login</Nav.Link>
        </Link>
        <FormControl></FormControl>
      </Nav>
    );
  } else {
    return (
      <Nav>
        <Link to="/registre">
          {" "}
          <Nav.Link href="#deets">{state.authReducer.user.newUser.name} </Nav.Link>
        </Link>
        <Link to="/Login">
          {" "}
          <Nav.Link href="#memes" onClick={handleSubmit} >Logout</Nav.Link>
        </Link>
        <FormControl></FormControl>
      </Nav>
    );
  }
}

export default User
