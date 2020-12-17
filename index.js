// Code your solution here

function findMatching(drivers, name) {
    return drivers.filter( possibleMatch =>
      possibleMatch.toLowerCase() === name.toLowerCase()
    )
  }

// function fuzzyMatch(drivers, name) {

// }

function matchName(drivers, name) {
    return drivers.filter(element => element.name === name )
}