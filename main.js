
window.addEventListener('load', e=>{
    createContent();
    
    i=1;
    
    word = [];
    realwordlist=[]
    currentRow=0;
    PlayWord='juicy';
    currentRowEnd =0;
    counter =0;
    
    
    
    
    
    
    
    
    
    
    
    function createContent() {
        const gameBoard = document.getElementById("content");
    
        for (let index = 0; index < 30; index++) {
          let square = document.createElement("div");
          square.classList.add("square");
          square.setAttribute("id", index + 1);
          gameBoard.appendChild(square);
        }
      }




    document.body.addEventListener('keyup', e=>{
        const key = e.key;
        
        updateTile(key);
    })



    function updateTile(key){
        
        if (key =='Enter'){
            if (word.length == 5){
                checkAndInsert();
            }
            else{
                alert('the word is too short')
            }
            
        }
        else if (key =='Backspace'){
            if (i>currentRow){
                document.getElementById(`${i-1}`).textContent ='';
                i -=1;
                word.pop();
                //console.log (`${currentRow} ,     ${i}`)
            }
            else{
                return
            }
            
        }
        else if (key == 'Tab'){
            return;
        }

        else{
            if (word.length<5){
                document.getElementById(`${i}`).textContent =key;
                word.push(key)
                i++;
            }
            
        }



       
        return i, word;
        

    }


    function checkAndInsert(){
        let countCorrect =0;
        currentRow= counter*5+1;
        currentRowEnd= (counter+1)*5
       // console.log(currentRow)

        for (let i =0; i<5; i++){
            if (word[i] == PlayWord[i]){
                let cc = currentRow+i;
                document.getElementById(cc).classList.add('good')
                countCorrect ++;
                if (countCorrect ==5){
                    gameWon();

                }

                if (currentRow== 26 && countCorrect !=5){
                    gameLost();
                }
            }
            
        }
        realwordlist.push(word)
        word =[];
        
        
        
       // console.log(`poczatek ${currentRow} koniec ${currentRowEnd}`);
    
        counter+=1;
    }
    

    function gameWon(word){
        alert("you won!")
        window.location.reload();
    }


    function gameLost(word){
        alert("you lost!")
        window.location.reload();
    }
})