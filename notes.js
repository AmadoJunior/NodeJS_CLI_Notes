const fs = require('fs')

//Add note function
const addNote = function(title, body){
    const notes = loadNotes();                      //Loads all notes into array
    notes.push({                                    //Pushes new object into array of objects
        title: title,
        body: body
    })
    saveNotes(notes);                               //Saves all objects into JSON file
}

//Remove note function
const rmNote = function(title){
    const notes = loadNotes();                      //Loads all notes into array
    for( i = 0 ; i < notes.length ; i++){           //Goes through array and removes if title if found
        if(notes[i].title == title){
            notes.splice(i,1);
        }
    }
    saveNotes(notes);                               //Saves the notes into JSON file after removing array
}

//Read note function
const readNote = function(title){
    const notes = loadNotes();                         //Loads all notes into array
    for( i = 0 ; i < notes.length ; i++){              //Goes through array and log if title coincides
        if(notes[i].title == title){
            console.log("Found you note!")
            console.log("Title: " + notes[i].title);
            console.log("Body: " + notes[i].body);
            break;
        } else {
            console.log("Did not find your note.")
            break;
        }
    }

}

//List all notes function
const listNotes = function (){
    const notes = loadNotes();                          //Loads all notes into an array
    for( i = 0; i < notes.length ; i++){                //for loop goes through array and logs it all
        console.log("Title: " + notes[i].title);
        console.log("Body: " + notes[i].body);
    }
}

//Saves notes after modification
const saveNotes = function (notes){
    const dataJSON = JSON.stringify(notes);            //Takes array of objects and turns into JSON format
    fs.writeFileSync("notes.json", dataJSON);          //Writes JSON format text into file "notes.json"
}

//Loads all of the notes
const loadNotes = function() {
    try { //Tries to load notes
        const dataBuffer = fs.readFileSync("notes.json");   //Loads data buffer from file
        const dataJSON = dataBuffer.toString();             //Transforms data buffer into string
        return JSON.parse(dataJSON);                        //Transforms string JSON string into objects
    } catch (e){                                            //Return empty array if they are no notes
        return [];
    }

}

//Exports list functions
module.exports = {
    addNote: addNote,
    rmNote: rmNote,
    readNote: readNote,
    listNotes: listNotes
};