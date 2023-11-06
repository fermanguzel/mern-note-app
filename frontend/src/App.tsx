import React, { useEffect, useState } from "react";
import { Note as NoteModel } from "./models/note";
import Note from "./components/Note";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import styles from "./styles/NotePage.module.css";
import styleUtils from "./styles/utils.module.css";
import * as NotesApi from "./network/notes_api";
import AddEditNoteDialog from "./components/AddEditNoteDialog";
import { FaPlus } from "react-icons/fa";
import SignUpModal from "./components/SignUpModal";
import LoginModal from "./components/LoginModal";
import NavBar from "./components/NavBar";

function App() {
  const [notes, setNotes] = useState<NoteModel[]>([]);
  const [notesLoading, setNotesLoading] = useState(true);
  const [showNotesLoadingError, setShowNotesLoadingError] = useState(false);
  const [showAddNoteDialog, setShowAddNoteDialog] = useState(false);
  const [noteToEdit, setNoteToEdit] = useState<NoteModel | null>(null);

  useEffect(() => {
    async function loadNotes() {
      try {
        setShowNotesLoadingError(false);
        setNotesLoading(true);
        const notes = await NotesApi.fetchNotes();
        setNotes(notes);
      } catch (error) {
        console.error(error);
        setShowNotesLoadingError(true);
      } finally {
        setNotesLoading(false);
      }
    }
    loadNotes();
  }, []);

  async function deleteNote(note: NoteModel) {
    try {
      await NotesApi.deleteNote(note._id);
      setNotes(notes.filter((existingNote) => existingNote._id !== note._id));
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }
  const notesGrid = (
    <Row xs={1} md={2} lg={3} className={`g-4 ${styles.noteGrid}`}>
      {notes.map((note) => (
        <Col key={note._id}>
          <Note
            note={note}
            className={styles.note}
            onNotClicked={setNoteToEdit}
            onDeleteNoteClicked={deleteNote}
          />
        </Col>
      ))}
    </Row>
  );

  return (
    <div>
      <NavBar
        loggedInUser={null}
        onLoginClicked={() => {}}
        onSignUpClicked={() => {}}
        onLogoutSuccessful={() => {}}
      />
      <Container className={styles.notesPage}>
        <Button
          className={`mb-4 ${styleUtils.blockCenter} ${styleUtils.flexCenter}`}
          onClick={() => setShowAddNoteDialog(true)}
        >
          <FaPlus />
          Add New Note
        </Button>
        {notesLoading && <Spinner animation="border" variant="primary" />}
        {showNotesLoadingError && (
          <p>Something went wrong. Please refresh the page</p>
        )}
        {!notesLoading && !showNotesLoadingError && (
          <>
            {notes.length > 0 ? notesGrid : <p>You don't have any notes yet</p>}
          </>
        )}
        {showAddNoteDialog && (
          <AddEditNoteDialog
            onDismiss={() => setShowAddNoteDialog(false)}
            onNoteSaved={(newNote) => {
              setNotes([...notes, newNote]);
              setShowAddNoteDialog(false);
            }}
          />
        )}
        {noteToEdit && (
          <AddEditNoteDialog
            noteToEdit={noteToEdit}
            onDismiss={() => setNoteToEdit(null)}
            onNoteSaved={(updatedNote) => {
              setNotes(
                notes.map((existingNote) =>
                  existingNote._id === updatedNote._id
                    ? updatedNote
                    : existingNote
                )
              );
              setNoteToEdit(null);
            }}
          />
        )}
        {false && (
          <SignUpModal onDismiss={() => {}} onSignUpSuccessful={() => {}} />
        )}
        {false && (
          <LoginModal onDismiss={() => {}} onLoginSuccessful={() => {}} />
        )}
      </Container>
    </div>
  );
}

export default App;
