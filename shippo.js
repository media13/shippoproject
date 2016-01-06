ZGN(function()
{

/*--------------------------------------------------------------------
  ターミナル
--------------------------------------------------------------------*/

  var ledPin = '1';						// 18番ピンで動作させます
  var term   = ZGN.term('1'); 		// id=1のTerminalインスタンスを取得
  var gpio   = term.gpio;				// TerminalのGPIOインスタンスを取得
  gpio.pinMode(ledPin, ZGN.PWM);		// 指定ピンを出力に設定

/*--------------------------------------------------------------------
  モータ
--------------------------------------------------------------------*/

  var pwm_sycle = 20;		// PWM周期
  var pulse_min = 0.5;		// パルス制御の最小（rad = 0  ）
  var pulse_max = 2.4;		// パルス制御の最大（rad = 180）
  var pulse_unit = pulse_max - pulse_min / 180;
									// 単位ラジアン当たりのパルス制御

  var rad       = 90;		// モータの初期位置

/*--------------------------------------------------------------------
  モータ制御
--------------------------------------------------------------------*/

  // モータの角度をセットする。
  function ServoSet(radian){
    var rad = pulse_min + pulse_unit * radian;
    var i = 0;
    var servo = setInterval(function(){
      var servo_on = setInterval(function(){
        gpio.digitalWrite(ledPin, ZGN.HIGH);
        clearInterval(servo_on);
      }, calPalse(rad));
      gpio.digitalWrite(ledPin, ZGN.LOW);
    }, pwm_sycle);
  }

/*--------------------------------------------------------------------
  メイン
--------------------------------------------------------------------*/

  ServoSet(rad);		// モータを初期位置に設定

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

  // stopボタンをクリック
  $(document).on('click', '#stop', function() {
    gpio.digitalWrite(ledPin, ZGN.LOW);
  });
});