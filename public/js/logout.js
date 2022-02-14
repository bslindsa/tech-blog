const inactivityTime = () => {
  window.onload = resetTimer;
  window.onkeydown = resetTimer;
  window.onmousemove = resetTimer;
  window.onmousemove = console.log('run mouse!');
};

let time;

const resetTimer = () => {
  clearTimeout(time);
  time = setTimeout(logout, 300000);
};

const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    alert('Logged out due to inactivity')
    document.location.replace('/login');
  } else {
    alert(response.statusText);
  }
};

document.querySelector('#logout').addEventListener('click', logout);

inactivityTime();