//write your code here
const animals =['cheetah','dog', 'cat', 'dodobird', 'bear', 'dolphin']

// Q1
const shortWords = (arr) => {
    const filterShort = arr.filter(words => {
        if (words.length < 5) {
            return words
        }
    });
    return filterShort
}

// console.log(shortWords(animals))

// Q2
const noVowel = (arr) => {
    const regex = /[aeiou]/gi
    const join = arr.join(" ")
    // console.log(join)
    const removeVowels = join.replace(regex, 'x')
    return removeVowels
}

// console.log(noVowel(animals))

//Q3
const longToShort = (arr) => {
    const sortOut = arr.sort((a, b) => {
        return b - a
    })
    
    return sortOut
}

// console.log(longToShort(animals))

// Q4 
const onlyVowelA = (arr) => {
    const regex = /[a]/gi
    const filterA = arr.filter(words => {
        if (words.match(regex)) {
            return words
        }
        
        
    })
    return filterA
}

// console.log(onlyVowelA(animals))

// Q5
const pluralize = (arr) => {
    const plural = arr.map(words => {
       return `${words}s`
    })
    return plural
}

// console.log(pluralize(animals))

// Q6
const longerThanSeven = (arr) => {
    return arr.some(word => word.length > 7)
}

// Q7
const oddLength = (arr) => {
    const odd = arr.filter(words => {
        if (words % 2 !== 0) {
            return words
        }
    })
    return odd
}
// console.log(oddLength(animals))

// Q8
const allFour = arr => {
    return arr.every(words => words.length === 4)
}

// Q9
 const numbers = [22, 15, 1114, 416, 37, 4]
const sum = (arr) => {
    return arr.reduce((total, num) => total += num)
}

// Q10
const longWords = (arr) => {
    return arr.filter(words => words.length > 3)
}

// Q11
const uppercase = (arr) => {
    return arr.map(words => words[0].toUpperCase() + words.substring(1));
}

// Q12
const concatStrings = arr => {
    return arr.reduce((a, b) => `${a} ${b}`)
}