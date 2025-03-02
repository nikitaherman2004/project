import React from "react";
import { Route, Routes } from 'react-router-dom';
import "./App.scss";
import { Layout } from "./components/Layout";
import AddRestaurantPage from "./pages/AddRestaurantPage/AddRestaurantPage";
import HomePage from "./pages/HomePage/HomePage";
import "./scss/common.scss";


const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/home" Component={HomePage} />
                <Route path="/restaurant/create" Component={AddRestaurantPage} />
            </Routes>
        </Layout>
    )
};

export default App;

