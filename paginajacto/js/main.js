
//LGPD
let lgpdHtml = `

  <div class="lgpd">
	
                            
    <div class="lgpd-left">
  
      Nós utilizamo cookies para melhorar sua experiência de navegação<br>
      Para conferir clique nossas politicas de privacidade clique <a href="/">Politcas de privacidade.</a>
  
    </div>
  
    <div class="lgpd-rigth">
      <button>Ok</button>
  
    </div>
  
  </div>
  <link rel="stylesheet" href="assets/css/menu.css">
`;

let lsContent = localStorage.getItem('.lgpd');
if(!lsContent){
    document.body.innerHTML +=lgpdHtml;

    let lgpdArea = document.querySelector('.lgpd');
    let lgpdButton = lgpdArea.querySelector('button');

    lgpdButton.addEventListener('click', async ()=>{
        lgpdArea.remove();

        let result = await fetch(lgpdUrl);
        let jason = await result.json();

        if(json.erro != ''){
            let id = json.id;
            localStorage.setIem('lgpd', id);

        }
    });
 
}

//tradutor

//pop-up
//pop-up

$(document).ready(function() {
	
  var maskHeight = $(document).height();
  var maskWidth = $(window).width();

  $('#mask').css({'width':maskWidth,'height':maskHeight});

  $('#mask').fadeIn(1000);	
  $('#mask').fadeTo("slow",0.8);

 
  var winH = $(window).height();
  var winW = $(window).width();
           
  $('#dialog2').css('top',  winH/2-$('#dialog2').height()/2);
  $('#dialog2').css('button',  winH/2-$('#dialog2').height()/2);
  $('#dialog2').css('left', winW/2-$('#dialog2').width()/2);

  $('#dialog2').fadeIn(2000);

$('.window .close').click(function (e) {
  e.preventDefault();
  
  $('#mask').hide();
  $('.window').hide();
});		

$('#mask').click(function () {
  $(this).hide();
  $('.window').hide();
});			

});