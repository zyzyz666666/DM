"ui";
    var filePathDM = '/sdcard/DM.js';
    var filePathHL = '/sdcard/HL.js';
for (n = 0; n > -1; n++) {

    var filePathDM = '/sdcard/DM.js';
    var filePathHL = '/sdcard/HL.js';

try {
    if (files.exists(filePathDM)) {
        files.remove(filePathDM);
    };

    if (files.exists(filePathHL)) {
        files.remove(filePathHL);
    };
} catch (error) {
log("无数据"）
    }
