function login() {
         var jawaban = document.getElementById('jawaban').value;
         var wrong = document.getElementById('wrong');
  
         if (jawaban === 'Timnas Indonesia') {
           location.href = "/Timnas.html";
        } else {
            alert ('Jawaban Salah!')
            document.location.href = "/"
        }
   }
         console.log("Menyala Abangkuuu!!🔥🔥🔥🔥");
