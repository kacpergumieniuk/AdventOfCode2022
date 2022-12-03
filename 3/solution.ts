import { pointMap } from './pointMap.ts'

//PART1

const input = await Deno.readTextFile('./input.txt')
const splited = input.split(/\r?\n/)
let finalResult = 0

const splitedInAHalf = splited.map((str) => {
  const middle = str.length / 2
  return [str.slice(0, middle), str.slice(middle)]
})

const getCommonChar = (firstString: string, secondString: string) => {
  const firstArr = firstString.split('')
  const secondArr = secondString.split('')
  const contains = firstArr.filter((value) => secondArr.includes(value))
  return contains
}

for (let x of splitedInAHalf) {
  const result = getCommonChar(x[0], x[1])
  const letter = result[0]
  const score = pointMap[letter]
  finalResult += score
}

console.log(`First part result is ${finalResult}`)

//PART2

let finalValueV2 = 0

const getCommonCharV2 = (str1: string, str2: string, str3: string) => {
  const str1Splited = str1.split('')
  const str2Splited = str2.split('')
  const str3Splited = str3.split('')

  const firstCheck = str1Splited.filter((value) => str2Splited.includes(value))
  const secondCheck = str3Splited.filter((value) => firstCheck.includes(value))
  const letter = secondCheck[0]
  const score = pointMap[letter]
  finalValueV2 += score
}

for (let x = 0; x < splited.length; x += 3) {
  getCommonCharV2(splited[x], splited[x + 1], splited[x + 2])
}

console.log(`Second part result is ${finalValueV2}`)
