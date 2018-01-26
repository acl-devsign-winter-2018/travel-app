import html from './content.html';
import './content.css';
import Template from '../Template';

const template = new Template(html);

export default class Content{
  
  render(){
    return template.clone();
  }
  
}