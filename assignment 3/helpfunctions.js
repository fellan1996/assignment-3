let cat = {
    alive: true,
    name: 'Gustav'
}
function catStatus(){
    if(Math.random() < 0.5){
        alert('The cats name is: ' + cat.name + ' and it is ALIVE!');
    }else{
        alert('The cats name is: ' + cat.name + ' and it is DEAD!')
    }
}