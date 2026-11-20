
 var readLocalFile=async function(){

  //const  response = await fetch('file:///.//data.json');
  const response = await new Promise(fileHandle.getFile('file:///./data.json'));
   
  const text =  await new Promise(response.text()); 
  console.log(response);
  console.log(text);
  /*No hay que bebeerse toda el agua del mar para tomar una decision*/ 
  /*Solo el que alarga las cosas es porque no sabe tomar decisiones*/
}

readLocalFile();

/*
function readTextFile(file) {
  const rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function () {
    if(rawFile.readyState === 4)  {
      if(rawFile.status === 200 || rawFile.status == 0) {
        var allText = rawFile.responseText;
        console.log(allText);
       }
    }
  }
  rawFile.send(null);
}
let dfile = ("file:///C:/your/path/to/file.txt");
*/
/* que mierdas quieres que haga, si  */
// Reading a file

/*
// Writing to a file
async function writeFile() {
  await fetch('file:///path/to/your/file.txt', {
    method: 'PUT',
    body: 'New content to save'
  });
}
const getdata = () => {
  return(
    fetch(`/data.json`)
    .then((response)=>response.json())
    .then((data)=>data[0])
   
   // .then((mail)=>fetch('/data/$data.mail'))
    .then((response)=>response.json())
  )
}
console.log( getdata())
*/
