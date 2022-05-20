fetch('https://628778b1e9494df61b39b038.mockapi.io/plant')
.then(responseCallBack)
.then(resultCallback)
.catch(manageError);

function displayPlants(arrayOfPlants) {
 const arrayContainer = document.createElement('div');

  for (let i = 0; i < arrayOfPlants.length; i++) {
    const plant = arrayOfPlants[i]
    const plantContainer = document.createElement('div');
    const span = document.createElement('span');
    const node = document.createTextNode(plant.name + ' ' + plant.type);

    span.appendChild(node);
    plantContainer.appendChild(span);
    arrayContainer.appendChild(plantContainer);
  }
  document.body.appendChild(arrayContainer);
}



function responseCallBack(response){
  console.log('response',response);
  return response.json();
}

function manageError(error) {
  console.log(error)
}

function resultCallback(result){
  console.log('result', result);
  const array = convertResultInArrayOfPlants(result);
  console.log('array', array);
  displayPlants(array);
}

function convertResultInArrayOfPlants(result) {
  const arrayOfPlants = [];
  for (const obj of result) {
    const plant = Plant.fromObj(obj);
    arrayOfPlants.push(plant);
  }
  return arrayOfPlants;
}

function convertResultInArrayOfPlants(result) {
  const arrayOfPlants = result.map(obj => Plant.fromObj(obj));
  return arrayOfPlants;
}






