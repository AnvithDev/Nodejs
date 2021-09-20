// Global objects of nodejs

console.log(__dirname) // Dir name of the said file

console.log(__filename) // Path of the said file

module.exports = someFunction(); // Used to export the function to other file

function someFunction(){
    console.log("hello")
}

