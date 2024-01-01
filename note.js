// deploye node using pm2
// deploye react using nginx

// -------------------> 01 roadmap
/*
// check pdf

// ORM (Object-Relational Mapping):
// ODM (Object-Document Mapping):
*/
// Check hitesh APi video in english chnael
// -------------------> 02 make single app and deploy
// Express site api refrense 
/*
understand first from the notebook
to create app  -> npm init
// Explorer also express site
-in package.json -> scripts -> 
            // add start --> node index.js  [ our app starting point if we run 
            npm run start then it execute node index.js]
            // install express


- chalu j rahe che server bcu  listen shambhyla j rakhe che kai aave kai aave che aem
 - node ma changes [ login add kri ne save kryu to show nti thatu bcu  ]           
- aapde react changes kri ne file save kriye atle updated male che (hotReloading) 
react ma aapde jevu save kriye chiye aevo coe restatr kri deva ma aave che atle kbr j nti padthi 
// BE atle kbr j nti padthi jetlo code dithu che ae process kri ne computer ma  
jato rahyo che hvr fri updated  code ne fri lava mate fri process krvi pade che to BE ne fri 
thi restart karvu pade
// restart varevare na karvu pade atle nodemon install  kriye chiye

--------------------------------> Deploye
// https://chat.openai.com/c/b1b080f0-54bb-483a-80aa-aa3f210f3211 check this last one
    - pwd, uname dbname, pwd, 
    // 4000 mara ma free che bija ma na hoy sak eaa j app ne production ma lai hoy dotenv 

    -> npm i dotenv
    create .env file
 

*/

/*
// waht i do now i want to see this app in my browser how can i see
// ChatGPT
// If you have successfully started your Node.js application using PM2, and it's 
// running on a specific port (in this case, it seems to be on the default port 3000), 
// you can access it in your browser. Follow these steps:

// 1) Open Browser:
// Open your web browser.

// 2) Access the Application:
// Type the following in the address bar:

// arduino
// Copy code
// http://localhost:3000
// If your server is on a different machine, replace localhost with the IP address or 
// hostname of that machine. If you are accessing it from another machine on the network,
//  use the server's local IP address or hostname. If you are accessing it from the internet, 
//  use the public IP address or domain name.

// For example, if your server's IP address is 192.168.1.100, you would enter:

// arduino
// Copy code
// http://192.168.1.100:3000
// 
// 3) Check Firewalls:
// Ensure that the firewall on the server allows traffic on port 3000. If the server is running on a different port, replace 3000 with the correct port number.

// 4) Update Application to Listen on 0.0.0.0 (Optional):
// If you want your application to be accessible externally, make sure it's configured to listen on 0.0.0.0. Update the code in your index.js file like this:

// javascript
// Copy code
// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.listen(port, '0.0.0.0', () => {
//   console.log(`Server is listening on port ${port}`);
// });
// Then restart your PM2 process:

// bash
// Copy code
// pm2 restart index
// Now, you should be able to access your Node.js application in the browser on the specified port. If there are any issues, check the console logs for error messages or consult the PM2 logs:

// bash
// Copy code
// pm2 logs
// Remember to replace 3000 with the actual port number if your application is running on a different port.



// we can not add .env in git for understanding env i added
*/

/* short 
// 1)create a server using common js
   2)Deployed
*/



// -------------------> 03 create FE and BE
/*
// create  BE & FE folder
// there are two type of js
// common js that is we used require 
// module js is import 

// 1) to use module we go to package.json -> "type":"module"
// 2) create server
// 3) create get Jokes
// make joke list and check in JsonFormater

// Create FE using npm create vite@latest . [. ae folder name nai puche FE ma banvi dese]

// it give cors error
// ex:- it provide safety  (Apdu home hoy  parents ne home aav daiye(Allow kariye gher ma aava),
 cousines ne aav diye, guest ne aava daiye door to door seller ne na aava deye sidhu gher ma )
// server koi aur port pe chal raha hai 
// app koi aur port par hai to ketli req aavi sake che 
// crossOrigin:- url is diff, port is diff,  FE:3000 BE:4000 origin same hovu joye

// install cors in BE to handle this error

// bav moti api na lakhvi aetle

// Proxy --> proxy add kri deye to aapdu server gme te port par kam karthu
 hoy but ae proxy add karvathi samje same origin mathi aavi che 
// to add Proxy -> viteconfig.js -> server -> proxy  
vite [koi bhi req kre to hve api vadu aeni jode append thi jashe 
proxy name che atle server ne laghse aenu origin 3000 che atle same home ne allow kre ]
// proxy oj je api thi set jeni aagal api aavthu hse thya aa jati rese


// ----> for build npm run bulid it create dist folder 

*/

/* short 
    1)BE 
        1) create server 
        2)create jokes api
        3) listen on port

    2)FE
        1) Create app
        2) integrate api
        3) map data to show on screen
        4) u can solve cors origin err using 
            1) cors in Be
            2) using proxy in EF
        5) to build react app -> npm run build
            -it make 1 dist folder
            take that dist folder and move to BE
            // now use middleware to server static asset

            // BE ma changes kriye to prpoget[show] krshe but React na changes nai kre 
            // soo aapde fri thi build banavu pade ane fri thi dist move karvu pade BE ma tayre[it is bad practice]

// github copiloat --> for suggestion