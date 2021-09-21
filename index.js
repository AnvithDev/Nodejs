
// File maniputlation


const filesys = require("fs/promises")

async function demo(){
    const file = await filesys.readFile("./demo.txt","utf8") //reading the file like in python
    console.log(file)
    await filesys.appendFile("./world.txt","Extra content added") //Appends the contents to world.txt file
    // await filesys.unlink("./world1.txt") // It deletes the said file

    await filesys.mkdir("NewFolder")
    await filesys.appendFile("./NewFolder/newfile.txt","This is a new file")

}

demo();

