const socket = io()

const select = document.querySelector('#activeRoom')

socket.on('updateRoomList', function (rooms)  {
    const length = select.options.length;
    if (length !== 1) {
        for (i = length-1; i >= 1; i--) {
            select.options[i] = null;
          }
    }

    rooms.forEach(function (room) {
        select.append(new Option(room))
    })
})

function myFunction(e) {
    document.querySelector("#room-name").value = e.target.value
}

