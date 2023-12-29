// deploye node using pm2
// deploye react using nginx

// -------------------> 01 roadmap
/*
// check ss

// ORM (Object-Relational Mapping):
// ODM (Object-Document Mapping):
*/

// -------------------> 02 make single app and deploy
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





// github copiloat --> for suggestion