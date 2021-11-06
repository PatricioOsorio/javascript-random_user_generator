const d = document;
export default async function randomUserGenerator() {
  try {
    const res = await fetch('https://randomuser.me/api/?results=1');
    const data = await res.json();

    let $img = d.querySelector('.photo');
    let $name = d.querySelector('.name');
    let $email = d.querySelector('.email');
    let $gender = d.querySelector('.gender');
    let $birthday = d.querySelector('.birthday');
    let $address = d.querySelector('.address');
    let $phoneNumber = d.querySelector('.phone-number');

    let name = `${data.results[0].name.first} ${data.results[0].name.last}`

    $name.innerHTML = name;
    $img.setAttribute('src', data.results[0].picture.large);
    $email.innerHTML = data.results[0].email;
    $gender.innerHTML = data.results[0].gender;
    $birthday.innerHTML = data.results[0].registered.age;
    $address.innerHTML = data.results[0].location.street.name;
    $phoneNumber.innerHTML = data.results[0].cell;
  } catch (error) {
    console.error('Peticion fallida: ' + error);
  }


}
