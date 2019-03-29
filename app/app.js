import app from '../css/app.css';
import abs from "../less/less.less";
import img from '../images/hua.jpg';

window.onload = function(){
	let image = new Image();
	image.className = 'auto-img';
	image.src = img;
	document.getElementById('imgBox').appendChild('image');
}

console.log('app');
