function login() {
         var jawaban = document.getElementById('jawaban').value;
         var wrong = document.getElementById('wrong');
  
         if (jawaban === 'Timnas Indonesia') {
           location.href = "/Timnas.html";
         }
         if (jawaban !== "Timnas Indonesia") {
             alert ("Jawaban Salah!")
             window.location.href = "/";
        }
         if (jawaban === "") {
            alert ("Jawaban Tidak Boleh Kosong!")
            return: false;
         }
   }
         console.log("Menyala Abangkuuu!!🔥🔥🔥🔥");
