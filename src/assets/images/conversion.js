var images = require("images");
var fs = require("fs");
var JpegTran = require('jpegtran')
var ExifImage = require('exif').ExifImage;

fs.readdir("images", function (err, files) {
    if (err) {
        console.log(err);
        return;
    }

    files.forEach((file, index) => {
        index = index + 1;
        console.log(images(`images/${file}`).size())
        new ExifImage({ image: `images/${file}` }, function (error, exifData) {
            if (exifData.image.Orientation === 8) {
                const writable = fs.createWriteStream(`file${index}.jpg`);
                const myJpegTranslator = new JpegTran(['-rotate', 270, '-progressive']);
                fs.createReadStream(`images/${file}`).pipe(myJpegTranslator).pipe(writable).on("finish", () => {
                    images(`file${index}.jpg`).size(1024).save(`fulls/${index < 10 ? `0${index}` : index}.jpg`, {
                        quality: 50
                    })
                })
            } else if (exifData.image.Orientation === 1) {
                const writable = fs.createWriteStream(`file${index}.jpg`);
                const myJpegTranslator = new JpegTran(['-progressive']);
                fs.createReadStream(`images/${file}`).pipe(myJpegTranslator).pipe(writable).on("finish", () => {
                    images(`file${index}.jpg`).size(1024).save(`fulls/${index < 10 ? `0${index}` : index}.jpg`, {
                        quality: 50
                    })
                })

            }
        });


        images(`images/${file}`).size(512).save(`thumbs/${index < 10 ? `0${index}` : index}.jpg`, {
            quality: 30
        })

        console.log(`images/${file}`);
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
