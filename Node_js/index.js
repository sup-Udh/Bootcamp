//  Requiring a Model

// const fs = require('fs')
// // Cretes another clone File

// fs.copyFileSync('file1.txt' , 'file2.txt');

const superheroes = require('superheroes');
 
superheroes.all;
//=> ['3-D Man', 'A-Bomb', …]
 
// superheroes.random();
//=> 'Spider-Ham'
 console.log(' 👍  '+ superheroes.random())

//  Second way of calling the function 

var Myrandomhero = superheroes.random();

console.log('Autogenerated By varible Sperhero is ❤😍 '+ Myrandomhero)
