import type { Component } from 'solid-js';

import {Router, Routes, Route, hashIntegration, Navigate} from '@solidjs/router'; 
import Belajar_chart from '../assets/pages/cell/partial/belajar_chart';
import Bar_chart from '../assets/pages/cell/partial/bar_chart';
//import Popup from '../assets/komponen/popup/popup';
//import Home from '../assets/containers/home/home';


const pathFn = (e: any) => {
  console.log('pathFn', e);
  return '/home';
}

const Root: Component = () => {
  return (
    <> 
    <Router 
    // source={hashIntegration()}
    >
        <Routes>
            <Route path="/" element={ <Navigate href={pathFn}/> } />
            <Route path="/belajar_chart" element={ <Belajar_chart/> } />
            <Route path="/bar_chart" element={ <Bar_chart/> } />
          
        </Routes>
    </Router>
    </>
  );
};

export default Root;