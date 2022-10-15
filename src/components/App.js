import React from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { AuthProvider } from "../contexts/AuthContext";

import Chats from "./Chats"
import Login from "./Login"

function App() {
  return (
		<div style={{ fontFamily: 'Avenir' }}>
			<Router>
				<AuthProvider>
					<Switch> {/* Switch will render what the user sees now, login vs chats */}
						<Route path='/' component={Login} /> {/* <Route path="/chats" component={Chats} /> */}
					</Switch>
				</AuthProvider>
			</Router>
		</div>
	);
}

export default App
