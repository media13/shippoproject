ZGN(function()
{
  // 17番ピンで動作させます
  var ledPin = '17';

  // id=1のTerminalインスタンスを取得します
  var term = ZGN.term('1');

  // Terminalの通信状態を判定
  if( term.isAlive() ){
    alert( 'OK' );
  }

  // TerminalのGPIOインスタンスを取得します
  var gpio = term.gpio;

  // 指定ピンを出力に設定
  gpio.pinMode(ledPin, ZGN.OUTPUT);

  // ONボタンをクリック
  $(document).on('click', '#on', function() {
    gpio.digitalWrite(ledPin, ZGN.HIGH); // 点灯
  });

  // OFFボタンをクリック
  $(document).on('click', '#off', function() {
    gpio.digitalWrite(ledPin, ZGN.LOW); // 消灯
  });
});