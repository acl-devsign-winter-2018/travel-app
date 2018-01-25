import Template from '../Template';
import html from './app.html';
import './app.css';
import { removeChildren } from '../dom';
import Header from './Header';
// import History from '../pages/history/History';
// import Resources from '../pages/resources/Resources';
// import Sample from '../pages/sample/Sample';

const template = new Template(html);

const map = new Map();
map.set('#history', History);
map.set('#resources', Resources);
map.set('#sample', Sample);

export default class App {

  constructor() {
    window.onhashchange = () => {
      this.setPage();
    };
  }

  setPage() {
    const Component = map.get(window.location.hash) || History;
    const component = new Component();
    removeChildren(this.main);
    this.main.appendChild(component.render());
  }

  render() {
    const dom = template.clone();   

    // const darkTheme = dom.querySelector('#dark-theme');
    // const lightTheme = dom.querySelector('#light-theme');
    // const buttons = dom.querySelector('#theme-buttons');

    // buttons.addEventListener('click', (event) => {
    //   if(event.target.id === 'dark-theme') {

    //   }
    // })
    
    dom.querySelector('header').appendChild(new Header().render());

    this.main = dom.querySelector('main');
    this.setPage();

    return dom;
  }
}
