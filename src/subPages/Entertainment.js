import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';

import axios from 'axios';

// import from redux
import {setData} from '../redux/actions/Index.js';

// import components
import Card from '../components/Card.js';

const Main=()=>{
    
    const dispatch = useDispatch();

    const getData=()=>{

        // const response= await fetch("http://localhost:5000/news");
        // const data=await response.json();
        
        // const tempData=data.news.filter((temp)=>temp.category=="entertainment");
        // console.log("business filtered data : "+tempData);

        // dispatch(setData(tempData));

        const request={
            "category":"entertainment"
        }

        axios.get(
            'http://localhost:5000/news',{header:request}
        ).then(res=>{
            const apiData=res.data['news'];
            dispatch(setData(apiData));
            console.log("api data entertainment : "+apiData);
        }).catch(
            (error)=>console.log(" api error : "+error)
        );

    }
    useEffect(()=>{
        getData();
    },[]);

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
                                    <Card title={temp.title} img={temp.top_image} url={temp.url} cat={temp.category}/>
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