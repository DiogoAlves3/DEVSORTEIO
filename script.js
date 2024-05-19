
function generatenumber(){
    const min = Math.ceil(document.querySelector(".min").value)
    const max = Math.floor(document.querySelector(".max").value)

    if(min >= max){
        alert("O VALOR MINIMO NAO PODE SER MAIOR OU IGUAL QUE O VALOR MAXIMO")
    } else{
        const result =  Math.floor(Math.random() * (max - min + 1)) + min;

    alert(result)
    }
}


