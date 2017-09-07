import _ from 'lodash';

import './style.css';

import Icon from './icon.png';



function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    let icon = new Image();
    icon.src = Icon;
    icon.width = 100;
    icon.height = 100;
    element.appendChild(icon);
    return element;
}

document.body.appendChild(component());