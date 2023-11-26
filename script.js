
$(document).ready(function(){
    $('.category-btn').click(function(){
        const value = $(this).attr('data-filter');
        if(value == "all"){
            $('.card').show('3000');
        }
        else{
            $('.card').not('.'+value).hide('3000');
            $('.card').filter('.'+value).show('3000');
        }

    })

    $('.category-btn').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
})

const button1 = document.getElementById('Address-button1');
const button2 = document.getElementById('Address-button2');
const paragraph1 = document.getElementById('address-details1');
const paragraph2 = document.getElementById('address-details2');

console.log(paragraph2);

button1.addEventListener('click', function() {
    // paragraph1.style.display = 'block'; // Show paragraph 1
    // paragraph2.style.display = 'none';  // Hide paragraph 2
    toggleVisibility(paragraph1);
    hideElement(paragraph2);
  });

  button2.addEventListener('click', function() {
    // paragraph1.style.display = 'block'; // Show paragraph 1
    // paragraph2.style.display = 'none';  // Hide paragraph 2
    toggleVisibility(paragraph2);
    hideElement(paragraph1);
  });

//   button2.addEventListener('click', function() {
//     paragraph1.style.display = 'none';  // Hide paragraph 1
//     paragraph2.style.display = 'block'; // Show paragraph 2
//   });

function toggleVisibility(element) {
    if (element.style.display === 'none') {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  }
  function hideElement(element) {
    element.style.display = 'none';
  }



//   button2.addEventListener('click', function() {
//     paragraph1.style.display = 'none';  // Hide paragraph 1
//     paragraph2.style.display = 'block'; // Show paragraph 2
//   });

// function toggleVisibility2(element) {
//     if (element.style.display === 'none') {
//       element.style.display = 'block';
//     } else {
//       element.style.display = 'none';
//     }
//   }