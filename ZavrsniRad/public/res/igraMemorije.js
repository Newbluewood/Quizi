const kartice_path = {
    karta1 : {lice: "./res/img/Img1.png", nalicije: "./res/img/Back.png", id:1 },
    karta2 : {lice: "./res/img/Img2.png", nalicije: "./res/img/Back.png", id:2 },
    karta3 : {lice: "./res/img/Img3.png", nalicije: "./res/img/Back.png", id:3 },
    karta4 : {lice: "./res/img/Img4.png", nalicije: "./res/img/Back.png", id:4 },
    karta5 : {lice: "./res/img/Img5.png", nalicije: "./res/img/Back.png", id:5 },
    karta6 : {lice: "./res/img/Img6.png", nalicije: "./res/img/Back.png", id:6 }
 
}
sessionStorage.clear() // brisem sve rezultate iz memorije sesije na reload-u

function obracunajVreme (milisekunde) {
    let sekunde = Math.floor(milisekunde/1000)%60
    let minuti = Math.floor(milisekunde/60000)%60
    let sati = Math.floor(milisekunde/3600000)%24
    let dani = Math.floor(milisekunde/86400000)%365


    let vreme = ""

    if (dani === 0 && sati === 0 && minuti === 0){
        vreme = sekunde + " s"
    } else if ( dani === 0 && sati === 0 ) {
        vreme = minuti + " min, "+ sekunde + " s"
    } else if ( dani === 0 ) {
        vreme = sati + " h, "+ minuti + " min, "+ sekunde +" s"
    } else { vreme = dani + " d, "+ sati + " h,"+ minuti + " min,"+ sekunde + " s"}

   return vreme
}

function ispisSlova(ispis, element) {
    const tekst = ispis
    let i = 0
    element.innerHTML = ""
    let interval = setInterval(function() {
        if (i < tekst.length) {
           element.innerHTML += tekst.charAt(i)
            i++;
        } else {
            clearInterval(interval)
        }
    }, 50)
}

function prikazNajboljihRrezultata (n) {
    const lista = document.createElement("select")
    lista.id = "Plista" 
    for (i= 2; i<= n; i++) {
        if(localStorage.getItem("najboljeVreme"+(i*2)) == null) {
            localStorage.setItem("najboljeVreme"+(i*2), 0)
        }
        if(localStorage.getItem("najbolji"+(i*2)) == null) {
            localStorage.setItem("najbolji"+ (i*2), 0 + " s ")
        }
        if(localStorage.getItem("najboljiIme"+(i*2)) == null) {
            localStorage.setItem("najboljiIme"+ (i*2), " * ")
        }
   
    const stavke = document.createElement("option")
    const najbolji = localStorage.getItem("najbolji"+(i*2))
    const najboljiIme = localStorage.getItem("najboljiIme"+(i*2))
    stavke.innerHTML =`Najbolje vreme za  ${i*2} ${i<=2 ? "kartice" : "kartica"} je: <b> ${najbolji} </b> --> ${najboljiIme} `
    lista.appendChild(stavke)
    }

    return lista
}

function upisImena() {
    const upis = document.createElement("div")
    upis.id = "divUpis"
    const upisiSe = document.createElement("input")
    upisiSe.type = "text"
    upisiSe.id = "upis"
    upisiSe.setAttribute("placeholder", "Upisi kratko ime...")
    upisiSe.style = "color: white;"
    upis.appendChild(upisiSe)
    const Dugme = document.createElement("button")
    Dugme.id = "upisImena"
    Dugme.innerText = "Upisi Me"
    upis.appendChild(Dugme)
    const Mesto = document.querySelector("#wraper")
    Mesto.appendChild(upis)
    return Dugme
}

const kartice = []

for (let kartica_path in kartice_path) {
    kartice.push(kartice_path[kartica_path])
}


function izborPrikaza(n) {
    const SelectElement = document.createElement("select")
    SelectElement.title = "izbor_broja_kartica"
    for (let i=2; i<=n; i++) {
        const OptionElement = document.createElement("option")
        OptionElement.value = i*2
        OptionElement.innerText = `Prikazi ${i*2} ${i<=2 ? "kartice" : "kartica"}`
        SelectElement.append(OptionElement)
        if(OptionElement.value == 6) {
            OptionElement.setAttribute("selected", "on")
        }
    }
    const Izbor = document.querySelector("#izbor")
    Izbor.append(SelectElement)
}

function IzmesajNiz(niz) {
    for (let i = niz.length-1 ; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [niz[i], niz[j]] = [niz[j], niz[i]]; // Zamena elemenata
    }
    return niz
  }

function IzborKartica (niz, broj) {
    const randomNiz = []
    for (let i=0; i<+broj; i++) {
        randomNiz.push(niz[i])
    }
    const Dupliraj = randomNiz.concat(randomNiz)
    return Dupliraj

}

const BrojDostupnihKartica = kartice.length
izborPrikaza(BrojDostupnihKartica)

const Body = document.querySelector("body")
const Potvrdi = document.querySelector("#potvrdi")
const Display = document.querySelector("#display")
const RezultatDiv = document.querySelector("#rezultat")
const Wraper = document.querySelector("#wraper")
const ListaR = document.querySelector("#listaR")
const Pozdrav = document.createElement("p")
      Pozdrav.id = "pozdravniP"
const PozdravnaPoruka = " Dobrodošli u igru MEMORIJE !  :) "
    ispisSlova(PozdravnaPoruka, Pozdrav)
Wraper.append(Pozdrav)


let otvorene = []
let pogodjeno = 0
let interval = 0

//for (let i=2; i<= BrojDostupnihKartica ;i++){   // jedna kartica je nalicije, zbog imenovanja krecem od 2
//    localStorage.setItem("najboljeVreme"+(i*2), 0)
//    localStorage.setItem("najbolji"+ (i*2), 0)
//}
        
ListaR.innerHTML = ""
const Lista = prikazNajboljihRrezultata(BrojDostupnihKartica)
ListaR.appendChild(Lista)

document.addEventListener("click", (e)=> {

    const BrojKartica = Number(document.querySelector("select").value)/2
       
    if(e.target.id == "potvrdi"){

        ListaR.innerHTML = ""
        const najbolji = localStorage.getItem("najbolji"+(BrojKartica*2))
        const najboljiIme = localStorage.getItem("najboljiIme"+(BrojKartica*2))
        ListaR.innerHTML =`Najbolji rezultat sa  ${BrojKartica*2} ${BrojKartica <=2  ? "kartice" : "kartica"} je: <b> ${najbolji} </b> koji je postavio :`
        ListaR.innerHTML += ` <p style="font-size: 4rem;margin-top: 0;" ><b> - ${najboljiIme} - </b></p>`
  
      
    
        // let pozadine = kartice[Math.floor(Math.random()*5 + 1)].lice
        // Wraper.style = "background-image: url(" + pozadine + ")"
        pogodjeno = 0
        const IzmesanNiz = IzmesajNiz(kartice)
        const IzabraneKartice = IzborKartica(IzmesanNiz,BrojKartica)
        const PromesaneKarte = IzmesajNiz(IzabraneKartice)
        

        vreme = new Date()
        Display.innerHTML =""
        Display.style = null
        RezultatDiv.innerText = ""
        RezultatDiv.style = null
        Pozdrav.innerText = " Upari sve kartice za što kraće vreme :)"
        Pozdrav.style = "color: rgba(200, 200, 220, 0.8); font-size:5vh; animation-name: move; animation-duration:2s; animation-fill-mode: forwards;"
        

        clearInterval(interval)
        interval=0
        ispisVremena()
        function ispisVremena() {
            let i = 0;
            if (interval == 0){
                interval = setInterval(function() { 
                    if (BrojKartica != pogodjeno) {
                        i++;
                        let milisek = i*1000
                        let proslo = obracunajVreme(milisek)
                        RezultatDiv.style = "font-size: 40px"
                        RezultatDiv.innerHTML = `${proslo}`     
                    } else {clearInterval(interval) 
                        pogodjeno = 0
                     }
                
                }, 1000);           
            } 
        }

        for (let kartica of PromesaneKarte) {
    
            const KarticaPolje = document.createElement("div")
            KarticaPolje.classList.add("polje-kartice")
            const KarticaPrikaz = document.createElement("img")
            KarticaPrikaz.classList.add("nalicije")
            KarticaPrikaz.setAttribute("data-id",kartica.id)
            KarticaPrikaz.src = kartica.nalicije
            KarticaPolje.append(KarticaPrikaz)
            Display.append(KarticaPolje)

        }
    }
    if(e.target.classList.contains("nalicije")) {
        if(e.target.getAttribute("disabled") != "on"){
            const otvorena = e.target.getAttribute("data-id")
            e.target.src = `./res/img/img${otvorena}.png`
            e.target.setAttribute("disabled","on")
            otvorene.push(e.target)
            if(otvorene.length == 2) {        
                if(otvorene[0].getAttribute("data-id") === otvorene[1].getAttribute("data-id")){
                    otvorene = []
                    pogodjeno++     
                } else { 
                    setTimeout(()=> {
                        otvorene[0].src = "./res/img/Back.png"
                        otvorene[0].removeAttribute("disabled","on")
                        otvorene[1].src = "./res/img/Back.png"
                        otvorene[1].removeAttribute("disabled","on")
                        otvorene = []   
                    },500)              
                }  
            } 

            if (BrojKartica == pogodjeno) {
                Display.style= "background-color: rgba(221, 230, 237, 0.7);"
                Display.style.filter = "blur(2px)"
                //RezultatDiv.style = "background-color: lightgrey"
                RezultatDiv.style.padding = "1vh"
                // RezultatDiv.style.margin = "1vh"
                //RezultatDiv.style = "font-size: 3rem"
          
                const zavrsio = new Date()
                const ukupno = zavrsio - vreme
                const uspeh = obracunajVreme(ukupno)
                let poruka = ""
                let najboljeVreme  = localStorage.getItem("najboljeVreme"+BrojKartica*2, Number(ukupno))

                if( najboljeVreme == 0 || ukupno < najboljeVreme){
                    localStorage.setItem("najbolji"+ BrojKartica*2, uspeh)
                     najbolji = localStorage.setItem("najboljeVreme"+ BrojKartica*2, ukupno)
                     poruka = `  ${uspeh} ! Svaka čast . Najbolji Rezultat !! Čestitam !`
                     const dugme = upisImena()
                     dugme.addEventListener("click", () => {
                        const Ime = document.querySelector("input").value
                        localStorage.setItem("najboljiIme"+ BrojKartica*2, Ime)
                        dugme.parentNode.remove()
                        ListaR.innerHTML =`Najbolji rezultat sa  ${BrojKartica*2} ${BrojKartica*2 ? "kartice" : "kartica"} je: <b> ${uspeh} </b>`
                        ListaR.innerHTML += ` <p style="font-size: 4rem;margin-top: 0;" ><b> - ${Ime} - </b></p>`
                      
                     })
                     

                      
                } else {
                     poruka = `  ${uspeh} ! Nije loše. Bravo !`
                }
                
                ispisSlova(poruka, RezultatDiv)
            }
          
        }
       
    }
})





