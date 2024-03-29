import React from 'react';
import './App.css';
import './styles/styles.css';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {Login} from './pages/Account/Login';
import {Admin} from './pages/Admin/Admin';
import {AccountRoute, PrivateRoute} from './components';
import Index from "./pages/Admin/Customer/Index";

function App() {
    return (
        <div className="App" id="wrapper">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/login"
                        element={
                            <AccountRoute>
                                <Login/>
                            </AccountRoute>
                        }
                    />
                    <Route
                        path="/"
                        element={
                            <PrivateRoute>
                                <Admin/>
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/customers"
                        element={<PrivateRoute><Index/></PrivateRoute>}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
