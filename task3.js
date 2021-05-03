const printSegitiga = 5;
if (typeof printSegitiga === "number"){
    for (var i = printSegitiga; i >= 1; i--) {
        var hasil = '';
    
        for (var j = 1; j <= i; j++) {
            hasil += j;
        }
        console.log(hasil);
    }
}else{
    console.log("Data Harus Number")
}

