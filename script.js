const cevaplar = [
    "evt",
    "kanka ayrıl",
    "YIKILLLL",
    "you are bi",
    "sıkıntı kardesim ya",
    "kombin yapıp gidersin mesela",
    "o sırada yozgat bozok üniversitesini kazanan sen",
    "you are so back",
    "benim rüyaların saçmalık seviyesi"
];

const magicBall = document.getElementById("magicBall");
const sallaButton = document.getElementById("salla-btn");

const answerDialog = document.getElementById("answer-dialog");
const modalAnswerText = document.getElementById("modal-answer-text");

const sayacElementi = document.getElementById("sayac");
let sayac = 0;

function rastgeleHexRenkUret() {
    const harfler = '0123456789ABCDEF';
    let renk = '#';
    for (let i = 0; i < 6; i++) {
        renk += harfler[Math.floor(Math.random() * 16)];
    }
    return renk;
}

function cevapVer() {
    sayac++;
    sayacElementi.textContent = sayac;
    sallaButton.disabled = true;
    magicBall.classList.add("shake");

    const yeniArkaplanRengi = rastgeleHexRenkUret();
    answerDialog.style.setProperty('--backdrop-rengi', yeniArkaplanRengi);

    setTimeout(() =>{
    const rastgele = Math.floor(Math.random() * cevaplar.length);
    const secilenCvp = cevaplar[rastgele];
    modalAnswerText.textContent = secilenCvp;

    answerDialog.showModal();

    magicBall.classList.remove("shake");
    sallaButton.disabled = false;
    }, 500);
}



sallaButton.addEventListener("click", cevapVer);

answerDialog.addEventListener("click", e => {
    if (e.target === answerDialog) {
        answerDialog.close();
    }
});