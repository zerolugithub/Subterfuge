function test(ID)
{
   $.post("/start/", {
      status:  "go"
   });   
   
   //alert(ID);
}



function notificationUpdate(ID)
{
   var nloot = document.getElementById("new_loot").innerHTML;
   document.getElementById(ID).innerHTML = "<center><b>" + nloot + "</b></center>";
}


function dbQuery(qstring)
{
   //POST request to py to get db response
   var result = null;
   var scriptUrl = '/dbquery?qstring=' + btoa(qstring);
   $.ajax({
     url: scriptUrl,
     type: 'get',
     dataType: 'html',
     async: false,
     success: function(data) {
         result = data;
     } 
   });
   return result;
   
   
   
   
   //alert(result)
   
   //return result
   
   
   //$('#CheckIn').load('/dbquery?qstring=' + btoa(qstring));
   
   //var nloot = document.getElementById("new_loot").innerHTML;
   //document.getElementById(ID).innerHTML = "<center><b>" + nloot + "</b></center>";
}


$(document).ready(function () {
   
   //Page Setup from variables
   //Get by name & iterate through IDs
   //notificationUpdate("notificationbox_b");
   
   //dbQuery("tbd");
   
   /*
  
        //Code executed when start button actuated
    $('a[name=start]').click(function(e) {
            //Cancel the link behavior
        e.preventDefault();
            //Get the A tag
        var id = $(this).attr('href');
        
            //Start Pwning
        $(".manualgate").fadeIn("slow");
        $(".autogate").fadeOut("slow");

    });

   */
    
  
});