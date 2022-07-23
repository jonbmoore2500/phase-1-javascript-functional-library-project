function myEach(input, alert) { // DONE
    let inputArr = input
    if (!Array.isArray(input)) {
        inputArr = Object.values(input)
    }
    inputArr.forEach(element => alert(element))
    return input
}

function myMap(input, callback) { // DONE
    let inputArr = input
    if (!Array.isArray(input)) {
        inputArr = Object.values(input)
    }
    let resultsArr = []
    inputArr.forEach(element => resultsArr.push(callback(element)))
    return resultsArr
    
}

const standardizeInput = function(collection) { // from Dominick
    return (collection instanceof Array) ? collection.slice() : Object.values(collection);
  }

// function myReduce(input, callback, startVal) { my attempt, missing key step from README
//     let inputArr = standardizeInput(input)
//     // if (!Array.isArray(input)) {
//     //     inputArr = Object.values(input)
//     // }
//     let total = 0
//     if (startVal !== undefined) {
//         total += parseInt(startVal)
//     }
//     inputArr.forEach(element => (total = callback(total, element)))
//     return total
// }

const myReduce = function(collection, callback, acc) { // DONE, I'm a fool
    let newCollection = standardizeInput(collection);

    // The if statement below handles the case where no start value is passed in 
    // for the accumulator
    // If acc is null, it is set equal to the first value in newCollection
    // That first value is then sliced out of newCollection since it has already
    // been accounted for
    if (!acc) {
      acc = newCollection[0];
      //console.log('this too', newCollection[0])
      newCollection = newCollection.slice(1);
      //console.log('this', newCollection)
      
    }
  
    const len = newCollection.length;
  
    for (let i = 0; i < len; i++) {
      acc = callback(acc, newCollection[i], newCollection);
    }
    return acc;
  }



function myFind(input, predicate) { // DONE
    let inputArr = input
    if (!Array.isArray(input)) {
        inputArr = Object.values(input)
    }
    const leng = inputArr.length
    for (let index = 0; index < leng; index++) {
        if (predicate(inputArr[index]) === true) {
            return inputArr[index]
        }
    }


    // console.log('inputArr', inputArr)
    // inputArr.forEach(element => {
    //     console.log(predicate(element))
    //     if (predicate(element) === true) {
    //         console.log('element', element)
    //     }
    // })
}

function myFilter(input, predicate) { // DONE
    let inputArr = input
    let returnArr = []
    if (!Array.isArray(input)) {
        inputArr = Object.values(input)
    }
    
    // const length = inputArr.length
    // for (let index = 0; index<length; index++) {
    //     if (predicate(inputArr[index]) === true) {
    //         returnArr.push(inputArr[index])
    //     }
    // }
    
    inputArr.forEach(index => {
        if (predicate(index) === true ) {
            returnArr.push(index)
        }
    })
    return returnArr
}

function mySize(input) { // DONE
    let inputArr = input
    if (!Array.isArray(input)) {
        inputArr = Object.values(input)
    }
    let size = 0
    inputArr.forEach(element => {
        size += 1
    })
    return size
}

function myFirst(input, n) { // DONE
    let inputArr = input
    if (!Array.isArray(input)) {
        inputArr = Object.values(input)
    }
    
    if (n !== undefined) {
        //console.log('firstN', firstN)
        return inputArr.slice(0, n)
    }
    return inputArr[0]
    //console.log('inputArr', inputArr, 'returnArr', returnArr)
    //return returnArr
}

function myLast(input, n) { // DONE
    let inputArr = input
    if (!Array.isArray(input)) {
        inputArr = Object.values(input)
    }
    
    if (n !== undefined) {
        return inputArr.slice(-n)
    }
    return inputArr[inputArr.length-1]
}

function myKeys(input) { // DONE
    let entriesArr = Object.entries(input)
    let keysArr = []
    entriesArr.forEach(index => {
        keysArr.push(index[0])
    })
    return keysArr
}

function myValues(input) { // DONE
    let entriesArr = Object.entries(input)
    let valuesArr = []
    entriesArr.forEach(index => {
        valuesArr.push(index[1])
    })
    return valuesArr
}