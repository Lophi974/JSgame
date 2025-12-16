class test {
    constructor(health, damage, armor, waepon) {
        this.health = health
        this.damage = damage
        this.armor = armor
        this.waepon = waepon
    }
}

const p1 = new test(100, 20, 5)
const p2 = new test(200, 10, 3)

const choice = chooseWaepon()

function chooseWaepon() {
    process.stdout.write("choose your waepon: sword or bow\n");
    process.stdin.on('data', (data) => {
        if(data.toString().trim() === "sword"){
            p1.damage = p1.damage + 2;
            // console.log(p1.damage)
            console.log(p2.health - (p1.damage * ((100-p2.armor)/100)))
            process.exit();
        }
        else if (data.toString().trim() === "bow"){
            p1.damage = p1.damage + 1;
            // console.log(p1.damage)
            console.log(p2.health - (p1.damage * ((100-p2.armor)/100)))
            process.exit();
        }
        else{
            console.log("no waepon")
            process.exit();
        }
    
    });
}

