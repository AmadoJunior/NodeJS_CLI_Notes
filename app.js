//IMPORTS
const yargs = require('yargs');      //yargs
const notes = require('./notes.js.js'); //My functions file

// Program needs following commands: ADD, REMOVE, READ, LIST.

//ADD COMMAND
yargs.command({                         //Creates new command object
    command: "add",                     //Gives name
    describe: "Adds a new note.",       //Gives description
    builder:{                           //Gives the command two arguments to require (--title, --body)
        title:{
            descrive:"Note title",
            demmandOption: true,
            type:"string"
        },
        body:{
            descrive:"Note body",
            demmandOption: true,
            type:"string"
        }
    },
    handler: function (argv) {                  //Assigns a function to the command
        console.log("Adding your note...")
        notes.addNote(argv.title, argv.body);
    }
})

//REMOVE COMMAND
yargs.command({
    command: "remove",
    descrive: "Removes a note",
    builder:{
        title:{
            descrive:"Title of Note to be Deteled",
            demmandOption: true,
            type:"string"
        }
    },
    handler: function(argv){
        console.log("Removing your note...")
        notes.rmNote(argv.title);
    }
})

//READ COMMAND
yargs.command({
    command: "read",
    descrive: "Reading",
    builder:{
        title:{
            descrive:"Remove a note",
            demmandOption: true,
            type:"string"
        }
    },
    handler: function(argv){
        notes.readNote(argv.title);
    }
})

//LIST COMMAND
yargs.command({
    command: "list",
    descrive: "Lists all your notes!",
    handler: function(){
        console.log("Listing...");
        notes.listNotes();
    }
})

yargs.parse();