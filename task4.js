
let tambah = {
    hobby : 'bermain komputer'
}

let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    ...tambah,
    address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}


const ganti = Object.assign({}, data, {name : 'Muhammad Fiqry Arahmansyah'})

console.log(ganti)

let ambil = {
    address :
    {
        street : mystreet,
        city : mycity
    }
        
} = data

console.log(mystreet)
console.log(mycity)