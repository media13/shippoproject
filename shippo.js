ZGN(function()
{

  // 調光の初期値を0に設定します
  var level = 0;

  // 18番ピンで動作させます
  var ledPin = '1';

  // id=1のTerminalインスタンスを取得します
  var term = ZGN.term('1');

  // TerminalのGPIOインスタンスを取得します
  var gpio = term.gpio;

  // 指定ピンを出力に設定
  gpio.pinMode(ledPin, ZGN.PWM);

  // ONボタンをクリック
  $(document).on('click', '#on', function() {
    level = level >= 10 ? 10 : level + 1; // levelを1上げる
    gpio.pwmWrite(ledPin, level / 10); // 点灯
  });

  // OFFボタンをクリック
  $(document).on('click', '#off', function() {
    level = level <= 0 ? 0 : level - 1; // levelを1下げる
    gpio.pwmWrite(ledPin, level / 10); // 消灯
  });

});