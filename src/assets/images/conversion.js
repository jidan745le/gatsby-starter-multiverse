var images = require("images");
var fs = require("fs");
var path = require("path");
var JpegTran = require('jpegtran')
var ExifImage = require('exif').ExifImage;
const imagesPath= path.resolve(__dirname,"images")
console.log(`${imagesPath}/01.jpg`)

fs.readdir(imagesPath, function (err, files) {
    if (err) {
        console.log(err);
        return;
    }

    files.forEach((file, index) => {
        index = index + 1;
        console.log(images(`${imagesPath}/${file}`).size())
        new ExifImage({ image: `${imagesPath}/${file}` }, function (error, exifData) {
            if (exifData.image.Orientation === 8) {
                const writable = fs.createWriteStream(`${__dirname}/file${index}.jpg`);
                const myJpegTranslator = new JpegTran(['-rotate', 270,'-progressive']);
                console.log(`${imagesPath}/${file}`)
                fs.createReadStream(`${imagesPath}/${file}`).pipe(myJpegTranslator).pipe(writable).on("finish", () => {
                    images(`${__dirname}/file${index}.jpg`).size(1024).save(`${__dirname}/fulls/${index < 10 ? `0${index}` : index}.jpg`, {
                        quality: 50
                    })
                })
            } else if (exifData.image.Orientation === 1) {
                const writable = fs.createWriteStream(`${__dirname}/file${index}.jpg`);
                const myJpegTranslator = new JpegTran(['-progressive']);
                fs.createReadStream(`${imagesPath}/${file}`).pipe(myJpegTranslator).pipe(writable).on("finish", () => {
                    images(`${__dirname}/file${index}.jpg`).size(1024).save(`${__dirname}/fulls/${index < 10 ? `0${index}` : index}.jpg`, {
                        quality: 50
                    })
                })

            }
        });


        // images(`${imagesPath}/${file}`).size(512).save(`${__dirname}/thumbs/${index < 10 ? `0${index}` : index}.jpg`, {
        //     quality: 30
        // })

        console.log(`${imagesPath}/${file}`);
    })
})
// images("images/01.jpg")                     //Load image from file
//                                         //加载图像文件
//     .size(1024)                          //Geometric scaling the image to 400 pixels width
//                                         //等比缩放图像到400像素宽
//    //Drawn logo at coordinates (10,10)
//                                         //在(10,10)处绘制Logo
//     .save("output.jpg", {               //Save the image to a file, with the quality of 50
//         quality : 100                    //保存图片到文件,图片质量为50
//     });
