const redButton = document.getElementById('red');
const greenButton = document.getElementById('green');
const yellowButton = document.getElementById('yellow');

function setState() {
  const request = new Request('https://servup.herokuapp.com/collections/mouse/588cc9385978720004861b99', {
    method: 'GET',
    mode: 'cors',
    headers: new Headers({ 'Content-Type': 'application/json' }),
  });

  const currentState = fetch(request).then(blob => {
    return blob.json();
  });

  currentState.then((data) => {
    if (data.red) redButton.className = 'red-bg';
    if (data.yellow) yellowButton.className = 'yellow-bg';
    if (data.green) greenButton.className = 'green-bg';
  });
}

setState();

redButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('red-bg')) {
    redButton.className = 'no-bg';
    put({ red: false });
  } else {
    redButton.className = 'red-bg';
    put({ red: true });
  }
});

greenButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('green-bg')) {
    greenButton.className = 'no-bg';
    put({ green: false });
  } else {
    greenButton.className = 'green-bg';
    put({ green: true });
  }
});

yellowButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('yellow-bg')) {
    yellowButton.className = 'no-bg';
    put({ yellow: false });
  } else {
    yellowButton.className = 'yellow-bg';
    put({ yellow: true });
  }
});

function put(obj) {
  const request = new Request('https://servup.herokuapp.com/collections/mouse/588cc9385978720004861b99', {
    method: 'PUT',
    mode: 'cors',
    body: JSON.stringify(obj),
    headers: new Headers({ 'Content-Type': 'application/json' }),
  });

  return fetch(request).then(blob => blob.json());
}
