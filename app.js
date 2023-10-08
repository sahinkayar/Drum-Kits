const Crash =document.getElementById('crash-btn');
const kick =document.getElementById('kick-btn');
const snare =document.getElementById('snare-btn');
const drum =document.getElementById('drum-btn');

Crash.addEventListener('click',e=>{ 
    const audio1=document.getElementById('crash-au').play();
});

kick.addEventListener('click',e=>{ 
    const audio2=document.getElementById('kick-au').play();
});

snare.addEventListener('click',e=>{ 
    const audio3=document.getElementById('snare-au').play();
});

drum.addEventListener('click',e=>{ 
    const audio4=document.getElementById('drum-au').play();
});

