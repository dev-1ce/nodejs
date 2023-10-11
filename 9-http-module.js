const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/' )
    {
        res.write('Welcome to our home page');
    }
    if(req.url === '/about' )
    {
        res.write('About');
    }
    else{
    res.write(`<h1>Oops</h1>
    <p>We cant seem to find the page youre looking for</p>`);
    }
    res.end();
})

server.listen(5000);