 // nevigation
 let closebtn = document.querySelector('.close-btn');
 let searchbtn = document.querySelector('.search-btn');
 let searchbox = document.querySelector('.searchbox');
 let nevigation = document.querySelector('.nevigation');
 let menu = document.querySelector('.menu');
 let header = document.querySelector('header');

 searchbtn.onclick = function() {
     searchbox.classList.add('active');
     header.classList.remove('open');
 }
 closebtn.onclick = function() {
     searchbox.classList.remove('active');
 }
 menu.onclick = function() {
         header.classList.toggle('open');
         searchbox.classList.remove('active');
     }
     // nevigation

 // search box1
 const searchmovies = () => {
     let filter = document.getElementById('srch').value.toUpperCase();
     console.log(filter);

     let cards = document.getElementById('cards');

     let card = cards.getElementsByClassName('card');

     let cardcontent = document.getElementsByClassName('card_content');

     //     let page = cardcontent.getElementsByTagName('p');

     for (var i = 0; i < card.length; i++) {
         let X = cardcontent[i].getElementsByTagName('p')[0];

         if (X) {

             // let textvalue = X.textContent || X.innerHTML;
             let textvalue = X.textContent || X.innerHTML;

             if (textvalue.toUpperCase().indexOf(filter) > -1) {
                 card[i].style.display = "";
             } else {
                 card[i].style.display = "none";
             }
         }
     }



 }

 //     //// search box2
 const searchmovies2 = () => {
     let filter = document.getElementById('srch2').value.toUpperCase();
     console.log(filter);

     let cards = document.getElementById('cards');

     let card = cards.getElementsByClassName('card');

     let cardcontent = document.getElementsByClassName('card_content');

     //     let page = cardcontent.getElementsByTagName('p');

     for (var i = 0; i < card.length; i++) {
         let X = cardcontent[i].getElementsByTagName('p')[0];

         if (X) {

             // let textvalue = X.textContent || X.innerHTML;
             let textvalue = X.textContent || X.innerHTML;

             if (textvalue.toUpperCase().indexOf(filter) > -1) {
                 card[i].style.display = "";
             } else {
                 card[i].style.display = "none";
             }
         }
     }



 }