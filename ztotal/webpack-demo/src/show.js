function addZero(m){
  return m < 10 ? '0' + m : m;
}

function haDate() {
  let time = new Date();
  let y = time.getFullYear(), m = time.getMonth()+1, d = time.getDate();
  let h = time.getHours(), mm = time.getMinutes(), s = time.getSeconds();
  return y+'-'+addZero(m)+'-'+addZero(d)+' '+addZero(h)+'/'+addZero(mm)+'/'+addZero(s);
}

export default haDate
