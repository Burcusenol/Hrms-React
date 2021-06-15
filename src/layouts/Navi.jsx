import React, { useState} from "react";
import {
  Dropdown,
  Container,
  Menu,
  Segment,
} from "semantic-ui-react";
import { useHistory } from "react-router";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { NavLink } from "react-router-dom";





export default function Navi() {
    const [isAuthenticated,setIsAuthenticated]=useState(true)
    const history= useHistory()
   
   function handleSignOut() {
     setIsAuthenticated(false)
     history.push("/")
   }
   
   function handleSignIn() {
     setIsAuthenticated(true)
   }
  
    return (
        <div>
           
           <Segment
           inverted
            textAlign='center'
            style={{minHeight: 100,  padding: '1em 0em' }}
            vertical
          >
            <Menu
              inverted 
              secondary
              size='large'
            >
              <Container>
              <Menu.Item as={NavLink} to="/home">Home</Menu.Item>
                 <Menu.Item as={NavLink} to="/jobadvertisement">Jobs</Menu.Item>
              <Menu.Item as={NavLink} to="/candidates">Candidates</Menu.Item>
              <Menu.Item as={NavLink} to="/employers">Employers</Menu.Item>
              <Menu.Item as={NavLink} to="/employees">Employees</Menu.Item>
              <Menu.Menu position="right">
                <Dropdown item text="Language">
                  <Dropdown.Menu>
                    <Dropdown.Item>English</Dropdown.Item>
                    <Dropdown.Item>Russian</Dropdown.Item>
                    <Dropdown.Item>Spanish</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Menu.Item>
                  {isAuthenticated ? (
                    <SignedIn signOut={handleSignOut} />
                  ) : (
                    <SignedOut signIn={handleSignIn} />
                  )}
                </Menu.Item>
              </Menu.Menu>
            </Container>
          </Menu>
          </Segment>
           
     
     

       

        </div>
    );

}


