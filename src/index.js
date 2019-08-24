/**
 * Created by kanamars on 21/08/19.
 */

import _ from 'lodash';

function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'Suneel'], ' ');

    return element;
}

document.body.appendChild(component());