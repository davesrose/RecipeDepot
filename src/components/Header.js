import React from "react";

// bootstrap components
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Stack from 'react-bootstrap/Stack';

const Header = () => {
	return (
		<header>
			<div className="container">
				<div className="row">
					<div className="col">
						<h1>Recipe Database</h1>
						<div className="sub-title">
							<p>A way of recording recipes from the web</p>
						</div>
						<Stack direction="horizontal" gap={2}>
							<Button className="btn-hollow" variant="primary" href="#" disabled>Input Recipe</Button>
							<Dropdown>
								<Dropdown.Toggle className="btn-hollow" variant="primary" id="sites">
									View Recipes
								</Dropdown.Toggle>
								<Dropdown.Menu variant="primary" aria-labelledby="dropdownSites">
									<Dropdown.Item href="#">Action</Dropdown.Item>
									<Dropdown.Item href="#">New York Times</Dropdown.Item>
									<Dropdown.Item href="#">Something else here</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</Stack>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
