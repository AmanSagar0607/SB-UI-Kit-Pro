function changeColor() {
    let color = document.getElementById('colorInputColor').value;
    document.getElementById('btn-1').style.backgroundColor = color;
    document.getElementById('btn-2').style.backgroundColor = color;
    document.getElementById('btn-3').style.color = color;
    document.getElementById('btn-4').style.backgroundColor = color;
    document.getElementById('btn-5').style.color = color;
    document.getElementById('btn-6').style.color = color;
    document.getElementById('btn-7').style.backgroundColor = color;
  }



  $('#setting-svg').click(function () {
    $('.color-theme').toggleClass('active');
  })

  $('#setting-svg').click(function () {
    $('#setting-svg').toggleClass('active');
  })

  const colors = document.getElementsByClassName('colors');

  let i;
  for (let i = 0; i < colors.length; i++) {
    colors[i].addEventListener('click', changecolor)
    
  }

  function changecolor(){
    let color = this.getAttribute('data-color');
    document.documentElement.style.setProperty('--color', color);
    document.documentElement.style.setProperty('--btn-color', color);
  }