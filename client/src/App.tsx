import React from "react";
import { Route, Routes, BrowserRouter} from "react-router-dom";

import { Main } from "./pages/Main";
import { Admin } from "./pages/Admin";

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Main /> }/>
                    <Route path="/admin" element={ <Admin /> }/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;