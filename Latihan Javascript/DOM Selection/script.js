// DOM Selection
// document.getElementById() -> element
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Agrie Dwi Hermawan';

// document.getElementsByTagName() 
// -> HTMLCollections
const p = document.getElementsByTagName('p');
// looping
for (let i = 0; i < p.length; i++) {
	p[i].style.backgroundColor = 'lightblue';
}
p[0].style.backgroundColor = 'lightblue';

// document.getElementsByClassName()
// -> HTMLCollections
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'Ini diubah dari JavaScript';

// document.querySelector() -> element
const p4 = document.querySelector('#b p');
p4.style.color = 'green';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';