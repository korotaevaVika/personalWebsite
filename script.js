function sluchaynaya_citata() {
var citati = ['Experience is the name every one gives to their mistakes', 
              'Every solution breeds new problems',
              'It is awfully hard work doing nothing',
              'Be yourself, everyone else is already taken', 
              'Time is a waste of money'];
var nomer = Math.round(Math.random() * (citati.length - 1));
document.write(citati[nomer]);
}

function sluchayniy_background() {
var textures = ['./images/texture_1.png', 
              './images/texture_2.png',
              './images/texture_3.png',
              './images/texture_4.png', 
                './images/texture_5.png',
              './images/texture_6.png',
               './images/texture_7.png'];
var nomer = Math.round(Math.random() * (textures.length - 1));
  document.write("<style> @media (max-width: 800px) {body{ background-image: url('"+textures[nomer]+"') } }</style>")
}
