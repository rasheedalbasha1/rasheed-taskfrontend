import React from "react";
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from 'react-query';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import './screens.css';
import Nav from './pages/shared/nav';
import Trending from './pages/trending';
import Developers from './pages/developers';
import Header from './pages/shared/header';
import Footer from './pages/shared/footer';
import Error404 from './pages/error404';


function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">

                <div className="container-fluid no-padding-margin">
                    <Header />
                </div>

                <Router>
                    <div className="container-fluid main">
                        <div className="col-lg-10 col-md-11 col-sm-12 margin_center">
                            <div className="nav">
                                <Nav/>
                            </div>

                            <div className="content">
                                <Routes>
                                    <Route path="/" element={<Trending />} />
                                    <Route path="/Trending" element={<Trending />} />
                                    <Route path="/developers" element={<Developers />} />
                                    <Route path="*" element={<Error404 />} />
                                </Routes>
                            </div>
                        </div>
                    </div>

                </Router>




                <div className="container-fluid no-padding-margin">
                    <Footer/>
                </div>


            </div>
        </QueryClientProvider>

    );
}

export default App;
