// Santa 🎅 is testing his new electric sled, the CyberReindeer, on a North Pole road. The road is represented by a string of characters, where:

// . = Road
// S = Santa's Sled
// * = Open barrier
// | = Closed barrier
// Example of a road: S...|....|.....

// Each unit of time, the sled moves one position to the right. If it encounters a closed barrier, it stops until the barrier opens. If it is open, it goes through directly.

// All barriers start closed, but after 5 units of time, they all open forever.

// Create a function that simulates the sled's movement for a given time and returns an array of strings representing the state of the road at each unit of time:

// const road = 'S..|...|..'
// const time = 10 // units of time
// const result = cyberReindeer(road, time)

// /* -> result:
// [
//   'S..|...|..', // initial state
//   '.S.|...|..', // sled advances on the road
//   '..S|...|..', // sled advances on the road
//   '..S|...|..', // sled stops at the barrier
//   '..S|...|..', // sled stops at the barrier
//   '...S...*..', // barrier opens, sled advances
//   '...*S..*..', // sled advances on the road
//   '...*.S.*..', // sled advances on the road
//   '...*..S*..', // sled advances on the road
//   '...*...S..', // passes through the open barrier
// ]
// */
// The result is an array where each element shows the road at each unit of time.

// Take into account that if the sled is in the same position as a barrier, then it takes its place in the array.

// The elves were inspired by this Code Wars challenge.


function cyberReindeer(road, time) {

  let roadArr = road.split('')
  let roadTimeEvolution = []

  for (let i = 0; i < time; i++) {

    // First iteration
    if (i === 0) {
      roadTimeEvolution.push(roadArr.join(''))
    } 
    
    // If time is < 5
    else if (i < 5) {
      //'.'
      if (roadArr[i] === '.') {
        roadArr[i] = 'S'
        roadArr[i-1] = '.'
        roadTimeEvolution.push(roadArr.join(''))
      } else {
          if (time >= 5) {
              for (let waitUntilFive = 5-i; waitUntilFive > 0; waitUntilFive-- ) {
                  roadTimeEvolution.push(roadArr.join(''))
              }
              i = 4
              roadArr = roadArr.join('').replaceAll('|', '*').split('')
              console.log(roadArr)
          } else {
              for (let waitUntilFive = time-i; waitUntilFive > 0; waitUntilFive-- ) {
                  roadTimeEvolution.push(roadArr.join(''))
              }
              i = time
              roadArr = roadArr.join('').replaceAll('|', '*').split('')
              console.log(roadArr)
          }
          
      }
     
    }

    // If time is >= 5
    else if (i >= 5) {
        let closedBarrierIndex = roadArr.indexOf('*')
        let lastWasOpenBarr = false
        while (i < time) {
            if (roadArr[closedBarrierIndex] === '*') {
                roadArr[closedBarrierIndex-1] = '.'
                roadArr[closedBarrierIndex] = 'S'
                lastWasOpenBarr = true
            } else {
                roadArr[closedBarrierIndex-1] = lastWasOpenBarr ? '*' : '.'
                roadArr[closedBarrierIndex] = 'S'
                lastWasOpenBarr = false
            }
            
            roadTimeEvolution.push(roadArr.join(''))
            closedBarrierIndex = closedBarrierIndex + 1
            i = i + 1
        }
        // i = time
    }
  }
  return roadTimeEvolution
}