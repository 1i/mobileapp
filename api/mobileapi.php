<?php

      
    /* Filename: ajax2.php */  
      
    /* Declare a class to contain a person record */  
      
    class Event {  
      
        var $event_id;  
        var $title;  
        var $shortDescription;  
        var $startDate;  
      
    }  
      
      
    /* Declare your variables */  
        $items = array();  
      
    /* Populate your array with a list of dummy records */  
        
        $date = new DateTime('2014-01-01');

      
        for($i = 0; $i < 10; $i++) {  
            $eventRecord = new Event();  
            $eventRecord->event_id = $i;  
            $eventRecord->title = "Title $i";  
            $date->add(new DateInterval("P" .$i . "D"));
            $eventRecord->startDate = $date->format('d-m-Y');  
            $eventRecord->shortDescription = "Short Description $i";  
            $items[$i] = $eventRecord;    
        }  
      
    /* Set the header type for output */  
      
        header('Content-Type: application/json');  
      
    /* Create a variable to hold your JSON data */  
        
        if (isset($_GET['event_id'])) {
            
             $jsonOutput =  json_encode($items[(int) $_GET['event_id']]); 
            
        } else {
             $jsonOutput =  json_encode($items);  
            
        }
        
      
       
      
    /* Output the JSON data */  
      
        echo $jsonOutput;  
      
  