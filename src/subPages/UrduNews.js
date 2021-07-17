import React from 'react';
import { useSelector } from 'react-redux';

// import components
import Card from '../components/Card.js';

const Main=()=>{
    
    {/* getData from redux list */}
    const tempList = useSelector((state)=>state.ProductReducers.list);
    
    return(
        <React.Fragment>

            <div className="container-fluid">

                <div className="row justify-content-center">

                    <div className="col-2"></div>

                    <div className="col-7 py-3">
                        {
                            tempList.map((temp,index)=>{
                                return(
                                    <Card title={temp.title} img={temp.top_image} url={temp.url}/>
                                );
                            })
                        }
                    </div>

                    <div className="col-2 bg-primary">
                        <h1>weather</h1>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Main;