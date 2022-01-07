
import React from 'react';
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from 'react-query';
import { FaBook,FaRegStar,FaCaretDown,FaRegHeart} from 'react-icons/fa';
import { BiGitRepoForked } from "react-icons/bi";

const fetchRepositories = async () =>{
    const res = await fetch('https://gh-trending-api.herokuapp.com/repositories');
    return res.json();
};





const Trending = () =>{
    const {data,status} = useQuery('repositories',fetchRepositories);
    //console.log(data)



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
                        { data.map(repositories =>


                            <div className="col-lg-12 box" key={repositories.rank}>
                                <div className="icon-row">

                                    <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                                        <button type="button" className="btn margin "><span className="color-s"><FaRegHeart/></span> <span className="d-none d-sm-inline">Sponsor</span></button>
                                        <button type="button" className="btn border-l"><span><FaRegStar/></span> <span className="d-none d-sm-inline">star</span></button>
                                        <button type="button" className="btn border-r no-padding-margin"><FaCaretDown/></button>
                                    </div>

                                </div>
                                <div className="title-box">
                                    <span className="ic"> <FaBook/></span>
                                    <span className="desc">
                                        <a href={repositories.url} target="_blank">{repositories.username} / <strong>{repositories.repositoryName}</strong></a>
                                    </span>
                                </div>
                                <div className="col-lg-9 description s1">
                                    <p>{repositories.description}</p>
                                </div>
                                <div className="box-footer">
                                    <span className="ic languages">{repositories.language}</span>
                                    <span className="ic starts"> <span className="icon"><FaRegStar/></span> <span>{repositories.totalStars}</span></span>
                                    <span className="ic starts"> <span className="icon"><BiGitRepoForked/></span>{repositories.forks}</span>
                                    <span className="ic avatars"> Built by
                                        <div className="all-avatars">
                                            { repositories.builtBy.map((bult,index) =>
                                                <a key={Math.random()} href={bult.url} className="avatar" target="_blank" title={bult.username}><img src={bult.avatar} /></a>

                                            )}
                                        </div>

                                    </span>
                                    <span className="ic today-starts"> <span className="icon"><FaRegStar/></span> <span> {repositories.starsSince} stars today</span></span>
                                </div>

                            </div>


                        )}
                    </React.Fragment>



                )}






            </div>
        </div>

    )
}
export default Trending;