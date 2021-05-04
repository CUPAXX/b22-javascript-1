const mtk = 80
const bahasaIndonesia = 90
const bahasaInggris = 89
const ipa =  69

if(mtk && bahasaIndonesia && bahasaInggris && ipa) {
    const rataRata = (mtk+bahasaIndonesia+bahasaInggris+ipa)/4
    console.log("Rata-rata = ".concat(rataRata))
    if(rataRata >= 90 && rataRata <= 100){
        console.log("Grade = " .concat('A'))
    }else if(rataRata >= 80 && rataRata <= 89){
        console.log("Grade = " .concat('B'))
    }else if(rataRata >= 70 && rataRata <= 79){
        console.log("Grade = " .concat('C'))
    }else if(rataRata >= 60 && rataRata <= 69){
        console.log("Grade = " .concat('D'))
    }else if(rataRata >= 0 && rataRata <= 59){
        console.log("Grade = " .concat('E'))
    }
}


