function validasihasil() {
    let username = document.form.input1.value;
    let password = document.form.input2.value;
    
    if (username == "ahmad2017" && password == "integrity"){
        alert ("Login Anda Berhasil.");
        document.write("Login Anda Berhasil")
    }
    else {
        alert ("Login belum berhasil, Silahkan coba lagi.")
    }
}