const fs = require("fs");
const path = require("path");

const notesPath = path.join(__dirname, "note.json");

function showNotes() {
  try {
    const dataBuffer = fs.readFileSync(notesPath);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
}

function save(notes) {
  fs.writeFileSync(notesPath, JSON.stringify(notes));
}

function add( body) {
  const notes = showNotes();
  notes.push({body});
  save(notes);
  console.log("Done, note added");
}


function list() {
  const notes = showNotes();
  notes.forEach((note, index) => {
    console.log(`${index + 1}. ${note.body}`);
  });
}


function read(index) {
  const notes = showNotes();
  const note = notes[index - 1];
  if (note) {
    console.log(`note: ${note.body}`);
  } else {
    console.log("no note found");
  }
}


module.exports = { add, list, read };
