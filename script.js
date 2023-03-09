let num = 10;

setTimeout(function() {
  document.body.textContent = num;
  num--;
  setTimeout(function() {
     document.body.textContent = num;
     num--;
     setTimeout(function() {
         document.body.textContent = num;
         num--;
         setTimeout(function() {
             document.body.textContent = num;
             num--;
             setTimeout(function() {
                 document.body.textContent = num;
                 num--;
                 setTimeout(function() {
                     document.body.textContent = num;
                     num--;
                     setTimeout(function() {
                         document.body.textContent = num;
                         num--;
                         setTimeout(function() {
                             document.body.textContent = num;
                             num--;
                             setTimeout(function() {
                                 document.body.textContent = num;
                                 num--;
                                 setTimeout(function() {
                                     document.body.textContent = num;
                                     num--;
                                     setTimeout(function() {
                                         document.body.textContent = "Happy Independence Day";
                                       },1000);
                                   },1000);
                               }, 1000);
                           }, 1000);
                       }, 1000);
                   }, 1000);
               }, 1000);
           }, 1000);
       }, 1000);
   }, 1000);
}, 1000);