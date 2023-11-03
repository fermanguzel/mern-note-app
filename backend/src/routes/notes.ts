import express from "express";
import * as NotesControllers from "../controllers/notes";

const router = express.Router();

router.get("/", NotesControllers.getNotes);

router.get("/:noteId", NotesControllers.getNote);

router.post("/", NotesControllers.createNote);

router.patch("/:noteId", NotesControllers.updateNote);

router.delete("/:noteId", NotesControllers.deleteNote);

export default router;
