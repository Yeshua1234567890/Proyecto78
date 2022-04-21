var reasons = [
    "Abuelito",
    "Abuelita",
    "Tía",
    "Tío",
    "Tía",
    "Mamá",
    "Hermano",
    "Hermano",
    "Yo"];
  var images = [
   "abuelito.png",
    "abuelita.jpg",
    "tía.jpg",
    "tío.jpg",
    "tía_2.png",
    "mamá.png",
    "hermano.jpg",
    "hermano_2.png",
    "yo.png",
  ];
  
  var i = 0;
  function nextslide() {  document.getElementById("reasontext").innerHTML = reasons[i];
    document.getElementById("album").src = images[i];
    i++;
                        document.getElementById("audio").play();
   
  }
  
  
  
  