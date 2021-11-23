const ytButtons = document.querySelectorAll(".yt-button");
ytButtons.forEach(button => button.addEventListener("click", event => openModal(event)));

document.getElementById("close-btn").addEventListener("click", event => closeModal());

function openModal(event) {
    event.preventDefault();
    let url = event.target.getAttribute("data-yt-url");
    document.getElementById("yt-modal").style.display = "block";
    document.getElementById("yt-iframe").setAttribute("src", url);
}

function closeModal() {
    document.getElementById("yt-modal").style.display = "none";
    document.getElementById("yt-iframe").setAttribute("src", "");
}




