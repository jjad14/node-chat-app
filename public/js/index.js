const socket = io()

const select = document.querySelector('#activeRoom')

socket.on('updateRoomList', (rooms) => {
    rooms.forEach(function (room) {
        select.append(new Option(room))
    })
})

function myFunction(e) {
    document.querySelector("#room-name").value = e.target.value
}

