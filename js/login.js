function login() {
         var jawaban = document.getElementById('jawaban').value;
         var wrong = document.getElementById('wrong');
  
         if (jawaban === 'Timnas Indonesia') {
           window.location.href = "/Timnas.html";
         }
         if (jawaban !== 'Timnas Indonesia') {
             alert ("Jawaban Salah!")
             window.location.href = "/";
         }
         if (jawaban === '') {
         }
   }
         console.log("Menyala Abangkuuu!!🔥🔥🔥🔥");
