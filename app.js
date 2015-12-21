ZGN(function() {

    // Termインスタンスを取得
    var term = ZGN.term(1);

    // 18番ピンで動作させます
    var pinNo = '18';

    // 指定ピンを出力に設定
    term.gpio.pinMode(pinNo, ZGN.OUTPUT);

    // ONボタンをクリック
    $(document).on('click', '#on', function() {
        term.gpio.digitalWrite(pinNo, ZGN.HIGH);    // 点灯
    });

    // OFFボタンをクリック
    $(document).on('click', '#off', function() {
        term.gpio.digitalWrite(pinNo, ZGN.LOW);     // 消灯
    });
});