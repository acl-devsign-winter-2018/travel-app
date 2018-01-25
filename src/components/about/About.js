import html from './about.html';
import Template from '../Template';

const template = new Template(html);

export default class About {

  render() {
    const dom = template.clone();

    return dom;
  }
}