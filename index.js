function bumpCounter() {
  let counter = 0

  function addBump() {
    counter = counter + 1
  }

  function getBumps() {
    return counter
  }

  return {
    addBump,
    getBumps
  }
}