// import { useState } from "react";
// import { useDispatch} from "react-redux";
// import { getPokemons } from "../Redux/actions";
// import SearchBar from "./SearchBar";
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';





// export default function NavBar(){
//     const dispatch = useDispatch();
//     const [currentPage, setCurrentPage] = useState(1); 


//     function handleClick() {
//         dispatch(getPokemons())
//         setCurrentPage(1)
//       }


//     return (
//         <div>
//          <Navbar bg="black" expand="md">
//          <Container fluid>
//           <Navbar.Brand href="/pokemons"><img src="/Pokémon_GO_logo.svg.png" width="150"></img></Navbar.Brand> 
//            <Navbar.Toggle aria-controls="navbarScroll" />
//            <Navbar.Collapse id="navbarScroll">
//              <Nav
//                className="navbar-nav mx-auto"
//                style={{ maxHeight: '100px',fontFamily:'sans-serif'}}
//                navbarScroll
//                >
//              <Form className={"mx-auto"} style={{fontFamily:'sans-serif'}}>
//                   <SearchBar setCurrentPage={setCurrentPage} />
//              </Form>
//                <Button style={{marginRight:"10em",marginLeft:"2em",fontFamily:'sans-serif'}} variant="dark" href="createpokemons">Create Pokemon</Button>
//                {/* <Button style={{marginRight:"2em",marginLeft:"15em"}} variant="dark" href="/pokemons" >Home</Button> */}
//              </Nav>
//            </Navbar.Collapse>
//          </Container>
//        </Navbar>
//                  </div>
//     )
// }