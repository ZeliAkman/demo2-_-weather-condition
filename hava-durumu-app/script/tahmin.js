const key='RbRuWVW5MjHe9xb2IvEM7cA1CleSqY7t'; // accuweather.com sitesinden aldıgımız api

const havaDurumuGetir=async(id)=>{

    const temelUrl='http://dataservice.accuweather.com/currentconditions/v1/';
    const sorgu=`${id}?apikey=${key}`;

    const res=await fetch(temelUrl+sorgu);
    const veri=await res.json();

    return veri[0];
}

 //şehir ismi getirme kısmı
const sehirGetir=async(konum)=>{

    const temelUrl='http://dataservice.accuweather.com/locations/v1/cities/search'; //temel url

    const sorgu=`?apikey=${key}&q=${konum}`;

    const res=await fetch(temelUrl+sorgu);
    const veri=await res.json(); // gelen veriyi jsona çevirdik

    return veri[0];
    
};


// sehirGetir('hongkong')
//     .then(veri=>{
//         return havaDurumuGetir(veri.Key);
//     })
//     .then(veri=>{
//         console.log(veri);
//     })
//     .catch(err=>{
//         console.log(err);
//     });