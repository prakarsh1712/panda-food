var mnuarr= [
    {
      "photo" : "https://cdn2.foodviva.com/static-content/food-images/pancake-recipes/buttermilk-pancakes/buttermilk-pancakes.jpg",
      "title" : "Buttermilk Pancakes",
      "price" : "Rs 100",
      "desc" : "Buttery and fluffy with golden, crisp edges! Has a complex flavor which comes out well as served with fruit syrup",
      "type" : "breakfast"
    },
    {
    "photo" : "https://www.spiceupthecurry.com/wp-content/uploads/2018/02/bisi-bele-bath-recipe-1.jpg",
      "title" : "BisiBelaBath",
      "price" : "Rs 150",
      "desc" : "A popular dish made with rice, lentils, mix-veggies and our restaurant special bisibelabath powder",
      "type" : "lunch"
    },
    {
    "photo" : "https://media-cdn.tripadvisor.com/media/photo-s/0a/1b/b7/43/ghee-roast.jpg",
      "title" : "Ghee Roast",
      "price" : "Rs 100",
      "desc" : " Fresh idli dosa batter made into a thin paper dosa. Served along with Coconut Chutney and Vengaya Sambar",
      "type" : "breakfast"
    },
    {
    "photo" : "https://qph.fs.quoracdn.net/main-qimg-58c08162aca9dfbb5747bfaf42de5b98",
      "title" : "Masala Dosa",
      "price" : "Rs 120",
      "desc" : " Dosa stuffed with spiced potatoes and sauted onions usually served with coconut chutney and hot sambar",
      "type" : "breakfast"
    },
    {
    "photo" : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366,h_240,c_fill/dxpmrtse5anxbv5esbqi",
      "title" : "Idly",
      "price" : "Rs 50",
      "desc" : " Steamed cake of fermented rice and pulse flour served with three varieties of chutney and hot sambar",
      "type" : "breakfast"
    },
  {
    "photo" : "https://www.whiskaffair.com/wp-content/uploads/2020/03/Rava-Idli-3.jpg",
      "title" : " Rava Idly",
      "price" : "Rs 50",
      "desc" : " South Indian breakfast dish made using semolina served with three varieties of chutney and hot sambar",
      "type" : "dinner"
    },
  {
    "photo" : "https://i1.wp.com/vegecravings.com/wp-content/uploads/2018/11/Pulihora-Tamarind-Rice-Recipe-Step-By-Step-Instructions.jpg?fit=1024%2C932&quality=65&strip=all&ssl=1",
      "title" : " Tamarind Rice",
      "price" : "Rs 60",
      "desc" : " A tangy rice dish made with channa and urad dals, infused with the flavor of tamarind pulp",
      "type" : "lunch"
    },
  {
    "photo" : "https://i.ytimg.com/vi/e7sUV8nqs3k/maxresdefault.jpg",
      "title" : " Butter Naan",
      "price" : "Rs 80",
      "desc" : " A leavened bread made using all purpose flour made with basic ingredients like flour, oil, yeast, milk.",
      "type" : "dinner"
    },
    {
    "photo" : "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Waagmi_Soni/oreo-milkshake-recipe.jpg",
      "title" : " Oreo Milkshake",
      "price" : "Rs 180",
      "desc" : " Milkshake recipe prepared using Oreo cookies, milk, vanilla ice cream, sugar, and chocolate sauce",
      "type" : "shake"
    },
  {
    "photo" : "https://sherebengal.com/wp-content/uploads/2017/09/Paneer-masala-dosa.jpg",
      "title" : " Paneer Masala Dosa",
      "price" : "Rs 120",
      "desc" : " Crispy Indian savory crepe with a delicious filling made from paneer",
      "type" : "dinner"
    },
  {
    "photo" : "https://img-global.cpcdn.com/recipes/fa5570aff27a7844/1200x630cq70/photo.jpg",
      "title" : " Pongal",
      "price" : "Rs 50",
      "desc" : " Protein packed, tastes delicious with a good aroma of ghee and seasoned ingredients. ",
      "type" : "breakfast"
    },
    {
    "photo" : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRpZEBnUwlQ6pGJyiqwbEsRX48O_l-5M3q_A&usqp=CAU",
      "title" : "Smoothie",
      "price" : "Rs 150",
      "desc" : "  A drink made from pureed raw fruit and/or vegetables ",
      "type" : "shake"
    },
  {
    "photo" : "https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2016/07/curd-rice-2-500x500.jpg",
      "title" : "Curd Rice",
      "price" : "Rs 50",
      "desc" : "Made by simply mixing soft cooked mushy rice with curd and salt,then tempered with the basic tempering or tadka ingredients ",
      "type" : "lunch"
    },
  {
    "photo" : "https://thepepper.in/wp-content/uploads/2019/02/Butterscotch-Milkshake.jpg",
      "title" : "Butterscotch Milkshake",
      "price" : "Rs 170",
      "desc" : " Drizzled with Butterscotch sauce on the top and served with Butterscotch chips ",
      "type" : "shake"
    },
  {
    "photo" : "https://www.cookwithmanali.com/wp-content/uploads/2018/08/Jeera-Rice-Recipe-500x375.jpg",
      "title" : "Jeera Rice",
      "price" : "Rs 60",
      "desc" : " Indian dish consisting of rice and cumin seeds sauted with bay leaf, cloves, cinnamon, cardamoms ",
      "type" : "lunch"
    },
  {
    "photo" : "https://arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/SITSUSMWR7A2IQ64GMSPSIOOQE.jpg",
      "title" : "Vanilla Milkshake",
      "price" : "Rs 170",
      "desc" : "Blended with ice cream, milk and vanilla extract ",
      "type" : "shake"
    }
  ];
  
  var breakarr = [];
  var larr = [];
  var darr = [];
  var sarr = [];
  
  var mdis = document.getElementById("menudisplay");
  
  
  
  window.addEventListener("DOMContentLoaded",function(){
    for(i=0;i<mnuarr.length;i++){
      console.log(mnuarr[i].type);
    if(mnuarr[i].type==="lunch"){
      larr.push(mnuarr[i]);
    }
    else if(mnuarr[i].type==="breakfast"){
      breakarr.push(mnuarr[i]);
    }
      else if(mnuarr[i].type==="dinner"){
      darr.push(mnuarr[i]);
    }
      else if(mnuarr[i].type==="shake"){
      sarr.push(mnuarr[i]);
    }
      
      var menudiv = document.createElement("div");
    menudiv.className="menus";
    
    var imgdiv = document.createElement("div");
    
    var image = document.createElement("img");
  
  var imgcontent = document.createElement("div");
    imgcontent.className = "contents";
    
    var imgtitle = document.createElement("div");
    imgtitle.className = "titles";
    
    var mnutitle = document.createElement("h4");
  
  var mnuprice = document.createElement("h4");
  
  var des = document.createElement("div");
    des.className = "des";
      
      image.src=mnuarr[i].photo;
      image.alt=mnuarr[i].title;
      
    menudiv.appendChild(imgdiv);
    imgdiv.appendChild(image);
      
      mnutitle.textContent = mnuarr[i].title;
    imgtitle.appendChild(mnutitle);
    
       mnuprice.textContent = mnuarr[i].price;
    imgtitle.appendChild(mnuprice);
      
      imgcontent.appendChild(imgtitle);
      
      des.textContent = mnuarr[i].desc;
    
    imgcontent.appendChild(des);
    
    menudiv.appendChild(imgcontent);
    
    mdis.appendChild(menudiv);
    }
  });
  
  
  
  
  var breakbtn = document.getElementById("breakfast");
  
  breakbtn.addEventListener("click",function(){
    
    console.log(breakarr);
    while(mdis.firstChild){
      mdis.firstChild.remove();
      
    }
    
    disp(breakarr);
  });
  
  var lbtn = document.getElementById("lunch");
  
  lbtn.addEventListener("click",function(){
    
    while(mdis.firstChild){
      mdis.firstChild.remove();
      
    }
    
    disp(larr);
    
  });
  
  var dbtn = document.getElementById("dinner");
  
  dbtn.addEventListener("click",function(){
    
    while(mdis.firstChild){
      mdis.firstChild.remove();
      
    }
    
    disp(darr);
    
  });
  
  var sbtn = document.getElementById("shakes");
  
  sbtn.addEventListener("click",function(){
    
    while(mdis.firstChild){
      mdis.firstChild.remove();
      
    }
    
    disp(sarr);
    
  });
  
  var allbtn = document.getElementById("all");
  
  allbtn.addEventListener("click",function(){
    
    while(mdis.firstChild){
      mdis.firstChild.remove();
      
    }
    
    disp(mnuarr);
    
  });
  
  
  function disp(marray){
    for(i=0;i<marray.length;i++){
      var menudiv = document.createElement("div");
    menudiv.className="menus";
    
    var imgdiv = document.createElement("div");
    
    var image = document.createElement("img");
  
  var imgcontent = document.createElement("div");
    imgcontent.className = "contents";
    
    var imgtitle = document.createElement("div");
    imgtitle.className = "titles";
    
    var mnutitle = document.createElement("h4");
  
  var mnuprice = document.createElement("h4");
  
  var des = document.createElement("div");
    des.className = "des";
      
      image.src=marray[i].photo;
      image.alt=marray[i].title;
      
    menudiv.appendChild(imgdiv);
    imgdiv.appendChild(image);
      
      mnutitle.textContent = marray[i].title;
    imgtitle.appendChild(mnutitle);
    
       mnuprice.textContent = marray[i].price;
    imgtitle.appendChild(mnuprice);
      
      imgcontent.appendChild(imgtitle);
      
      des.textContent = marray[i].desc;
    
    imgcontent.appendChild(des);
    
    menudiv.appendChild(imgcontent);
    
    mdis.appendChild(menudiv);
    }
  }
  
  
  
  
  