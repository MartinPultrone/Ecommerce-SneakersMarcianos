export const productos = [
    {id: 1, foto: '/ecommerce-sneakers/public/assests/img/collection2.png', name: "Nike Free RN 1", categoria: "Sneakers", price: '200'},
    {id: 2, foto:'/ecommerce-sneakers/public/assests/img/collection2.png', name: "Nike Free RN 2", categoria: "Sneakers", price: '300'},
    {id: 3, foto:'/ecommerce-sneakers/public/assests/img/collection2.png', name: "Nike Free RN 3", categoria: "Sneakers", price: '400'},
    {id: 4, foto:'/ecommerce-sneakers/public/assests/img/collection2.png', name: "Nike Free RN 4", categoria: "Sneakers", price: '500'},
    {id: 5, foto:'/ecommerce-sneakers/public/assests/img/collection2.png', name: "Nike Free RN 5", categoria: "Sneakers", price: '600'},
    {id: 6, foto:'/ecommerce-sneakers/public/assests/img/collection2.png', name: "Nike Free RN 6", categoria: "Sneakers", price: '700'},
    {id: 7, foto:'/ecommerce-sneakers/public/assests/img/collection2.png', name: "Nike Free RN 7", categoria: "Sneakers", price: '800'}
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