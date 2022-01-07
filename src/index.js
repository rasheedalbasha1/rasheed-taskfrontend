import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';


const loadingMarkup = (
        <div className = "vertical-center" >Please wait</div>
);

ReactDOM.render(
    <React.StrictMode >
        <Suspense
            fallback = {loadingMarkup} >
            <App/>
        </Suspense >

    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
