const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (btn) {
  console.log(btn);
  btn.addEventListener('click', function (event) {
    console.log(event);
    console.log(event.target);

    // if (event.target.id === 'grey') {
    //   body.style.backgroundColor = event.target.id;
    // }
    // if (event.target.id === 'grey') {
    //   body.style.backgroundColor = event.target.id;
    // }
    // if (event.target.id === 'grey') {
    //   body.style.backgroundColor = event.target.id;
    // }
    // if (event.target.id === 'grey') {
    //   body.style.backgroundColor = event.target.id;
    // }

    ch = event.target.id
    switch (ch) {
      case 'grey':
        body.style.backgroundColor = ch;
        break;
      case 'white':
        body.style.backgroundColor = ch;
        break;
      case 'yellow':
        body.style.backgroundColor = ch;
        break;
      case 'blue':
        body.style.backgroundColor = ch;
        break;
    }
  });
});
