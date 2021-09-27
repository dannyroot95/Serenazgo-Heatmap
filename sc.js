$('#show-list').click(function()
 {
    // Inicializar la base de datos
    var config = {
        apiKey: "AIzaSyDrm5Kg0O0kcyUFTDq0nnYlS9Eno2P9TNg",
        authDomain: "serenazgo-b11fd.firebaseapp.com",
        databaseURL: "https://serenazgo-b11fd.firebaseio.com",
        projectId: "serenazgo-b11fd",
        storageBucket: "serenazgo-b11fd.appspot.com",
        messagingSenderId: "481892388900"
    };

    firebase.initializeApp(config);
    var database = firebase.database();
    var referencia=database.ref("incidents");
    var referencia2=database.ref("incidents").orderByChild('fecha').startAt('13/10/2020').endAt('13/10/2020') ;
    //.orderByChild('fecha').startAt('02/10/2020').endAt('10/10/2020') agregar esto

    var incidentes={};

    referencia.on('value',function(datos)
    {
        incidentes=datos.val();

       
        $.each(incidentes, function(indice,valor)
        {
            var prevIncidente='<div class="row">';
            prevIncidente+='</div>';

            var prevIncidente='<div class="cell">';
            prevIncidente+='<div class="col-md-0">';
            prevIncidente+='<h4><p>'+valor.numFicha+'</p></h4>';
            prevIncidente+='</div>';
            prevIncidente+='<div class="col-md-1">';
            prevIncidente+='<h4><p>'+valor.fecha+'</p></h4>';
            prevIncidente+='</div>';
            prevIncidente+='<div class="col-md-1">';
            prevIncidente+='<h4><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+valor.hora+'</p></h4>';
            prevIncidente+='</div>';
            prevIncidente+='<div class="col-md-3">';
            prevIncidente+='<h4><p>'+valor.lugarDeOcurrencia+'</p></h4>';
            prevIncidente+='</div>';
            prevIncidente+='<div class="col-md-3">';
            prevIncidente+='<h4><p>'+valor.modalidad+'</p></h4>';
            prevIncidente+='</div>';
            prevIncidente+='</div>';
        
         
    
            prevIncidente+='</div>';
            prevIncidente+='<div class="row espaciador">';
            prevIncidente+='</div>';

            $(prevIncidente).appendTo('#listado');
        });

    },function(objetoError){
        console.log('Error de lectura:'+objetoError.code);
    });

    referencia2.on('value',function(datos)
    {
        incidentes=datos.val();

       
        $.each(incidentes, function(indice,valor)
        {
            var prevIncidente='<div class="row">';
            prevIncidente+='</div>';

            var prevIncidente='<div class="cell">';
            prevIncidente+='<div class="col-md-1">';
            prevIncidente+='<h4><p>'+valor.numFicha+'</p></h4>';
            prevIncidente+='</div>';
            prevIncidente+='<div class="col-md-1">';
            prevIncidente+='<h4><p>'+valor.fecha+'</p></h4>';
            prevIncidente+='</div>';
            prevIncidente+='<div class="col-md-1">';
            prevIncidente+='<h4><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+valor.hora+'</p></h4>';
            prevIncidente+='</div>';
            prevIncidente+='<div class="col-md-3">';
            prevIncidente+='<h4><p>'+valor.lugarDeOcurrencia+'</p></h4>';
            prevIncidente+='</div>';
            prevIncidente+='<div class="col-md-3">';
            prevIncidente+='<h4><p>'+valor.modalidad+'</p></h4>';
            prevIncidente+='</div>';
            prevIncidente+='</div>';
        
         
    
            prevIncidente+='</div>';
            prevIncidente+='<div class="row espaciador">';
            prevIncidente+='</div>';

            $(prevIncidente).appendTo('#listado2');
        });

    },function(objetoError){
        console.log('Error de lectura:'+objetoError.code);
    });

});