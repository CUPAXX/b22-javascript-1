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

let printSegitiga2 = 5;
if (typeof printSegitiga2 === "number"){
    while(printSegitiga2 > 0){
        let result =""
        for(let i = 1; i <= printSegitiga2; i++){
            result += ` ${i}`
        }
        console.log(result)
        printSegitiga2--
    }
}else{
    console.log("Data Harus Number")
}
