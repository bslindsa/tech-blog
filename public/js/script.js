// // idle timer code borrowed from w3docs.com
// idle = localStorage.getItem("idle");

// let inactivityTime = function () {

//     let time;
//     window.onload = resetTimer;
//     document.onmousemove = resetTimer;
//     document.onkeydown = resetTimer;

//     function resetTimer() {
//         clearTimeout(time);
//         time = setTimeout(logout, 5000);
//     };

//     function logout() {
//         const response = fetch('/api/users/logout', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//         });
//         if (response.ok) {
//             console.log('logged out');
//             alert('Logged out due to inactivity')
//             console.log(idle);
//             localStorage.setItem("idle", true);
//             // document.location.reload();
//         }

//     };
// };

// inactivityTime();
