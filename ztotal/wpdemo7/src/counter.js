function counter() {
  var div = document.createElement('div');
  div.setAttribute('id', 'counter');
  div.innerHTML = 1;
  div.style.fontSize = '40px';
  div.onclick = function() {
    div.innerHTML = parseInt(div.innerHTML, 10) + 1
  }
  document.body.append(div)
}

export default counter;

