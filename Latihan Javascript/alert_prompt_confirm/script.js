alert('Selamat Datang');
var lagi = true;

while(lagi === true){
	var nama = prompt('Masukan nama:');
	alert('Halo ' + nama);

	lagi = confirm('coba lagi?');
}

alert('Terimakasih');