$(document).ready(function () {


    $(document).on('click', '.nav-link', function(){
       // $(this).css
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
    });


    $(document).on('click', '.btarticulate', function(){
        // $(this).css
        let ruta = $(this).attr('data-iframe');
        let idmodaliframe = $(this).attr('data-bs-target');
       
        $(idmodaliframe).find("iframe").attr('src',ruta);
       
     });

   

     


     $(document).on('click', '.btcerrariframe', function(){

      let idiframe = $(this).attr('data-idiframe');

   
      $('#'+idiframe).attr('src','');
      var iframe = document.querySelector('.'+idiframe);

      var player1 = new Vimeo.Player(iframe);
      player1.pause();
     
   });

    

     





});
