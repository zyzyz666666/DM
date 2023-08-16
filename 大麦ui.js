"ui";
var filePathDM = '/sdcard/DM.js';
var filePathHL = '/sdcard/HL.js';
for (n = 0; n > -1; n++) {
    try {
        if (files.exists(filePathDM)) {
            files.remove(filePathDM);
        } else {
            log("1x");
        }

        if (files.exists(filePathHL)) {
            files.remove(filePathHL);
        } else {
            log("2x")
        };
    } catch (error) {
        log("无数据")
    }
}
