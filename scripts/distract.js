// const closePopupBtn = document.getElementById('closePopup');
// const popup = document.getElementById('popup');
// const distractionYoutube = document.getElementById('distracting-content-youtube');
// const distractionSpotify = document.getElementById('distracting-content-spotify');
// const distractionImage = document.getElementById('distracting-content-image');
// const distractionTitle = document.getElementById('distracting-content-title');
// const distractionDesc = document.getElementById('distracting-content-description');
// let distractor;
// function distract(){
//     distractor = setInterval(() => {
//         const randomNumber = Math.floor(Math.random() * 33) + 1;
//         switch (randomNumber) {
//             case 1:
//                 distractionTitle.innerHTML = 'Check out this YouTube™ video!';
//                 distractionDesc.innerHTML = 'The Daily Dose of Internet made a compilation for 2022, check it out.';
//                 distractionYoutube.src='https://www.youtube-nocookie.com/embed/MH-VHYtjdfY?si=4ixcKVhmsTym3-HA&amp;controls=0&amp;autplay=1';
//                 distractionYoutube.style.display = 'block';
//                 popup.style.display = 'block';
//                 setTimeout(()=>{
//                     distractionYoutube.src='';
//                     popup.style.display = 'none';
//                     distractionYoutube.style.display = 'none';
//                 }, 10*1000);
//                 break;
//             case 2:
//                 distractionTitle.innerHTML = 'Check out this YouTube™ video!';
//                 distractionDesc.innerHTML = 'Veritasium makes such good content, check out this video on this craazyy paradox.';
//                 distractionYoutube.src='https://www.youtube-nocookie.com/embed/jD-AD5liu_0?si=o0tsQPOBgLx4Bh8O&amp;controls=0&amp;autoplay=1';
//                 distractionYoutube.style.display = 'block';
//                 popup.style.display = 'block';
//                 setTimeout(()=>{
//                     distractionYoutube.src='';
//                     popup.style.display = 'none';
//                     distractionYoutube.style.display = 'none';
//                 }, 10*1000);
//                 break;
//             case 3:
//                 distractionTitle.innerHTML = 'Check out this YouTube™ video!';
//                 distractionDesc.innerHTML = 'Coding with Lewis is a great channel, check out this video on this memer AI.';
//                 distractionYoutube.src='https://www.youtube-nocookie.com/embed/IfPJBKcMj6s?si=k3goVHmIhrttxbd9&amp;controls=0&amp;autoplay=1';
//                 distractionYoutube.style.display = 'block';
//                 popup.style.display = 'block';
//                 setTimeout(()=>{
//                     distractionYoutube.src='';
//                     popup.style.display = 'none';
//                     distractionYoutube.style.display = 'none';
//                 }, 10*1000);
//                 break;
//             case 4:
//                 distractionTitle.innerHTML = 'Check out this YouTube™ video!';
//                 distractionDesc.innerHTML = 'Banks are tryna scam us and Lewis has a solution, check out this video.';
//                 distractionYoutube.src='https://www.youtube-nocookie.com/embed/STJgPkyNz68?si=EcI_Nluu0om_Nwkp&amp;controls=0&amp;autoplay=1';  
//                 distractionYoutube.style.display = 'block';
//                 popup.style.display = 'block';
//                 setTimeout(()=>{
//                     distractionYoutube.src='';
//                     popup.style.display = 'none';
//                     distractionYoutube.style.display = 'none';
//                 }, 10*1000);
//                 break;
//             case 5:
//                 distractionTitle.innerHTML = 'Check out this funny meme!';
//                 distractionDesc.innerHTML = 'Lol, this is funny welp...';
//                 distractionImage.src='assets/Memes/small/1.jpg';  
//                 distractionImage.style.display = 'block';
//                 popup.style.display = 'block';
//                 setTimeout(()=>{
//                     distractionImage.src='';
//                     popup.style.display = 'none';
//                     distractionImage.style.display = 'none';
//                 }, 10*1000);
//                 break;
//             case 6:
//                 distractionTitle.innerHTML = 'Check out this funny meme!';
//                 distractionDesc.innerHTML = 'Lol, this is funny welp...';
//                 distractionImage.src='assets/Memes/small/2.jpg';  
//                 distractionImage.style.display = 'block';
//                 popup.style.display = 'block';
//                 setTimeout(()=>{
//                     distractionImage.src='';
//                     popup.style.display = 'none';
//                     distractionImage.style.display = 'none';
//                 }, 10*1000);
//                 break;
//             case 7:
//                 distractionTitle.innerHTML = 'Check out this funny meme!';
//                 distractionDesc.innerHTML = 'Lol, this is funny welp...';
//                 distractionImage.src='assets/Memes/small/3.jpg';  
//                 distractionImage.style.display = 'block';
//                 popup.style.display = 'block';
//                 setTimeout(()=>{
//                     distractionImage.src='';
//                     popup.style.display = 'none';
//                     distractionImage.style.display = 'none';
//                 }, 10*1000);
//                 break;
//             case 8:
//                 distractionTitle.innerHTML = 'Check out this funny meme!';
//                 distractionDesc.innerHTML = 'Lol, this is funny welp...';
//                 distractionImage.src='assets/Memes/small/4.jpg';  
//                 distractionImage.style.display = 'block';
//                 popup.style.display = 'block';
//                 setTimeout(()=>{
//                     distractionImage.src='';
//                     popup.style.display = 'none';
//                     distractionImage.style.display = 'none';
//                 }, 10*1000);
//                 break;
//             case 9:
//                 distractionTitle.innerHTML = 'Check out this funny meme!';
//                 distractionDesc.innerHTML = 'Lol, this is funny welp...';
//                 distractionImage.src='assets/Memes/small/5.jpg';  
//                 distractionImage.style.display = 'block';
//                 popup.style.display = 'block';
//                 setTimeout(()=>{
//                     distractionImage.src='';
//                     popup.style.display = 'none';
//                     distractionImage.style.display = 'none';
//                 }, 10*1000);
//                 break;
//             case 10:
//                 distractionTitle.innerHTML = 'Check out this funny meme!';
//                 distractionDesc.innerHTML = 'Lol, this is funny welp...';
//                 distractionImage.src='assets/Memes/small/6.jpg';  
//                 distractionImage.style.display = 'block';
//                 popup.style.display = 'block';
//                 setTimeout(()=>{
//                     distractionImage.src='';
//                     popup.style.display = 'none';
//                     distractionImage.style.display = 'none';
//                 }, 10*1000);
//                 break;
//             case 11:
//                 distractionTitle.innerHTML = 'Check out this funny meme!';
//                 distractionDesc.innerHTML = 'Lol, this is funny welp...';
//                 distractionImage.src='assets/Memes/small/7.jpg';  
//                 distractionImage.style.display = 'block';
//                 popup.style.display = 'block';
//                 setTimeout(()=>{
//                     distractionImage.src='';
//                     popup.style.display = 'none';
//                     distractionImage.style.display = 'none';
//                 }, 10*1000);
//                 break;
//             case 12:
//                 distractionTitle.innerHTML = 'Check out this funny meme!';
//                 distractionDesc.innerHTML = 'Lol, this is funny welp...';
//                 distractionImage.src='assets/Memes/small/8.jpg';  
//                 distractionImage.style.display = 'block';
//                 popup.style.display = 'block';
//                 setTimeout(()=>{
//                     distractionImage.src='';
//                     popup.style.display = 'none';
//                     distractionImage.style.display = 'none';
//                 }, 10*1000);
//                 break;
//             case 13:
//                 distractionTitle.innerHTML = 'Check out this funny meme!';
//                 distractionDesc.innerHTML = 'Lol, this is funny welp...';
//                 distractionImage.src='assets/Memes/small/9.jpg';  
//                 distractionImage.style.display = 'block';
//                 popup.style.display = 'block';
//                 setTimeout(()=>{
//                     distractionImage.src='';
//                     popup.style.display = 'none';
//                     distractionImage.style.display = 'none';
//                 }, 10*1000);
//                 break;
//             case 14:
//                 distractionTitle.innerHTML = 'Check out this funny meme!';
//                 distractionDesc.innerHTML = 'Lol, this is funny welp...';
//                 distractionImage.src='assets/Memes/small/10.jpg';  
//                 distractionImage.style.display = 'block';
//                 popup.style.display = 'block';
//                 setTimeout(()=>{
//                     distractionImage.src='';
//                     popup.style.display = 'none';
//                     distractionImage.style.display = 'none';
//                 }, 10*1000);
//                 break;
//             case 15:
//                 distractionTitle.innerHTML = 'Check out this funny meme!';
//                 distractionDesc.innerHTML = 'Lol, this is funny welp...';
//                 distractionImage.src='assets/Memes/small/11.jpg';  
//                 distractionImage.style.display = 'block';
//                 popup.style.display = 'block';
//                 setTimeout(()=>{
//                     distractionImage.src='';
//                     popup.style.display = 'none';
//                     distractionImage.style.display = 'none';
//                 }, 10*1000);
//                 break;
//             case 16:
//                 distractionTitle.innerHTML = 'Check out this funny meme!';
//                 distractionDesc.innerHTML = 'Lol, this is funny welp...';
//                 distractionImage.src='assets/Memes/small/12.jpg';  
//                 distractionImage.style.display = 'block';
//                 popup.style.display = 'block';
//                 setTimeout(()=>{
//                     distractionImage.src='';
//                     popup.style.display = 'none';
//                     distractionImage.style.display = 'none';
//                 }, 10*1000);
//                 break;
//             case 17:
//                 distractionTitle.innerHTML = 'Check out this funny meme!';
//                 distractionDesc.innerHTML = 'Lol, this is funny welp...';
//                 distractionImage.src='assets/Memes/small/13.jpg';  
//                 distractionImage.style.display = 'block';
//                 popup.style.display = 'block';
//                 setTimeout(()=>{
//                     distractionImage.src='';
//                     popup.style.display = 'none';
//                     distractionImage.style.display = 'none';
//                 }, 10*1000);
//                 break;
//             case 18:
//                 distractionTitle.innerHTML = 'Check out this funny meme!';
//                 distractionDesc.innerHTML = 'Lol, this is funny welp...';
//                 distractionImage.src='assets/Memes/small/14.jpg';  
//                 distractionImage.style.display = 'block';
//                 popup.style.display = 'block';
//                 setTimeout(()=>{
//                     distractionImage.src='';
//                     popup.style.display = 'none';
//                     distractionImage.style.display = 'none';
//                 }, 10*1000);
//                 break;
//             case 19:
//                 distractionTitle.innerHTML = 'Check out this funny meme!';
//                 distractionDesc.innerHTML = 'Lol, this is funny welp...';
//                 distractionImage.src='assets/Memes/small/15.jpg';  
//                 distractionImage.style.display = 'block';
//                 popup.style.display = 'block';
//                 setTimeout(()=>{
//                     distractionImage.src='';
//                     popup.style.display = 'none';
//                     distractionImage.style.display = 'none';
//                 }, 10*1000);
//                 break;
//             case 20:
//                 distractionTitle.innerHTML = 'Check out this funny meme!';
//                 distractionDesc.innerHTML = 'Lol, this is funny welp...';
//                 distractionImage.src='assets/Memes/small/16.jpg';  
//                 distractionImage.style.display = 'block';
//                 popup.style.display = 'block';
//                 setTimeout(()=>{
//                     distractionImage.src='';
//                     popup.style.display = 'none';
//                     distractionImage.style.display = 'none';
//                 }, 10*1000);
//                 break;
//             case 21:
//                 distractionTitle.innerHTML = 'Check out this funny meme!';
//                 distractionDesc.innerHTML = 'Lol, this is funny welp...';
//                 distractionImage.src='assets/Memes/small/17.jpg';  
//                 distractionImage.style.display = 'block';
//                 popup.style.display = 'block';
//                 setTimeout(()=>{
//                     distractionImage.src='';
//                     popup.style.display = 'none';
//                     distractionImage.style.display = 'none';
//                 }, 10*1000);
//                 break;
//             case 22:
//                 distractionTitle.innerHTML = 'Check out this funny meme!';
//                 distractionDesc.innerHTML = 'Lol, this is funny welp...';
//                 distractionImage.src='assets/Memes/small/18.jpg';  
//                 distractionImage.style.display = 'block';
//                 popup.style.display = 'block';
//                 setTimeout(()=>{
//                     distractionImage.src='';
//                     popup.style.display = 'none';
//                     distractionImage.style.display = 'none';
//                 }, 10*1000);
//                 break;
//             case 23:
//                 distractionTitle.innerHTML = 'Check out this funny meme!';
//                 distractionDesc.innerHTML = 'Lol, this is funny welp...';
//                 distractionImage.src='assets/Memes/small/19.jpg';  
//                 distractionImage.style.display = 'block';
//                 popup.style.display = 'block';
//                 setTimeout(()=>{
//                     distractionImage.src='';
//                     popup.style.display = 'none';
//                     distractionImage.style.display = 'none';
//                 }, 10*1000);
//                 break;
//             case 24:
//                 distractionTitle.innerHTML = 'Check out this funny meme!';
//                 distractionDesc.innerHTML = 'Lol, this is funny welp...';
//                 distractionImage.src='assets/Memes/small/20.jpg';  
//                 distractionImage.style.display = 'block';
//                 popup.style.display = 'block';
//                 setTimeout(()=>{
//                     distractionImage.src='';
//                     popup.style.display = 'none';
//                     distractionImage.style.display = 'none';
//                 }, 10*1000);
//                 break;
//             case 25:
//                 distractionTitle.innerHTML = 'Check out this funny meme!';
//                 distractionDesc.innerHTML = 'Lol, this is funny welp...';
//                 distractionImage.src='assets/Memes/small/21.jpg';  
//                 distractionImage.style.display = 'block';
//                 popup.style.display = 'block';
//                 setTimeout(()=>{
//                     distractionImage.src='';
//                     popup.style.display = 'none';
//                     distractionImage.style.display = 'none';
//                 }, 10*1000);
//                 break;
//             case 26:
//                 distractionTitle.innerHTML = 'Check out this funny meme!';
//                 distractionDesc.innerHTML = 'Lol, this is funny welp...';
//                 distractionImage.src='assets/Memes/small/22.jpg';  
//                 distractionImage.style.display = 'block';
//                 popup.style.display = 'block';
//                 setTimeout(()=>{
//                     distractionImage.src='';
//                     popup.style.display = 'none';
//                     distractionImage.style.display = 'none';
//                 }, 10*1000);
//                 break;
//             case 27:
//                 distractionTitle.innerHTML = 'Check out this funny meme!';
//                 distractionDesc.innerHTML = 'Lol, this is funny welp...';
//                 distractionImage.src='assets/Memes/small/23.jpg';  
//                 distractionImage.style.display = 'block';
//                 popup.style.display = 'block';
//                 setTimeout(()=>{
//                     distractionImage.src='';
//                     popup.style.display = 'none';
//                     distractionImage.style.display = 'none';
//                 }, 10*1000);
//                 break;

//         }
//     }, 13000);
// }
// function stopDistract() {
//     clearInterval(distractor);
// }
