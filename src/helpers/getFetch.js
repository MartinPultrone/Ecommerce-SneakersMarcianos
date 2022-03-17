export const productos = [
    {id: '1', foto:'/assests/img/women1.png', name: "Nike Free TR", categoria: "Women", price: '$129.99'},
    {id: '2', foto:'/assests/img/women2.png', name: "Nike Free TR", categoria: "Women", price: '$129.99'},
    {id: '3', foto:'/assests/img/women3.png', name: "Nike Get 5", categoria: "Women", price: '$129.99'},
    {id: '4', foto:'/assests/img/women4.png', name: "Nike GS Pink", categoria: "Women", price: '$129.99'},
    {id: '5', foto:'/assests/img/new2.png', name: "SPLY 350", categoria: "New", price: '$79.99'},
    {id: '6', foto:'/assests/img/new3.png', name: "SPLY 350", categoria: "New", price: '$79.99'},
    {id: '7', foto:'/assests/img/new4.png', name: "SPLY 350", categoria: "New", price: '$79.99'},
    {id: '8', foto:'/assests/img/new5.png', name: "SPLY 350", categoria: "New", price: '$79.99'},
    {id: '9', foto:'/assests/img/featured1.png', name: "Nike Jordan", categoria: "Men", price: '$149.99'},
    {id: '10', foto:'/assests/img/featured2.png', name: "Nike Free RN", categoria: "Men", price: '$149.99'},
    {id: '11', foto:'/assests/img/featured3.png', name: "Nike Free RN", categoria: "Men", price: '$149.99'}
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