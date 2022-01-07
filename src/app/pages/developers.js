
import React from 'react';
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from 'react-query';
import { FaBook,FaRegStar,FaCaretDown,FaRegHeart,FaFire} from 'react-icons/fa';
import { BiGitRepoForked } from "react-icons/bi";
import { BsFillLightningChargeFill } from "react-icons/bs";


const fetchDevelopers = async () =>{
    const res = await fetch('https://gh-trending-api.herokuapp.com/developers');
    return res.json();
};

const Developers = () =>{
    const {data,status} = useQuery('developers',fetchDevelopers);
    console.log(data)
    return (

        <div className="container-fluid boxes-row-trending">
            <div className="row">

                {status === 'loading' && (
                    <div className="status-data"><h4>Loading data ...</h4></div>
                )}

                {status === 'error' && (
                    <div className="status-data"><h4>Error data</h4></div>
                )}


                {status === 'success' && (
                    <React.Fragment>
                        { data.map(developers =>
                            <div className="col-lg-12 box" key={developers.rank}>
                                <div className="row">
                                    <div className="col-md-4 col-sm-12">
                                        <div className="card-box">
                                            <div className="row">
                                                <div className="col-1"><p className="num">{developers.rank}</p></div>
                                                <div className="col-3"><a className="num"> <img src={developers.avatar} /></a></div>
                                                <div className="col-8">
                                                    <span className="name">{developers.name}</span>
                                                    <div className="description s2">
                                                        <p><a href={developers.url}>{developers.username}</a></p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <ul className="list-card">
                                            <li className="fire"><span className="i"><FaFire/></span>POPULAR REPO</li>
                                            <li className="book"><a className="alink" target="_blank" href={developers.popularRepository.url}><span className="i"><FaBook/></span>{developers.popularRepository.repositoryName}</a></li>
                                            <li className="light">{developers.popularRepository.description}</li>
                                        </ul>

                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="icon-row">

                                            <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                                                <button type="button" className="btn margin"><span className="color-s"><FaRegHeart/></span> <span className="d-none d-sm-inline">Sponsor</span></button>
                                                <button type="button" className="btn border-l"> <span>follow</span></button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </React.Fragment>

                )}







            </div>
        </div>

    )
}

export default Developers;

