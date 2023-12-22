import React from 'react';
import Header from './../components/header';
import Text from './../components/Text';
import Quote from './../components/quote';
import Display from './../components/display';
import Data2 from "../public/Data/Data2.js"
import Data3 from "../public/Data/Data3.js"
import Data4 from "../public/Data/Data4.js"
import Data5 from "../public/Data/Data5.js"
import Data6 from "../public/Data/Data6.js"
import Data7 from "../public/Data/Data7.js"
import MJ_SVG from '../components/mj_SVG';
import Graph1 from './../public/Data/Graph1';
import Graph2_3 from '@/public/Data/Graph2_3';
import Graph4 from '@/public/Data/Graph4';
import Data8 from '@/public/Data/Data8';
import Data9 from '@/public/Data/Data9';
import Graph5 from '@/public/Data/Graph5';
import Graph6 from './../public/Data/Graph6';
import Data1 from '@/public/Data/Data1';
import Data10 from '@/public/Data/Data10';

export default function Index() {
    return (
      <div className="app">
        <Header />
        <MJ_SVG />
        <Text data={Data2}/>
        <Text data={Data4}/>
        <Display data={Graph1}/>
        <Text data={Data5}/>
        <Text data={Data6}/>
        <Text data={Data3}/>
        <Display data={Graph2_3}/>
        <Text data={Data7}/>
        <Display data={Graph4}/>
        <Text data={Data8}/>
        <Display data={Graph5}/>
        <Text data={Data9}/>
        <Display data={Graph6}/>
        <Text data={Data1}/>
        <Quote/>
        <Text data={Data10}/>
      </div>
    );
  }