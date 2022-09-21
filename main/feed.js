const node = document.getElementById("tweet")
const clone = node.cloneNode(true);
document.getElementById("tweet2").appendChild(clone);

const node2 = document.getElementById("tweet")
const clone2 = node2.cloneNode(true);
document.getElementById("tweet3").appendChild(clone2);

const node3 = document.getElementById("tweet")
const clone3 = node3.cloneNode(true);
document.getElementById("tweet4").appendChild(clone3);

const node4 = document.getElementById("tweet")
const clone4 = node4.cloneNode(true);
document.getElementById("tweet5").appendChild(clone4);



let profilePictureArr = ["./profile_picture_comp/1.jpg","./profile_picture_comp/2.jpg","./profile_picture_comp/3.jpg","./profile_picture_comp/4.jpg","./profile_picture_comp/5.jpg","./profile_picture_comp/6.jpg","./profile_picture_comp/7.jpg","./profile_picture_comp/8.jpg","./profile_picture_comp/9.jpg"]

let tweetsArr = ["kang panci di PUBG #gaming", "RGB Nomor 1 #gaming", "HP mahal kok mainya ef ef dek #gaming","Nama doang ada jordannya, padahal gak bisa main basket #sport","madrid bayarr wasit teroooooooooooooooooshhhhh, jelas-jelas penalty #sport"," emyu lawaaak betttt losetrack mulu dek #sport", "undur aja terus tgl rilis RTX 4080 butuh apgred ASAP WOI!!!! #gaming", "NI ODA TERUS AJA GAK NGE REVEAL shanks in action! #musicnmovies", "oklahoma city thunder kapan bisa nge draft macem big three lagi,kek jaman KD-RUSS-HARDEN ampas BANGET DRAFT PICKNYA!! #sport" ,"kemaren gw liat di playstore ada game petualangan pesulap merah untuk pembuktian #gaming", "ARCTIC MONKEYS WE NEED YOU TO COME TO INDONESIA!! #musicnmovies" , "switch pro kapan riliss woyyyy!!! biar game-gamenya kagak farming-rpg game terosshhh sampaaaah! #gaming" , "music scorenya tower of fantasy gabisa nyaingin music scorenya genshin titik!!!! #musicnmovies" , "penaldo the tap in merchant dah pensi ajee bangg!!! #sport", "butuh asupan game2 berkualitas di swtich jangan farming-simulator RPG terosssh mana zeldanyaaaa nintendogs!!! #gaming" , "Moba kok analog dek dek #gaming", "one piece kapan tamatnya coba #musicnmovies", "asli filmnya bagus banget editanya rapih kaya film india #musicnmovies", "baru juga mau login,malah disuruh kewarung #gaming", "Bjorka diajakin by one  zuma sama OP warnet pengkolan #gaming", "lagi enak ngoding sambil dengerin musik eh tiba tiba ada iklan shopee COD #musicnmovies"]
let hoursArr = ['5:46','7:26','9:12','18:16','15:34','21:21','19:11','11:11','5:56','3:11','1:46','7:31','2:43','11:47','3:51','4:23','15:11','17:59','5:52','6:45','5:46','7:26','9:12','18:16','15:34','21:21','19:11','11:11','5:56','3:11','1:46','7:31','2:43','11:47','3:51','4:23','15:11','17:59','5:52','6:45','5:46','7:26','9:12','18:16','15:34','21:21','19:11','11:11','5:56','3:11','1:46','7:31','2:43','11:47','3:51','4:23','15:11','17:59','5:52','6:45','5:46','7:26','9:12','18:16','15:34','21:21','19:11','11:11','5:56','3:11','1:46','7:31','2:43','11:47','3:51','4:23','15:11','17:59','5:52','6:45','5:46','7:26','9:12','18:16','15:34','21:21','19:11','11:11','5:56','3:11','1:46','7:31','2:43','11:47','3:51','4:23','15:11','17:59','5:52','6:45','5:46','7:26','9:12','18:16','15:34','21:21','19:11','11:11','5:56','3:11','1:46','7:31','2:43','11:47','3:51','4:23','15:11','17:59','5:52','6:45','5:46','7:26','9:12','18:16','15:34','21:21','19:11','11:11','5:56','3:11','1:46','7:31','2:43','11:47','3:51','4:23','15:11','17:59','5:52','6:45','5:46','7:26','9:12','18:16','15:34','21:21','19:11','11:11','5:56','3:11','1:46','7:31','2:43','11:47','3:51','4:23','15:11','17:59','5:52','6:45','5:46','7:26','9:12','18:16','15:34','21:21','19:11','11:11','5:56','3:11','1:46','7:31','2:43','11:47','3:51','4:23','15:11','17:59','5:52','6:45',]

let usersArr = ["Makrusus", "Pesa", "Fethir", "Onad", "jenud", "pakjul", "akhirudin", "wali", "andreak", "tidar", 'Ari', 'Ayu', 'Aulia', 'Anggi', 'Agus', 'Ade' ,'Adryan', 'Arya', 'Amel', 'Andi','Bayu', 'Bagas', 'Budi', 'Bagus', 'Bastian','Bintang', 'Ben', 'Chika', 'Cinta', 'Citra', 'Cakra', 'Candra', 'Darius', 'Dimas', 'Deo', 'Dean','Ivan' ,'Dinda', 'Dika', 'Dodi', 'Ernes', 'Erwin', 'Eka', 'Elin', 'Elsa', 'Ema', 'Ela', 'Fikri', 'Fitri', 'Fika', 'Fani', 'Fina', 'Farid', 'Fadel', 'Galih', 'Gading', 'Guntur', 'Gilang', 'Geri', 'Gibran', 'Hamidah', 'Hilda', 'Hilmi', 'Hisyam', 'Haikal', 'Harun', 'Gayuh' , 'Anuman', 'Kiet', 'Kob Sinn', 'Kriang', 'Kasemchai','Khemkhaeng', 'Kittibun', 'Kamon', 'khalahan', ' kraisee', 'Lamon', 'Mongkut', 'makok', 'Mennoi', 'Nopadonlai', 'Ngaplai', 'niran', 'Narong' ,'paiton', 'Panit', 'pravat','Phet', 'ngablay', 'thangsei','Sakda','Ritpacong' , 'Shonchai', 'Suctratlai' , 'Shomcai','Songranglai' , 'naprep', 'Udom', 'Thapang', 'Xuwangab', 'Yuthankon', 'Shonthiak', 'Shochak', 'Akemi','Genjeh', 'Arata', 'Chai' ,'Nande', 'Goro', 'Hiroki' , 'Nantumunan', 'Kazuki', 'Ken', 'Kenji', 'Kenshin' , 'Kenta', 'Monkey', 'Nishinoya', 'Lawliet', 'Kazuto', 'Kirigaya', 'Sakata', 'Naruto', 'Uzumaki', 'Zoro', 'Edward', 'Elric', 'Monkey', 'Luffy', 'Toshiro', 'Hitsugaya', 'Kaede', 'Rukawa', 'Chrollo', 'Lucilfer', 'Kyoya', 'Hibari', 'Gojo', 'Satoru', 'araki', 'Himiko', 'Toga', 'Nobara', 'Kugisaki', 'Kenpachi', 'Yuji', 'Itadori', 'Megumi', 'Fushiguro', 'Nobara', 'Kugisaki', 'Maki', 'Zenin', 'Toge', 'Inumaki', 'Yuta', 'Okkotsu', 'Kinji', 'Hakari', 'Kirara']
let tempArr =[]


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


let image = document.getElementsByClassName("foto")
for (let i = 0; i < image.length; i++) {
    let profilePicture = profilePictureArr[getRndInteger(0,profilePictureArr.length-1)]
    if (!(tempArr.includes(profilePicture))) { // filter apabila sudah ditampilkan
        image[i].src = profilePicture
        tempArr.push(profilePicture)
    } else{
        i--
    }
}

let twit = document.getElementsByClassName("twit")
for (let i = 0; i < twit.length; i++) {
    let twits = tweetsArr[getRndInteger(0,tweetsArr.length-1)]
    if (!(tempArr.includes(twits))) { // filter apabila sudah ditampilkan
        twit[i].innerText = twits
        tempArr.push(twits)
    } else{
        i--
    }
}

let time = document.getElementsByClassName("time")
for (let i = 0; i < time.length; i++) {
    let times = hoursArr[getRndInteger(0,hoursArr.length-1)]
    if (!(tempArr.includes(times))) { // filter apabila sudah ditampilkan
        time[i].innerText = times
        tempArr.push(times)
    } else{
        i--
    }
}


let nama = document.getElementsByClassName("nama")
for (let i = 0; i < nama.length; i++) {
    let namas = usersArr[getRndInteger(0,usersArr.length-1)]
    if (!(tempArr.includes(namas))) { // filter apabila sudah ditampilkan
        nama[i].innerText = namas
        tempArr.push(namas)
    } else{
        i--
    }
}


let sessionId = document.getElementsByClassName("RNG")
for (let i = 0; i < sessionId.length; i++) {
    let strNum = ''
    let output = ''
    while (strNum.length < 9){
        let number = Math.floor(Math.random()*10)
        strNum+= number.toString();
    }
    output = `#${strNum}`
    sessionId[i].innerText = output
}

