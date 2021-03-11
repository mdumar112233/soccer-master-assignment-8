import React, { useEffect, useState } from 'react';
import AllLeague from '../AllLeague/AllLeague';
import Header from '../Header/Header';
import './Home.css';

const Home = () => {
    const [leagues, setLeagues] =  useState([]);
    const newLeagues =  leagues.slice(0,15);
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
        fetch(url)
        .then(res => res.json())
        .then(data => setLeagues(data.leagues))
    }, [])

    return (
        <div >
            <Header></Header>
            <div className='container'>
                {
                    newLeagues.map(league => <AllLeague league={league}></AllLeague>)
                }
            </div>
        </div>
    );
};

export default Home;