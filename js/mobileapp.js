/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var  url = "api/mobileapi.php"; 
$(function () {
      
    loadAllEvents();
                
                
       $('#eventListingContainer').on('click',".btnViewEvent",function () {
           
          $(".eventListingContainer").fadeToggle();
          $(".eventViewContainer").fadeToggle();
          
          var event_id = $(this).attr('id');
          
                   var eventViewUrl = url + '?event_id=' + event_id;
           //Make the JSON ajax call   
                $.getJSON(eventViewUrl, function(data){  
                
                var template = $.templates("#eventViewTpl");

                var htmlOutput = template.render(data); 

                 $("#eventViewContainer").html(htmlOutput);
                
                });
           
       });
    
    
    $('#btnViewAllEvents').on('click',function () {
          $(".eventListingContainer").fadeToggle();
          $(".eventViewContainer").fadeToggle();    
        loadAllEvents();
    });
    
    
      $('#eventViewContainer').on('click','#btnRegisterForEvent',function () {
            
        //  $(".eventViewContainer").fadeToggle(); 
          
           var eventViewUrl = url + '?event_id=' + 6;
           //Make the JSON ajax call   
                $.getJSON(eventViewUrl, function(data){  
                
                var template = $.templates("#eventRegisterTpl");

                var htmlOutput = template.render(data);             

                 $("#eventViewContainer").html(htmlOutput);
                
                });
          
          
          
          
        
    });
    
});


function loadAllEvents() {
    
           //Make the JSON ajax call   
                $.getJSON(url, function(data){  
                
                var template = $.templates("#eventListingTpl");

                var htmlOutput = template.render(data);

                 $("#eventListingContainer").html(htmlOutput);
                
                
                
                });
    
    
    
}


