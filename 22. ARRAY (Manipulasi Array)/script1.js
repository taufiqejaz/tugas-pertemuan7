// Method pada array
// 1. join

//var arr = ['Sandhika', 'Galih', 'Nofa', 'Doddy','Fitri'];
//console.log(arr.join(' - '));

// 2. push & pop
// arr.push('Doddy');

//arr.pop();
//console.log(arr.join(' - '));

// 3. unshift & shift 
//arr.shift();
//arconsole.log(arr.join(' - '));

//4. splice
// splice(indexAwal, mauDihapusBerapa, elemenBaru, elemenBaru2, ...)
//arr.splice(1, 2, 'Yana', 'Fitri');

//5. Slice
// slice(awal, akhir);
//var arr2 = arr.slice(1,3);
//console.log(arr2.join(' - '));

//6. foreach
//var angka = [1,2,3,4,5,6,7,8];
//for (var i = 0; i < angka.length; i++) {
	//console.log(angka[i]);
//}

//angka.forEach(function(e) {
//	console.log(e);
//});

//nama.forEach(function(e, i)) {
//	console.log('Mahasiswa ke-' + (i+1) + 'adalah : ' + e);
//}

// 7. map
//var angka = [1,2,3,4,6,8,4];

//var angka2 = angka.forEach(function(e) {
//	return e * 2;
//});
//console.log(angka2.join(' - '));

// 8. sort 
//var angka = [1,2,3,4,5,6,8,4];
//angka.sort(function(a,b) {
//	return a-b;
//});
//console.log(angka.join(' - '));

// 9. filter & find
var angka = [1,2,3,4,5,6,8,4];
var angka2 = angka.find(function(x) {
	return x == 5;
});
console.log(angka2);