function number() {
  var div = document.createElement('div');
  div.setAttribute('id', 'number');
  div.innerHTML = 200;
  div.style.fontSize = '40px';
  document.body.append(div)
}

export default number;

