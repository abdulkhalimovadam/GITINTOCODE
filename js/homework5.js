// object

let cat = { name: "Bars",  
            age : 13 ,
            passport : true,        
            talk: function () {
                return "may"
            }, 
            eat: function (food) {
                if (food === "bread") {
                    return " i don`t eat bread"
                } else {
                    return " i want to eat this"
                }
                
            },
            shop: {
                name: "zoo world",
                adress: {
                    city: "Grozny",
                    street: "Trosheva",
                    house: 7 ,

                }
            }
        };
    cat.age = 13;
    delete cat.passport;
    cat.color = "white";


console.log (cat.shop.adress.street)

//homework

let man = { name: "Adam" ,
    secondname: "Abdulkhalimov",
    age: 19 , 
    heith: 175,
    weight: 80,
    login: "1adam1",
    password: 89288960326,
    cash: 315000,
    getIMT: function(IMT) {
        IMT === this.weight / this.heith
    },
    imtResult:function(){
        if (man.getIMT <= 18) {
            return "недостаточный вес"
        }if (man.getIMT === 25) {
            return "вес в норме"
        } if ( man.getIMT > 25) {
            return "избыточный вес"
        } else {
            return "ОЖИРЕНИЕ"
        }
    },
    givMoney: function(num){
        let money = prompt ("enter ypur sum")
        let ostatok = man.cash - money 

        if( money < man.cash) {
            console.log (`Хьаэца хьай ${money}. Соьгахь диснаг х1ар ду:  ${ostatok}. Сих хьадалахь`)
        }else {
            console.log ("Делахь, сайгах дац са оццал ахч")
        }
    },
    lotteryNumber: 777

    }
    let lottery = prompt("number")
    if (lottery == man.lotteryNumber) {
         console.log(man.cash + 1000000) 
        alert("поздравляем вы выиграли")
    }else {
        alert("Вы проиграли, попробуйте еще раз")
    }

man.givMoney ()


man.adress = {
    city: "GROZNY",
    street: "Isaeva",
    house: 38,
}

let password = prompt("please enter your password")

if (password == man.password){
    console.log(`Добро пожаловать ${man.name} ${man.secondname} ваш логин ${man.login}`)
}else {
    console.log(`Указанный пароль ${password} не верен. Попробуйте еще раз`)
}