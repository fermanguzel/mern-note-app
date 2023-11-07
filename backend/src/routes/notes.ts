import express from "express";
import * as NotesControllers from "../controllers/notes";
import { requiresAuth } from "../middleware/auth";

const router = express.Router();

router.get("/", requiresAuth, NotesControllers.getNotes);

router.get("/:noteId", NotesControllers.getNote);

router.post("/", NotesControllers.createNote);

router.patch("/:noteId", NotesControllers.updateNote);

router.delete("/:noteId", NotesControllers.deleteNote);

export default router;
