import html from './enter.html';
import Template from '../Template';

const template = new Template(html);

export default class Enter {

  render() {
    const dom = template.clone();

    return dom;
  }
}