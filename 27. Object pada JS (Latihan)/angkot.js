// membuat object Angkot
function Angkot(sopir, trayek, penumpang, kas) {
	this.sopir = sopir;
	this.trayek = trayek;
	this.penumpang = penumpang;
	this.kas = kas;

	this.penumpang = function(namaPenumpang) {
		this.penumpang.push(namaPenumpang);
		return this.penumpang;
	}

	this.penumpang = function(namaPenumpang, bayar) {
		if(this.penumpang.length === 0 ){
			alert('angkot masih kosong!');
			return false;
		}

		for ( var i = 0; i < this.penumpang.length; i++ ) {
			if( this.penumpang[i] == namaPenumpang ) {
				this.penumpang[i] = undefined;
				this.kas += bayar;
				return this. penumpang;
			}
		}
	}
}

var angkot1 = new Angkot('Aji', ['Cicaheum', 'Cibiru'], [], 0);

var angkot2 = new Angkot('Cici', ['Antapani', 'Ciroyom'], [], 0);


