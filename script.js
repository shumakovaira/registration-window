function abbrevName(name){
    return name.split(' ').map(function(word){
        return word.charAt(0).toUpperCase()
    }).join('.')
  }
  console.log(abbrevName("Sam Harris"))
 