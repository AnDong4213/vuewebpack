/* eslint-disable */
import React from 'react';
/* eslint-enable */

import ReactDOM from 'react-dom';

let a = {a:1, b:2};
console.log({...a, c:3});

async function* genAnswers() {
  let stream = [Promise.resolve(4), Promise.resolve(9), Promise.resolve(12)];
  let total = 0;
  for await (let val of stream) {
    total += await val;
    yield total;
  }
}
function forEach(ai, fn) {
  return ai.next().then(function (r) {
    if (!r.done) {
      fn(r);
      return forEach(ai, fn);
    }
  });
}

let output = 0;
forEach(genAnswers(), function(val) { output += val.value; }).then(function () {
  console.log(output); // 42
});


ReactDOM.render(
	<div>React</div>,
	document.getElementById('root')
);





	






