var request = [
    document.querySelector("#request_name1"),
    document.querySelector("#request_name2"),
];

function deny(id) {
    request[id].remove();
    totalrequests.innerText--;
}

function accept(id) {
    request[id].remove();
    totalrequests.innerText--;
    totalconnections.innerText++;
}



function changename(jane) {
    jane.innerText = "Pretty Girl"
}

function signout(element) {
    if(element.innerText=="Login") {
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }
}