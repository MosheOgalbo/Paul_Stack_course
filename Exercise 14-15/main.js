
//1
const cat = {
    name: "koko",
    NameOfOwner: " loni",
    sayMewo: "male",
    howling: function () {
        console.log("myuo myuo");
    },
}

//2

//console.log(cat);


//const newKeyCat = prompt("Please enter a key name");
//const newValyuCat = prompt("Please enter a new value for the keys I added");
//cat[newKeyCat] = newValyuCat;
//console.log(cat);


//3
const ReceivingCats = (cat, name2) => {
    if (cat.name === name2) {
        return true;
    }
    else {
        return false;
    }
}

//console.log(ReceivingCats(cat,prompt("Please enter a key name")));


//4

const TotalValues = (cat1, cat2) => {
    const BigValues = {}
    for (i in cat1) {
        BigValues[i] = cat1[i]
    }

    for (j in cat2) {
        BigValues[j] = cat2[j]
    }
    return BigValues;
};


const cat1 = {
    name: "popo",
    NameOfOwner: " loni",
    sayMewo: "male",
    howling: function () {
        console.log("myuo myuo");
    },
}

const cat2 = {
    name1: "lolo",
    NameOfOwner1: " loni",
    sayMewo1: "male",
    howling1: function () {
        console.log("myuo myuo");
    },
}

//console.log(cat1);
//console.log(cat2);

//console.log(TotalValues(cat1,cat2));


//5

const CatInherits = () => {

    const catMaine = {
        name: " cat",
        lasname: " nyuo",
        age: 5,
        hairColor: prompt("What is the cat's vote?"),
    }
    return catMaine
}

//const cat4=CatInherits();
//const cat5=CatInherits();
//console.log(cat4,cat5)


//6

const DeterminingNames = () => {
    const allCat ={};
   for(let i=0;i<3;i++){
    const name = prompt("What is the cat's vote?");
    const name1 = prompt("What is the cat's vote?");

   }
   
}


const SearchCat = () => {
    let ListNames;

    for (let i = 0; i < 2; i++) {
        
        ListNames = DeterminingNames();

    }
    debugger
    index=DeterminingNames();

    for (let i=0;i < ListNames.length;i++){
        
        if (ReceivingCats(ListNames[i],index)){
            
            Console.log("Cat exists in the system");

        }
        else{
            Console.log("Cat not exists in the system");

        }
        
    }

}

SearchCat();