import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { HomeInfo} from "./home-info"

const AppRoutes = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path= '/' element={<Home />}/>
                <Route exact path= 'pokemon/name:' element={ <HomeInfo/> }/>
            </Routes>
        </BrowserRouter>
    )
};

export {AppRoutes};