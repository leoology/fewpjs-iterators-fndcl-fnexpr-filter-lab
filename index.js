// Code your solution here
function findMatching(array, string){
    let drivers= array.filter(n=>
        n.toLowerCase()=== string.toLowerCase()
         
        )
        return drivers
}
function fuzzyMatch(source, testString) {
    return source.filter( possibleMatch =>
      possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    )
  }

  function matchName(source, soughtName) {
    return source.filter( record => record.name === soughtName)
  }