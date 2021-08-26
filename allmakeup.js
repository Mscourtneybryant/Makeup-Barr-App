
  function loadJSON(path, success, error) {
    var mba = new XMLHttpRequest();
    mba.onreadystatechange = function() {
      if (mba.readyState === XMLHttpRequest.DONE) {
        if (mba.status === 200) {
          if (success)
            success(JSON.parse(mba.responseText));
        } else {
          if (error)
            error(mba);
        }
      }
    };
    mba.open("GET", path, true);
    mba.send();
  }
  
  
  function Look1() {
    //lipstick 
    loadJSON('http://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Natural&product_type=lipstick',
      function(data) {
        document.getElementById("title1").innerHTML = data[4].brand; 
        document.getElementById("myP").innerHTML = data[4].description + '<br>' +'<img src = '+data[4].image_link+'>'; 
      },
      function(mba) { 
        console.error(mba);
      }
    );

    // eyebrow pencil
    loadJSON('http://makeup-api.herokuapp.com/api/v1/products.json?product_tags=purpicks&product_type=eyebrow', 
    function(data) {
        document.getElementById("brand1").innerHTML = data[0].brand;
        document.getElementById("des1").innerHTML = data[0].description + '<br>' + '<img src = '+data[0].image_link+'>';
      },
      function(mba) {
        console.log(mba);
      }
    );
  
  };
  
  function Look2() {
    //eyeshadow
    loadJSON('http://makeup-api.herokuapp.com/api/v1/products.json?product_category=palette&product_type=eyeshadow',
      function(data) {
        document.getElementById("title2").innerHTML = data[6].brand;
        document.getElementById("para").innerHTML = data[6].description + '<br>' + '<img src = '+data[6].image_link+'>';
      },
      function(mba) {
        console.error(mba);
      }
    );
    // eyeshadow
    loadJSON('https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Gluten+Free&product_type=lip_liner', 
    function(data) {
        document.getElementById("brand2").innerHTML = data[0].brand;
  
        document.getElementById("des2").innerHTML = data[0].description + '<br>' + '<img src = '+data[0].image_link+'>';
      },
      function(mba) {
        console.log(mba);
      }
    )
  };
  
  function Look3() {
    //bronze
    loadJSON('http://makeup-api.herokuapp.com/api/v1/products.json?product_category=powder&product_type=bronzer',
      function(data) {
        document.getElementById("title3").innerHTML = data[0].brand;
        document.getElementById("des").innerHTML = data[0].description + '<br>' + '<img src = '+data[0].image_link+'>';
      },
      function(mba) {
        console.error(mba);
      });
    //colored lipgloss
    loadJSON('http://makeup-api.herokuapp.com/api/v1/products.json?product_category=lip_gloss&product_type=lipstick', function(data) {
        document.getElementById("brand3").innerHTML = data[4].brand;
  
        document.getElementById("des3").innerHTML = data[4].description + '<br>' + '<img src = '+data[4].image_link+'>';
      },
      function(mba) {
        console.log(mba);
      }
  
    );
  };
  
  function Look4() {
    //eyeliner
    loadJSON('http://makeup-api.herokuapp.com/api/v1/products.json?product_category=liquid&product_type=eyeliner',
      function(data) {
        document.getElementById("title4").innerHTML = data[1].brand;
        document.getElementById("descr").innerHTML = data[1].description + '<br>' + '<img src = '+data[1].image_link+'>';
      },
      function(mba) {
        console.error(mba);
      }
    );


    //eyeshadow
    loadJSON('http://makeup-api.herokuapp.com/api/v1/products.json?product_category=palette&product_type=eyeshadow', 
    function(data) {
        document.getElementById("brand4").innerHTML = data[3].brand;
  
        document.getElementById("des4").innerHTML = data[3].description + '<br>' + '<img src = '+data[3].image_link+'>';
      },
      function(mba) {
        console.log(mba);
      }
  
    );
  };
  
  function Look5(){

    //lipgloss
    loadJSON('http://makeup-api.herokuapp.com/api/v1/products.json?product_category=lip_gloss&product_type=lipstick', 
    function(data){
       document.getElementById("title5").innerHTML = data[10].brand;
  
        document.getElementById("descr5").innerHTML = data[10].description + '<br>' + '<img src = '+data[10].image_link+'>';
    },
              function(mba) {
        console.log(mba);
      }
            );

    //eyeshadow
    loadJSON('http://makeup-api.herokuapp.com/api/v1/products.json?product_category=palette&product_type=eyeshadow', 
    function(data) {
      
       document.getElementById("brand5").innerHTML = data[17].brand;
  
        document.getElementById("des5").innerHTML = data[17].description + '<br>' + '<img src = '+data[17].image_link+'>';
      },
      function(mba) {
        console.log(mba);
      }
      
      
    
            
            
            
            );
  };
  
  function Look6() {
      //lipstick
    loadJSON('http://makeup-api.herokuapp.com/api/v1/products.json?product_category=lipstick&product_type=lipstick',
      function(data) {
        document.getElementById("title6").innerHTML = data[4].brand;
        document.getElementById("para6").innerHTML = data[4].description + '<br>' + '<img src = '+data[4].image_link+'>';
      },
      function(mba) {
        console.error(mba);
      }
    );
    //bronzer
    loadJSON('http://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Canadian&product_type=bronzer', 
    function(data) {
        document.getElementById("brand6").innerHTML = data[4].brand;
  
        document.getElementById("des6").innerHTML = data[4].description + '<br>' + '<img src = '+data[4].image_link+'>';
      },
      function(mba) {
        console.log(mba);
      }
    )
  };