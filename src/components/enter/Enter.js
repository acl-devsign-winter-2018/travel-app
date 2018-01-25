import html from './enter.html';
import Template from '../Template';

const template = new Template(html);

export default class Enter {

  render() {
    const dom = template.clone();

    const enterImage = dom.querySelector('#enter');

    enterImage.addEventListener('click', (event) => {
      event.preventDefault();
      window.location.hash = '#about';
    });

    return dom;
  }
}