const router = require('express').Router() 
const fs = require('fs')

router.get('/notes', (req, res) => {
    const fileContent = fs.readFileSync(__dirname + "/../db/db.json", "utf-8")
    console.log(fileContent)
    const notesData = JSON.parse(fileContent);
    res.json(notesData) 
    //"utf-8", function(err, data) {
        //res.json(json.parse(data))
    

})

router.post('/notes', (req, res) => {
    // read the file
    // parse the contents
    const { title, text} = req.body
    if (!title || !text) {
       return res.status(404).json({ "message": "Not found"})
    }

    const newNote = {
        ...req.body, 
        id: Math.random()
    }

    notesData.push(newNote)
    // write the file

})

router.delete('/notes/:id', (req, res) => {
    fs.readFile(path.join(__dirname, "db", "db.json"), "utf-8", function(err, data) {

        const { id } = req.params
        const newNote = json.parse(data)
        const deletedNote = find(note => note.id === id)

        // Remove the note with the given id property
        if (!deletedNote) {
            res.status(404).json({ "message": "Not found"})
            return
        } else {
            newNote = newNote.filter(note => note.id !== id)
        }

        // notesData.push(newNote)

        // stringify notes array and save file
        fs.writeFile(path.join(__dirname, "db", "db.json"), json.stringify(notesData), function (err) {
            if (err) {
                res.status(500).json(err)
                return
            }
            res.status(200).json(newNote)
        })
    })
})

module.exports = router

