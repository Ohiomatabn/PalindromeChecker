const btn = document.querySelector('.btn'),
 reslt = document.querySelector('.result');

 btn.addEventListener('click', palindrome);

 //madam
 //noon
 function palindrome(){
  const word = document.querySelector('.input-text').value;
  let len = word.length;

  let start = word.substring(0, Math.floor(len / 2)).toLowerCase();

  let end = word.substring(len - Math.floor(len / 2)).toLowerCase();

  //let flip = end.split('').reverse().join('');
  let flip = [...end].reverse().join('');

  if(start === flip){
    reslt.innerHTML = `${word.toUpperCase()} is a palindrome `
  } else{
    reslt.innerHTML = `${word.toUpperCase()} is not palindrome `
  }
 }