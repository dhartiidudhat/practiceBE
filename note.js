// deploye node using pm2
// deploye react using nginx

// -------------------------------------------> 01 roadmap
/*
// check pdf

// ORM (Object-Relational Mapping):
// ODM (Object-Document Mapping):

*/

// -----------------------------------------------> 02 make single app and deploy
// Express site api refrense
/*
// Check hitesh APi video in english chnael
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

// -----------------------------------------------> 03 create FE and BE
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
*/

// -----------------------------------------------> 04 MODLES
/*
// diff b/w exp &  fresher

// read first from the book
// site is :- moon model, datensen -> for data Modeling


// eraser to create a structure

// 1) create Register from
// 2) create todo 
// go to mongoose site , prisma is one helper 

// -----------------------------------Phase :- 2 2:30:12 [Code write]

// codeSandBox
// github codeSpaces
// stackbilliz

// -----------------------------------
// install mongoose
// create models -> todos -> userInfo.model.js  , todo, sub_todo
// now create schema in sub_todo
// schema 1 method hai je  leta hai  object

// create model model ek method che  it take 2 parameters
// 1)kya model banavu [name su rakishu]
// 2)kis ke base se pe model banavu [fileds]
// Model jayre connect thi jase db ma tayre aa files automatic run thi jay aur mongodb structure 
// tayre thi jay ye meri headlines fildes che jemke execl ma hoy che
// ane pachi aeni under data aavno start thi jashe

// imp :- "User" mongodb ma only name jashe atle users thi jashe jayre koi bhi model
//  dai tayre convert thai jay che blurel [pachal s lagvi de and convert in lowercase] 
//  mein and badha lower Case ma thi jay che and s laghi jay che


// but aanthi data to kai jai rahyo nati aa to stucture j htu mongoose nu khali



// 2nd way ---> ma jayre aapde username ne obj ma li required true kriye tayre aa
//  filds hovi j joye tayre moongose check kre ke aa filds hovi j joye aani shivya hu 
//  data j store nai karu

// -----> create user model entry

// 1 obj define kre aapde su su data laishu
// 2 obj define kre kya kya timestamp le rahe ho
// Model createion => jayre aapde timeStamp add karvu hoy tayre ae ne
//  bijo object create kri ne thya aapnu [jeti user kayre login thyo aene 
//   kayre update thyuo ae kbr pde]


// ------> todo
// todo ma createdBy user info iska relation hona chaiye user ke sath user nu [Relation ] joye to
// tayre 2 vastu
// 1_) spaecial type che
// 2)  refrence user no ref dyo cho kevu pade 
// ObjectID ek type che jethi mongoose ne kbr padi jay che koino refernce dene wale hoon!
// model ma je name hoy ae ref ma daiye che
*/

/* short 
// underatand how to start project
// create a model of todo
*/

// -----------------------------------------------> 05 Models of E-com & Hospital mangment models when full series complet then agian try this all models & try to also fro which u used
/*
// Create Ecom Models
// In mongoDb it genrate id it self we dont need to declare 
// --->user, category [8gb-16gb laptop, summer,winter ]
// --->Product
    // - pimg hume db store nahi karni chaiye karvi hoy to buffer type ma kri sakya but ae db
    //  ma load le pachi
    // // - server par 1 folder me rakhna chiye us folder ka public url liya jata hai ya to 
    // thrid party services ma store karva ma aave che je ek url aape che ne aene db ma 
    // store kari devani
    // cloundary pn same che 

    // --->Order 
    // here we take in array it just like todo one check todo ma subtodo jema define karyu che 
    // aem j bus aane sidhu array ma lidhu
    // for[quantity and which product we order]
      // --> kisne konsa product order kiya aure kitna order kiya
    // for example:- dharti order 5 product [boat, books, headphone, nailpaint] now dharti 
    // order all product but also we need to check product quantity
    //  nailpaint ketli order kri[nailpaint -4, books-12, buds-1, ] aa rite

    // --->OrderItem  --> mongodb badha table mate ek unique id genreate kre che 

    // Id na base par aakha product ne access kri leshu ane quntity define kri dithi 
    // che so aa kha schema ne aarya ma lai lidh0
// enum means choices
    // ---->satus order status[pending, deliverd, cancelled ma j choice kri sko cho] aa 
    // 3 mthi j choose kri saksho spelling mistake hse to bhi enter nai karva de

// --------------------------------> Hospital Managment 
  // patient
  // doctor
  // Hospital

  // like ka array rakhna ho to user aake ek btn hi to bdabata hai to apna objectid[uniqueid ] hai 
  // like dislike ma  [user na id store kravna ]

  // aane kehvuya data structue karva 
*/

// -----------------------------------------------> 06 Basic Folder Structure

/*   Project start from here

// public
// desc
// create 

// ---> next change branch
// open new vs 
// git init
// git add .
// git commit -m "initali files"  -> currently master brach 
// rename the branch with git
// git branch -M main //name change kri sakiye

// create repo
// git branch -M main ( master na badle main ma aavi jashu )

// add remote
// copy from that given   (push remotley kya karvnu)
// git push -u orign main (push kri dese)

// -----------------imges store karna using third party
// --> koi bhi third party service aapde use krishu like (AWS, cloudnarey, Azure etc) photos uploads 
karvishu ne aene temporerly server ma store krishu incase connection lost of user then photo 
upload[store] in server  after that upload in cloudarnery or etc

// ------> git desc
// git status
// if we only create folder then it show up to date but if create file then show 
use the what changes are if we store to blank folder temparory then we create git keep file



// ----->Start from here

//1) npm init
//2) if we store to blank folder temparory then we create git keep folder
//           [go read git desc]


//3)  create git ignore
//          search for git ignore genrators it give node all that we ignore in git 
// 4) create env [envirment varibales]
// 5) cerate folder src 
        // create 3 file app, index, constant in src
// ---->Packg.json
// there are 2 type importing in js 1)coomon js 2)module
// add type :" module" , import
// 6) install nodemon 
            // npm i nodemon [to start server again and again]
            // aa src ni inder index file ma je bhi lakhishu ae reload kri dese 
            // ae aene kehvu to pade ne aena mate 
            // packgaejson "dev" :"nodemon src/index.js"
            // jayre pn kai change kru atle reload kri dyo

// commit 06_1
// ------------------------------------> second Phase 2
//  1) create folder 
        //1) - controller
                // functionalty aave  
        // 2) db
                // gme te hoy db connection logic here
        // 3) middlewares
                // req aayi server fullfil kre ae pehla j vache checking karvi hoy to ae middlewares ma ave
                // for ex cookies dyo etc
        // 4) models
                // data modeling
        // 5)routes
                // routes
        // 6)utils
                // utils ka shortcut [file upload, videos, mail, tokens]
                // jemke user ni image varvare use thya che like user profile ma also in other page then it come in utlis
                // je varevare repat thya aene ahiya hi lai leshu

//----------------------------> add 2 commit Add structure  till here

// install pretier [to structure the code] if you want to add to add karvni
 //  npm i -D prettier
//  create .prettirerc file
// cerate .prettierignore file

// commit -----> add prettierignore
*/

// github copiloat --> for suggestion
