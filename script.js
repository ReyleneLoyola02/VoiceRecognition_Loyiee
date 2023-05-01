const startButton = document.getElementById('start-button');
const transcription = document.getElementById('transcription');

// initialize the SpeechRecognition API
const recognition = new webkitSpeechRecognition();

// set the recognition settings
recognition.continuous = true;
recognition.lang = 'en-US';

// when the user speaks, check if it matches a color or Baymax and change the background if it does
recognition.onresult = function(event) {
  const transcript = event.results[event.results.length - 1][0].transcript;
  transcription.textContent += ' ' + transcript;
  
  // convert the transcript to lowercase for easier matching
  const keyword = transcript.toLowerCase();
  
  // check if the keyword matches a known color or Baymax and change the background if it does
  if (keyword === 'green') {
    document.body.style.backgroundColor = 'green';
    localStorage.setItem('background-color', 'green');
    localStorage.removeItem('background-image');
    location.reload();
} else if (keyword === 'blue') {
    document.body.style.backgroundColor = 'blue';
    localStorage.setItem('background-color', 'blue');
    localStorage.removeItem('background-image');
    location.reload();
} else if (keyword === 'dugo') {
    document.body.style.backgroundColor = 'red';
    localStorage.setItem('background-color', 'red');
    localStorage.removeItem('background-image');
    location.reload();
} else if (keyword === 'lime') {
    document.body.style.backgroundColor = '#AFD3E2';
    localStorage.setItem('background-color', '#AFD3E2');
    localStorage.removeItem('background-image');
    location.reload();


  } else if (keyword === 'baymax') {
    document.body.style.backgroundImage = "url('https://media.tenor.com/rhyzuyeZRLwAAAAC/disney-baymax.gif')";
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    localStorage.setItem('background-image', 'https://media.tenor.com/rhyzuyeZRLwAAAAC/disney-baymax.gif');
    localStorage.removeItem('background-color');
     location.reload();


  }else if (keyword === 'i') {
    document.body.style.backgroundImage = "url('https://media.tenor.com/Qixy6rxsxxUAAAAC/hoshino-ai-oshi-no-ko.gif')";
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    localStorage.setItem('background-image', 'https://media.tenor.com/Qixy6rxsxxUAAAAC/hoshino-ai-oshi-no-ko.gif');
    localStorage.removeItem('background-color');
     location.reload();


  }else if (keyword === 'cute') {
    document.body.style.backgroundImage = "url('https://media4.giphy.com/media/OThoEim56VvSnFD0q4/giphy.gif')";
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    localStorage.setItem('background-image', 'https://media4.giphy.com/media/OThoEim56VvSnFD0q4/giphy.gif');

    localStorage.removeItem('background-color');
     location.reload();


  }else if (keyword === 'thunder breathing') {
    document.body.style.backgroundImage = "url('https://gifdb.com/images/high/zenitsu-thunderclap-and-flash-fran2b09lymmhin2.gif')";
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    localStorage.setItem('background-image', 'https://gifdb.com/images/high/zenitsu-thunderclap-and-flash-fran2b09lymmhin2.gif');
    localStorage.removeItem('background-color');
     location.reload();
 }else if (keyword === 'water breathing') {
    document.body.style.backgroundImage = "url('https://64.media.tumblr.com/facc232f511bf5d818aa68a1fe3811e4/3147a6dc197a26eb-34/s540x810/71440da8ed64fcf2e42a8b1d33046b66a81a0af1.gif')";
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    localStorage.setItem('background-image', 'https://64.media.tumblr.com/facc232f511bf5d818aa68a1fe3811e4/3147a6dc197a26eb-34/s540x810/71440da8ed64fcf2e42a8b1d33046b66a81a0af1.gif');
    localStorage.removeItem('background-color');
     location.reload();
  }else if (keyword === 'gay') {
    document.body.style.backgroundImage = "url('https://rare-gallery.com/mocahbig/1321368-Tanjiro-Kamado-Inosuke-Hashibira-Zenitsu-AgatsumaTanjiro.jpg')";
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    localStorage.setItem('background-image', 'https://rare-gallery.com/mocahbig/1321368-Tanjiro-Kamado-Inosuke-Hashibira-Zenitsu-AgatsumaTanjiro.jpg');
    localStorage.removeItem('background-color');
     location.reload();


  }else if (keyword === 'wow') {
    document.body.style.backgroundImage = "url('https://scontent.fmnl4-5.fna.fbcdn.net/v/t1.15752-9/342507390_1389426174957223_1384075176512696559_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeF59umkN_lngxElIMqzmFfzsatks8SaPeexq2SzxJo957WwYhzhXDGrqDoh5DMECxChcnvQtZ4uwvi4-gVMwArM&_nc_ohc=VRGV0Kd2XWoAX-AzZ2p&_nc_ht=scontent.fmnl4-5.fna&oh=03_AdQ6pbG5PSuLSI_i0HCG0U2XdyBuAjTp3Uihn0oR3D2alw&oe=64775068')";
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    localStorage.setItem('background-image', 'https://scontent.fmnl4-5.fna.fbcdn.net/v/t1.15752-9/342507390_1389426174957223_1384075176512696559_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeF59umkN_lngxElIMqzmFfzsatks8SaPeexq2SzxJo957WwYhzhXDGrqDoh5DMECxChcnvQtZ4uwvi4-gVMwArM&_nc_ohc=VRGV0Kd2XWoAX-AzZ2p&_nc_ht=scontent.fmnl4-5.fna&oh=03_AdQ6pbG5PSuLSI_i0HCG0U2XdyBuAjTp3Uihn0oR3D2alw&oe=64775068');
    localStorage.removeItem('background-color');
     location.reload();
  

  }else if (keyword === 'blood demon art') {
    document.body.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/690acbca-fd9f-4161-b005-6b7600c2c604/df8iag1-27fe69dd-0ce1-4d7f-8766-835fd9015f7e.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY5MGFjYmNhLWZkOWYtNDE2MS1iMDA1LTZiNzYwMGMyYzYwNFwvZGY4aWFnMS0yN2ZlNjlkZC0wY2UxLTRkN2YtODc2Ni04MzVmZDkwMTVmN2UuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Hk3u49DHSFc_EqskmGsF_vWcRQtPb6j85s2nFR4g1Cg')";
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    localStorage.setItem('background-image', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/690acbca-fd9f-4161-b005-6b7600c2c604/df8iag1-27fe69dd-0ce1-4d7f-8766-835fd9015f7e.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY5MGFjYmNhLWZkOWYtNDE2MS1iMDA1LTZiNzYwMGMyYzYwNFwvZGY4aWFnMS0yN2ZlNjlkZC0wY2UxLTRkN2YtODc2Ni04MzVmZDkwMTVmN2UuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Hk3u49DHSFc_EqskmGsF_vWcRQtPb6j85s2nFR4g1Cg');
    localStorage.removeItem('background-color');
     location.reload();
  }



  // add more color options or keywords here as desired
}

// start recording when the user clicks the button
startButton.addEventListener('click', function() {
  recognition.start();
});

// set the background color or image based on the stored value in local storage
const storedColor = localStorage.getItem('background-color');
if (storedColor) {
  document.body.style.backgroundColor = storedColor;
}

const storedImage = localStorage.getItem('background-image');
if (storedImage) {
  document.body.style.backgroundImage = "url('" + storedImage + "')";
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundRepeat = 'no-repeat';
}
