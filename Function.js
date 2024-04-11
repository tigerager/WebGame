const pertanyaans = [
    "Warisan budaya Indonesia yang sangat beragam perlu kita",
    "Yang termasuk alat musik tradisional adalah",
    "Cara menghargai keragaman agama yang ada adalah dengan cara", 
    "Berikut ini yang bukan merupakan hal-hal yang dapat memupuk kerja sama adalah", 
    "Berikut ini yang termasuk bagian tengah telinga kecuali",
    "Contoh kegiatan gotong-royong di sekolah adalah", 
    "Bunyi pantul yang terdengar utuh setelah bunyi asal disebut",
    "Berikut ini yang termasuk benda yang bisa menyerap bunyi adalah",
    "Lompat batu adalah tradisi yang ada di",
    "Tari Saman berasal dari daerah"
];

const pembanding = [
    "Warisan budaya Indonesia yang sangat beragam perlu kita",
    "Yang termasuk alat musik tradisional adalah",
    "Cara menghargai keragaman agama yang ada adalah dengan cara", 
    "Berikut ini yang bukan merupakan hal-hal yang dapat memupuk kerja sama adalah", 
    "Berikut ini yang termasuk bagian tengah telinga kecuali",
    "Contoh kegiatan gotong-royong di sekolah adalah", 
    "Bunyi pantul yang terdengar utuh setelah bunyi asal disebut",
    "Berikut ini yang termasuk benda yang bisa menyerap bunyi adalah",
    "Lompat batu adalah tradisi yang ada di",
    "Tari Saman berasal dari daerah"
];

function Pertanyaan(){
    const random = Math.floor(Math.random() * pertanyaans.length);
    const pertanyaan = pertanyaans[random];
    if(pertanyaan === undefined){
        const  player = document.getElementById("player");
        player.style.backgroundColor = "whitesmoke";
        player.innerHTML = `<span id = 'pesan'>SELAMAT ANDA BERHASIL MENJAWAB SEMUA PERTANYAAN :)!</span><br/>`;
        var element = document.createElement("div");
        element.innerHTML = "<a id='tombol' href='./index.html'>Kembali</a>";
        player.appendChild(element)
        document.getElementById("pesan").style.fontSize =  '18px';
        document.getElementById("tombol").style.fontFamily =  'cursive';
        document.getElementById("tombol").style.fontSize =  '24px';
        document.getElementById("tombol").style.padding = '8px';
        document.getElementById("tombol").style.position = 'absolute';
        document.getElementById("tombol").style.top = '120px';
        document.getElementById("tombol").style.backgroundColor = 'rgba(136, 219, 63, 0.717)';
        document.getElementById("tombol").style.textDecoration = 'none';
        document.getElementById("tombol").style.borderRadius = '5%';
        document.getElementById("tombol").style.color = 'black';
        document.getElementById("tombol").style.boxShadow = '0px 1px 5px 3px rgba(0,0,0,0.32)';
        document.getElementById("tombol").style.webkitBoxShadow = '0px 1px 5px 3px rgba(0,0,0,0.32)';
        document.getElementById("tombol").style.mozBoxShadow = '0px 1px 5px 3px rgba(0,0,0,0.32)';
    }
    else{
        document.getElementById("pertanyaan").innerHTML = pertanyaan + " ....";
    const A = document.getElementById("opsi1");
    const B = document.getElementById("opsi2");
    const C = document.getElementById("opsi3");
    const D = document.getElementById("opsi4");
    if(pertanyaan === pembanding[0]){
        pertanyaans.splice(0, 1)
        A.innerHTML = "Asingkan";
        B.innerHTML = "Hilangkan";
        C.innerHTML = "Berikan";
        D.innerHTML = "Lestarikan";
        D.onclick = function() {alert("JAWABAN ANDA BENAR! PERTANYAAN SELANJUTNYA.")
    }
        A.onclick = B.onclick = C.onclick = function() {
        const player = document.getElementById("player");
        player.style.backgroundColor = "whitesmoke";
        player.innerHTML = `<span id = 'pesan'>Jawaban Anda salah!! Anda berhasil menjawab ${10 - pertanyaans.length-1} dari 10 pertanyaan, silakan coba lagi!</span><br/>`;
        var element = document.createElement("div");
        element.innerHTML = "<a id='tombol' href='./index.html'>Kembali</a>";
        player.appendChild(element)
        document.getElementById("pesan").style.fontSize =  '18px';
        document.getElementById("tombol").style.fontFamily =  'cursive';
        document.getElementById("tombol").style.fontSize =  '24px';
        document.getElementById("tombol").style.padding = '8px';
        document.getElementById("tombol").style.position = 'absolute';
        document.getElementById("tombol").style.top = '120px';
        document.getElementById("tombol").style.backgroundColor = 'rgba(136, 219, 63, 0.717)';
        document.getElementById("tombol").style.textDecoration = 'none';
        document.getElementById("tombol").style.borderRadius = '5%';
        document.getElementById("tombol").style.color = 'black';
        document.getElementById("tombol").style.boxShadow = '0px 1px 5px 3px rgba(0,0,0,0.32)';
        document.getElementById("tombol").style.webkitBoxShadow = '0px 1px 5px 3px rgba(0,0,0,0.32)';
        document.getElementById("tombol").style.mozBoxShadow = '0px 1px 5px 3px rgba(0,0,0,0.32)';
    }
    }
    else if(pertanyaan === pembanding[1]){
        for (let index = 0; index < pertanyaans.length; index++) {
            if(pertanyaans[index] === pertanyaan ){
                pertanyaans.splice(index, 1)
            }
            
        }
        A.innerHTML = "Gitar";
        B.innerHTML = "Piano";
        C.innerHTML = "Kecapi";
        D.innerHTML = "Drum";
        A.onclick = B.onclick = D.onclick = function() {
        const  player = document.getElementById("player");
        player.style.backgroundColor = "whitesmoke";
        player.innerHTML = `<span id = 'pesan'>Jawaban Anda salah!! Anda berhasil menjawab ${10 - pertanyaans.length-1} dari 10 pertanyaan, silakan coba lagi!</span><br/>`;
        var element = document.createElement("div");
        element.innerHTML = "<a id='tombol' href='./index.html'>Kembali</a>";
        player.appendChild(element)
        document.getElementById("pesan").style.fontSize =  '18px';
        document.getElementById("tombol").style.fontFamily =  'cursive';
        document.getElementById("tombol").style.fontSize =  '24px';
        document.getElementById("tombol").style.padding = '8px';
        document.getElementById("tombol").style.position = 'absolute';
        document.getElementById("tombol").style.top = '120px';
        document.getElementById("tombol").style.backgroundColor = 'rgba(136, 219, 63, 0.717)';
        document.getElementById("tombol").style.textDecoration = 'none';
        document.getElementById("tombol").style.borderRadius = '5%';
        document.getElementById("tombol").style.color = 'black';
        document.getElementById("tombol").style.boxShadow = '0px 1px 5px 3px rgba(0,0,0,0.32)';
        document.getElementById("tombol").style.webkitBoxShadow = '0px 1px 5px 3px rgba(0,0,0,0.32)';
        document.getElementById("tombol").style.mozBoxShadow = '0px 1px 5px 3px rgba(0,0,0,0.32)';
    }
        C.onclick = function() {alert("JAWABAN ANDA BENAR! PERTANYAAN SELANJUTNYA.")
        Pertanyaan();
    }
    }
    else if(pertanyaan === pembanding[2]){
        for (let index = 0; index < pertanyaans.length; index++) {
            if(pertanyaans[index] === pertanyaan ){
                pertanyaans.splice(index, 1)
            }
            
        }
        A.innerHTML = "Pura-pura tidak tahu";
        B.innerHTML = "Mengikuti tempat ibadah orang lain";
        C.innerHTML = "Mengotori tempat ibadah orang lain";
        D.innerHTML = "Tidak gaduh jika orang lain yang beribadah";
        A.onclick = D.onclick = C.onclick = function() {
        const  player = document.getElementById("player");
        player.style.backgroundColor = "whitesmoke";
        player.innerHTML = `<span id = 'pesan'>Jawaban Anda salah!! Anda berhasil menjawab ${10 - pertanyaans.length-1} dari 10 pertanyaan, silakan coba lagi!</span><br/>`;
        var element = document.createElement("div");
        element.innerHTML = "<a id='tombol' href='./index.html'>Kembali</a>";
        player.appendChild(element)
        document.getElementById("pesan").style.fontSize =  '18px';
        document.getElementById("tombol").style.fontFamily =  'cursive';
        document.getElementById("tombol").style.fontSize =  '24px';
        document.getElementById("tombol").style.padding = '8px';
        document.getElementById("tombol").style.position = 'absolute';
        document.getElementById("tombol").style.top = '120px';
        document.getElementById("tombol").style.backgroundColor = 'rgba(136, 219, 63, 0.717)';
        document.getElementById("tombol").style.textDecoration = 'none';
        document.getElementById("tombol").style.borderRadius = '5%';
        document.getElementById("tombol").style.color = 'black';
        document.getElementById("tombol").style.boxShadow = '0px 1px 5px 3px rgba(0,0,0,0.32)';
        document.getElementById("tombol").style.webkitBoxShadow = '0px 1px 5px 3px rgba(0,0,0,0.32)';
        document.getElementById("tombol").style.mozBoxShadow = '0px 1px 5px 3px rgba(0,0,0,0.32)';
    }
        D.onclick = function() {alert("JAWABAN ANDA BENAR! PERTANYAAN SELANJUTNYA.")
        Pertanyaan();
    }}
    else if(pertanyaan === pembanding[3]){
        for (let index = 0; index < pertanyaans.length; index++) {
            if(pertanyaans[index] === pertanyaan ){
                pertanyaans.splice(index, 1)
            }
            
        }
        A.innerHTML = "Peran dan tanggung jawab yang jelas";
        B.innerHTML = "Ingin berbagi ide dan pikiran";
        C.innerHTML = "Berburuk sangka dengan orang lain";
        D.innerHTML = "Keinginan untuk mencapai tujuan";
        A.onclick =  B.onclick= D.onclick = function() {
        const  player = document.getElementById("player");
        player.style.backgroundColor = "whitesmoke";
        player.innerHTML = `<span id = 'pesan'>Jawaban Anda salah!! Anda berhasil menjawab ${10 - pertanyaans.length-1} dari 10 pertanyaan, silakan coba lagi!</span><br/>`;
        var element = document.createElement("div");
        element.innerHTML = "<a id='tombol' href='./index.html'>Kembali</a>";
        player.appendChild(element)
        document.getElementById("pesan").style.fontSize =  '18px';
        document.getElementById("tombol").style.fontFamily =  'cursive';
        document.getElementById("tombol").style.fontSize =  '24px';
        document.getElementById("tombol").style.padding = '8px';
        document.getElementById("tombol").style.position = 'absolute';
        document.getElementById("tombol").style.top = '120px';
        document.getElementById("tombol").style.backgroundColor = 'rgba(136, 219, 63, 0.717)';
        document.getElementById("tombol").style.textDecoration = 'none';
        document.getElementById("tombol").style.borderRadius = '5%';
        document.getElementById("tombol").style.color = 'black';
        document.getElementById("tombol").style.boxShadow = '0px 1px 5px 3px rgba(0,0,0,0.32)';
        document.getElementById("tombol").style.webkitBoxShadow = '0px 1px 5px 3px rgba(0,0,0,0.32)';
        document.getElementById("tombol").style.mozBoxShadow = '0px 1px 5px 3px rgba(0,0,0,0.32)';
    }
        C.onclick = function() {alert("JAWABAN ANDA BENAR! PERTANYAAN SELANJUTNYA.")
        Pertanyaan();
    }
    }
    else if(pertanyaan === pembanding[4]){
        for (let index = 0; index < pertanyaans.length; index++) {
            if(pertanyaans[index] === pertanyaan ){
                pertanyaans.splice(index, 1)
            }
            
        }
        A.innerHTML = "Rumah siput";
        B.innerHTML = "Gendang telinga";
        C.innerHTML = "Eustatius";
        D.innerHTML = "Tulang sanggurdi";
        A.onclick = function() {alert("JAWABAN ANDA BENAR! PERTANYAAN SELANJUTNYA.")
        Pertanyaan();
    }
        B.onclick = C.onclick = D.onclick = function() {
        const  player = document.getElementById("player");
        player.style.backgroundColor = "whitesmoke";
        player.innerHTML = `<span id = 'pesan'>Jawaban Anda salah!! Anda berhasil menjawab ${10 - pertanyaans.length-1} dari 10 pertanyaan, silakan coba lagi!</span><br/>`;
        var element = document.createElement("div");
        element.innerHTML = "<a id='tombol' href='./index.html'>Kembali</a>";
        player.appendChild(element)
        document.getElementById("pesan").style.fontSize =  '18px';
        document.getElementById("tombol").style.fontFamily =  'cursive';
        document.getElementById("tombol").style.fontSize =  '24px';
        document.getElementById("tombol").style.padding = '8px';
        document.getElementById("tombol").style.position = 'absolute';
        document.getElementById("tombol").style.top = '120px';
        document.getElementById("tombol").style.backgroundColor = 'rgba(136, 219, 63, 0.717)';
        document.getElementById("tombol").style.textDecoration = 'none';
        document.getElementById("tombol").style.borderRadius = '5%';
        document.getElementById("tombol").style.color = 'black';
        document.getElementById("tombol").style.boxShadow = '0px 1px 5px 3px rgba(0,0,0,0.32)';
        document.getElementById("tombol").style.webkitBoxShadow = '0px 1px 5px 3px rgba(0,0,0,0.32)';
        document.getElementById("tombol").style.mozBoxShadow = '0px 1px 5px 3px rgba(0,0,0,0.32)';
    }
    }
    else if(pertanyaan === pembanding[5]){
        for (let index = 0; index < pertanyaans.length; index++) {
            if(pertanyaans[index] === pertanyaan ){
                pertanyaans.splice(index, 1)
            }
            
        }
        A.innerHTML = "Mengerjakan UH bersama-sama";
        B.innerHTML = "Mengerjakan piket bersama-sama";
        C.innerHTML = "Membuang sampah pada tempatnya";
        D.innerHTML = "Ke kamar mandi bersama";
        A.onclick = C.onclick = D.onclick = function() {
        const  player = document.getElementById("player");
        player.style.backgroundColor = "whitesmoke";
        player.innerHTML = `<span id = 'pesan'>Jawaban Anda salah!! Anda berhasil menjawab ${10 - pertanyaans.length-1} dari 10 pertanyaan, silakan coba lagi!</span><br/>`;
        var element = document.createElement("div");
        element.innerHTML = "<a id='tombol' href='./index.html'>Kembali</a>";
        player.appendChild(element)
        document.getElementById("pesan").style.fontSize =  '18px';
        document.getElementById("tombol").style.fontFamily =  'cursive';
        document.getElementById("tombol").style.fontSize =  '24px';
        document.getElementById("tombol").style.padding = '8px';
        document.getElementById("tombol").style.position = 'absolute';
        document.getElementById("tombol").style.top = '120px';
        document.getElementById("tombol").style.backgroundColor = 'rgba(136, 219, 63, 0.717)';
        document.getElementById("tombol").style.textDecoration = 'none';
        document.getElementById("tombol").style.borderRadius = '5%';
        document.getElementById("tombol").style.color = 'black';
        document.getElementById("tombol").style.boxShadow = '0px 1px 5px 3px rgba(0,0,0,0.32)';
        document.getElementById("tombol").style.webkitBoxShadow = '0px 1px 5px 3px rgba(0,0,0,0.32)';
        document.getElementById("tombol").style.mozBoxShadow = '0px 1px 5px 3px rgba(0,0,0,0.32)';
    }
        B.onclick = function() {alert("JAWABAN ANDA BENAR! PERTANYAAN SELANJUTNYA.")
        Pertanyaan();
    }
    }
    else if(pertanyaan === pembanding[6]){
        for (let index = 0; index < pertanyaans.length; index++) {
            if(pertanyaans[index] === pertanyaan ){
                pertanyaans.splice(index, 1)
            }
            
        }
        A.innerHTML = "Gaung";
        B.innerHTML = "Gema";
        C.innerHTML = "Suara";
        D.innerHTML = "Getaran";
        A.onclick = C.onclick = D.onclick = function() {
        const  player = document.getElementById("player");
        player.style.backgroundColor = "whitesmoke";
        player.innerHTML = `<span id = 'pesan'>Jawaban Anda salah!! Anda berhasil menjawab ${10 - pertanyaans.length-1} dari 10 pertanyaan, silakan coba lagi!</span><br/>`;
        var element = document.createElement("div");
        element.innerHTML = "<a id='tombol' href='./index.html'>Kembali</a>";
        player.appendChild(element)
        document.getElementById("pesan").style.fontSize =  '18px';
        document.getElementById("tombol").style.fontFamily =  'cursive';
        document.getElementById("tombol").style.fontSize =  '24px';
        document.getElementById("tombol").style.padding = '8px';
        document.getElementById("tombol").style.position = 'absolute';
        document.getElementById("tombol").style.top = '120px';
        document.getElementById("tombol").style.backgroundColor = 'rgba(136, 219, 63, 0.717)';
        document.getElementById("tombol").style.textDecoration = 'none';
        document.getElementById("tombol").style.borderRadius = '5%';
        document.getElementById("tombol").style.color = 'black';
        document.getElementById("tombol").style.boxShadow = '0px 1px 5px 3px rgba(0,0,0,0.32)';
        document.getElementById("tombol").style.webkitBoxShadow = '0px 1px 5px 3px rgba(0,0,0,0.32)';
        document.getElementById("tombol").style.mozBoxShadow = '0px 1px 5px 3px rgba(0,0,0,0.32)';
    }
        B.onclick = function() {alert("JAWABAN ANDA BENAR! PERTANYAAN SELANJUTNYA.")
        Pertanyaan();
    }
    }
    else if(pertanyaan === pembanding[7]){
        for (let index = 0; index < pertanyaans.length; index++) {
            if(pertanyaans[index] === pertanyaan ){
                pertanyaans.splice(index, 1)
            }
            
        }
        A.innerHTML = "Seng";
        B.innerHTML = "Tembok";
        C.innerHTML = "Gabus";
        D.innerHTML = "Piring";
        A.onclick = B.onclick = D.onclick = function() {
        const  player = document.getElementById("player");
        player.style.backgroundColor = "whitesmoke";
        player.innerHTML = `<span id = 'pesan'>Jawaban Anda salah!! Anda berhasil menjawab ${10 - pertanyaans.length-1} dari 10 pertanyaan, silakan coba lagi!</span><br/>`;
        var element = document.createElement("div");
        element.innerHTML = "<a id='tombol' href='./index.html'>Kembali</a>";
        player.appendChild(element)
        document.getElementById("pesan").style.fontSize =  '18px';
        document.getElementById("tombol").style.fontFamily =  'cursive';
        document.getElementById("tombol").style.fontSize =  '24px';
        document.getElementById("tombol").style.padding = '8px';
        document.getElementById("tombol").style.position = 'absolute';
        document.getElementById("tombol").style.top = '120px';
        document.getElementById("tombol").style.backgroundColor = 'rgba(136, 219, 63, 0.717)';
        document.getElementById("tombol").style.textDecoration = 'none';
        document.getElementById("tombol").style.borderRadius = '5%';
        document.getElementById("tombol").style.color = 'black';
        document.getElementById("tombol").style.boxShadow = '0px 1px 5px 3px rgba(0,0,0,0.32)';
        document.getElementById("tombol").style.webkitBoxShadow = '0px 1px 5px 3px rgba(0,0,0,0.32)';
        document.getElementById("tombol").style.mozBoxShadow = '0px 1px 5px 3px rgba(0,0,0,0.32)';
    }
        C.onclick = function() {alert("JAWABAN ANDA BENAR! PERTANYAAN SELANJUTNYA.")
        Pertanyaan();
    }
    }
    else if(pertanyaan === pembanding[8]){
        for (let index = 0; index < pertanyaans.length; index++) {
            if(pertanyaans[index] === pertanyaan ){
                pertanyaans.splice(index, 1)
            }
            
        }
        A.innerHTML = "Nias";
        B.innerHTML = "Bali";
        C.innerHTML = "Madura";
        D.innerHTML = "NTB";
        A.onclick = function() {alert("JAWABAN ANDA BENAR! PERTANYAAN SELANJUTNYA.")
        Pertanyaan();
    }
        B.onclick = C.onclick = D.onclick = function() {
        const  player = document.getElementById("player");
        player.style.backgroundColor = "whitesmoke";
        player.innerHTML = `<span id = 'pesan'>Jawaban Anda salah!! Anda berhasil menjawab ${10 - pertanyaans.length-1} dari 10 pertanyaan, silakan coba lagi!</span><br/>`;
        var element = document.createElement("div");
        element.innerHTML = "<a id='tombol' href='./index.html'>Kembali</a>";
        player.appendChild(element)
        document.getElementById("pesan").style.fontSize =  '18px';
        document.getElementById("tombol").style.fontFamily =  'cursive';
        document.getElementById("tombol").style.fontSize =  '24px';
        document.getElementById("tombol").style.padding = '8px';
        document.getElementById("tombol").style.position = 'absolute';
        document.getElementById("tombol").style.top = '120px';
        document.getElementById("tombol").style.backgroundColor = 'rgba(136, 219, 63, 0.717)';
        document.getElementById("tombol").style.textDecoration = 'none';
        document.getElementById("tombol").style.borderRadius = '5%';
        document.getElementById("tombol").style.color = 'black';
        document.getElementById("tombol").style.boxShadow = '0px 1px 5px 3px rgba(0,0,0,0.32)';
        document.getElementById("tombol").style.webkitBoxShadow = '0px 1px 5px 3px rgba(0,0,0,0.32)';
        document.getElementById("tombol").style.mozBoxShadow = '0px 1px 5px 3px rgba(0,0,0,0.32)';
    }
    }
    else if(pertanyaan === pembanding[9]){
        for (let index = 0; index < pertanyaans.length; index++) {
            if(pertanyaans[index] === pertanyaan ){
                pertanyaans.splice(index, 1)
            }
            
        }
        A.innerHTML = "Aceh";
        B.innerHTML = "Papua";
        C.innerHTML = "Jawa Timur";
        D.innerHTML = "Bali";
        A.onclick = function() {alert("JAWABAN ANDA BENAR! PERTANYAAN SELANJUTNYA.")
        Pertanyaan();
    }
        B.onclick = D.onclick = C.onclick = function() {
        const  player = document.getElementById("player");
        player.style.backgroundColor = "whitesmoke";
        player.innerHTML = `<span id = 'pesan'>Jawaban Anda salah!! Anda berhasil menjawab ${10 - pertanyaans.length-1} dari 10 pertanyaan, silakan coba lagi!</span><br/>`;
        var element = document.createElement("div");
        element.innerHTML = "<a id='tombol' href='./index.html'>Kembali</a>";
        player.appendChild(element)
        document.getElementById("pesan").style.fontSize =  '18px';
        document.getElementById("tombol").style.fontFamily =  'cursive';
        document.getElementById("tombol").style.fontSize =  '24px';
        document.getElementById("tombol").style.padding = '8px';
        document.getElementById("tombol").style.position = 'absolute';
        document.getElementById("tombol").style.top = '120px';
        document.getElementById("tombol").style.backgroundColor = 'rgba(136, 219, 63, 0.717)';
        document.getElementById("tombol").style.textDecoration = 'none';
        document.getElementById("tombol").style.borderRadius = '5%';
        document.getElementById("tombol").style.color = 'black';
        document.getElementById("tombol").style.boxShadow = '0px 1px 5px 3px rgba(0,0,0,0.32)';
        document.getElementById("tombol").style.webkitBoxShadow = '0px 1px 5px 3px rgba(0,0,0,0.32)';
        document.getElementById("tombol").style.mozBoxShadow = '0px 1px 5px 3px rgba(0,0,0,0.32)';
    }
    }
    }
    
}
Pertanyaan();