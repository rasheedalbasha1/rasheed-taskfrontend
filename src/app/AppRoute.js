import React, { Component,Suspense, lazy } from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";


const Error404 = lazy(() => import('./pages/error404'));
const Trending = lazy(() => import('./pages/trending'));
const Developers = lazy(() => import('./pages/developers'));

class AppRoutes extends Component {
    render (){
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Trending />} />
                    <Route path="/trending" element={<Trending />} />
                    <Route path="/developers" element={<Developers />} />
                    <Route path="*" element={<Error404 />} />

                </Routes>
            </BrowserRouter>
            )

    }
}

export default AppRoutes;