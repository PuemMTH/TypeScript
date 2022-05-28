"use strict";
let P1 = {
    name: "P1",
    score: 0,
    attack: (pk) => {
        return `${P1.name} attacks ${pk.name}`;
    }
};
let P2 = {
    name: "P2",
    score: 0,
    attack: function (pk) {
        return `${P2.name} attacks ${pk.name}`;
    }
};
// if(P1.attack) {
//     console.log(P1.attack(P2));
// }
