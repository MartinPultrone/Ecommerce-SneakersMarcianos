export const productos = [
    {id: '1', foto:'/assests/img/women1.png', name: "Nike Free RN 1", categoria: "women", price: '200'},
    {id: '2', foto:'/assests/img/women2.png', name: "Nike Free RN 2", categoria: "women", price: '300'},
    {id: '3', foto:'/assests/img/women3.png', name: "Nike Free RN 3", categoria: "women", price: '400'},
    {id: '4', foto:'/assests/img/new2.png', name: "Nike Free RN 4", categoria: "new", price: '500'},
    {id: '5', foto:'/assests/img/new3.png', name: "Nike Free RN 5", categoria: "new", price: '600'},
    {id: '6', foto:'/assests/img/featured1.png', name: "Nike Free RN 6", categoria: "men", price: '700'},
    {id: '7', foto:'/assests/img/featured2.png', name: "Nike Free RN 7", categoria: "men", price: '800'}
]

export const getFetch = new Promise((resolve, reject)=>{
    let url = 'martin'

    if (url === 'martin') {
        setTimeout(() => {
        resolve(productos)
        }, 3000);
    }else{
        reject('400 not found')
    }
})