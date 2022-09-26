var dots = document.querySelector('.dots');
var quant = document.querySelectorAll('.slides .slide-imagem');
var atual = 0
var imagem = document.getElementById('atual');
var avancar = document.getElementById('avancar');
var voltar = document.getElementById('voltar');

for(let i = 0; i < quant.length; i++) {
    var div = document.createElement('div');
    div.id = i;
    dots.appendChild(div)
} 

document.getElementById('0').classList.add('imgAtual');

var pos = document.querySelectorAll('.dots div');

for (let i=0; i < pos.length; i++) {
    pos[i].addEventListener('click', ()=> {
        atual=pos[i].id;
        slide();
    })
}

voltar.addEventListener('click', ()=> {
    atual--;
    slide();
})

avancar.addEventListener('click', ()=> {
    atual++;
    slide();
})

function slide() {
    if (atual >= quant.length) {
        atual=0
    } else if (atual < 0) {
        atual = quant.length - 1
    }

    if (atual == 0) {
        document.getElementById('atual').style.marginLeft = "1120px";
    } else if (atual == 1) {
        document.getElementById('atual').style.marginLeft = "0px";
    } else if (atual == 2) {
        document.getElementById('atual').style.marginLeft = "-1120px";    
    }

    

    document.querySelector('.imgAtual').classList.remove('imgAtual');
    //imagem.style.marginLeft = 1120*atual+'px';
   document.getElementById('atual').classList.add('imgAtual')
}

//SOMA TOTAL

function somaTotal() {
    let quant = document.getElementById('quant').value;
    let total = 299.99 * quant;

    let elemento = document.getElementById('total');
    elemento.innerHTML = "R$ " + total;
}

//MUDA TAB

function tabVideo() {
    document.getElementById('tab_video').style.display = "flex"; 
    document.getElementById('tab_comentarios').style.display = "none";
    document.getElementById('tab_detalhes').style.display = "none";
    document.getElementById('tab1').classList.add('active');
    document.getElementById('tab2').classList.remove('active'); 
    document.getElementById('tab3').classList.remove('active'); 
}

function tabComentarios() {
    document.getElementById('tab_video').style.display = "none"; 
    document.getElementById('tab_comentarios').style.display = "flex";
    document.getElementById('tab_detalhes').style.display = "none";
    document.getElementById('tab2').classList.add('active');
    document.getElementById('tab1').classList.remove('active');
    document.getElementById('tab3').classList.remove('active');  
}

function tabDetalhes() {
    document.getElementById('tab_detalhes').style.display = "flex";
    document.getElementById('tab_video').style.display = "none"; 
    document.getElementById('tab_comentarios').style.display = "none";
    document.getElementById('tab3').classList.add('active');
    document.getElementById('tab1').classList.remove('active'); 
    document.getElementById('tab2').classList.remove('active'); 
}
