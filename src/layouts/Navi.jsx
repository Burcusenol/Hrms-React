import React, { useState} from "react";
import {
  Dropdown,
  Container,
  Menu,
  Segment,
  Visibility,
} from "semantic-ui-react";
import { useHistory } from "react-router";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import Frame from "./Frame";



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
             <Visibility
          once={false}

        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed
             inverted 
              secondary
              size='large'
            >
              <Container>
              <Menu.Item as="a">Home</Menu.Item>
              <Menu.Item as="a">Jobs</Menu.Item>
              <Menu.Item as="a">Candidates</Menu.Item>
              <Menu.Item as="a">Employers</Menu.Item>
              <Menu.Item as="a">Employees</Menu.Item>
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
         <Frame/>
        </Segment>
      </Visibility>

       

        </div>
    );

}


