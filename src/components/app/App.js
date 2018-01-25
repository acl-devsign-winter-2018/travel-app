import Template from '../Template';
import html from './app.html';
import './app.css';
import { removeChildren } from '../dom';
import Header from './Header';
import Enter from '../enter/Enter';
import About from '../about/About';

const template = new Template(html);

const map = new Map();
map.set('#enter', Enter);
map.set('#about', About);

export default class App {

  constructor() {
    window.onhashchange = () => {
      this.setPage();
    };
  }

  setPage() {
    const Component = map.get(window.location.hash) || Enter;
    const component = new Component();
    removeChildren(this.main);
    this.main.appendChild(component.render());
    if(window.location.hash === '#about') {
      this.footer.classList.remove('hidden');
      this.header.classList.remove('hidden');
    }
    if(window.location.hash === '#enter') {
      this.footer.classList.add('hidden');
      this.header.classList.add('hidden');
      console.log('hidden added;');
    }
  }

  render() {
    const dom = template.clone();   

    dom.querySelector('header').appendChild(new Header().render());

    this.footer = dom.querySelector('#footer');
    this.header = dom.querySelector('#header');
    this.main = dom.querySelector('main');
    this.setPage();

    return dom;
  }
}
