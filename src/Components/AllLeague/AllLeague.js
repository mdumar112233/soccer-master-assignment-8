import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './AllLeague.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import image from  '../../image/home-bg.jpg';
import { useHistory } from 'react-router';

const AllLeague = (props) => {
    const {strLeague, strSport, idLeague} = props.league;
    const history = useHistory();
    const handleBtn = (idLeague) =>{
        const url = `/league/${idLeague}`;
        history.push(url);
    }
    return (
        <div className='allLeague-container'>
            <Card className='card'>
            <Card.Img variant="top" src={image} />
            <Card.Body style={{ height: '200px',}}>
                <Card.Title className='header-title'>{strLeague}</Card.Title>
                <Card.Text>
                    Sports Type: {strSport}
                </Card.Text>
                <Button onClick={() => handleBtn(idLeague)} variant="primary">Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
            </Card.Body>
            </Card>
        </div>
    );
};

export default AllLeague;