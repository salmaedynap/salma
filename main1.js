class hai {
  constructor() {
	document.getElementById("tombol_form").
	addEventListener("click", tampilkan_nilai_form);
}
	tampilkan_nilai_form(){
    var nilai_form=document.getElementById("input_form").value;
    document.getElementById("hasil").innerHTML=nilai_form;
}
 hai= new hai();
 hai.tampilkan_nilai_form();