const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const path = require('path')
const fs = require('fs');
const app = express();
app.use(bodyParser.json());
app.set("view engine","ejs");

app.set("views","views");

app.get('/',(req,res)=>{
    res.render('index.ejs');
})
app.post('/run', (req, res) => {
    const { language, code } = req.body;
    let command = '';
    const tempFilePath="";
    if (language === 'python') {
        const tempFilePath = path.join(__dirname, 'temp.py');
        
        // Write the code to a temporary file
        fs.writeFileSync(tempFilePath, code);

        // Execute the Python script
        command = `python ${tempFilePath}`;
    } 
    else if (language === 'java') {
        const tempFilePath = path.join(__dirname, 'Temp1.java');
        
        // Write the code to a temporary file
        fs.writeFileSync(tempFilePath, code);

        // Execute the Python script
        command = `javac ${tempFilePath} && java ${tempFilePath}`;
    } 
    
    else {
        return res.json({ output: 'Unsupported language' });
    }

    exec(command, { timeout: 5000 }, (err, stdout, stderr) => {
        if (err) {
            return res.json({ output: stderr || 'Error executing code' });
        }
        res.json({ output: stdout });

        // Cleanup: delete the temp file
        if (language === 'python') {
            fs.unlinkSync("./temp.py");
        }
        if (language === 'java') {
            fs.unlinkSync("./Temp1.class");
            fs.unlinkSync("./Temp1.java");
        }
    });
});

app.listen(4000, () => console.log('Server running on http://localhost:4000'));
