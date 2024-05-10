const {upload}= require('../middlewares/books.middlewares')
const {addbook, getBook, getBookById, updateBook, deleteBook, searchBook} = require('../controllers/books.controllers')
const express = require('express')
const router = express.Router();

router.route('/add').post(upload.single("image"),addbook)
router.route('/get').get(getBook)


router.route('/:id').get(getBookById);
router.route('/update/:id').put(updateBook)
router.route('/deletebook/:id').delete(deleteBook)


//router to search contents on basis of book title or author name
router.route('/searchbook/all').get(searchBook);


module.exports= {router}