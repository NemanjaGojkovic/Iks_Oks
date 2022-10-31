
let nivoIgre=1
let prviIgra=true //da li igrac igra prvi ili kompjuter (true ako igrac igra prvi)
let krajIgre=false //da li je igra zavrsena
let dugmeNovaIgra=document.querySelector('.novaIgra')
let dugmeZameni=document.querySelector('.zameni')
let brojacPoteza=0 //koliko poteza je odigrano
let brojNivoa=document.querySelector('.brojNivo')
let natpisPobeda=document.querySelector('.pobeda')
let natpisPoraz=document.querySelector('.poraz')
let natpisNereseno=document.querySelector('.nereseno')

brojNivoa.innerHTML="1"
document.querySelector('.nivo1').onclick=()=> {nivoIgre=1; brojNivoa.innerHTML="1"}
document.querySelector('.nivo2').onclick=()=> {nivoIgre=2; brojNivoa.innerHTML="2"}
document.querySelector('.nivo3').onclick=()=> {nivoIgre=3; brojNivoa.innerHTML="3"}

let iks=`<div class="iks" style="display: flex; align-items: center; justify-content: center;"><img src="slike/iks.png" style="height: 80px; width: 80px;"></div>`
let oks=`<div class="oks" style="display: flex; align-items: center; justify-content: center;"><img src="slike/oks.png" style="height: 80px; width: 90px;"></div>`



dugmeNovaIgra.addEventListener('click', ()=>{
    window.location.reload()
})

dugmeZameni.onclick=()=>{
    if(prviIgra){
        prviIgra=false
        potezKompa()
        dugmeZameni.onclick=null
    }else{
        prviIgra=true
    }   
}



let tablaPomocno = document.querySelectorAll('td')
let tabla = [[],[],[]]
let brElemenata=0
for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        tabla[i][j]=tablaPomocno[brElemenata++]
    }
}


for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        tabla[i][j].onclick=()=>odigranPotez(tabla[i][j])
    }
}

if(prviIgra==false){
    potezKompa()
}

const odigranPotez = (polje) => {

    if(brojacPoteza%2==1 && prviIgra){
        return
    }

    if(krajIgre){
        return
    }

    if(brojacPoteza%2==0 && !prviIgra){
        return
    }

    dugmeZameni.onclick=null

    if(polje.childNodes.length==0){
        polje.innerHTML=iks
    }else{
        return
    }

    brojacPoteza++

    proveraPobede()
    potezKompa()
    

}


const potezKompa = () => {

    if(krajIgre){
        return
    }

    

    let slobodnaPolja=[]
    let polja=document.querySelectorAll('td')
    let brojPolja=0

    while(polja[brojPolja]!=null){
        if(polja[brojPolja].childNodes.length==0){
            slobodnaPolja.push(polja[brojPolja])
        }
        brojPolja++
    }

    if(slobodnaPolja.length==0){
        neresenoFunc()
        krajIgre=true
        return
    }

    //prvi nivo
    if(nivoIgre==1){

        let rendom = Math.floor(Math.random()*slobodnaPolja.length)
        setTimeout(()=>{
            slobodnaPolja[rendom].innerHTML = oks
            brojacPoteza++}, 500)
            proveraPobede()

    }

    //drugi nivo
    if(nivoIgre==2){

        let brojac=0
        let praznoPolje=false
        let index

        //oks pobedjuje
        //redovi
        for(let i=0;i<3;i++){
            if(tabla[0][i].childNodes.length!=0 && tabla[0][i].childNodes[0].classList[0]=="oks"){
                brojac++
            }
            if(tabla[0][i].childNodes.length==0){
                praznoPolje=true
                index=i
            }
        }

        if(brojac==2 && praznoPolje){
            setTimeout(()=>{
                tabla[0][index].innerHTML = oks
                brojacPoteza++
                oksPobeda()
                krajIgre=true}, 500)
                
            return
        }

        brojac=0
        praznoPolje=false
        index=null

        for(let i=0;i<3;i++){
            if(tabla[1][i].childNodes.length!=0 && tabla[1][i].childNodes[0].classList[0]=="oks"){
                brojac++
            }
            if(tabla[1][i].childNodes.length==0){
                praznoPolje=true
                index=i
            }
        }

        if(brojac==2 && praznoPolje){
            setTimeout(()=>{
                tabla[1][index].innerHTML = oks
                brojacPoteza++
                oksPobeda()
                krajIgre=true}, 500)
                
            return
        }

        brojac=0
        praznoPolje=false
        index=null

        for(let i=0;i<3;i++){
            if(tabla[2][i].childNodes.length!=0 && tabla[2][i].childNodes[0].classList[0]=="oks"){
                brojac++
            }
            if(tabla[2][i].childNodes.length==0){
                praznoPolje=true
                index=i
            }
        }

        if(brojac==2 && praznoPolje){
            setTimeout(()=>{
                tabla[2][index].innerHTML = oks
                brojacPoteza++
                oksPobeda()
                krajIgre=true}, 500)
                
            return
        }
        brojac=0
        praznoPolje=false
        index=null

        //kolone
        for(let i=0;i<3;i++){
            if(tabla[i][0].childNodes.length!=0 && tabla[i][0].childNodes[0].classList[0]=="oks"){
                brojac++
            }
            if(tabla[i][0].childNodes.length==0){
                praznoPolje=true
                index=i
            }
        }

        if(brojac==2 && praznoPolje){
            setTimeout(()=>{
                tabla[index][0].innerHTML = oks
                brojacPoteza++
                oksPobeda()
                krajIgre=true}, 500)
                
            return
        }

        brojac=0
        praznoPolje=false
        index=null

        for(let i=0;i<3;i++){
            if(tabla[i][1].childNodes.length!=0 && tabla[i][1].childNodes[0].classList[0]=="oks"){
                brojac++
            }
            if(tabla[i][1].childNodes.length==0){
                praznoPolje=true
                index=i
            }
        }

        if(brojac==2 && praznoPolje){
            setTimeout(()=>{
                tabla[index][1].innerHTML = oks
                brojacPoteza++
                oksPobeda()
                krajIgre=true}, 500)
                
            return
        }
        brojac=0
        praznoPolje=false
        index=null


        for(let i=0;i<3;i++){
            if(tabla[i][2].childNodes.length!=0 && tabla[i][2].childNodes[0].classList[0]=="oks"){
                brojac++
            }
            if(tabla[i][2].childNodes.length==0){
                praznoPolje=true
                index=i
            }
        }

        if(brojac==2 && praznoPolje){
            setTimeout(()=>{
                tabla[index][2].innerHTML = oks
                brojacPoteza++
                oksPobeda()
                krajIgre=true}, 500)
                
            return
        }
        brojac=0
        praznoPolje=false
        index=null

        //dijagonale
        for(let i=0;i<3;i++){
            if(tabla[i][i].childNodes.length!=0 && tabla[i][i].childNodes[0].classList[0]=="oks"){
                brojac++
            }
            if(tabla[i][i].childNodes.length==0){
                praznoPolje=true
                index=i
            }
        }

        if(brojac==2 && praznoPolje){
            setTimeout(()=>{
                tabla[index][index].innerHTML = oks
                brojacPoteza++
                oksPobeda()
                krajIgre=true}, 500)
                
            return
        }
        brojac=0
        praznoPolje=false
        index=null

        for(let i=0;i<3;i++){
            if(tabla[i][2-i].childNodes.length!=0 && tabla[i][2-i].childNodes[0].classList[0]=="oks"){
                brojac++
            }
            if(tabla[i][2-i].childNodes.length==0){
                praznoPolje=true
                index=i
            }
        }

        if(brojac==2 && praznoPolje){
            setTimeout(()=>{
                tabla[index][2-index].innerHTML = oks
                brojacPoteza++
                oksPobeda()
                krajIgre=true}, 500)
                
            return
        }

    
        brojac=0
        praznoPolje=false
        index=null


        //oks sprecava pobedu iksa
        //redovi
        for(let i=0;i<3;i++){
            if(tabla[0][i].childNodes.length!=0 && tabla[0][i].childNodes[0].classList[0]=="iks"){
                brojac++
            }
            if(tabla[0][i].childNodes.length==0){
                praznoPolje=true
                index=i
            }
        }

        if(brojac==2 && praznoPolje){
            setTimeout(()=>{
                tabla[0][index].innerHTML = oks
                brojacPoteza++}, 500)
                proveraPobede()
            return
        }

        brojac=0
        praznoPolje=false
        index=null

        for(let i=0;i<3;i++){
            if(tabla[1][i].childNodes.length!=0 && tabla[1][i].childNodes[0].classList[0]=="iks"){
                brojac++
            }
            if(tabla[1][i].childNodes.length==0){
                praznoPolje=true
                index=i
            }
        }

        if(brojac==2 && praznoPolje){
            setTimeout(()=>{
                tabla[1][index].innerHTML = oks
                brojacPoteza++}, 500)
                proveraPobede()
            return
        }

        brojac=0
        praznoPolje=false
        index=null

        for(let i=0;i<3;i++){
            if(tabla[2][i].childNodes.length!=0 && tabla[2][i].childNodes[0].classList[0]=="iks"){
                brojac++
            }
            if(tabla[2][i].childNodes.length==0){
                praznoPolje=true
                index=i
            }
        }

        if(brojac==2 && praznoPolje){
            setTimeout(()=>{
                tabla[2][index].innerHTML = oks
                brojacPoteza++}, 500)
                proveraPobede()
            return
        }

        brojac=0
        praznoPolje=false
        index=null

        //kolone
        for(let i=0;i<3;i++){
            if(tabla[i][0].childNodes.length!=0 && tabla[i][0].childNodes[0].classList[0]=="iks"){
                brojac++
            }
            if(tabla[i][0].childNodes.length==0){
                praznoPolje=true
                index=i
            }
        }

        if(brojac==2 && praznoPolje){
            setTimeout(()=>{
                tabla[index][0].innerHTML = oks
                brojacPoteza++}, 500)
                proveraPobede()
            return
        }

        brojac=0
        praznoPolje=false
        index=null

        for(let i=0;i<3;i++){
            if(tabla[i][1].childNodes.length!=0 && tabla[i][1].childNodes[0].classList[0]=="iks"){
                brojac++
            }
            if(tabla[i][1].childNodes.length==0){
                praznoPolje=true
                index=i
            }
        }

        if(brojac==2 && praznoPolje){
            setTimeout(()=>{
                tabla[index][1].innerHTML = oks
                brojacPoteza++}, 500)
                proveraPobede()
            return
        }
        brojac=0
        praznoPolje=false
        index=null


        for(let i=0;i<3;i++){
            if(tabla[i][2].childNodes.length!=0 && tabla[i][2].childNodes[0].classList[0]=="iks"){
                brojac++
            }
            if(tabla[i][2].childNodes.length==0){
                praznoPolje=true
                index=i
            }
        }

        if(brojac==2 && praznoPolje){
            setTimeout(()=>{
                tabla[index][2].innerHTML = oks
                brojacPoteza++}, 500)
                proveraPobede()
            return
        }
        brojac=0
        praznoPolje=false
        index=null

        //dijagonale
        for(let i=0;i<3;i++){
            if(tabla[i][i].childNodes.length!=0 && tabla[i][i].childNodes[0].classList[0]=="iks"){
                brojac++
            }
            if(tabla[i][i].childNodes.length==0){
                praznoPolje=true
                index=i
            }
        }

        if(brojac==2 && praznoPolje){
            setTimeout(()=>{
                tabla[index][index].innerHTML = oks
                brojacPoteza++}, 500)
                proveraPobede()
            return
        }
        brojac=0
        praznoPolje=false
        index=null

        for(let i=0;i<3;i++){
            if(tabla[i][2-i].childNodes.length!=0 && tabla[i][2-i].childNodes[0].classList[0]=="iks"){
                brojac++
            }
            if(tabla[i][2-i].childNodes.length==0){
                praznoPolje=true
                index=i
            }
        }

        if(brojac==2 && praznoPolje){
            setTimeout(()=>{
                tabla[index][2-index].innerHTML = oks
                brojacPoteza++}, 500)
                proveraPobede()
            return
        }

        brojac=0
        praznoPolje=false
        index=null

        let rendom = Math.floor(Math.random()*slobodnaPolja.length)
        setTimeout(()=>{
            slobodnaPolja[rendom].innerHTML = oks
            brojacPoteza++}, 500)
        proveraPobede()
    }


    //treci nivo
    if(nivoIgre==3){
        












    }

    


}

const proveraPobede=()=>{
    
    let brojac=0
    //pobeda iks
    //prvi red
    for(let i=0;i<3;i++){
        if(tabla[0][i].childNodes.length!=0 && tabla[0][i].childNodes[0].classList[0]=="iks"){
            brojac++
        }
    }
    if(brojac==3){
        iksPobeda()
        krajIgre=true
    }
    brojac=0

    //drugi red
    for(let i=0;i<3;i++){
        if(tabla[1][i].childNodes.length!=0 && tabla[1][i].childNodes[0].classList[0]=="iks"){
            brojac++
        }
    }
    if(brojac==3){
        iksPobeda()
        krajIgre=true
    }
    brojac=0

    //treci red
    for(let i=0;i<3;i++){
        if(tabla[2][i].childNodes.length!=0 && tabla[2][i].childNodes[0].classList[0]=="iks"){
            brojac++
        }
    }
    if(brojac==3){
        iksPobeda()
        krajIgre=true
    }
    brojac=0

    //prva kolona
    for(let i=0;i<3;i++){
        if(tabla[i][0].childNodes.length!=0 && tabla[i][0].childNodes[0].classList[0]=="iks"){
            brojac++
        }
    }
    if(brojac==3){
        iksPobeda()
        krajIgre=true
    }
    brojac=0

    //druga kolona
    for(let i=0;i<3;i++){
        if(tabla[i][1].childNodes.length!=0 && tabla[i][1].childNodes[0].classList[0]=="iks"){
            brojac++
        }
    }
    if(brojac==3){
        iksPobeda()
        krajIgre=true
    }
    brojac=0

    //treca kolona
    for(let i=0;i<3;i++){
        if(tabla[i][2].childNodes.length!=0 && tabla[i][2].childNodes[0].classList[0]=="iks"){
            brojac++
        }
    }
    if(brojac==3){
        iksPobeda()
        krajIgre=true
    }
    brojac=0

    //prva dijagonala
    for(let i=0;i<3;i++){
        if(tabla[i][i].childNodes.length!=0 && tabla[i][i].childNodes[0].classList[0]=="iks"){
            brojac++
        }
    }
    if(brojac==3){
        iksPobeda()
        krajIgre=true
    }
    brojac=0

    //druga dijagonala
    for(let i=0;i<3;i++){
        if(tabla[i][2-i].childNodes.length!=0 && tabla[i][2-i].childNodes[0].classList[0]=="iks"){
            brojac++
        }
    }
    if(brojac==3){
        iksPobeda()
        krajIgre=true
    }
    brojac=0

    //pobeda oks
    //prvi red
    for(let i=0;i<3;i++){
        if(tabla[0][i].childNodes.length!=0 && tabla[0][i].childNodes[0].classList[0]=="oks"){
            brojac++
        }
    }
    if(brojac==3){
        oksPobeda()
        krajIgre=true
    }
    brojac=0

    //drugi red
    for(let i=0;i<3;i++){
        if(tabla[1][i].childNodes.length!=0 && tabla[1][i].childNodes[0].classList[0]=="oks"){
            brojac++
        }
    }
    if(brojac==3){
        oksPobeda()
        krajIgre=true
    }
    brojac=0

    //treci red
    for(let i=0;i<3;i++){
        if(tabla[2][i].childNodes.length!=0 && tabla[2][i].childNodes[0].classList[0]=="oks"){
            brojac++
        }
    }
    if(brojac==3){
        oksPobeda()
        krajIgre=true
    }
    brojac=0

    //prva kolona
    for(let i=0;i<3;i++){
        if(tabla[i][0].childNodes.length!=0 && tabla[i][0].childNodes[0].classList[0]=="oks"){
            brojac++
        }
    }
    if(brojac==3){
        oksPobeda()
        krajIgre=true
    }
    brojac=0

    //druga kolona
    for(let i=0;i<3;i++){
        if(tabla[i][1].childNodes.length!=0 && tabla[i][1].childNodes[0].classList[0]=="oks"){
            brojac++
        }
    }
    if(brojac==3){
        oksPobeda()
        krajIgre=true
    }
    brojac=0

    //treca kolona
    for(let i=0;i<3;i++){
        if(tabla[i][2].childNodes.length!=0 && tabla[i][2].childNodes[0].classList[0]=="oks"){
            brojac++
        }
    }
    if(brojac==3){
        oksPobeda()
        krajIgre=true
    }
    brojac=0

    //prva dijagonala
    for(let i=0;i<3;i++){
        if(tabla[i][i].childNodes.length!=0 && tabla[i][i].childNodes[0].classList[0]=="oks"){
            brojac++
        }
    }
    if(brojac==3){
        oksPobeda()
        krajIgre=true
    }
    brojac=0

    //druga dijagonala
    for(let i=0;i<3;i++){
        if(tabla[i][2-i].childNodes.length!=0 && tabla[i][2-i].childNodes[0].classList[0]=="oks"){
            brojac++
        }
    }
    if(brojac==3){
        oksPobeda()
        krajIgre=true
    }
    brojac=0


}

const iksPobeda=()=>{
    natpisPobeda.style.display='flex'
    natpisPobeda.style.opacity='1'
    setInterval(()=>{natpisPobeda.style.color='pink'} ,500)
    setInterval(()=>{natpisPobeda.style.color='blueviolet'} ,1000)

}

const oksPobeda=()=>{
    natpisPoraz.style.display='flex'
    natpisPoraz.style.opacity='1'
    setInterval(()=>{natpisPoraz.style.color='pink'} ,500)
    setInterval(()=>{natpisPoraz.style.color='blueviolet'} ,1000)

}

const neresenoFunc=()=>{
    natpisNereseno.style.display='flex'
    natpisNereseno.style.opacity='1'
    setInterval(()=>{natpisNereseno.style.color='pink'} ,500)
    setInterval(()=>{natpisNereseno.style.color='blueviolet'} ,1000)

}
