import React from 'react';

// import css
import '../stylesheets/Card.css';

const Card = (props) => {


    return(
        <React.Fragment>
            <div className="_card">

                <a href={props.url} target="_blank">
                    <div className="row">
                        <div className="col-10">
                            <p>{props.title}</p>
                            <p>{props.cat}</p>
                        </div>

                        <div className="col-2">
                            <img src={props.img} alt="" loading="lazy"/>
                        </div>
                        
                    </div>
                </a>
            </div>
        </React.Fragment>
    );
}

export default Card;