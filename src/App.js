import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {setData} from './redux/actions/Index.js';
import { Route, Switch } from 'react-router';

import axios from 'axios';

// import components
import Navbar from './pages/Navbar.js';
import Main from './pages/Main.js';

import Business from './subPages/Business.js';
import Entertainment from './subPages/Entertainment.js';
import Food from './subPages/Food.js';
import ForYou from './subPages/ForYou.js';
import Health from './subPages/Health.js';
import Pakistan from './subPages/Pakistan.js';
import Sciences from './subPages/Sciences.js';
import Sports from './subPages/Sports.js';
import Technology from './subPages/Technology.js';
import Travel from './subPages/Travel.js';
import UrduNews from './subPages/UrduNews.js';
import World from './subPages/World.js';


// import API
import NewsJSON from './NewsJSON.js';

function App() {
  
  const dispatch=useDispatch();

  const getData=async()=>{
      // const response1=await fetch('http://localhost:5000/news');
      // const response=await fetch("https://fakestoreapi.com/products")
      // const data = await response.json();
      // console.log(data);
      // dispatch(setData(data));

      // const data1=await response1.json();
      // console.log("response 1 : "+data1.news);

      // console.log("news json : "+NewsJSON);

      // const response=await fetch('http://localhost:5000/news');
      // const data = await response.json();
      // console.log("data : "+data.news);
      // dispatch(setData(data.news));

    //   const request={
    //     "category":"business"
    // }

      axios.get(
          'http://localhost:5000/news'
      ).then(res=>{
          const apiData=res.data['news'];
          dispatch(setData(apiData));
          console.log("api data : "+apiData);
      }).catch(
          (error)=>console.log(" api error : "+error)
      );


  }


  {/* 
      calling useEffect
      setData->redux list
  */}

  useEffect(()=>{
      getData();
  },[]);

  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/business" component={Business}/>
          <Route exact path="/health" component={Health}/>
          <Route exact path="/entertainment" component={Entertainment}/>
          <Route exact path="/food" component={Food}/>
          <Route exact path="/foryou" component={ForYou}/>
          <Route exact path="/pakistan" component={Pakistan}/>
          <Route exact path="/sports" component={Sports}/>
          <Route exact path="/sciences" component={Sciences}/>
          <Route exact path="/technology" component={Technology}/>
          <Route exact path="/travel" component={Travel}/>
          <Route exact path="/urduNews" component={UrduNews}/>
          <Route exact path="/world" component={World}/>
        </Switch>
    </React.Fragment>
  );
}

export default App;
