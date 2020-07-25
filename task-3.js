const findLongestWord = function (string){
  string=string.split(' ');
  let longesWord=string[0];

   for(let i=0; i < string.length; i+=1){

    if(string[i].length > longesWord.length ){
        longesWord = string[i];
       
       };
   };
  
   return longesWord;
  };
  
  /*
   * Виклич функції для перевірки працездатності твоєї реалізації.
   */
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  
  console.log(findLongestWord('Google do a roll')); // 'Google'
  
  console.log(findLongestWord('May the force be with you')); // 'force'

