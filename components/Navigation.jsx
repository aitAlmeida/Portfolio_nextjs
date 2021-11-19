import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

import { greetings, socialLinks } from "../portfolio";
import Headroom from "headroom.js";
import Link from "next/link";
import {
	UncontrolledCollapse,
	NavbarBrand,
	Navbar,
	NavItem,
	NavLink,
	Nav,
	Container,
	Row,
	Col,
} from "reactstrap";

const Navigation = () => {
	const [collapseClasses, setCollapseClasses] = useState("");
	const onExiting = () => setCollapseClasses("collapsing-out");

	const onExited = () => setCollapseClasses("");

	useEffect(() => {
		let headroom = new Headroom(document.getElementById("navbar-main"));
		// initialise
		headroom.init();
	});

	return (
		<>
			<header className="header-global">
				<Navbar
					className="navbar-main navbar-transparent navbar-light headroom"
					expand="lg"
					id="navbar-main"
				>
					<Container>
						<NavbarBrand href="/" className="mr-lg-5">
							<h2 className="text-white" id="nav-title">
								{greetings.name}
							</h2>
						</NavbarBrand>
						<button
							className="navbar-toggler"
							aria-label="navbar_toggle"
							id="navbar_global"
						>
							<span className="navbar-toggler-icon" />
						</button>
						<UncontrolledCollapse
							toggler="#navbar_global"
							navbar
							className={collapseClasses}
							onExiting={onExiting}
							onExited={onExited}
						>
							<div className="navbar-collapse-header">
								<Row>
									<Col className="collapse-brand" xs="6">
										<h3
											className="text-black"
											id="nav-title"
										>
											{greetings.name}
										</h3>
									</Col>
									<Col className="collapse-close" xs="6">
										<button
											className="navbar-toggler"
											id="navbar_global"
										>
											<span />
											<span />
										</button>
									</Col>
								</Row>
							</div>
							<Nav
								className="align-items-lg-center ml-lg-auto"
								navbar
							>
								<NavItem>
									<NavLink
										rel="noopener"
										aria-label="Facebook"
										className="nav-link-icon"
										href="#Greetings"
										
									>
										Greetings
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										rel="noopener"
										aria-label="Instagram"
										className="nav-link-icon"
										href="#About"
										
									>
										About
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										rel="noopener"
										aria-label="Twitter"
										className="nav-link-icon"
										href="#Services"
										
									>
										Services
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										rel="noopener"
										aria-label="Github"
										className="nav-link-icon"
										href="#Works"
										
									>
										Works
									</NavLink>
								</NavItem>
								{/* <NavItem>
									<NavLink
										rel="noopener"
										aria-label="Linkedin"
										className="nav-link-icon"
										href="#Works"
										
									>
										Works
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										rel="noopener"
										aria-label="Behance"
										className="nav-link-icon"
										href="#Projects"
									>
										Works
									</NavLink>
								</NavItem> */}
							</Nav>
						</UncontrolledCollapse>
					</Container>
				</Navbar>
			</header>
		</>
	);
};

export default Navigation;
