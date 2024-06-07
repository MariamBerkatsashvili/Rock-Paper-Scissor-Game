let options = Array.from(document.getElementsByClassName('option'));
let rock = document.getElementsByClassName('rock')[0];
let paper = document.getElementsByClassName('paper')[0];
let scissor = document.getElementsByClassName('scissor')[0];
let humanChoice = document.querySelectorAll('.humanChoice')[0];
let AI_Choice = document.querySelectorAll('.AI_Choice')[0];
let vs = document.getElementById('vs');
let gameResult = document.getElementById('gameResult');
let restart = document.getElementById('restart');
let start = document.getElementsByClassName('start')[0];
let image = document.createElement('img');
let AI_Image=document.createElement('img');
let result;
let AI_Result;

let AI_Count = document.getElementsByClassName('AI_Count')[0];
let playerCount = document.getElementsByClassName('playerCount')[0];
AI_Count.value = 0;
playerCount.value = 0;
let playerScore = document.getElementsByClassName('playerCount')[0];
let AI_Score = document.getElementsByClassName('AI_Count')[0];
let crown = document.createElement('img');
let sad = document.createElement('img');
let handshake = document.createElement('img');
crown.src = "images/crown.png";
sad.src = "images/cry.png";
handshake.src = "images/handshake.png";
crown.classList.add('icons');
sad.classList.add('icons');
handshake.classList.add('icons');
let gameStarted=false;



//მოთამაშე ირჩევს და გამოსახავს 
function startGame() {
    options.forEach(option => {
        humanChoice.textContent='';
        humanChoice.textContent="Let's WIN!";
        AI_Choice.innerHTML='';
        AI_Choice.innerHTML='?';

        option.addEventListener('click', function playerChooses() {
            vs.textContent='START';
            humanChoice.innerHTML = '';
            switch(option) {
                case rock:image.src="images/rock.png";
                    result='rock';
                    break;
                case paper:image.src="images/paper.png";
                    result='paper';
                    break;
                case scissor:image.src="images/scissors.png";
                    result='scissor';
                    break;
                default:
                    console.log('try again');
            }
            humanChoice.appendChild(image);
            image.classList.add('addedImage');   
            image.style.width='200px';
                
        })
    });
    gameStarted=true;
    return result;

}

// AI რენდომაიზერი და გამოსახვა

vs.addEventListener('click', function gaming() {
    if((gameStarted==true) && (image.src.includes("images/rock.png") || image.src.includes("images/paper.png") || image.src.includes("images/scissors.png"))) {
        let AI=options[Math.floor(Math.random() * 3)];
        let classArray=Array.from(AI.classList);
        AI_Result=classArray[1];
        AI_Choice.innerHTML='';
        
        if(AI_Result==='rock') {
            AI_Image.src="images/rock.png";
        }else if(AI_Result==='paper') {
            AI_Image.src="images/paper.png";
        }else if(AI_Result==='scissor') {
            AI_Image.src="images/scissors.png";
        }
        AI_Choice.appendChild(AI_Image);
        AI_Image.classList.add('addedImage');
        AI_Image.style.width='200px'; 
        
        defineWinner();
    }
});



// გამარჯვებულის გამოვლენა, შედეგის ასახვა 
function defineWinner() {

    
    let showResult = function showResult() {
   
        switch(result) {
            case AI_Result:
                gameResult.textContent='';
                gameResult.textContent='Draw';   
                gameResult.style.borderColor='steelblue';   
                gameResult.style.color='steelblue';  
                humanChoice.style.borderColor='#fff';   
                AI_Choice.style.borderColor='#fff';   
                break;
        
            case 'rock':
                switch(AI_Result) {
                    case 'paper':
                        gameResult.textContent='';
                        gameResult.textContent='AI wins';
                        AI_Count.value++;
                        console.log('AI wins! AI Score: ' + AI_Count.value);
                        AI_Count.textContent=AI_Count.value;
                        image.src="";
                        AI_Image.src="";
                        image.src="images/paper rock.png";
                        image.style.width='300px';
                        AI_Image.src="images/paper rock.png";
                        AI_Image.style.width='300px';   
                        gameResult.style.borderColor='red'; 
                        gameResult.style.color='red';  
                        humanChoice.style.borderColor='#fff';  
                        AI_Choice.style.borderColor='red'; 
                        break;
        
                    case 'scissor':
                        gameResult.textContent='';
                        gameResult.textContent='Player wins';
                        playerCount.value++;
                        console.log('Player wins! Player Score: ' + playerCount.value);
                        playerCount.textContent=playerCount.value;
                        image.src="";
                        AI_Image.src="";
                        image.src="images/rock scissors.png";
                        image.style.width='500px';
                        AI_Image.src="images/rock scissors.png";
                        AI_Image.style.width='500px';
                        gameResult.style.borderColor='teal';   
                        gameResult.style.color='teal';
                        humanChoice.style.borderColor='teal';  
                        AI_Choice.style.borderColor='#fff';
                        break;
                }
                break;
        
            case 'paper':
                switch(AI_Result) {
                    case 'scissor':
                        gameResult.textContent='';
                        gameResult.textContent='AI wins';
                        AI_Count.value++;
                        console.log('AI wins! AI Score: ' + AI_Count.value);
                        AI_Count.textContent=AI_Count.value;
                        image.src="";
                        AI_Image.src="";
                        image.src="images/scissors paper.png";
                        AI_Image.src="images/scissors paper.png";
                        image.style.width='500px';
                        AI_Image.style.width='500px';
                        gameResult.style.borderColor='red'; 
                        gameResult.style.color='red';  
                        humanChoice.style.borderColor='#fff';  
                        AI_Choice.style.borderColor='red'; 
                        break;
        
                    case 'rock':
                        gameResult.textContent='';
                        gameResult.textContent='Player wins';
                        playerCount.value++;
                        console.log('Player wins! Player Score: ' + playerCount.value);  
                        playerCount.textContent=playerCount.value;
                        image.src="";
                        AI_Image.src="";
                        image.src="images/paper rock.png";
                        image.style.width='300px';
                        AI_Image.src="images/paper rock.png";
                        AI_Image.style.width='300px';
                        gameResult.style.borderColor='teal';   
                        gameResult.style.color='teal';
                        humanChoice.style.borderColor='teal';  
                        AI_Choice.style.borderColor='#fff';
                        break;
                }
                break;
        
            case 'scissor':
                switch(AI_Result) {
                    case 'rock':
                        gameResult.textContent='';
                        gameResult.textContent='AI wins';
                        AI_Count.value++;
                        console.log('AI wins! AI Score: ' + AI_Count.value);
                        AI_Count.textContent=AI_Count.value;
                        image.src="";
                        AI_Image.src="";
                        image.src="images/rock scissors.png";
                        image.style.width='500px';
                        AI_Image.src="images/rock scissors.png";
                        AI_Image.style.width='500px';
                        gameResult.style.borderColor='red';   
                        gameResult.style.color='red'; 
                        humanChoice.style.borderColor='#fff';  
                        AI_Choice.style.borderColor='red'; 
                        break;
        
                    case 'paper':
                        gameResult.textContent='';
                        gameResult.textContent='Player wins';
                        playerCount.value++;
                        console.log('Player wins! Player Score: ' + playerCount.value);
                        playerCount.textContent=playerCount.value;
                        image.src="";
                        AI_Image.src="";
                        image.src="images/scissors paper.png";
                        image.style.width='500px';
                        AI_Image.src="images/scissors paper.png";
                        AI_Image.style.width='500px';
                        gameResult.style.borderColor='teal';   
                        gameResult.style.color='teal';
                        humanChoice.style.borderColor='teal';  
                        AI_Choice.style.borderColor='#fff';
                        break;
                }
                humanChoice.appendChild(image);
                AI_Choice.appendChild(AI_Image);
                vs.textContent='';
                vs.textContent='VS';
                break;
        }
    }
    setTimeout(showResult, 500);

    
    // ქულების მიხედვით აიქონების გამოსახვა
    function scoreIcons(){
        playerScore.prepend();
        AI_Score.append();
        if (playerScore.value>AI_Score.value) {
            playerScore.prepend(crown);
            AI_Score.append(sad);
        }else if(playerScore.value<AI_Score.value){
            playerScore.prepend(sad);
            AI_Score.append(crown);
        }else if(playerScore.value===AI_Score.value){
            // AI_Score.append(handshake);
            // playerScore.prepend(handshake);
            AI_Score.append();
            playerScore.prepend();
        }  
    }
        // AI_Count.innerHTML = sad;
        // playerCount.innerHTML = crown;
        // AI_Count.textContent = AI_Score.value;
        // playerCount.textContent = playerScore.value;
    
    scoreIcons();  
}




// restart button
restart.addEventListener('click', function restart(){
    image.src="";
    AI_Image.src="";
    vs.textContent='';
    vs.textContent='VS';
    humanChoice.textContent='';
    humanChoice.textContent="Let's WIN!";
    AI_Choice.innerHTML='';  
    AI_Choice.innerHTML='?';  
    AI_Count.value=0;
    AI_Count.textContent=AI_Count.value;
    playerCount.value=0;
    playerCount.textContent=playerCount.value;
   
})

startGame();