import {FcBusinessman,FcBusinesswoman,FcManager,} from 'react-icons/fc';
import {RiTShirtLine,RiTShirtFill} from 'react-icons/ri';
import {RiShowersLine,RiSunLine,RiSnowyLine,RiMoonLine} from 'react-icons/ri';

export const shoppingTab=[
    {id:1,label:'men',icon: <FcBusinessman size={24}/>},
    {id:2,label:'women',icon:<FcBusinesswoman size={24}/>},
    {id:3,label:'kids',icon:<FcManager size={24}/>},
    {id:4,label:'shirt',icon:<RiTShirtLine size={24}/>},
    {id:5,label:'t-shirt',icon:<RiTShirtFill size={24}/>},
    {id:6,label:'rainy season',icon:<RiShowersLine size={24}/>},
    {id:7,label:'summer season',icon:<RiSunLine size={24}/>},
    {id:8,label:'winter season',icon:<RiSnowyLine size={24}/>},
    {id:9,label:'night wear',icon:<RiMoonLine size={24}/>}

];

export const shopping1=[
    {
        id: 1,
        shoppingImages:[
            {
                id:1,
                url:null,
           },
           {
                id:2,
                url:null,
           },
           {
                id:3,
                url:null,
       },
        ],
        kind:'Blue-shirt',
        price:'799',
        rating:4.5,
    },
    {
        id:2,
        shoppingImages:[
            {
                id:1,
                url:null,
            },
            {
                id:2,
                url:null,
            }
        ],
        kind:'red-shirt',
        price:'899',
        rating:4.2,

    },
    {
        id:3,
        shoppingImages:[
            {
                id:1,
                url:null,
            },
            {
                id:2,
                url:null,
            },
            {
                id:3,
                url:null,
            }
        ],
        kind:'men-shirt',
        price:'699',
        rating:4.1,

    },
    {
        id:2,
        shoppingImages:[
            {
                id:1,
                url:null,
            },
            {
                id:2,
                url:null,
            }
        ],
        kind:'slim-fit',
        price:'1299',
        rating:4.7,

    },
    {
        id:2,
        shoppingImages:[
            {
                id:1,
                url:null,
            },
            {
                id:2,
                url:null,
            }
        ],
        kind:'white-shirt',
        price:'899',
        rating:4.5,

    },
    {
        id:2,
        shoppingImages:[
            {
                id:1,
                url:null,
            },
            {
                id:2,
                url:null,
            }
        ],
        kind:'rainbow-shirt',
        price:'999',
        rating:4.4,

    },
    
];