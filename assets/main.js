const ytButtons = document.querySelectorAll(".yt-button"); // yt linkidele on lisatud klass "yt-button, mille järgi on võimalik nüüd õiged elemendid üles leida"
ytButtons.forEach(button => button.addEventListener("click", event => openModal(event))); //kõigile youtube linkidele lisatakse click listener

document.getElementById("close-btn").addEventListener("click", event => closeModal()); // modaali sulgemisnupule lisatake click listener

//modaali avamise funktsioon
function openModal(event) {
    event.preventDefault(); //takistab lingi vajutamisel lehe üles kerimist
    let url = event.target.getAttribute("data-yt-url"); // parameetri väärtuseks antakse custom attribuudi "data-yt-url" väärtus
    document.getElementById("yt-modal").style.display = "block"; // modaali div tehakse nähtavaks
    document.getElementById("yt-iframe").setAttribute("src", url); //youtube videot sisaldavale iframele antakse ette video url
}

// modaali sulgemise funktsioon
function closeModal() {
    document.getElementById("yt-modal").style.display = "none"; //modaali sulgemisel peidetakse selle div
    document.getElementById("yt-iframe").setAttribute("src", ""); // yt videot sisaldava iframe src attribuuti väärtus nullitakse ära
}




