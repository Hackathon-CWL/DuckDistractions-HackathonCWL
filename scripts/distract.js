const closePopupBtn = document.getElementById('closePopup');
const popup = document.getElementById('popup');
const distractionYoutube = document.getElementById('distracting-content-youtube');
const distractionSpotify = document.getElementById('distracting-content-spotify');
const distractionImage = document.getElementById('distracting-content-image');
const distractionTitle = document.getElementById('distracting-content-title');
const distractionDesc = document.getElementById('distracting-content-description');
const distractionImageContainer = document.getElementById('image-container');
const distractionVidContainer = document.getElementById('youtube-container');
const popupCont=document.querySelector('.popup-content');

let distractor;
function distract(){
    distractor = setInterval(() => {
        const randomNumber = Math.floor(Math.random() * 48) + 1;
        switch(randomNumber){
            case 1:
                distractionTitle.innerHTML = 'Check out this YouTube™ video!';
                distractionDesc.innerHTML = 'The Daily Dose of Internet made a compilation for 2022, check it out.';
                distractionYoutube.src='https://www.youtube-nocookie.com/embed/MH-VHYtjdfY?si=4ixcKVhmsTym3-HA&amp;controls=0&amp;autoplay=1';
                distractionYoutube.style.display = 'block';
                distractionVidContainer.style.display = 'block';
                popup.style.display = 'block';
                popupCont.style.height = '450px'; 
                setTimeout(()=>{
                    distractionYoutube.src='';
                    popup.style.display = 'none';
                    popupCont.style.height = '600px';
                    distractionVidContainer.style.display = 'none';
                    distractionYoutube.style.display = 'none';
                }, 10*1000);
                break;
            case 2:
                distractionTitle.innerHTML = 'Check out this YouTube™ video!';
                distractionDesc.innerHTML = 'Veritasium makes such good content, check out this video on this craazyy paradox.';
                distractionYoutube.src='https://www.youtube-nocookie.com/embed/jD-AD5liu_0?si=o0tsQPOBgLx4Bh8O&amp;controls=0&amp;autoplay=1';
                distractionYoutube.style.display = 'block';
                distractionVidContainer.style.display = 'block';
                popup.style.display = 'block';
                popupCont.style.height = '450px'; 
                setTimeout(()=>{
                    popupCont.style.height = '600px'; 
                    distractionYoutube.src='';
                    popup.style.display = 'none';
                    distractionVidContainer.style.display = 'none';
                    distractionYoutube.style.display = 'none';
                }, 10*1000);
                break;
            case 3:
                distractionTitle.innerHTML = 'Check out this YouTube™ video!';
                distractionDesc.innerHTML = 'Coding with Lewis is a great channel, check out this video on this memer AI.';
                distractionYoutube.src='https://www.youtube-nocookie.com/embed/IfPJBKcMj6s?si=k3goVHmIhrttxbd9&amp;controls=0&amp;autoplay=1';
                distractionYoutube.style.display = 'block';
                document.getElementById('youtube-container').style.display = 'block';
                popup.style.display = 'block';
                popupCont.style.height = '450px'; 
                setTimeout(()=>{
                    popupCont.style.height = '600px'; 
                    distractionYoutube.src='';
                    popup.style.display = 'none';
                    document.getElementById('youtube-container').style.display = 'none';
                    distractionYoutube.style.display = 'none';
                }, 10*1000);
                break;
            case 4:
                distractionTitle.innerHTML = 'Check out this YouTube™ video!';
                distractionDesc.innerHTML = 'Banks are tryna scam us and Lewis has a solution, check out this video.';
                distractionYoutube.src='https://www.youtube-nocookie.com/embed/STJgPkyNz68?si=EcI_Nluu0om_Nwkp&amp;controls=0&amp;autoplay=1';  
                distractionYoutube.style.display = 'block';
                distractionVidContainer.style.display = 'block';
                popup.style.display = 'block';
                popupCont.style.height = '450px'; 
                setTimeout(()=>{
                    popupCont.style.height = '600px'; 
                    distractionYoutube.src='';
                    popup.style.display = 'none';
                    distractionVidContainer.style.display = 'none';
                    distractionYoutube.style.display = 'none';
                }, 10*1000);
                break;
            case 5:
                distractionTitle.innerHTML = 'Check out this funny meme!';
                distractionDesc.innerHTML = 'Lol, this is funny welp...';
                distractionImage.src='assets/Memes/small/1.jpg';  
                distractionImageContainer.style.display = 'block';
                popup.style.display = 'block';
                setTimeout(()=>{
                    distractionImage.src='';
                    popup.style.display = 'none';
                    distractionImageContainer.style.display='none';
                }, 10*1000);
                break;
            case 6:
                distractionTitle.innerHTML = 'Check out this funny meme!';
                distractionDesc.innerHTML = 'Lol, this is funny welp...';
                distractionImage.src='assets/Memes/small/2.jpg';  
                distractionImageContainer.style.display = 'block';
                popup.style.display = 'block';
                setTimeout(()=>{
                    distractionImage.src='';
                    popup.style.display = 'none';
                    distractionImageContainer.style.display='none';
                }, 10*1000);
                break;
            case 7:
                distractionTitle.innerHTML = 'Check out this funny meme!';
                distractionDesc.innerHTML = 'Lol, this is funny welp...';
                distractionImage.src='assets/Memes/small/3.jpg';  
                distractionImageContainer.style.display = 'block';
                popup.style.display = 'block';
                setTimeout(()=>{
                    distractionImage.src='';
                    popup.style.display = 'none';
                    distractionImageContainer.style.display='none';
                }, 10*1000);
                break;
            case 8:
                distractionTitle.innerHTML = 'Check out this funny meme!';
                distractionDesc.innerHTML = 'Lol, this is funny welp...';
                distractionImage.src='assets/Memes/small/4.jpg';  
                distractionImageContainer.style.display = 'block';
                popup.style.display = 'block';
                setTimeout(()=>{
                    distractionImage.src='';
                    popup.style.display = 'none';
                    distractionImageContainer.style.display='none';
                }, 10*1000);
                break;
            case 9:
                distractionTitle.innerHTML = 'Check out this funny meme!';
                distractionDesc.innerHTML = 'Lol, this is funny welp...';
                distractionImage.src='assets/Memes/small/5.jpg';  
                distractionImageContainer.style.display = 'block';
                popup.style.display = 'block';
                setTimeout(()=>{
                    distractionImage.src='';
                    popup.style.display = 'none';
                    distractionImageContainer.style.display='none';
                }, 10*1000);
                break;
            case 10:
                distractionTitle.innerHTML = 'Check out this funny meme!';
                distractionDesc.innerHTML = 'Lol, this is funny welp...';
                distractionImage.src='assets/Memes/small/6.jpg';  
                distractionImageContainer.style.display = 'block';
                popup.style.display = 'block';
                setTimeout(()=>{
                    distractionImage.src='';
                    popup.style.display = 'none';
                    distractionImageContainer.style.display='none';
                }, 10*1000);
                break;
            case 11:
                distractionTitle.innerHTML = 'Check out this funny meme!';
                distractionDesc.innerHTML = 'Lol, this is funny welp...';
                distractionImage.src='assets/Memes/small/7.jpg';  
                distractionImageContainer.style.display = 'block';
                popup.style.display = 'block';
                setTimeout(()=>{
                    distractionImage.src='';
                    popup.style.display = 'none';
                    distractionImageContainer.style.display='none';
                }, 10*1000);
                break;
            case 12:
                distractionTitle.innerHTML = 'Check out this funny meme!';
                distractionDesc.innerHTML = 'Lol, this is funny welp...';
                distractionImage.src='assets/Memes/small/8.jpg';  
                distractionImageContainer.style.display = 'block';
                popup.style.display = 'block';
                setTimeout(()=>{
                    distractionImage.src='';
                    popup.style.display = 'none';
                    distractionImageContainer.style.display='none';
                }, 10*1000);
                break;
            case 13:
                distractionTitle.innerHTML = 'Check out this funny meme!';
                distractionDesc.innerHTML = 'Lol, this is funny welp...';
                distractionImage.src='assets/Memes/small/9.jpg';  
                distractionImageContainer.style.display = 'block';
                popup.style.display = 'block';
                setTimeout(()=>{
                    distractionImage.src='';
                    popup.style.display = 'none';
                    distractionImageContainer.style.display='none';
                }, 10*1000);
                break;
            case 14:
                distractionTitle.innerHTML = 'Check out this funny meme!';
                distractionDesc.innerHTML = 'Lol, this is funny welp...';
                distractionImage.src='assets/Memes/small/10.jpg';  
                distractionImageContainer.style.display = 'block';
                popup.style.display = 'block';
                setTimeout(()=>{
                    distractionImage.src='';
                    popup.style.display = 'none';
                    distractionImageContainer.style.display='none';
                }, 10*1000);
                break;
            case 15:
                distractionTitle.innerHTML = 'Check out this funny meme!';
                distractionDesc.innerHTML = 'Lol, this is funny welp...';
                distractionImage.src='assets/Memes/small/11.jpg';  
                distractionImageContainer.style.display = 'block';
                popup.style.display = 'block';
                setTimeout(()=>{
                    distractionImage.src='';
                    popup.style.display = 'none';
                    distractionImageContainer.style.display='none';
                }, 10*1000);
                break;
            case 16:
                distractionTitle.innerHTML = 'Check out this funny meme!';
                distractionDesc.innerHTML = 'Lol, this is funny welp...';
                distractionImage.src='assets/Memes/small/12.jpg';  
                distractionImageContainer.style.display = 'block';
                popup.style.display = 'block';
                setTimeout(()=>{
                    distractionImage.src='';
                    popup.style.display = 'none';
                    distractionImageContainer.style.display='none';
                }, 10*1000);
                break;
            case 17:
                distractionTitle.innerHTML = 'Check out this funny meme!';
                distractionDesc.innerHTML = 'Lol, this is funny welp...';
                distractionImage.src='assets/Memes/small/13.jpg';  
                distractionImageContainer.style.display = 'block';
                popup.style.display = 'block';
                setTimeout(()=>{
                    distractionImage.src='';
                    popup.style.display = 'none';
                    distractionImageContainer.style.display='none';
                }, 10*1000);
                break;
            case 18:
                distractionTitle.innerHTML = 'Check out this funny meme!';
                distractionDesc.innerHTML = 'Lol, this is funny welp...';
                distractionImage.src='assets/Memes/small/14.jpg';  
                distractionImageContainer.style.display = 'block';
                popup.style.display = 'block';
                setTimeout(()=>{
                    distractionImage.src='';
                    popup.style.display = 'none';
                    distractionImageContainer.style.display='none';
                }, 10*1000);
                break;
            case 19:
                distractionTitle.innerHTML = 'Check out this funny meme!';
                distractionDesc.innerHTML = 'Lol, this is funny welp...';
                distractionImage.src='assets/Memes/small/15.jpg';  
                distractionImageContainer.style.display = 'block';
                popup.style.display = 'block';
                setTimeout(()=>{
                    distractionImage.src='';
                    popup.style.display = 'none';
                    distractionImageContainer.style.display='none';
                }, 10*1000);
                break;
            case 20:
                distractionTitle.innerHTML = 'Check out this funny meme!';
                distractionDesc.innerHTML = 'Lol, this is funny welp...';
                distractionImage.src='assets/Memes/small/16.jpg';  
                distractionImageContainer.style.display = 'block';
                popup.style.display = 'block';
                setTimeout(()=>{
                    distractionImage.src='';
                    popup.style.display = 'none';
                    distractionImageContainer.style.display='none';
                }, 10*1000);
                break;
            case 21:
                distractionTitle.innerHTML = 'Check out this funny meme!';
                distractionDesc.innerHTML = 'Lol, this is funny welp...';
                distractionImage.src='assets/Memes/small/17.jpg';  
                distractionImageContainer.style.display = 'block';
                popup.style.display = 'block';
                setTimeout(()=>{
                    distractionImage.src='';
                    popup.style.display = 'none';
                    distractionImageContainer.style.display='none';
                }, 10*1000);
                break;
            case 22:
                distractionTitle.innerHTML = 'Check out this funny meme!';
                distractionDesc.innerHTML = 'Lol, this is funny welp...';
                distractionImage.src='assets/Memes/small/18.jpg';  
                distractionImageContainer.style.display = 'block';
                popup.style.display = 'block';
                setTimeout(()=>{
                    distractionImage.src='';
                    popup.style.display = 'none';
                    distractionImageContainer.style.display='none';
                }, 10*1000);
                break;
            case 23:
                distractionTitle.innerHTML = 'Check out this funny meme!';
                distractionDesc.innerHTML = 'Lol, this is funny welp...';
                distractionImage.src='assets/Memes/small/19.jpg';  
                distractionImageContainer.style.display = 'block';
                popup.style.display = 'block';
                setTimeout(()=>{
                    distractionImage.src='';
                    popup.style.display = 'none';
                    distractionImageContainer.style.display='none';
                }, 10*1000);
                break;
            case 24:
                distractionTitle.innerHTML = 'Check out this funny meme!';
                distractionDesc.innerHTML = 'Lol, this is funny welp...';
                distractionImage.src='assets/Memes/small/20.jpg';  
                distractionImageContainer.style.display = 'block';
                popup.style.display = 'block';
                setTimeout(()=>{
                    distractionImage.src='';
                    popup.style.display = 'none';
                    distractionImageContainer.style.display='none';
                }, 10*1000);
                break;
            case 25:
                distractionTitle.innerHTML = 'Check out this funny meme!';
                distractionDesc.innerHTML = 'Lol, this is funny welp...';
                distractionImage.src='assets/Memes/small/21.jpg';  
                distractionImageContainer.style.display = 'block';
                popup.style.display = 'block';
                setTimeout(()=>{
                    distractionImage.src='';
                    popup.style.display = 'none';
                    distractionImageContainer.style.display='none';
                }, 10*1000);
                break;
            case 26:
                distractionTitle.innerHTML = 'Check out this funny meme!';
                distractionDesc.innerHTML = 'Lol, this is funny welp...';
                distractionImage.src='assets/Memes/small/22.jpg';  
                distractionImageContainer.style.display = 'block';
                popup.style.display = 'block';
                setTimeout(()=>{
                    distractionImage.src='';
                    popup.style.display = 'none';
                    distractionImageContainer.style.display='none';
                }, 10*1000);
                break;
            case 27:
                distractionTitle.innerHTML = 'Check out this funny meme!';
                distractionDesc.innerHTML = 'Lol, this is funny welp...';
                distractionImage.src='assets/Memes/small/23.jpg';  
                distractionImageContainer.style.display = 'block';
                popup.style.display = 'block';
                setTimeout(()=>{
                    distractionImage.src='';
                    popup.style.display = 'none';
                    distractionImageContainer.style.display='none';
                }, 10*1000);
                break;
            case 28:
                distractionTitle.innerHTML = 'Check out this funny meme!';
                distractionDesc.innerHTML = 'Lol, this is funny welp...';
                distractionImage.src='assets/Memes/small/24.jpeg';  
                distractionImageContainer.style.display = 'block';
                popup.style.display = 'block';
                setTimeout(()=>{
                    distractionImage.src='';
                    popup.style.display = 'none';
                    distractionImageContainer.style.display='none';
                }, 10*1000);
                break;
            case 29:
                distractionTitle.innerHTML = 'Check out this funny meme!';
                distractionDesc.innerHTML = 'Lol, this is funny welp...';
                distractionImage.src='assets/Memes/small/25.jpeg';  
                distractionImageContainer.style.display = 'block';
                popup.style.display = 'block';
                setTimeout(()=>{
                    distractionImage.src='';
                    popup.style.display = 'none';
                    distractionImageContainer.style.display='none';
                }, 10*1000);
                break;
            case 30:
                distractionTitle.innerHTML = 'Check out this funny meme!';
                distractionDesc.innerHTML = 'Lol, this is funny welp...';
                distractionImage.src='assets/Memes/small/26.jpeg';  
                distractionImageContainer.style.display = 'block';
                popup.style.display = 'block';
                setTimeout(()=>{
                    distractionImage.src='';
                    popup.style.display = 'none';
                    distractionImageContainer.style.display='none';
                }, 10*1000);
                break;
            case 31:
                distractionTitle.innerHTML = 'Check out this funny meme!';
                distractionDesc.innerHTML = 'Lol, this is funny welp...';
                distractionImage.src='assets/Memes/small/27.jpeg';  
                distractionImageContainer.style.display = 'block';
                popup.style.display = 'block';
                setTimeout(()=>{
                    distractionImage.src='';
                    popup.style.display = 'none';
                    distractionImageContainer.style.display='none';
                }, 10*1000);
                break;
            case 32:
                distractionTitle.innerHTML = 'Check out this funny meme!';
                distractionDesc.innerHTML = 'Lol, this is funny welp...';
                distractionImage.src='assets/Memes/small/28.jpeg';  
                distractionImageContainer.style.display = 'block';
                popup.style.display = 'block';
                setTimeout(()=>{
                    distractionImage.src='';
                    popup.style.display = 'none';
                    distractionImageContainer.style.display='none';
                }, 10*1000);
                break;
            case 33:
                distractionTitle.innerHTML = 'Check out this funny meme!';
                distractionDesc.innerHTML = 'Lol, this is funny welp...';
                distractionImage.src='assets/Memes/small/29.jpeg';  
                distractionImageContainer.style.display = 'block';
                popup.style.display = 'block';
                setTimeout(()=>{
                    distractionImage.src='';
                    popup.style.display = 'none';
                    distractionImageContainer.style.display='none';
                }, 10*1000);
                break;
            case 34:
                distractionTitle.innerHTML = 'Check out this funny meme!';
                distractionDesc.innerHTML = 'Lol, this is funny welp...';
                distractionImage.src='assets/Memes/small/30.jpeg';  
                distractionImageContainer.style.display = 'block';
                popup.style.display = 'block';
                setTimeout(()=>{
                    distractionImage.src='';
                    popup.style.display = 'none';
                    distractionImageContainer.style.display='none';
                }, 10*1000);
                break;
            case 35:
                distractionTitle.innerHTML = 'Check out this funny meme!';
                distractionDesc.innerHTML = 'Lol, this is funny welp...';
                distractionImage.src='assets/Memes/small/31.jpeg';  
                distractionImageContainer.style.display = 'block';
                popup.style.display = 'block';
                setTimeout(()=>{
                    distractionImage.src='';
                    popup.style.display = 'none';
                    distractionImageContainer.style.display='none';
                }, 10*1000);
                break;
            case 36:
                distractionTitle.innerHTML = 'Check out this funny meme!';
                distractionDesc.innerHTML = 'Lol, this is funny welp...';
                distractionImage.src='assets/Memes/small/32.jpeg';  
                distractionImageContainer.style.display = 'block';
                popup.style.display = 'block';
                setTimeout(()=>{
                    distractionImage.src='';
                    popup.style.display = 'none';
                    distractionImageContainer.style.display='none';
                }, 10*1000);
                break;
            case 37:
                distractionTitle.innerHTML = 'Check out this funny meme!';
                distractionDesc.innerHTML = 'Lol, this is funny welp...';
                distractionImage.src='assets/Memes/small/33.jpeg';  
                distractionImageContainer.style.display = 'block';
                popup.style.display = 'block';
                setTimeout(()=>{
                    distractionImage.src='';
                    popup.style.display = 'none';
                    distractionImageContainer.style.display='none';
                }, 10*1000);
                break;
            case 38:
                distractionTitle.innerHTML = 'Check out this funny meme!';
                distractionDesc.innerHTML = 'Lol, this is funny welp...';
                distractionImage.src='assets/Memes/small/34.jpeg';  
                distractionImageContainer.style.display = 'block';
                popup.style.display = 'block';
                setTimeout(()=>{
                    distractionImage.src='';
                    popup.style.display = 'none';
                    distractionImageContainer.style.display='none';
                }, 10*1000);
                break;
            case 39:
                distractionTitle.innerHTML = 'Check out this funny meme!';
                distractionDesc.innerHTML = 'Lol, this is funny welp...';
                distractionImage.src='assets/Memes/small/35.jpeg';  
                distractionImageContainer.style.display = 'block';
                popup.style.display = 'block';
                setTimeout(()=>{
                    distractionImage.src='';
                    popup.style.display = 'none';
                    distractionImageContainer.style.display='none';
                }, 10*1000);
                break;
            case 40:
                distractionTitle.innerHTML = 'Check out this funny meme!';
                distractionDesc.innerHTML = 'Lol, this is funny welp...';
                distractionImage.src='assets/Memes/small/36.jpeg';  
                distractionImageContainer.style.display = 'block';
                popup.style.display = 'block';
                setTimeout(()=>{
                    distractionImage.src='';
                    popup.style.display = 'none';
                    distractionImageContainer.style.display='none';
                }, 10*1000);
                break;
            case 41:
                distractionTitle.innerHTML = 'Check out this funny meme!';
                distractionDesc.innerHTML = 'Lol, this is funny welp...';
                distractionImage.src='assets/Memes/small/37.jpeg';  
                distractionImageContainer.style.display = 'block';
                popup.style.display = 'block';
                setTimeout(()=>{
                    distractionImage.src='';
                    popup.style.display = 'none';
                    distractionImageContainer.style.display='none';
                }, 10*1000);
                break;
            case 42:
                distractionTitle.innerHTML = 'Check out this funny meme!';
                distractionDesc.innerHTML = 'Lol, this is funny welp...';
                distractionImage.src='assets/Memes/small/38.jpeg';  
                distractionImageContainer.style.display = 'block';
                popup.style.display = 'block';
                setTimeout(()=>{
                    distractionImage.src='';
                    popup.style.display = 'none';
                    distractionImageContainer.style.display='none';
                }, 10*1000);
                break;
            case 43:
                distractionTitle.innerHTML = 'Check out this funny meme!';
                distractionDesc.innerHTML = 'Lol, this is funny welp...';
                distractionImage.src='assets/Memes/small/39.jpeg';  
                distractionImageContainer.style.display = 'block';
                popup.style.display = 'block';
                setTimeout(()=>{
                    distractionImage.src='';
                    popup.style.display = 'none';
                    distractionImageContainer.style.display='none';
                }, 10*1000);
                break;
            case 44:
                distractionTitle.innerHTML = 'Check out this funny meme!';
                distractionDesc.innerHTML = 'Lol, this is funny welp...';
                distractionImage.src='assets/Memes/small/40.jpeg';  
                distractionImageContainer.style.display = 'block';
                popup.style.display = 'block';
                setTimeout(()=>{
                    distractionImage.src='';
                    popup.style.display = 'none';
                    distractionImageContainer.style.display='none';
                }, 10*1000);
                break;
            case 45:
                distractionTitle.innerHTML = 'Check out this funny meme!';
                distractionDesc.innerHTML = 'Lol, this is funny welp...';
                distractionImage.src='assets/Memes/small/41.jpeg';  
                distractionImageContainer.style.display = 'block';
                popup.style.display = 'block';
                setTimeout(()=>{
                    distractionImage.src='';
                    popup.style.display = 'none';
                    distractionImageContainer.style.display='none';
                }, 10*1000);
                break;
            case 46:
                distractionTitle.innerHTML = 'Check out this funny meme!';
                distractionDesc.innerHTML = 'Lol, this is funny welp...';
                distractionImage.src='assets/Memes/small/42.jpeg';  
                distractionImageContainer.style.display = 'block';
                popup.style.display = 'block';
                setTimeout(()=>{
                    distractionImage.src='';
                    popup.style.display = 'none';
                    distractionImageContainer.style.display='none';
                }, 10*1000);
                break;
            case 47:
                distractionTitle.innerHTML = 'Check out this funny meme!';
                distractionDesc.innerHTML = 'Lol, this is funny welp...';
                distractionImage.src='assets/Memes/small/43.jpeg';  
                distractionImageContainer.style.display = 'block';
                popup.style.display = 'block';
                setTimeout(()=>{
                    distractionImage.src='';
                    popup.style.display = 'none';
                    distractionImageContainer.style.display='none';
                }, 10*1000);
                break;
            case 48:
                distractionTitle.innerHTML = 'Check out this funny meme!';
                distractionDesc.innerHTML = 'Lol, this is funny welp...';
                distractionImage.src='assets/Memes/small/44.jpeg';  
                distractionImageContainer.style.display = 'block';
                popup.style.display = 'block';
                setTimeout(()=>{
                    distractionImage.src='';
                    popup.style.display = 'none';
                    distractionImageContainer.style.display='none';
                }, 10*1000);
                break;
            case 49:
                distractionTitle.innerHTML = 'Check out Eminem\'s new album!';
                distractionDesc.innerHTML = 'Check out this new album, it has such good bangers!!';
                distractionSpotify.src='https://open.spotify.com/embed/album/3kjHLu1pL7tdY88GFwEkl6?utm_source=generator';
                distractionSpotify.style.display = 'block';
                popup.style.display = 'block';
                popupCont.style.height = '280px'; 
                setTimeout(()=>{
                    distractionSpotify.src='';
                    popup.style.display = 'none';
                    popupCont.style.height = '600px';
                    distractionSpotify.style.display = 'none';
                }, 10*1000);
                break;
            case 50:
                distractionTitle.innerHTML = 'Check out Travis Scott\'s new album!';
                distractionDesc.innerHTML = 'Check out this new album, it has such good bangers!!';
                distractionSpotify.src='https://open.spotify.com/embed/album/18NOKLkZETa4sWwLMIm0UZ?utm_source=generator';
                distractionSpotify.style.display = 'block';
                popup.style.display = 'block';
                popupCont.style.height = '280px'; 
                setTimeout(()=>{
                    distractionSpotify.src='';
                    popup.style.display = 'none';
                    popupCont.style.height = '600px';
                    distractionSpotify.style.display = 'none';
                }, 10*1000);
                break;
            case 51:
                distractionTitle.innerHTML = 'Check out Bryan Adams\' new album!';
                distractionDesc.innerHTML = 'Check out this new album, it has such good bangers!!';
                distractionSpotify.src='https://open.spotify.com/embed/album/03XgnNQDve2dWqBG1ARjvR?utm_source=generator';
                distractionSpotify.style.display = 'block';
                popup.style.display = 'block';
                popupCont.style.height = '280px'; 
                setTimeout(()=>{
                    distractionSpotify.src='';
                    popup.style.display = 'none';
                    popupCont.style.height = '600px';
                    distractionSpotify.style.display = 'none';
                }, 10*1000);
                break;
            case 52:
                distractionTitle.innerHTML = 'Check out the new album from Panic At The Disco!';
                distractionDesc.innerHTML = 'Check out this new album, it has such good bangers!!';
                distractionSpotify.src='https://open.spotify.com/embed/album/1hxraaWEf3wFnJxADf8Dge?utm_source=generator';
                distractionSpotify.style.display = 'block';
                popup.style.display = 'block';
                popupCont.style.height = '280px'; 
                setTimeout(()=>{
                    distractionSpotify.src='';
                    popup.style.display = 'none';
                    popupCont.style.height = '600px';
                    distractionSpotify.style.display = 'none';
                }, 10*1000);
                break;
        }
    }, 13000);
}
function stopDistract() {
    clearInterval(distractor);
}
