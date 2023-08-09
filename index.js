function submit(){

    let baba = document.getElementById('imp')
    let arr = [20,34,10,5]

    if(arr.includes(parseInt(baba.value))){
        alert('you win')
  
}  else{
    alert('you loose')
}
}