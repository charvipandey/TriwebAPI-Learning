let currentUser = null;
const redContainer = document.getElementById('red-container');
const greenContainer = document.getElementById('green-container');
const blueContainer = document.getElementById('blue-container');
const yellowContainer = document.getElementById('yellow-container');
const usernameInput = document.getElementById('username-input');
const addUserBtn = document.getElementById('add-user-btn');
const removeUserBtn = document.getElementById('remove-user-btn');
const moveRedBtn = document.getElementById('move-red-btn');
const moveGreenBtn = document.getElementById('move-green-btn');
const moveBlueBtn = document.getElementById('move-blue-btn');
const moveYellowBtn = document.getElementById('move-yellow-btn');

function addUser() {
    if (!currentUser) {
        currentUser = document.createElement("div");
        currentUser.className = "user";
        currentUser.setAttribute("id", "user");
        currentUser.innerHTML = usernameInput.value;
        usernameInput.disabled = true;
        addUserBtn.disabled = true;
        removeUserBtn.disabled = false;
        redContainer.append(currentUser);
    }
}

function removeUser() {
    if (currentUser) {
        currentUser.remove();
        usernameInput.disabled = false;
        addUserBtn.disabled = false;
        removeUserBtn.disabled = true;
        usernameInput.value = "";
        currentUser = null;
    }
}

function moveToRed() {
    if (currentUser) {
        redContainer.append(currentUser);
    }
}

function moveToGreen() {
    if (currentUser) {
        greenContainer.append(currentUser);
    }
}

function moveToBlue() {
    if (currentUser) {
        blueContainer.append(currentUser);
    }
}

function moveToYellow() {
    if (currentUser) {
        yellowContainer.append(currentUser);
    }
}

addUserBtn.addEventListener("click", addUser);
removeUserBtn.addEventListener("click", removeUser);
moveRedBtn.addEventListener("click", moveToRed);
moveGreenBtn.addEventListener("click", moveToGreen);
moveBlueBtn.addEventListener("click", moveToBlue);
moveYellowBtn.addEventListener("click", moveToYellow);
