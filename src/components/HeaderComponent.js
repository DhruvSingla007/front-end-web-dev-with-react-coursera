import React from 'react';
import {Navbar, NavbarBrand, Jumbotron} from 'reactstrap'


class Header extends React.Component {

    render() {
        return (
            <>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="/">Hello There</NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className= "row row-header">
                            <div className = "col-12 col-sm-6">
                                <h1>Header blahblah blah...</h1>
                                <p>Paragraph Blah blah blah.....</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        );
    }
}

export default Header