const pianoKeys=document.querySelectorAll(".piano-keys .key"),volumeSlider=document.querySelector(".volume-slider input"),keysCheckbox=document.querySelector(".keys-checkbox input");let allKeys=[],audio=new Audio("tunes/a.wav");const playTune=e=>{audio.src=`tunes/${e}.wav`,audio.play();const s=document.querySelector(`[data-key="${e}"]`);s.classList.add("active"),setTimeout((()=>{s.classList.remove("active")}),150)};pianoKeys.forEach((e=>{allKeys.push(e.dataset.key),e.addEventListener("click",(()=>playTune(e.dataset.key)))}));const handleVolume=e=>{audio.volume=e.target.value},showHideKeys=()=>{pianoKeys.forEach((e=>e.classList.toggle("hide")))},pressedKey=e=>{playTune(e.key),allKeys.includes(e.key)&&playTune(e.key)};keysCheckbox.addEventListener("click",showHideKeys),volumeSlider.addEventListener("input",handleVolume),document.addEventListener("keydown",pressedKey);