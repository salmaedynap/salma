class hai {
  constructor() {
    this.test= "Kota";
    this.test1= "Bandung";
	}
 	present(){
 	document.write("Nama Kota "+this.test1);
	}




	satu() {
	  alert("Terima kasih atas masukannya :)");
	}

	dua() {
	 document.getElementById("seblak").innerHTML = "Makanan khas Bandung yang terbuat dari kerupuk basah ini memiliki rasa yang khas karena dibuat dari bumbu rempah dan memiliki isian yang mengenyangkan seperti sayur, daging dan telur.";
	}

	tiga() {
	 document.getElementById("surabi").innerHTML = "Surabi menjadi salah satu camilan paling ngehits di Bandung. Beragam rasa, topping dan tampilan yang imut menjadi alasan mengapa jajanan tradisional ini banyak diburu para pendatang dan kaum urban Bandung."
	}


	empat() {
	 document.getElementById("bandros").innerHTML = "Salah satu camilan tradisional kota Bandung yang paling diminati adalah bandros. Kue dari campuran tepung beras dan santan ini berbentuk seperti pukis dengan rasa gurih. Ada taburan gula pasir untuk menambah cita rasa."
	}


	lima() {
	 document.getElementById("cuanki").innerHTML = "Sajiannya mirip bakso Malang. Dalam satu porsi cuanki terdiri dari aci, siomay, bakso, pangsit rebus, pangsit goreng dan bakso goreng. Bedanya, mi yang digunakan bukan mi kuning. Dengan tambahan seledri dan daun bawang, Cuanki juga lebih gurih dan bening."
	}

	warna (pilih) {
			if (pilih == 1) document.body.style.backgroundColor = "#FFA07A";
			else if (pilih == 2) document.body.style.backgroundColor = "#F5FFFA";
			else if (pilih == 3) document.body.style.backgroundColor = "#D8BFD8";
			else if (pilih == 4) document.body.style.backgroundColor = "#F5F5DC";
			else if (pilih == 5) document.body.style.backgroundColor = "#FFFFFF";
		}


}
