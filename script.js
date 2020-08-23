let dropdown = document.getElementById('locality-dropdown');
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Choose State/Province';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;


let url="https://davids-restaurant.herokuapp.com/menu_items.json";
let menu_items=null;
//let is1=document.getElementById("fname").value
//let is1=50;
//var per = prompt("Enter the id of the item");
//console.log(is1);
$('document').ready(function(){
    $.get(url,function(data,success){
        menu_items=data.menu_items;
        console.log(menu_items.length);
       createOptions();
       showDetails(per);
        

        
    });
});



function createOptions(){
    let option;
    
    if(menu_items!=null){
        for(i=0;i<menu_items.length;i++) {
           // console.log(i++,jsonObj.name);
           // console.log(i++,jsonObj.short_name);
           // console.log(i++,jsonObj.price_large);
           
          // document.write(i++,jsonObj.name);'<br>'

          option = document.createElement('option');
          option.text = menu_items[i].name;
          option.value = menu_items[i].price_small;
          dropdown.add(option);

         
         
           
        }
    }
}
var per = prompt("Enter the id of the item");

function showDetails(index){
    
    if(menu_items!=null){
        let data=menu_items[index];
        document.querySelector("#Name").textContent=data.name;
        document.querySelector("#shortName").textContent=data.short_name;
       document.querySelector("#priceSmall").textContent=data.price_small;
       document.querySelector("#priceLarge").textContent=data.price_large;
       document.querySelector("#desc").textContent=data.description;
        
    }
   
}


/*const url = 'https://davids-restaurant.herokuapp.com/menu_items.json';

fetch(url)  
  .then(  
    function(response) {  
      if (response.status !== 200) {  
        console.warn('Looks like there was a problem. Status Code: ' + 
          response.status);  
        return;  
      }

      // Examine the text in the response  
      response.json().then(function(data) {  
        let option;
    
    	for (let i = 0; i < data.length; i++) {
          option = document.createElement('option');
      	  option.text = data[i].name;
      	  option.value = data[i].short_name;
      	  dropdown.add(option);
    	}    
      });  
    }  
  )  
  .catch(function(err) {  
    console.error('Fetch Error -', err);  
  });*/