const {upload}= require('../middlewares/books.middlewares')

const {addbook, getBook, getBookById, updateBook, deleteBook, searchBook} = require('../controllers/books.controllers')
const express = require('express')
const router = express.Router();


// let imageName;
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "public/temp");
//   },
//   filename: function (req, file, cb) {
//     imageName = Date.now() + " - " + file.originalname;
//     cb(null, imageName);
//   },
// });

// const upload = multer({ storage: storage });

router.route('/add').post(upload.single("image"),addbook)
router.route('/').get(getBook)


router.route('/:id').get(getBookById);
router.route('/update/:id').put(updateBook)
router.route('/deletebook/:id').delete(deleteBook)


//router to search contents on basis of book title or author name
router.route('/searchbook/all').get(searchBook);


module.exports= {router}