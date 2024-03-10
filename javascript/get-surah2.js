function getRandomAyah(){
    randomAyahInd = Math.floor(Math.random() * 114) + 1

    $.get("https://api.quran.com/api/v4/chapters/"+randomAyahInd, function(response) { // get Surah
        surah = response['chapter'];

        console.log(surah)

        document.getElementById("surahTitleEng").innerHTML = surah["name_simple"];
        document.getElementById("surahTitleEngTranslation").innerHTML = surah["translated_name"]["name"];
    },false)       

    $.get("https://api.quran.com/api/v4/chapters/"+randomAyahInd+"/info", function(response) { // get Surah
        surah = response["chapter_info"];

        console.log(response)

        document.getElementById("surahTextEng").innerHTML = surah["short_text"];
    },false)    
    
}

getRandomAyah()

var playing=false

function playSurah(){

$.get("https://api.quran.com/api/v4/chapter_recitations/2/"+randomAyahInd, function(response) { // get surah audio        

if (playing==false){ // play
    surahAudio = new Audio(response.audio_file.audio_url);

    surahAudio.play();
    playing = true
    
    surahAudio.addEventListener('ended', function() {
        document.getElementById("surahAudioButton").innerHTML = "▶"
        surahAudio.currentTime = 0; 
        surahAudio.pause();
        playing = false
    }, false);


    document.getElementById("surahAudioButton").innerHTML = "||"
}else{ // stop
    surahAudio.currentTime = 0; 
    surahAudio.pause();
    playing = false

    document.getElementById("surahAudioButton").innerHTML = "▶"
}

}, "json")

}





