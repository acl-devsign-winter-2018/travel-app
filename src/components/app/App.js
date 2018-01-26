import Template from '../Template';
import html from './app.html';
import './app.css';
import Content from '../content/Content';
import '../content/content.css';
import Header from '../header/Header';
import '../header/header.css';

const template = new Template(html);

export default class App{

  render(){
    const dom = template.clone();

    // dom.querySelector('header').appendChild(new Header().render());
    dom.querySelector('main').appendChild(new Content().render());



    return dom;
  }
}