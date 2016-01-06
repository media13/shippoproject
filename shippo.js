ZGN(function()
{

  // モータの初期値を90radに設定します
  var rad = 90;

  // 18番ピンで動作させます
  var ledPin = '1';

  // id=1のTerminalインスタンスを取得します
  var term = ZGN.term('1');

  // TerminalのGPIOインスタンスを取得します
  var gpio = term.gpio;

  // 指定ピンを出力に設定
  gpio.pinMode(ledPin, ZGN.PWM);

  // モータの角度をセットする。
  function ServoSet(radian){
    
  }

  ServoSet(rad);

  // 1ボタンをクリック
  $(document).on('click', '#1', function() {
    rad = rad >= 180 ? 180 : rad + 1; // モータを+1radする
    ServoSet(rad);
  });

  // -1ボタンをクリック
  $(document).on('click', '#-1', function() {
    rad = rad <= 0 ? 0 : rad - 1; // モータを-1radする
    ServoSet(rad);
  });

  // 10ボタンをクリック
  $(document).on('click', '#10', function() {
    rad = rad >= 180 ? 180 : rad + 10; // モータを+10radする
    ServoSet(rad);
  });

  // -10ボタンをクリック
  $(document).on('click', '#-10', function() {
    rad = rad <= 0 ? 0 : rad - 10; // モータを-10radする
    ServoSet(rad);
  });
});