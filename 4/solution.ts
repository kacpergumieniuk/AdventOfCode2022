const input = await Deno.readTextFile('./input.txt')
const splited = input.split(/\r?\n/).map((str) => str.split(','))

let fullyContains = 0

const checkIfFullyContains = (range1: string, range2: string) => {
  const range1splited = range1.split('-')
  const range2splited = range2.split('-')
  const condition1 = parseInt(range1splited[0]) <= parseInt(range2splited[0])
  const condition2 = parseInt(range1splited[1]) >= parseInt(range2splited[1])
  const condition3 = parseInt(range2splited[1]) >= parseInt(range1splited[1])
  const condition4 = parseInt(range2splited[0]) <= parseInt(range1splited[0])
  if ((condition1 && condition2) || (condition3 && condition4)) {
    fullyContains++
  }
}

for (let x of splited) {
  checkIfFullyContains(x[0], x[1])
}

console.log(`Result of part one is ${fullyContains}`)

//PART2

let isOverlaping = 0

const checkIfOverlaps = (range1: string, range2: string) => {
  const range1splited = range1.split('-')
  const range2splited = range2.split('-')
  const range1Arr: number[] = []
  const range2Arr: number[] = []
  for (
    let x = parseInt(range1splited[0]);
    x <= parseInt(range1splited[1]);
    x++
  ) {
    range1Arr.push(x)
  }
  for (
    let x = parseInt(range2splited[0]);
    x <= parseInt(range2splited[1]);
    x++
  ) {
    range2Arr.push(x)
  }
  const contains = range1Arr.some((element) => {
    return range2Arr.includes(element)
  })

  contains && isOverlaping++
}

for (let x of splited) {
  checkIfOverlaps(x[0], x[1])
}

console.log(`Result of part two is ${isOverlaping}`)
