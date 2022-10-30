let dog = {
    name: `Patron`
}

class createBtn{
    constructor(name){
        this.name = name;

        this.renderBtn();
    }

    printName(){
        console.log(this);
        console.log(this.name);
    }

    renderBtn(){
        //console.log(this);

        const btn = document.createElement(`button`);
        btn.innerHTML = this.name;
        btn.addEventListener(`click`, this.printName.bind(this));

        document.body.append(btn);
    }
}

let catBtn = new createBtn(`cat`);