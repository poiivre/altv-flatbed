import * as alt from 'alt';

// { flatbed : ...., towed : ......}
let tows = []


alt.onClient('seln:flatbed:removetow', (player, thistow) => {

    let temptows = []
    tows.forEach(tow => {
        if (tow.flatbed != thistow.flatbed) {
            temptows.push(tow)
        }
    });

    tows = temptows

});

alt.onClient('seln:flatbed:addtow', (player, thisflatbed, thistowed) => {
    tows.push({ flatbed : thisflatbed, towed : thistowed })
});



alt.onClient('seln:flatbed:gettowedvehicleslist', (player) => {
    alt.emitClient(player, 'seln:flatbed:sendtowedvehicleslist', tows);
});

alt.onClient('seln:flatbed:getvehicleslist', (player) => {
    let list = alt.Vehicle.all;
    alt.emitClient(player, 'seln:flatbed:sendvehicleslist', list);
});
