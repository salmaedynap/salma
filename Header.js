import React from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from 'reactstrap';

class Header extends React.Component {
    constructor(){
        super()
    }
    
    render(){
        return(
            <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">HelloReact</NavbarBrand>
                <NavbarToggler  />
                <Collapse  navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                    <NavLink href="/home/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Options
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                        Option 1
                        </DropdownItem>
                        <DropdownItem>
                        Option 2
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                        Reset
                        </DropdownItem>
                    </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                </Collapse>
            </Navbar>
            </div>
        )
    }
}

export default Header;