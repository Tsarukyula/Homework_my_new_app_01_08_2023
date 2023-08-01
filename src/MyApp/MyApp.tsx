import { Route, Routes } from "react-router-dom";
import AboutUs from "../AboutUs/AboutUs";
import Contacts from "../Contacts/Contacts";
import Greeting from "../Greeting/Greeting";
import Layout from "../Layout/Layout";
import React from "react";


export default function MyApp():JSX.Element {

    return (
        <Routes>
            <Route path="/" element= {<Layout />}>
                <Route path="greeting" element={<Greeting />} />
                <Route path="aboutus" element={<AboutUs />} />
                <Route path="contacts" element={<Contacts />} />            
            </Route>
        </Routes>
    )
}