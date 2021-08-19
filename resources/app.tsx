import React from "react" 

// function openDocs(){
//     Neutralino.app.open({
//         url: "https://neutralino.js.org/docs"
//     });
// }

// function openTutorial(){
//     Neutralino.app.open({
//         url: "https://www.youtube.com/watch?v=txDlNNsgSh8&list=PLvTbqpiPhQRb2xNQlwMs0uVV0IN8N-pKj"
//     });
// }

function App(){
     return <div id="neutralinoapp">
           <h1>NeutralinoJs</h1>
           <div id="info"></div>
           <br/>
           <div>
             <a href="#" onclick="openDocs()">Docs</a> &middot;  
             <a href="#" onclick="openTutorial();">Tutorial</a>
           </div>
         </div>     
}

export default App