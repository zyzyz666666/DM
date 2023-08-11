"ui";

alert("最新版：v1.32");
ui.layout(
    <frame>
        <vertical bg="#eef2fb">
            <appbar>
                <toolbar id="toolbar" bg="#FF1493" title="大麦助手 v1.32" />
                <tabs id="tabs" bg="#FF69B4" />
                {/* FFC0CB */}
            </appbar>
            <horizontal >
                <Switch id="autoService" text="无障碍服务" checked="{{auto.service != null}}" textSize="15sp" />
                <Switch margin="12 0" id="floatyService" text="悬浮窗权限" checked="{{(new android.provider.Settings).canDrawOverlays(context)}}" />
            </horizontal>
            <horizontal w="*" h="1sp" margin="0 10 0 0" bg='#E2E2E2'></horizontal>     //透明条

            <viewpager id="viewpager">
                <ScrollView>
                    <vertical>
                        <horizontal w="*" h="1sp" margin="0 10 0 0" bg='#E2E2E2'></horizontal>     //透明条
                        <linear>
                            <button id="loge" text="查看数据" /><EditText id="putdata" hint="点击查看保存的数据" />
                        </linear>
                        <horizontal w="*" h="1sp" margin="0 10 0 0" bg='#E2E2E2'></horizontal>     //透明条
                        <linear>
                            <button id="ms" text="检查延迟" /><EditText id="msout" hint="查看手机延迟" />
                        </linear>
                        <horizontal w="*" h="1sp" margin="0 10 0 0" bg='#E2E2E2'></horizontal>     //透明条
                        <horizontal w="*" h="1sp" margin="0 10 0 0" bg='#E2E2E2'></horizontal>     //透明条
                        <linear >
                            <button text="解析脚本" id="download" />
                            <text id="loadyes" text="已解析✅" />
                            <text id="loadno" text="未解析❌" />
                            <button text="刷" id="downloadf5" />
                            <button text="卸" id="deletedown" />
                            <button text="adb" id="adb" />
                        </linear>
                        <button id="START" text="开始" textSize="28sp" />
                        <text textSize="16sp" textColor="black" text="  **检查脚本版本是否与软件版本一致，若不一致重新解析**" />
                    </vertical>
                </ScrollView>
                <ScrollView>
                    <vertical>
                        <linear>
                            <text textSize="22sp" textColor="black" text="输入日期:" /><input id="日期" hint="(周一 ~ 周日 ) " />
                        </linear>
                        <linear>
                            <text textSize="22sp" textColor="black" text="输入票档:" /> <input id="票档" hint="580/780/1280" inputType="number" />
                        </linear>
                        <linear>
                            <text textSize="22sp" textColor="black" text="输入观影人:" /><text textSize="22sp" textColor="black" text="提前前往大麦添加观影人" />
                        </linear>
                        <linear>
                            <input id="观影人" hint="用 ,，.。空格 隔开" />
                        </linear>
                        <horizontal w="*" h="1sp" margin="0 10 0 0" bg='#E2E2E2'></horizontal>     //透明条
                        <horizontal w="*" h="1sp" margin="0 10 0 0" bg='#E2E2E2'></horizontal>     //透明条
                        <linear>
                            <EditText id="output" hint="等待检查" /><button text="检查" id="check" /> <button id="release" text="清除" />
                        </linear>
                        <horizontal w="*" h="1sp" margin="0 10 0 0" bg='#E2E2E2'></horizontal>     //透明条
                        <horizontal w="*" h="1sp" margin="0 10 0 0" bg='#E2E2E2'></horizontal>     //透明条
                        <text textSize="16sp" textColor="black" text="本软件仅用于代替人工完成抢票，请勿用于非法用途！" />
                        <text textSize="16sp" textColor="black" text="**启动脚本前请打开该应用无障碍**" />
                        <linear>
                            <button id="savedm" text="保存" />
                        </linear>
                        <horizontal w="*" h="1sp" margin="0 10 0 0" bg='#E2E2E2'></horizontal>     //透明条
                    </vertical>
                </ScrollView>
                <ScrollView>
                    <vertical>
                        <text textSize="16sp" textColor="black" text="  **施工中…………**" />
                        <linear>
                            <text textSize="22sp" textColor="black" text="输入备选日期:" /><input id="回流日期" hint="用 ,，.。空格 隔开" />
                        </linear>
                        <linear>
                            <text textSize="22sp" textColor="black" text="输入备选票档:" /> <input id="回流票档" hint="用 ,，.。空格 隔开" />//inputType="number"
                        </linear>
                        <horizontal w="*" h="1sp" margin="0 10 0 0" bg='#E2E2E2'></horizontal>     //透明条
                        <horizontal w="*" h="1sp" margin="0 10 0 0" bg='#E2E2E2'></horizontal>     //透明条
                        <linear>
                            <EditText id="回流output" hint="等待检查" /><button text="检查" id="回流check" />
                        </linear>
                        <horizontal w="*" h="1sp" margin="0 10 0 0" bg='#E2E2E2'></horizontal>     //透明条
                        <horizontal w="*" h="1sp" margin="0 10 0 0" bg='#E2E2E2'></horizontal>     //透明条
                        <button id="回流savedm" text="回流保存" />
                        <button id="回流download" text="解析" />
                        <button id='hlloadf5' text="保存" />
                    </vertical>
                </ScrollView>
                {/* <ScrollView>//
                <vertical padding="16">
                    <frame height="200" gravity="center">
                        <linear>
                            <text textSize="22sp" textColor="black" text="账号文本: " /> <input id="账号文本" text="" hint="账号----密码" />
                        </linear>
                    </frame>
                </vertical>
            </ScrollView> */}

            </viewpager>
        </vertical>
        {/* <fab id="add" w="auto" h="auto" src="@drawable/ic_vpn_key_black_48dp"
            margin="16" layout_gravity="bottom|right" tint="#ffffff" /> */}

    </frame>

);
// 设置滑动页面的标题
ui.viewpager.setTitles(["首页", "抢", "回流"]);
// 让滑动页面和标签栏联动
ui.tabs.setupWithViewPager(ui.viewpager);


ui.loadyes.setVisibility(android.view.View.INVISIBLE);
ui.loadno.setVisibility(android.view.View.VISIBLE);


var bbb;
var ccc;
ui.check.on("click", function () {
    //app.startActivity("console");
    var c = "日期：" + ui.日期.text(); var d = "票档：" + ui.票档.text();
    var aaa = ui.观影人.text().split(/[,，.。：:\s]+/);
    bbb = [];
    for (var i = 0; i < aaa.length; i++) {
        if (aaa[i] !== "") {
            bbb.push(aaa[i]);
        }
    };
    ccc = bbb.join(',');
    var a = "观影人：" + bbb.length + "位"
    var w = c + "\n" + d + "\n" + a;
    log(w);
    for (n = 0; n < bbb.length; n++) {
        if (bbb[n] !== "") {
            var b = (n + 1) + "号观影人" + ":" + bbb[n];
            log(b);
            var newS = w + "\n" + b;
            w = newS;
        };
    }
    try {
        ui.output.setText(w);
    } catch (error) {
        log(error)
    }
});//删掉了

var eee; var fff; var ggg; var iii;
ui.回流check.on("click", function () {
    //app.startActivity("console");
    var ddd = ui.回流日期.text().split(/[,，.。：:\s]+/);
    eee = [];
    for (var i = 0; i < ddd.length; i++) {
        if (ddd[i] !== "") {
            eee.push(ddd[i]);
        }
    };
    fff = eee.join(',');
    var a = "备选场次：" + eee.length + "场"
    var w = a;
    log(w);
    for (n = 0; n < eee.length; n++) {
        if (eee[n] !== "") {
            var b = (n + 1) + "场" + ":" + eee[n];
            log(b);
            var newS = w + "\n" + b;
            w = newS;
        };
    };

    var ggg = ui.回流票档.text().split(/[,，.。：:\s]+/);
    hhh = [];
    for (var i = 0; i < ggg.length; i++) {
        if (ggg[i] !== "") {
            hhh.push(ggg[i]);
        }
    };
    iii = hhh.join(',');
    var c = "备选票档：" + hhh.length + "档"
    var v = c;
    log(v);
    for (n = 0; n < hhh.length; n++) {
        if (eee[n] !== "") {
            var d = (n + 1) + "档位" + ":" + hhh[n];
            log(d);
            var newSS = v + "\n" + d;
            v = newSS;
        };
    }


    try {
        ui.回流output.setText(w + "\n" + v);
    } catch (error) {
        log(error)
    }
});//删掉了

ui.release.on("click", function () {
    ui.日期.setText("");
    ui.票档.setText("");
    ui.观影人.setText("");
    ui.output.setText("");
});


////////////////////////////////////////////////////储存////////////////
var 大麦 = storages.create("大麦");
////////////////////////////////////////////////////储存////////////////
ui.savedm.click(function () {
    try {
        大麦.put("日期", ui.日期.text());
        大麦.put("票档", ui.票档.text());
        大麦.put("观影人", ccc);
        Initialize();
        toastLog("抢票设置 保存成功！");
    } catch (error) {
        app.startActivity("console")
        log(error);
        log("保存不成功")
    }
    // log(bbb)
    // log(ccc)
});

ui.回流savedm.click(function () {
    try {
        大麦.put("回流日期", fff);
        大麦.put("回流票档", iii);
        Initialize();
        toastLog("回流抢票设置 保存成功！");
    } catch (error) {
        app.startActivity("console")
        log(error);
        log("保存不成功")
    }
    // log(bbb)
    // log(ccc)
});

/////////////////////////////读取/////////////////////
// 读取脚本设置
function Initialize() {
    if (大麦.get("日期") != undefined) { ui.日期.setText(大麦.get("日期")) }
    if (大麦.get("票档") != undefined) { ui.票档.setText(大麦.get("票档")) }
    if (大麦.get("观影人") != undefined) { ui.观影人.setText(大麦.get("观影人")) }
    if (大麦.get("回流日期") != undefined) { ui.回流日期.setText(大麦.get("回流日期")) }
    if (大麦.get("回流票档") != undefined) { ui.回流票档.setText(大麦.get("回流票档")) }
};


ui.loge.on("click", function () {
    var A = 大麦.get("A");
    var B = 大麦.get("B");
    var C = 大麦.get("C");
    var D = 大麦.get("D");
    var E = 大麦.get("E");
    var F = 大麦.get("F");
    var day = 大麦.get("日期");
    var price = 大麦.get("票档");
    var people = 大麦.get("观影人")
    ui.putdata.setText("日期：" + day + "\n" + "票档：" + price + "\n" + "观影人：" + people + "\n" + "初始化数据：" + A + B + C + D + E + F);
    log(day + "\n" + price + "\n" + people);
    Initialize();
});

ui.ms.on("click", function () {
    threads.start(function () {
        var downloadProgress = 0; // 在循环之前定义下载进度变量
        var downloadDialog;
        var downloadDialog = dialogs.build({
            title: "检测中...",
            progress: {
                max: 100,
                showMinMax: true
            },
            autoDismiss: false
        })
            .show();

        for (var n = 0; n < 100; n++) {
            downloadProgress += 1;
            ui.run(function () {
                downloadDialog.setProgress(downloadProgress);
            });
            var b;
            if (n == 0) {
                b = 0;
            }
            var currentTime = new Date().getTime();
            var 测试 = textMatches(/这是测试|一个测试|这是一个/).findOne(1);
            if (测试) {
                log("测试都有？");
                break;
            }
            var nowtime = new Date().getTime();
            var a = nowtime - currentTime;
            b = b + a;
            if (downloadProgress >= 100) {
                downloadDialog.dismiss();
            }
        }
        var c;
        var d = b / 100
        if (d <= 30) {
            c = "几乎无延迟"
        } else if (30 < d && d < 50) {
            c = "低延迟"
        } else if (50 <= d && d < 65) {
            c = "中延迟"
        } else if (65 <= d && d < 80) {
            c = "高延迟"
        } else if (d >= 80) {
            c = "延迟太高了"
        }
        log("当前平均延迟：" + d + "毫秒:" + c)
        ui.run(function () {
            ui.msout.setText("当前平均延迟：" + d + "毫秒:" + c);
        });
    })

});

ui.START.on("click", function () {
    engines.execScriptFile("xfc.js")
});



////////////////////////////////////////////////////////////////////////////DM
var DMi = 0;
var DM;
var filePathDM = '/sdcard/DM.js';
ui.download.on("click", function () {
    toastLog("开始解析DM脚本");
    //
    function 解析DM() {
        let url = [
            'https://ghproxy.com/https://raw.githubusercontent.com/zyzyz666666/DM/main/harven',
        ];
        for (var i = 0; i < 2; i++) {
            try {
                let res = http.get(url[i], {
                    timeout: 10000 // 设置超时时间为10秒
                });
                console.log(res.statusCode);
                if (res.statusCode == 200) {
                    DM = res.body.string();
                    if (DM.indexOf('"uii"') == 0) {
                        DMi = 1;
                        toastLog('大麦' + '解析成功✅');
                        alert('大麦' + '解析成功✅')
                        //log("开始加载KSJS");
                        //engines.execScript("KSJS", KSJS);
                        break;
                    };
                } else {
                    toastLog('大麦' + '解析链接失败❌');
                    alert('大麦' + '解析链接失败❌')
                }
            } catch (error) {
                if (error instanceof java.net.SocketTimeoutException) {
                    toastLog('大麦' + '解析超时❌');
                    alert('大麦' + '解析超时❌')
                    continue; // 继续下一次循环请求
                } else {
                    toastLog('大麦' + '解析失败❌' + error)//，错误：' + error);
                    alert('大麦' + '解析失败❌')
                };
            };

        }

    };

    threads.start(function () { // 创建新的子线程
        解析DM();
    });
    //
    if (DMi == 1) {
        toastLog("正在保存大麦");
        if (files.exists(filePathDM)) {
            files.remove(filePathDM);
        };
        files.write(filePathDM, DM);
        toastLog("大麦 已保存");
        ui.loadyes.setVisibility(android.view.View.VISIBLE);
        ui.loadno.setVisibility(android.view.View.INVISIBLE);
    };
});


ui.downloadf5.on("click", function () {
    if (DMi == 1) {
        if (files.exists(filePathDM)) {
            files.remove(filePathDM);
        };
        files.write(filePathDM, DM);
        toastLog("大麦 已保存");
        ui.loadyes.setVisibility(android.view.View.VISIBLE);
        ui.loadno.setVisibility(android.view.View.INVISIBLE);
    } else if (DMi == 0) {
        ui.loadyes.setVisibility(android.view.View.INVISIBLE);
        ui.loadno.setVisibility(android.view.View.VISIBLE);
    };
});


ui.deletedown.on("click", function () {
    if (files.exists(filePathDM)) {
        files.remove(filePathDM);
    };
    alert('大麦' + '已卸载')
    DMi = 0;
    ui.loadyes.setVisibility(android.view.View.INVISIBLE);
    ui.loadno.setVisibility(android.view.View.VISIBLE);
});

ui.adb.on("click", function () {
    app.startActivity("console")
});
/////////////////////////////////////////////////////////////////////////////ks
////////////////////////////////////////////////////////////////////////////HL
var HLi = 0;
var HL;
var filePathHL = '/sdcard/HL.js';
ui.回流download.on("click", function () {
    toastLog("开始解析HL脚本");
    //
    function 解析HL() {
        let url = [
            'https://ghproxy.com/https://raw.githubusercontent.com/zyzyz666666/DM/main/回流',
        ];
        for (var i = 0; i < 2; i++) {
            try {
                let res = http.get(url[i], {
                    timeout: 10000 // 设置超时时间为10秒
                });
                console.log(res.statusCode);
                if (res.statusCode == 200) {
                    HL = res.body.string();
                    if (HL.indexOf('"uii"') == 0) {
                        HLi = 1;
                        toastLog('大麦' + '解析成功✅');
                        alert('大麦' + '解析成功✅')
                        //log("开始加载KSJS");
                        //engines.execScript("KSJS", KSJS);
                        break;
                    };
                } else {
                    toastLog('大麦' + '解析链接失败❌');
                    alert('大麦' + '解析链接失败❌')
                }
            } catch (error) {
                if (error instanceof java.net.SocketTimeoutException) {
                    toastLog('大麦' + '解析超时❌');
                    alert('大麦' + '解析超时❌')
                    continue; // 继续下一次循环请求
                } else {
                    toastLog('大麦' + '解析失败❌' + error)//，错误：' + error);
                    alert('大麦' + '解析失败❌')
                };
            };

        }

    };

    threads.start(function () { // 创建新的子线程
        解析HL();
    });
    //
    if (HLi == 1) {
        toastLog("正在保存 回流");
        if (files.exists(filePathHL)) {
            files.remove(filePathHL);
        };
        files.write(filePathHL, HL);
        toastLog("回流 已保存");
        ui.loadyes.setVisibility(android.view.View.VISIBLE);
        ui.loadno.setVisibility(android.view.View.INVISIBLE);
    };
});

ui.hlloadf5.on("click", function () {
    if (HLi == 1) {
        if (files.exists(filePathHL)) {
            files.remove(filePathHL);
        };
        files.write(filePathHL, HL);
        toastLog("大麦 已保存");
        ui.loadyes.setVisibility(android.view.View.VISIBLE);
        ui.loadno.setVisibility(android.view.View.INVISIBLE);
    } else if (HLi == 0) {
        ui.loadyes.setVisibility(android.view.View.INVISIBLE);
        ui.loadno.setVisibility(android.view.View.VISIBLE);
    };
});
