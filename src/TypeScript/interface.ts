interface Player {
    name: string;
    score: number;
    attack?: (pk: Player) => string;
}

let P1: Player = {
    name: "P1",
    score: 0,
    attack: (pk: Player) => {
        return `${P1.name} attacks ${pk.name}`;
    }
}

let P2: Player = {
    name: "P2",
    score: 0,
    attack: function (pk: Player) {
        return `${P2.name} attacks ${pk.name}`;
    }
}

// if(P1.attack) {
//     console.log(P1.attack(P2));
// }