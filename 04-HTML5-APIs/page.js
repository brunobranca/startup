function saveLocalStorage(){
let index = document.getElementById('textToSave');
localStorage.setItem('data', index.value);
document.getElementById('text').innerHTML = localStorage.getItem('data');
}




window.onload = function () {
 let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

 dataBase = indexedDB.open("DataBase", 1);

 dataBase.onupgradeneeded = function (e) {
   let db = event.target.result;
   object = db.createObjectStore("textData", { keyPath : 'text' });
   object.createIndex('textIndex', 'text', { unique : false });
 };

 dataBase.onsuccess = function (e) {
   alert('DB Works');
 };

 dataBase.onerror = function (e)  {
   alert('DB didnt work');
 };
 //Exercise 3
 function handleFileSelect(evt) {
   evt.stopPropagation();
   evt.preventDefault();
   let files = evt.dataTransfer.files;
   let reader = new FileReader();
   reader.onload = function(event) {
     document.getElementById('drop_zone').value = event.target.result;
   }
   reader.readAsText(files[0],"UTF-8");
 }

 function handleDragOver(evt) {
   evt.stopPropagation();
   evt.preventDefault();
   evt.dataTransfer.dropEffect = 'copy';
 }

 let dropZone = document.getElementById('drop_zone');
 dropZone.addEventListener('dragover', handleDragOver, false);
 dropZone.addEventListener('drop', handleFileSelect, false);
}

function indexedDBSave () {
 let active = dataBase.result;
 let data = active.transaction("textData", "readwrite").objectStore("textData");
 let request = data.put( {
   keyPath: 1,
   text: document.querySelector("#textToSave").value
 });
 request.onerror = function (e) {
                   console.log('NO');
 };

 data.oncomplete = function (e) {
                  document.querySelector("#textToSave").value = '';
                  alert('Objeto agregado correctamente');
              };
}


//Exercise 2
function clearLocalStorage(){
  localStorage.removeItem('data');
}

function clearIndexedDB(){
  let active = dataBase.result;
  let request = active.transaction("textData", "readwrite").objectStore("textData").clear();
}



//Exercise 4
var wsUri = "ws://echo.websocket.org/";
  var output;

  function init()
  {
    output = document.getElementById("output");
    testWebSocket();
  }

  function testWebSocket()
  {
    websocket = new WebSocket(wsUri);
    websocket.onopen = function(evt) { onOpen(evt) };
    websocket.onclose = function(evt) { onClose(evt) };
    websocket.onmessage = function(evt) { onMessage(evt) };
    websocket.onerror = function(evt) { onError(evt) };
  }

  function onOpen(evt)
  {
    writeToScreen("CONNECTED");
    doSend("WebSocket rocks");
  }

  function onClose(evt)
  {
    writeToScreen("DISCONNECTED");
  }

  function onMessage(evt)
  {
    writeToScreen(<span style="color: blue;">RESPONSE: ' + evt.data+'</span>);
    websocket.close();
  }

  function onError(evt)
  {
    writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
  }

  function doSend(message)
  {
    writeToScreen("SENT: " + message);
    websocket.send(message);
  }

  function writeToScreen(message)
  {
    var pre = document.createElement("p");
    pre.style.wordWrap = "break-word";
    pre.innerHTML = message;
    output.appendChild(pre);
  }

  window.addEventListener("load", init, false);
