var socket = new WebSocket("ws://127.0.0.1:5678/");

socket.onopen = function() {
    alert("The connection has been established.");
};

socket.onclose = function(event) {
    if (event.wasClean) {
        alert('Connection closed cleanly');
    } else {
        alert('Lost connection'); // например, "убит" процесс сервера
    }
    alert('Code: ' + event.code + ' cause: ' + event.reason);
};

socket.onerror = function(error) {
    alert("Error " + error.message);
};

setInterval(() => {
    socket.onmessage = function(event) {
        const vemekunys = document.querySelector(".uncomenkad #vemekunys");
        vemekunys.textContent = event.data[0] + event.data[1] + ':' + event.data[2] + event.data[3] + ':' + event.data[4] + event.data[5];

    };
    socket.send('Data received');
});