//membuat Object 
// Object Literal
var mhs1 = {
	nama : "Aji Prasetyo",
	nim  : "1905046",
	email : 'ajiprasetyo@upi,edu',
	jurusan : 'Sistem Informasi Kelautan'

}

var mhs2 = {
	nama : "Lana",
	nim  : "1905048",
	email : 'lana@upi,edu',
	jurusan : 'Sistem Informasi Kelautan'

}

// function Declaraction
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
	var mhs = {};
	mhs.nama = nama;
	mhs.nrp = nrp;
	mhs.email = email;
	mhs.jurusan = jurusan;
	return mhs;
}

var mhs3 = buatObjectMahasiswa('Cici', '19546462', 'cici@upi.edu', 'PGSD')

var mhs4 = buatObjectMahasiswa ('')

// Constructor 
function Mahasiswa(nama, nrp, email, jurusan) {
	// var this = {};
	this.nama = nama;
	this.nrp = nrp;
	this.email = email;
	this.jurusan = jurusan;
	//return this;

}

var mhs5 = new Mahasiswa('Erni', '1565483', 'erni@upi.edu', 'PKP');