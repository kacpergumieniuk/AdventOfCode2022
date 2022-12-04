const input = await Deno.readTextFile('./input.txt')
let result1 = []
const splited = input.split(/\r?\n/)
let temp = 0
for (let x of splited) {
  if (x === '') {
    result1.push(temp)
    temp = 0
  }
  if (x != '') {
    temp += parseInt(x)
  }
}
console.log(`Result for part one is: ${Math.max(...result1)}`)

const descendingArr = result1.sort((a, b) => {
  return b - a
})

const result2 = descendingArr[0] + descendingArr[1] + descendingArr[2]

console.log(`Result for part two is: ${result2}`)
