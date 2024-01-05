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

//----------------------------> add 6_1 commit Add structure  till here

// install pretier [to structure the code] if you want to add to add karvni
 //  npm i -D prettier
//  create .prettirerc file
// cerate .prettierignore file

// commit -----> add prettierignore
*/


// -----------------------------------------------> 07 Db Connection
/*

// -----------------------------> Atals
// https://chat.openai.com/c/d2d580a3-8d15-4703-84d4-60b8950cf7a5
// search mongoDb Atlas
// atlas is mongoDb sub services [give online databse]
// now afetr login
// new Project youtube -> next -> in next reaming as it is [project owner (aapde j chiye )] ->create project

// ------------------------> deployement
// ->create-> free -> provider(AWS) -> name gme te dai sakiye -> create 
// to connect db -> uname->hitesh [dharti] ->pwd [dharti123]->as you wish -> create user  
// pachi ip add kro 0.0.0.0/0 and finsih kro
// now it goes behind the screen mongodb connection string je banvni automatic create kri deshe 
// connection to create ho gya mongoDb ne to kr liya par hume bhi to db se connect  krna hai so
// ip address->0.0.0.0/0 (host allow kro)

// setps rai jaiy to
// security --> network acces  ->ip adress allow hova joye , correct user,pwd , url 

// 2)DatabseAcess 
        // - db ma connect krishu ip to allow thi gyu uname,pwd mali gyu ch pn string pn joye
        //database-> click on connect --> compose (kevi rite connect karvu chu aeno option aapshe)


// if i want to create second Project 
// goto setting -> orginazation -> Project [now u r in Dashboard page]


// ------------------------------------------------> how to connect Db Connection start form here

// 1) in env give port & mongoDb_url &   add db name in constant 
// 2) db nu name hovu joye to name dithu give db name in contstant 
// 3) there are 2-3 approch
// aapde first file to run index js karvna chiye so
        // 1) all code in index files 
        // 2) db name ka folder connection ka func usme liku aur use func ko index mein call karungi

// app --> express through , dbConnection-Mongo
// 4) npm i dotenv , moongse, express

//------------------------------------> now read from book 

// 5) index.js
        // -mongosse import kyki mongoose hai db se connect karega
        // 1)create iife func
        // 2)mongoodeconnect
                // 1)url
                // 2) db nae pachi await
        // --ghani var aa j file ma j app import karv ma aave che 

        // 3) jevu connect thi jay atle listen lagvnu listern hoy app jode atle app import karvni
                // app on event listen kre che for ex 1 event is  error event db to 
                // connect thi gyu pn 
                // express ni app vat ni kri sakthi so error check 
                // -db to connect thi gyu hoy pn su kbr express app vat na kri
                //  sakthi hoy app on lagvnu
                //  error aave to 
             
        

// 2) ------------------------------------> second way
// in db folder create index.js
// in catch handle error but node js acces dey che process no
// process current app ae 1 nayi process pe chal rahi hoti hai aur ye uska ref hai tme proces ne
//  exit pn karvi sako cho je ek method che 
        // - process.exit() vadre vach nu che exit method nu s
        // https://www.geeksforgeeks.org/node-js-process-exit-method/
// 3) import function in index js and excute it

        // dotenv --> jetli jaldi app load thya aetli jaldi env var avilable thi java joye aaetla 
        // mate index.js ma import
        // now add in packge json kehvnu 1 experimntal fetures add karvu che karva do
        // so add in pkg.json -r dotenv/config --experimental-json-modules
        // now add env path in dotenv


                

        // now run the app if there is any error dont pancie don't copy paste on chhat gpt or google 
        // first read the error properly then try to solve
        // readmore about in questions file question 1
*/

/*
-create db in mongo atlas
1) create a project
2) db connect first need db name, string and give port
3) create a file and conncect the db
4) handle error & async await
5) dotenv
*/

// -----------------------------------------------> 08 add more pkg, middleware little bit 
/*
// https://chat.openai.com/c/78280afe-d1fd-49fb-a17d-4fec74529524

// now db is connected we can add then & catch 

//1) in app .js import express 
        // take in one variable
// 2) import app in index.js
        // first add then catch in db 
        // in catch db conn failed
        // in try if connect then listen on port 
        // ass :- also liten error event 
// 3) go to express doc -> api response (5)
        //1)req --> req mein kab kab kese data aa raha hai usko muje handle karna hai &
        //2) res  --> es muje kese bhajena hai

        // more req.params, req.body
// 4) cookies kya hoti hai , kese use krthe , kese server se leghe
        //npm i  we need cookie-parser , cors , 
        // -import cors, cookie-parser in app.js
        // use method  used for  middlewar or confiagraution mate use ma aave che

        // add cors origin in env
                // origin option in env * [matalb gme thya thi url aave chale pn aapde aapdi url dfine karvi joye]
                // origin ma fonend ni link
                // Learn about cors pkg 
                //add whitelistening explore in express
        // 
// 5) cookie option joishu ae pehla stetting krishu
        //express.json()
                //  data kyathi aavse aene preparation chali rah che url ma thi aavi sake, json ma data moklesh,
                // req.body ma aavi sake , form aavi sake direct , to kai fromat aavi sake ae naki nayti htu so json format ma leva [object maleva ]
                // so aapde read kri sakiye atle express.json()
        //1)  middleware set karva app.use(express.json()) json ne use karva 
        //2)urlencoded()
        //       url ma je data aave aene samjava app.use(express.urlencoded({extended}))
                // extend means obj ni under obj nested obj mate is optional
        //3) static  ->
                // kuch file folder store karna chata hu, image aayi aeni store kri lav ae 
        // public asset che je koi bhi use kri sake che  (folder names)
       // app.use(express.static())
// cookies  -> me server se user ke browser uske under se user ki cookie access bhi kar pau aur
//  cokkies set bhi kar pau , crud op kar pau
// secure cookies user ke browse mein rakh sakhte ho us cookies ko server hai read kr sakhta hai aur
// server hai remove kr paye uske liye 
// app.use(cookieParser())
// go to diagram to understand middleware check ss & also write in note book [middleware understanding]

// ------> utils[user,video controller func aa rite excute karvu hoy
//  tayre method ma fun pass kr 
// dena me execute karke waps kar dunga [wrapper]]
// db ni vat vare var krishu to aatlu badhu code lakhvu aeni kartha 1 utils banyi leshu
// genralize func thi jayre execuete karvu hoy aa code tayre method pass kri dejo 
// method execute kri ne dai dese je func pass kryu hse aemyhi err, res, req, next lai leshu
// 1) create file asyncHandler.js
        // method banvshe aene pass kri deshee


// --------------->   standrzation err msg or sucess msg
// search nodejs api error
// je ek class deshe error no 
// create utils-> ApiError.js
// create class and extssends error class
// constuctor avilable che but aapde aapdo banvishu
// constuctor ma su su desu 
// error [] bcu multipal error show karva
// override mate super call kishu 
// aena statuscode aapda statuscode thi overrider krishu this thi 

// readmore Abouut Api Error in question 2

// -------------> create for response
// 1) create response file
        // response koi claas hoto nati so easily we can create this
        // hve koi error aave to Api Error through j jay
        // atle middleware lakhva pade
*/

/* short hand
1) create app and take in index 
2) express website(res, req req.params)
3)express.json, urlencoded , cors, cookieparser
4)understand middleware
5)utilty of db 
6)standard err response

*/
// -----------------------------------------------> 09 Data models,Tokens [start focusing]
/*
// discuss  about user model, video model plugin[] ,aggrigation, jwt , encrypt,bcrypt
// 1) model
        //1) - create user.model.js
        //2) - video -model-js
        //-----> read about unique id in mongoDb  ---->

// pwd string rakishu [db leak thya che atle aene encrypt kri ne rakhu]
// refreshToken -> update Token 
// Watch history make project complex
//2)  mongoose aggregate-paginate-v2 install it
        // it allows you to write aggrigation query. 
        // mongodb ma basic aa j skiya hoye insert many , update many but a pkg krishu 
        // search mongo aggregation pipline 
        // install pkg
        //1) import that in video model
        //2)  export pela aene use karvu pade
        // mongoose ma midddlware aema ghani middlware laki sakya che aane appda plugin add kri sako
        // plugin is below

        // validate, save, remove, updateOne, deletoOne
        
       
        
// 3) bcrypt ->  for node js pkg  [most used with node]
        // and bcryptjs -> javascript 0 dependenices.compatible with bcrypt 
        // install it  -> it is library it help to u hash ur password 
        // pwd encrypt pachi aene decrypte kravu pade ne comapre karvu pade aena mate bcrypt
// 4) JWT --> install [jsonwebtoken] 
        // go jwt.io to check 
        // header -> kyo algorithem che [automatice inject thya]
        // main role payload -> je bhi data moklshu ae payload ma encrypt thi jashe[token genarate krshe ]
        // secret j che je badhi token ne unique banve che 
        // read more question 3

//5)    user file ma lai levna 2 ne pkg ne
// direct encryption possible nti atle mongoose hooks ni help leshu 
        
         // pre --> data just save thya che ae pela just kro 
        // post -> data save thya pachi just kro 


        // pre hook ma code lakishu je execute krvu hoy ae
        // kyu event use karva mango chu validate, delete, save etc
        // pre ma kya par karvu che to save kru tayre pre ni under arrow use nai kriye bcu 
        aema this context nti hoto
        // so function use krishu
        // function ma data aavth time lagshe atle async ne kam pati jay pachi next middleware 
        ma flag ma next nu acces hovu j joye
        // next is  flag hve aagal pass kri do
        // hash [encrypt]
        // 1)su hash karvu che 2) ketla rounds lagva che salt
        // pwd encrtyp pachi password comapre karva (sacho che ke nai)
        // compare mate method banvishu 
        // comapare ma 1 mangeshe pwd je user pase thi aavshe 2) encrypted pwd db mathi
        // true false ma ans deshe

// 6)JWT 
        // - jwt is beraer token hai means jo usko bear kartha hai use wo sahi man lete hai
        // aa token jeni pase hse ne req moklshe ae ne hu data moklish
        // also check if time json web token github page
        
        // 1) add token in env
                // 1) ACCESS_TOKEN_SCERT -> AT
                // 2)ACCESS_TOKEN_EXPIRE -> 1d matlab 1 day pachi expire thi jashe
                // 3)Refresh_Token_secret ->
                // 4) refresh_TOKEN_EXPIRE => 10d
                // here main token exp time is less than refresh token

                // but sir hum sirf refresh tokrn ki hai bat kr rahe hai access token ki to bat kar nahi rahe
                // yaha pe hum both use krnge session storage and local storage so 
                // AT - > ye dbb mein store nahi karnge
                // RT -> ye hum db store karnge
        // 2) userSchema 
        //     1) add method is genrateAccessToken
        //     2) add genrateRefreshToken also
        // both are jwt token there is no diff in token but diff is in how we use
                // 3)jwt ma sign method che aama ghanu che payload, obj, buffer, scretkey
                        // payload 1) give payload first 
                        // 1) AccessToken
                        // 2)object jema {expirey}
                // 4) refresh token same as Access Token
                // now In next video how to insert data in db 
*/

/* short
1) create models first user, video
2) mongooseAggrigationpaginatev2
3) bcrypt
4) JWT

*/

// -----------------------------------------------> 10 File Upload [start main here focus]
/*
// FE side form banvi sake aene browse kravi ske ne link dai sake bus
// File handling nu kam BE side j hoy che [pdf, image, video badha upload nu kam kri sako ]
// file handling khudke server par nhi ki jati [ ka to third party ka aws is ]
// cloudinary  Dharti@106*
// filupload mate  2 pkg -> multer or fileexpress
// multer use krishu
// 1)signIn
// 2)install cloudnairy , multer
// statergy:->
        // user se file upload karvynge. multer se hai file upload hogi. cloudinary ek 
        // services hai direct us se nahi hota cloudnairy file kese leke 
        // jaynge ye humse file lete hai aur server par upload krthi hai same as aws
        // hum kya karnge multer ka use kar ke hue hum wo file lenge user se aur localstorage 
        // mein temp rakhi desu pahi 2)
        // cloudi778 nary no use kri ne local storage se file lenge aur server pe denge
        // koi service ma bhi rakhe che aapde utils ma rakishu

        // 3)create cloudnairy file
        // aama file aavshe fille system ke through matlab server par already upload thi gyi
        //server se local file ka path denge (file je server par aa jayegi )
        // server se local path dongo jo  mein cloud nairy mein dunga
        // file ko remove bhi karvni succefully add thi jay pachi server pr thi remove karvni
        //       1)import clodnary, fs
        //      2)give env var cloudinary cloud name,cloudinary apikey,cloudinary apiscret
        //      3) take cloudconfig from cloudinary
        // ek method banvishu method ni under parameter local fileno path desu succesfully
        //  upload thi jaishu to file ne unlink kri desu 
        //-----------------------> 4) create middleware--------------------->
        // ja rahe ho kahi  jate time muje milthe jana 
        // multer no use kri middleware banavishu jay jaya jarur hse thya enject kri deshu
        // 1) create file multer   --https://github.com/expressjs/multer#readme
        // save mate destination 
        // log fileand explorer
*/

/* short hand
        1) create cloudinary account
        2) make utility for file upload
        3) make middleware
*/

// -----------------------------------------------> 11 HTTP Crash Course
/*
//  go to linkdien in take notes of http crash course  [data kai rite transfer karva one pc to another]
// http & https are diff protocal ka diff hoy che
// http mein data cletext ma jay che abc moklye to abc j jay
// https mein 1 layer aavi jay che je data ne encrypt kre che  jo data bhejte hai wo 1 key
// laga ke opertaion kre che jethi data eadble nti rehto clien ke server par readble thi jay 
// inbetween data readble na rahe in https
// http -> hypertext transform Protocol
// /check in notebook
// after check diagram come here
// URL  -> kaha pe location hai usika 
// URI -> identifier su che 
// URN -> name su che


// now go to pdf
// httpHeaders
// jayre koi http req moklo to info moklvi pade che fnmae, fupadte kayre thi ae kehvu pade
// aeni sathe some meta data aave che ae badhu httpheaders hoy che

// ghana header defined hoy che aa aave to aa accept kru chu
// aapde header banvi pn sakiye chiye
// headers req ane response male che

// headers meta data hoy che je key-value pair ma aave che
// check pdf of hitesh

// Headers---->
// Represntational Header:- app like mobile data in compress format ma aave che ane export kri ne use karvu pade,
// ex zerodha ma graph je compress format ma hoy che pachi aene export kri ne use kri sakiye
// Payload header=  data[is, email exc]

// Most Common Header
// 1)Acccpt -> kya format ma data accept krshe [ Informs the server about the types of media that the client can process.]
// 2) userAgent -> konsi app se req aaayi hai [postman, browse[konsa tha], enginee]
// 3)Authorization:- bearertkoken hoy che
// 4)content-type:- su moklo cho imge/video/file
// 5)cookie:- { } ketla time sudhi cookie reshe/ user ketla time sudhi login reshe/ uniCode 
// 6)cache-control:- data kayre exprie kru 
// Cors Headre
// security Header

// Http Methods
// /options:- kon kon se op avilable hai ex :- /user -> user ma get , put , post avilable che 
// trace:- debugging [req mokli hoy aeno response aapi de che] [
        // ketlik var reposne proxy pachal hoy ceh kai proxy mathi thai req jay chek
        // kai kai proxy mathi thai response aave che [response ma time laghe , poping hoy ,
        // use case mein iska use krthe hai ]
// ]
// take more info about it
//read question 5  
// HttpStatusCode complete 08:08:18
*/
// github copiloat --> for suggestion

// -----------------------------------------------> 12 Controoler & Routes
/*
// jetla vadhre controllers lakishu aetlu logic building vadhare thase
// loggic buliding preactice kro 
// threr is 1 big problem than divide it in smaller chunks than try to solve one by one 
// leetcode, DSA , realworldProjects
// register user we do in this video

// 1) user.controller.js
        // 1)helper file lakhi che aapde 1 import asyncHandler
                // - try catch varevare lakhvu nai pade , req, res,next aavi jay che
     
        // 2)take asyncHandler in one method 
        // method to banyi ditu hve run kayre thase url hit par url mate routes define krishu
// 2)user.routes.js
        // 1) import route from express
        // 2) create route
        // 3)export route
        // 4) import routes in app
        // 5) use middleware and define prefix and go to which router
                // app.use()
                // bcu we can do app.get bcu we use route & controller same 
                file but now we have diffrent files for controller and routes 
                so we ned to use middleware

        // 6) when route come what to do
                // -define routes & methods

        // 7)standard practice
                // define kro api version kyu chale che
        // 8) thunnderClient Or Postman
        // 9) run your api in postman


*/