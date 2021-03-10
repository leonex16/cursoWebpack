import style from './style.css';
import logo from './assets/webpack.svg';
import gemini from './assets/saga-kanon.png';
import data from './data.json'
import { HelloWorld } from './Components/HelloWorld.js';

let arr = [1,2,3];
let codeESNext = arr => console.log([...arr]);

let d = document;
let $app = d.getElementById('app');
let $h1 = d.createElement('h1');
let $logo = d.createElement('img');
let $img = d.createElement('img');
let $nav = d.createElement('nav');
let menu = '';
let hello = new HelloWorld('Vanilla Js')


$h1.textContent = hello.greet();
$logo.src = logo;
$logo.classList.add('icon');
// $img.src = gemini;
data.links.forEach(link => menu +=`<a href="${link[1]}" class="">${link[0]}</a>`);
$nav.innerHTML = menu;
$nav.classList.add('menu');

$app.appendChild($h1)
$app.appendChild($logo)
$app.appendChild($nav);
$app.appendChild($img);

console.log('Hola Mundo Sin Configuración con Webpack');
console.log(codeESNext(arr))