let allGoods = {
    "Шапки с отворотом":{
        name:"Шапки с отворотом",
        
        imgURL:"./images/c1main.jpg",
        categoryCatalog:{
        'shapka1': {

            id:1,
            name: "Комплект: шапка с отворотом и ушками + снуд",
            color:"серая",
            price: 700,
            pictureURL:["./images/c1_01_01.jpg","./images/c1_01_02.jpg","./images/c1_01_03.jpg","./images/c1_01_04.jpg"],
            material:"трикотаж кашкорсе",
            consists:"хлопок 95% / 5% эластан",
            "наличие":0
    
        },
        'shapka2':{
            id:2,
            name: "Комплект: шапка с отворотом и ушками + снуд",
            color:"розовая",
            price: 700,
            pictureURL:["./images/c1_02_01.jpg","./images/c1_02_02.jpg","./images/c1_02_03.jpg","./images/c1_02_04.jpg","./images/c1_02_05.jpg"],
            material:"трикотаж кашкорсе",
            consists:"хлопок 95% / 5% эластан",
            "наличие":0
    
    
        },
        'shapka3':{
            id:3,
            name: "Комплект: шапка с отворотом и ушками + снуд",
            color:"голубая",
            price: 700,
            pictureURL:["./images/c1_03_01.jpg","./images/c1_03_02.jpg"],
            material:"трикотаж кашкорсе",
            consists:"хлопок 95% / 5% эластан",
            "наличие":0
    
    
        },
        'shapka4':{
            id:4,
            name: "Комплект: шапка с отворотом + снуд",
            color:"темно-серая",
            price: 700,
            pictureURL:["./images/c1_04_01.jpg","./images/c1_04_02.jpg"],
            material:"трикотаж кашкорсе",
            consists:"хлопок 95% / 5% эластан",
            "наличие":0
        },
        'shapka5':{
            id:5,
            name: "Комплект: шапка с отворотом и ушками + снуд",
            color:"бежевая",
            price: 700,
            pictureURL:["./images/c1_05_01.jpg","./images/c1_05_02.jpg","./images/c1_05_03.jpg"],
            material:"трикотаж кашкорсе",
            consists:"хлопок 95% / 5% эластан",
            "наличие":0
        }

        }
    },
    "Шапки с вязочками":{
        name:"Шапки с вязочками",
        
        imgURL:"./images/c2main.jpg",
        categoryCatalog:{
            'shapka1':{
                id:6,
                name: "Комплект: шапка с вязочками и ушками + снуд",
                color:"голубая",
                price: 700,
                pictureURL:["./images/c2_01_01.jpg","./images/c2_01_02.jpg"],
                material:"трикотаж кашкорсе",
                consists:"верх 95% хлопок, подкладка 100% хлопок, флис 100% п/э",
                "наличие":0
            },
            'shapka2':{
                id:7,
                name: "Комплект: шапка с вязочками и ушками + снуд",
                color:"зеленая",
                price: 700,
                pictureURL:["./images/c2_02_01.jpg","./images/c2_02_02.jpg","./images/c2_02_03.jpg"],
                material:"трикотаж кашкорсе",
                consists:"верх 95% хлопок, подкладка 100% хлопок, флис 100% п/э",
                "наличие":0
            },
            'shapka3':{
                id:8,
                name: "Комплект: шапка с вязочками и ушками + снуд",
                color:"серая",
                price: 700,
                pictureURL:["./images/c2_03_01.jpg","./images/c2_03_02.jpg"],
                material:"трикотаж кашкорсе",
                consists:"верх 95% хлопок, подкладка 100% хлопок, флис 100% п/э",
                "наличие":0
            }
        }
    },
    "Повязки на голову":{
        name:"Повязки на голову",
        
        imgURL:"./catalog/images/pinkHat.jpg"
    },
    "Банданы":{
        name:"Банданы",
        
        imgURL:"./catalog/images/pinkHat.jpg"
    },
    "Панамки":{
        name:"Панамки",
        
        imgURL:"./catalog/images/pinkHat.jpg"
    },
    "Косынки":{
        name:"Косынки",
        
        imgURL:"./catalog/images/pinkHat.jpg"
    }
};

let deliveryDetails = {
    'самовывоз':{
        name: 'Самовывоз:',
        howTo: ['г. Ярославль, Торговый центр "Яркий", проспект Машиностроителей, 30 '] 
        
    },
    'по Ярославлю':{
        name: 'По городу Ярославль:',
        howTo:['По городу Ярославль доставка осуществляется по договорённости от 200₽ до 400₽ в зависимости от района и дальности.']
    },
    'по России':{
        name: 'По России:',
        howTo: ['Доставка по России СДЭК от 350₽','Доставка почта России от 300₽']
    }
      
    
}