import React, { useState } from 'react';
import male from '../../image/male.png';
import female from '../../image/female.png';
import './LeagueDetail.css';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag,faMarsStroke,  faMapMarkerAlt, faFutbol} from '@fortawesome/free-solid-svg-icons'
import Header from '../Header/Header';
import facebook from '../../image/Facebook.png';
import twitter from '../../image/Twitter.png';
import youtube from '../../image/YouTube.png';

const LeagueDetail = () => {
    const {idLeague} = useParams();
    const [league, setLeague] = useState([]);
    const  {strLeague, strSport, strCountry, strGender,intFormedYear, strLogo} = league;

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setLeague(data.leagues[0]))
    }, [idLeague])

    let newImage = '';
    if(strGender === 'Male'){
        newImage = male;
    }
    else{
        newImage = female;
    }
    return (
        <div>
            <Header logo={strLogo}></Header>
            <div className='container'>
            <div className="detail-container">
                <div className="sub-container">
                    <div className="detail-info">
                        <h3 className='league-title'>{strLeague}</h3>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Founded: {intFormedYear}</p>
                        <p><FontAwesomeIcon icon={faFlag} /> Country: {strCountry} </p>
                        <p><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport} </p>
                        <p><FontAwesomeIcon icon={faMarsStroke} /> Gender: {strGender} </p>
                    </div>
                    <div className="male-female-img">
                        <img src={newImage} alt=""/>
                    </div>
                </div>
            </div>
            <br/>
            <p className='detail'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, repellendus! Mollitia temporibus ipsum nisi corrupti expedita exercitationem officiis asperiores veniam neque, eaque, rerum placeat, recusandae non impedit! Quos debitis voluptatem et dolorem nisi modi, similique maiores quas animi. Eveniet, praesentium voluptatum enim officia quod eaque. Cupiditate illo culpa aliquid, iusto maxime mollitia dolore, at asperiores soluta aperiam possimus alias distinctio deleniti incidunt maiores, obcaecati modi saepe ad itaque! Quidem unde nulla qui ipsa iure aspernatur et eos voluptate explicabo voluptates obcaecati vel itaque, accusamus aut veritatis beatae quam quisquam. Totam quisquam similique error modi magni atque voluptatum quo iure cumque.</p>
            <br/>
            
            <p className='detail'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus tenetur quas sapiente ipsa a aspernatur vitae, impedit perspiciatis veritatis! Nobis deserunt quam dolores eius tenetur consequuntur nam ab itaque atque, maiores ducimus dicta laborum reiciendis totam autem magni et repellat nihil. Molestiae voluptatem totam neque? Suscipit nemo, ipsam quis debitis eaque beatae cum neque quibusdam architecto officiis officia, rem nesciunt quidem ullam id amet. Provident ratione quia accusantium eum error beatae aliquid, repudiandae magni rerum at fugit numquam illo delectus ipsa quibusdam praesentium ullam obcaecati deserunt commodi molestiae, ipsam incidunt labore voluptates excepturi! Necessitatibus quia aliquid, nulla labore sed vel! Ab nisi rerum sequi asperiores voluptate dignissimos sed repudiandae, cupiditate mollitia ex, vitae delectus velit autem, maxime itaque neque? Rerum? </p>
            <div className='social-icon'>
                <span><a target='_blank' rel="noreferrer" href="https://www.facebook.com/FootballWorldHD/"><img src={facebook} alt=""/></a></span>
                <span><a target='_blank' rel="noreferrer" href="https://twitter.com/worldoffitba?lang=en"><img src={twitter} alt=""/></a></span>
                <span><a target='_blank' rel="noreferrer" href="https://www.youtube.com/channel/UC68zCuC0QGtkKD261FJ99SQ"><img src={youtube} alt=""/></a></span>
            </div>
        </div>
        </div>
    );
};

export default LeagueDetail;