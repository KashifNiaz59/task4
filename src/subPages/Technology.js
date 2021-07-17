import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';

// import from redux
import {setData} from '../redux/actions/Index.js';

// import components
import Card from '../components/Card.js';

const Main=()=>{
    
    const dispatch = useDispatch();

    const getData=async()=>{

        const response= await fetch("http://localhost:5000/news");
        const data=await response.json();
        
        const tempData=data.news.filter((temp)=>temp.category==="sci/tech");
        console.log("business filtered data : "+tempData);

        dispatch(setData(tempData));
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