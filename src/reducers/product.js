var initialState = [
    {
        id:1,
        name:'Iphone 7 Plus',
        image:'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description:'Sản phẩm của apple',
        price:500,
        inventory:10,
        rating:5
    },
    {
        id:2,
        name:'SamSung Galaxy note 9',
        image:'https://cdn.tgdd.vn/Products/Images/42/196963/samsung-galaxy-a50-blue-400x460-1-400x460.png',
        description:'Sản phẩm của SamSung',
        price:400,
        inventory:4,
        rating:5
    },
    {
        id:3,
        name:'LG V30+',
        image:'https://sudospaces.com/mobilecity-vn/images/2019/01/lg-g7-thinq-do.jpg',
        description:'Sản phẩm của LG',
        price:200,
        inventory:1,
        rating:3
    }
];
const product = (state = initialState,action)=>{
    switch(action.type){
        default:
            return [...state]
    }
}
export default product