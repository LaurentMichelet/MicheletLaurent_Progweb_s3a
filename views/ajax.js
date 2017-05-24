var xhr = null;

function initXhr(){
    xhr= new XMLHttpRequest();
}

xhr.onreadystatechange= function() {
  if (xhr.readyState== 4 && xhr.status== 200)//xhr.status== 0 si ftp ou file
    maCallback(xhr.responseText); // ou maCallback(xhr.responseXML);
};

function maCallBack(reponse){
  console.log(reponse);
}

function onLoaded(){
  sendReq1();
}

Post = document.getElementById("req_post");
Get = document.getElementById("req_get");


function sendReq1() {
  xhr.open("get", "index.php?unevariable=testajaxget", true);
  xhr.send(null);
}

function sendReq() {
  xhr.open("post", "index.php?unevariable=testajaxpost", true);
  xhr.send(null);
}
