const mtk = 80
const bahasaIndonesia = 90
const bahasaInggris = 89
const ipa =  69
let grade = ""

    
hasil = (mtk + bahasaIndonesia + bahasaInggris + ipa)/5


if(mtk == null || bahasaIndonesia == null || bahasaInggris == null || ipa == null){
    console.log("Semua Data Harus Diisi")
}
else if(hasil >= 90) grade = 'A'
else if(hasil >= 80) grade = 'B'
else if(hasil >= 70) grade = 'C'
else if(hasil >= 60) grade = 'D'
else grade = 'E'

console.log(" Rata - rata = " + hasil + '\n' + " Grade = " + grade)

