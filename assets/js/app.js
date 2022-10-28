const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
//Se agrego el punto a cada clase, a blog se le quito el signo $
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

/* Se agrego un async para el uso de await */
async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  //Se le agrego la variable response para que leyera la información
  console.log(response.data);
  /* Se cambiaron las comillas por los acentos invertidos */
  $n.textContent = `${response.name}`;
  $b.textContent = `${response.blog}`;
  $l.textContent = `${response.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  //Se agrego el signo de pesos a la n
  $n.textContent = `Algo salió mal: ${err}`;
}

displayUser('stolinski').catch(handleError);