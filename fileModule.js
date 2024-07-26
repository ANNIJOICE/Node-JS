const fs = require('fs');
const http = require('http');
const url = require('url');
const events = require('events');
const eventEmitter = new events.EventEmitter(); // new events.EventEmitter (or) new eventEmitter()
const nodemailer = require('nodemailer');
const { text } = require('stream/consumers');


http.createServer((req, res) => {
    // ReadFile if file not present throws error
    // fs.readFile('sample.txt', (err, data) => {
    //     if(err) console.log(err)
    //     if(data) {
    //         res.write(data);
    //         return res.end();
    //     }
    // })

    // Ways for creating files
    // Open
    // fs.open('newFile.txt', 'w', (err, data) => {
    //     console.log("File opened")
    //     res.write("File opened");
    //     return res.end();
    // })

    // appendFile
    // fs.appendFile('append.txt', "Hello Dear", (err) => {
    //     if(err) return res.write(err)
    //     res.write("Data Saved!!");
    //     return res.end();
    // })

    // writeFile
    // fs.writeFile('write.txt', "Hello dear bestie", (err) => {
    //     if(err) return res.write(err)
    //     res.write("Data Saved!!");
    //     return res.end();
    // })

    //UpdateFile
    // For update also same append and write

    //RenameFile
    // fs.rename('write.txt', 'rename.txt', (err) => {
    //     if(err) return res.write(err)
    //     res.write("Renamed");
    //     return res.end();
    // })

    //DeleteFile
    // fs.unlink('rename.txt', (err) => {
    //     res.write('deleted');
    //     return res.end();
    // })

    // Take pathname from url and return content of that file named as pathname if error send header 404 with msg
    // const q = req.url
    // const parsedurl = url.parse(q, true);
    // const pathname = '.' + parsedurl.pathname;
    // fs.readFile(pathname, (err, data) => {
    //     if(err) console.log(err);
    //     if(data) {
    //         res.write(data);
    //         return res.end();
    //     }
    // })
    // console.log(parsedurl)

    //Create simple eventemitter to call a function
    // const testFunction = () => {
    //     console.log('TestFunctiom');
    //     res.write("Test Function")
    // };

    // eventEmitter.on('test', testFunction);

    // eventEmitter.emit('test')

    //mail
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'annijoice.it@gmail.com',
            pass: 'Annijoice@65'
        }
    });

    const mailOptions = {
        from: 'annijoice.it@gmail.com',
        to: 'annijoice96@gmail.com',
        subject: "Test Mail",
        text: 'Test mail received'
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if(err) console.log(err);
        console.log('Email sent:', info)
    })


}).listen(3000, () => {
    console.log("Server running")
})
