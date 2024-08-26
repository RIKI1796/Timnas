function login() {
         var jawaban = document.getElementById('jawaban').value;
         var wrong = document.getElementById('wrong');
  
         if (jawaban === 'Timnas Indonesia') {
           window.location.href = "/Timnas.html";
         } else {
                  alert ("Jawaban Salah!")
                  window.location.href = "/"
         };
   }
         console.log("Menyala Abangkuuu!!🔥🔥🔥🔥");
