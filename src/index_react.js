import style from './style.css';
import logo from './assets/webpack.svg';
import data from './data.json'
import React from 'react';
import ReactDOM from 'react-dom';
import {HelloWorld} from './Components/HelloWorld.jsx'


let d = document;
let $app = d.getElementById('app');
let $h1 = d.createElement('h1');
let $logo = d.createElement('img');
let $img = d.createElement('img');
let $nav = d.createElement('nav');
let menu = '';


ReactDOM.render( <
  HelloWorld name = "React" / >
)
$logo.src = logo;
$logo.classList.add('icon');
data.links.forEach(link => menu += `<a href="${link[1]}" class="">${link[0]}</a>`);
$nav.innerHTML = menu;
$nav.classList.add('menu');

$app.appendChild($h1)
$app.appendChild($logo)
$app.appendChild($nav);
$app.appendChild($img);