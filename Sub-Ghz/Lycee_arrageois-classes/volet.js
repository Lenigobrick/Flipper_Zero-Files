let subghz = require("subghz");
let submenu = require("submenu");
let notify = require("notification");
let keyboard = require("keyboard");
subghz.setup();
subghz.setIdle();
subghz.setFrequency(433920000);

submenu.addItem("Down All", 0);
submenu.addItem("Up All", 1);
submenu.addItem("TROLL - G6", 2);
submenu.setHeader("Select an option:");
let result = submenu.show();
let nbVolet = 16;

if (result === 0) {
    for (let i = 0; i < 2; i++) {
        print("pass: ", i+1, "/ 2")
        print("0/" + nbVolet)
        subghz.transmitFile("/ext/subghz/lycee/r3/1_down.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/r3/2_down_all.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/r3/3_down.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/r3/4_down_all.sub", 5);
        print("1/" + nbVolet)
        subghz.transmitFile("/ext/subghz/lycee/d5/1_down_all.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/d5/2_down.sub", 5);
        print("2/" + nbVolet)
        subghz.transmitFile("/ext/subghz/lycee/d6/1_down.sub", 5);
        print("3/" + nbVolet)
        subghz.transmitFile("/ext/subghz/lycee/d7/1_down.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/d7/2_down.sub", 5);
        print("4/" + nbVolet)
        subghz.transmitFile("/ext/subghz/lycee/g6/1_down.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/g6/2_down.sub", 5);
        print("5/" + nbVolet)
        subghz.transmitFile("/ext/subghz/lycee/g7/1_down.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/g7/2_down.sub", 5);
        print("6/" + nbVolet)
        subghz.transmitFile("/ext/subghz/lycee/g10/1_down.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/g10/2_down.sub", 5);
        print("7/" + nbVolet)
        subghz.transmitFile("/ext/subghz/lycee/g2/1_down.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/g2/2_down.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/g2/3_down.sub", 5);
        print("8/" + nbVolet)
        subghz.transmitFile("/ext/subghz/lycee/g5/1_down.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/g5/2_down.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/g5/3_down.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/g5/4_down.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/g5/5_down.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/g5/6_down.sub", 5);
        print("9/" + nbVolet)
        subghz.transmitFile("/ext/subghz/lycee/sp5/1_down.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/sp5/2_down.sub", 5);
        print("10/" + nbVolet)
        subghz.transmitFile("/ext/subghz/lycee/sp7/1_down.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/sp7/2_down.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/sp7/3_down.sub", 5);
        print("11/" + nbVolet)
        subghz.transmitFile("/ext/subghz/lycee/etude/1_down.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/etude/2_down.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/etude/3_down.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/etude/4_down.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/etude/5_down.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/etude/6_down.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/etude/7_down.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/etude/8_down.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/etude/9_down.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/etude/10_down.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/etude/11_down.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/etude/12_down.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/etude/13_down.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/etude/14_down.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/etude/15_down.sub", 5);
        print("12/" + nbVolet)
        subghz.transmitFile("/ext/subghz/lycee/unk1/1_down.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/unk1/2_down.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/unk1/3_down.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/unk1/4_down.sub", 5);
        print("13/" + nbVolet)
        subghz.transmitFile("/ext/subghz/lycee/unk2/1_down.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/unk2/2_down.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/unk2/3_down.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/unk2/4_down.sub", 5);
        print("14/" + nbVolet)
        subghz.transmitFile("/ext/subghz/lycee/unk3/1_down.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/unk3/2_down.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/unk3/3_down.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/unk3/4_down.sub", 5);
        print("15/" + nbVolet)
        subghz.transmitFile("/ext/subghz/lycee/unk4/1_down.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/unk4/2_down.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/unk4/3_down.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/unk4/4_down.sub", 5);
        print("16/" + nbVolet)
    }
    notify.success();
} else if (result === 1) {
    for (let i = 0; i < 2; i++) {
        print("pass: ", i+1, "/ 2")
        print("0/" + nbVolet)
        subghz.transmitFile("/ext/subghz/lycee/r3/1_up.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/r3/2_up_all.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/r3/3_up.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/r3/4_up_all.sub", 5);
        print("1/" + nbVolet)
        subghz.transmitFile("/ext/subghz/lycee/d5/1_up_all.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/d5/2_up.sub", 5);
        print("2/" + nbVolet)
        subghz.transmitFile("/ext/subghz/lycee/d6/1_up.sub", 5);
        print("3/" + nbVolet)
        subghz.transmitFile("/ext/subghz/lycee/d7/1_up.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/d7/2_up.sub", 5);
        print("4/" + nbVolet)
        subghz.transmitFile("/ext/subghz/lycee/g6/1_up.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/g6/2_up.sub", 5);
        print("5/" + nbVolet)
        subghz.transmitFile("/ext/subghz/lycee/g7/1_up.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/g7/2_up.sub", 5);
        print("6/" + nbVolet)
        subghz.transmitFile("/ext/subghz/lycee/g10/1_up.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/g10/2_up.sub", 5);
        print("7/" + nbVolet)
        subghz.transmitFile("/ext/subghz/lycee/g2/1_up.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/g2/2_up.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/g2/3_up.sub", 5);
        print("8/" + nbVolet)
        subghz.transmitFile("/ext/subghz/lycee/g5/1_up.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/g5/2_up.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/g5/3_up.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/g5/4_up.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/g5/5_up.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/g5/6_up.sub", 5);
        print("9/" + nbVolet)
        subghz.transmitFile("/ext/subghz/lycee/sp5/1_up.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/sp5/2_up.sub", 5);
        print("10/" + nbVolet)
        subghz.transmitFile("/ext/subghz/lycee/sp7/1_up.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/sp7/2_up.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/sp7/3_up.sub", 5);
        print("11/" + nbVolet)
        subghz.transmitFile("/ext/subghz/lycee/etude/1_up.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/etude/2_up.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/etude/3_up.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/etude/4_up.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/etude/5_up.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/etude/6_up.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/etude/7_up.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/etude/8_up.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/etude/9_up.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/etude/10_up.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/etude/11_up.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/etude/12_up.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/etude/13_up.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/etude/14_up.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/etude/15_up.sub", 5);
        print("12/" + nbVolet)
        subghz.transmitFile("/ext/subghz/lycee/unk1/1_up.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/unk1/2_up.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/unk1/3_up.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/unk1/4_up.sub", 5);
        print("13/" + nbVolet)
        subghz.transmitFile("/ext/subghz/lycee/unk2/1_up.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/unk2/2_up.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/unk2/3_up.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/unk2/4_up.sub", 5);
        print("14/" + nbVolet)
        subghz.transmitFile("/ext/subghz/lycee/unk3/1_up.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/unk3/2_up.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/unk3/3_up.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/unk3/4_up.sub", 5);
        print("15/" + nbVolet)
        subghz.transmitFile("/ext/subghz/lycee/unk4/1_up.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/unk4/2_up.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/unk4/3_up.sub", 5);
        subghz.transmitFile("/ext/subghz/lycee/unk4/4_up.sub", 5);
        print("16/" + nbVolet)
    }
    notify.success();
} else if (result === 2){
    submenu.addItem("5 MIN", 0);
    submenu.addItem("10 MIN", 1);
    let result2 = submenu.show();
    if (result2 === 0) {
        delay(5000);
        for (let i = 0; i < 5; i++) {
            subghz.transmitFile("/ext/subghz/lycee/g6/1_down.sub", 5);
            subghz.transmitFile("/ext/subghz/lycee/g6/2_down.sub", 5);
            delay(300000);
            subghz.transmitFile("/ext/subghz/lycee/g6/1_up.sub", 5);
            subghz.transmitFile("/ext/subghz/lycee/g6/2_up.sub", 5);
            delay(300000);
        }
        notify.success();
    } else if (result2 === 1) {
        delay(5000);
        for (let i = 0; i < 5; i++) {
            subghz.transmitFile("/ext/subghz/lycee/g6/1_down.sub", 5);
            subghz.transmitFile("/ext/subghz/lycee/g6/2_down.sub", 5);
            delay(600000);
            subghz.transmitFile("/ext/subghz/lycee/g6/1_up.sub", 5);
            subghz.transmitFile("/ext/subghz/lycee/g6/2_up.sub", 5);
            delay(600000);
        }
        notify.success();
    } else {
        notify.error();
    }


} else {
    notify.error();
    for (let i = 0; i < 10; i++) {
        notify.blink("red", "short");
        delay(500);
    }
}

delay(1000)


subghz.end()