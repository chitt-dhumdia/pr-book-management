import express from "express";
import Book from "../models/book.model.js";
import { addBook, allBooks, deleteBook, editBook, searhBook } from "../controllers/book.controller.js";
import { validateBook } from "../middleware/validationMiddleware.js";

const router = express.Router();

router.post("/books",validateBook, addBook)

router.get("/books", allBooks )

router.get("/search", searhBook)

router.delete("/book/:title",deleteBook)

router.patch("/books/:id", editBook)

export default router;