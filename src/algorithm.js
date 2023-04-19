const letters = 'abcdefghijklmnopqrstuvwxyz'
const capitals = letters.toUpperCase()

export function cipher(str, shift) {
    if (str == '') return str
    let firstLetter = str.slice(0, 1)
    if (!letters.includes(firstLetter) && !capitals.includes(firstLetter)) return firstLetter + cipher(str.slice(1), shift)
    if (firstLetter.toLowerCase() !== firstLetter) return capitals.at(capitals.indexOf(firstLetter)+(shift-26)) + cipher(str.slice(1), shift)
    return letters.at(letters.indexOf(firstLetter)+(shift-26)) + cipher(str.slice(1), shift)
}

export function decipher(str, shift) {
    if (str == '') return str
    let firstLetter = str.slice(0, 1)
    if (!letters.includes(firstLetter)) return firstLetter + decipher(str.slice(1), shift)
    return letters.at(letters.indexOf(firstLetter)-shift) + decipher(str.slice(1), shift)
}