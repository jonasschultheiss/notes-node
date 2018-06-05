const notes = require('./notes.js');
const _ = require('lodash');
const yargs = require('yargs');

const titleOptions = {
    describe: 'title of note',
    demand: true,
    alias: 't'
};
const bodyOptions = {
    describe: 'body of note',
    demand: true,
    alias: 'b'
};

const argv = yargs
    .command('add', 'add new note', {
        title: titleOptions,
        title: bodyOptions
    })
    .command('list', 'list all notes')
    .command('read', 'read a note', {
        title: titleOptions
    })
    .command('remove', 'remove a note', {
        title: titleOptions
    })
    .help()
    .argv;

var command = argv._[0];

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (!note) {
        console.log("note not added. a note with the same title already exists.");
    } else {
        console.log(`Note with the title "${note.title}" has been added.`);
    }
} else if (command === 'list') {
    notes.getAll().filter((note) => notes.printInfo(note.title, note.body));
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (!note) console.log('note not found');
    else {
        notes.printInfo(note.title, note.body);
    }
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed.' : 'Note not found.';
    console.log(message);
} else {
    console.log('command not recognized.')
}