const express = require('express');
const router = express.Router();
const connection = require("../model/index");
const app = express();
const mongoose = require("mongoose");
const NewsModel = mongoose.model("News");
const News = connection.News;
var fs = require('fs');
var mv = require('mv');
var formidable = require('formidable');
var upload_path = "./Images/News/";
const multiparty = require('multiparty');

// routes
router.post('/newsregister', app.post("/newsregister", (req, res) => {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        console.log(fields.Text)
        // oldpath : temporary folder to which file is saved to
        var oldpath = files.image.path;
        var newpath = upload_path + files.image.name;
        console.log(files.image.type)
        // copy the file to a new location
        mv(oldpath, newpath, function (err) {
            if (err) throw err;
            // you may respond with another html page

            console.log(newpath)

            var news = new NewsModel();
            news.Heading = fields.Heading;
            news.Subheading = fields.Subheading;
            news.Text = fields.Text;
            news.image = newpath;
            news.save();
            res.send("News Registered Successfully");

        })
    });
}))
/*router.post('/register', register);
router.get('/', getAll);
router.get('/current', getCurrent);
router.get('/:id', getById);
 
router.delete('/:id', _delete);*/

module.exports = router;



router.get("/getall", function (req, res) {
    NewsModel.find().then(list => res.json(list))
        .catch(err => res.status(500).json(" Sever Error"))
})

router.post('/update/:id', app.post("/update/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    NewsModel.findOne({ _id: id }, function (err, foundObject) {
        if (err) {
            console.log(err)
            res.status(500).send()
        }
        else {
            if (!foundObject) {
                res.status(404).send("New Not Found")
            } else {
                if (req.body.heading) {
                    foundObject.Heading = req.body.heading;
                }

                if (req.body.subheading) {
                    foundObject.Subheading = req.body.subheading;
                }
                if (req.body.text) {
                    foundObject.Text = req.body.text;
                }
                if (req.body.image) {
                    foundObject.Image = req.body.image;
                }

                foundObject.save(function (err, updatedObject) {
                    if (err) {
                        res.status(500).send("Update Unsuccesfull")
                    }
                    else {
                        res.status(200).send(updatedObject);
                    }
                })
            }
        }
    })

}
)
);
router.post('/delete/:id', app.post("/delete/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    NewsModel.findOneAndRemove({ _id: id }, function (err) {
        if (err) {
            console.log(err)
            res.status(500).send()
        }
        else {
            res.status(200).send("Deleted Succesfully");
        }


    }
    )
}))
