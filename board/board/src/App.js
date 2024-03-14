import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Voc from './pages/voc/Voc'
import VocView from './pages/voc/VocView'
import VocCreate from "./pages/voc/VocCreate";
import VocUpdate from "./pages/voc/VocUpdate";
import Jun from "./pages/jun/Jun";
import JunView from './pages/jun/JunView'
import JunCreate from "./pages/jun/JunCreate";
import JunUpdate from "./pages/jun/JunUpdate";
import JunLogIn from "./pages/jun/JunLogIn";
import JunCreateMember from "./pages/jun/JunCreateMember";
import Scm from './pages/scm/Scm'
import ScmView from './pages/scm/ScmView'
import ScmCreate from "./pages/scm/ScmCreate";
import ScmUpdate from "./pages/scm/ScmUpdate";
import ScmLogin from "./pages/scm/ScmLogin";
import ScmMember from "./pages/scm/ScmMember";
import Nam from './pages/nam/Nam';
import NamLogin from './pages/nam/NamLogin';
import NamMember from './pages/nam/NamMember';
import NamView from './pages/nam/NamView';
import NamCreate from "./pages/nam/NamCreate";
import NamUpdate from "./pages/nam/NamUpdate";
import SB from './pages/sb/SB'
import SBLogin from './pages/sb/SBLogin'
import SBSignUp from './pages/sb/SBSignUp'
import SBView from './pages/sb/SBView'
import SBCreate from "./pages/sb/SBCreate";
import SBUpdate from "./pages/sb/SBUpdate";
import Board from './pages/SH/Board'; // 추가 된 내용
import BoardView from './pages/SH/BoardView'; // 추가 된 내용
import Login from './pages/SH/Login';
import { useEffect, useState } from 'react';
import axios from "axios";


function App() {
  // const [isLogin , setIsLogin] = useState(false);
  // const [loading , setLoading] = useState(false);
  //
  // useEffect(()=>{
  //   try{
  //     let data = { username : "test02281" };
  //     axios.post("/login" ,JSON.stringify(data), {
  //       headers: {
  //         "Content-Type": `application/json`,
  //       }})
  //         .then(res =>{
  //           console.log("res.data.accessToken : " + res.data);
  //           axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data;
  //           setIsLogin(true);
  //         })
  //         .catch(ex=>{
  //           console.log("app silent requset fail : " + ex);
  //         })
  //         .finally(()=>{
  //           console.log("login request end");
  //           setLoading(true);
  //         });
  //   }catch(e){
  //     console.log(e);
  //   }
  // },[]);
  //
  // function loginCallBack(login){
  //   setIsLogin(login);
  // }

  // if(loading){
    return (
        <div className="App">
          <Router>
            <Navbar/>
            <Routes>
              <Route exact path='/' element={<Home />}/>
              <Route path='/voc' element={<Voc />}/>
              <Route path='/voc/:vocId' element={<VocView />}/>
              <Route path='/voc/create' element={<VocCreate />}/>
              <Route path='/voc/update/:vocId' element={<VocUpdate />}/>
              <Route path='/jun' element={<Jun />}/>
              <Route path='/jun/:junId' element={<JunView />}/>
              <Route path='/jun/create' element={<JunCreate />}/>
              <Route path='/jun/update/:junId' element={<JunUpdate />}/>
              {/*<Route path='/jun/logIn' element={(props)=> <JunLogIn {...props} loginCallBack={loginCallBack} />}/>*/}
              <Route path='/jun/logIn' element={<JunLogIn />}/>
              <Route path='/jun/createMember' element={<JunCreateMember />}/>
              <Route path='/scm' element={<Scm />}/>
              <Route path='/scm/:scmId' element={<ScmView />}/>
              <Route path='/scm/create' element={<ScmCreate />}/>
              <Route path='/scm/update/:scmId' element={<ScmUpdate />}/>
              <Route path='/scm/login' element={<ScmLogin />}/>
              <Route path='/scm/member' element={<ScmMember />}/>
              <Route path='/nam/login_nam' element={<NamLogin />}/>
              <Route path='/nam/member' element={<NamMember />}/>
              <Route path='/nam' element={<Nam />}/>
              <Route path='/nam/:namId' element={<NamView />}/>
              <Route path='/nam/create' element={<NamCreate />}/>
              <Route path='/nam/update/:namId' element={<NamUpdate />}/>
              <Route path='/sbLogin' element={<SBLogin />}/>
              <Route path='/sbSignUp' element={<SBSignUp />}/>
              <Route path='/sb' element={<SB />}/>
              <Route path='/sb/:sbId' element={<SBView />}/>
              <Route path='/sb/create' element={<SBCreate />}/>
              <Route path='/sb/update/:sbId' element={<SBUpdate />}/>
              <Route exact path='/' element={<Home />} />
              <Route path='/board' element={<Board/>} />
              <Route path='/board/:bId' element={<BoardView/>} />
              <Route path='/Login' element={<Login/>} />
            </Routes>
          </Router>

        </div>
    );
  // }else{
  //   return (
  //       <div>
  //         Loading ....
  //       </div>
  //   )
  //
  // }
  //
  //
  // return (
  //     <>
  //       <Router>
  //         <Navbar/>
  //         <Routes>
  //           <Route exact path='/' element={<Home />}/>
  //           <Route path='/voc' element={<Voc />}/>
  //           <Route path='/voc/:vocId' element={<VocView />}/>
  //           <Route path='/voc/create' element={<VocCreate />}/>
  //           <Route path='/voc/update/:vocId' element={<VocUpdate />}/>
  //           <Route path='/jun' element={<Jun />}/>
  //           <Route path='/jun/:junId' element={<JunView />}/>
  //           <Route path='/jun/create' element={<JunCreate />}/>
  //           <Route path='/jun/update/:junId' element={<JunUpdate />}/>
  //           <Route path='/jun/logIn' element={<JunLogIn />}/>
  //           <Route path='/jun/createMember' element={<JunCreateMember />}/>
  //           <Route path='/scm' element={<Scm />}/>
  //           <Route path='/scm/:scmId' element={<ScmView />}/>
  //           <Route path='/scm/create' element={<ScmCreate />}/>
  //           <Route path='/scm/update/:scmId' element={<ScmUpdate />}/>
  //           <Route path='/scm/login' element={<ScmLogin />}/>
  //           <Route path='/scm/member' element={<ScmMember />}/>
  //           <Route path='/nam/login_nam' element={<NamLogin />}/>
  //           <Route path='/nam/member' element={<NamMember />}/>
  //           <Route path='/nam' element={<Nam />}/>
  //           <Route path='/nam/:namId' element={<NamView />}/>
  //           <Route path='/nam/create' element={<NamCreate />}/>
  //           <Route path='/nam/update/:namId' element={<NamUpdate />}/>
  //           <Route path='/sbLogin' element={<SBLogin />}/>
  //           <Route path='/sbSignUp' element={<SBSignUp />}/>
  //           <Route path='/sb' element={<SB />}/>
  //           <Route path='/sb/:sbId' element={<SBView />}/>
  //           <Route path='/sb/create' element={<SBCreate />}/>
  //           <Route path='/sb/update/:sbId' element={<SBUpdate />}/>
  //           <Route exact path='/' element={<Home />} />
  //           <Route path='/board' element={<Board/>} />
  //           <Route path='/board/:bId' element={<BoardView/>} />
  //           <Route path='/Login' element={<Login/>} />
  //         </Routes>
  //       </Router>
  //     </>
  // );
}

export default App;
