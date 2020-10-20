module.exports = function reverse (n) {
    let negative = false
    if (n<0){ n*=-1
        negative=true}
    n+=''


    return +n.split('').reverse().join('')


}
