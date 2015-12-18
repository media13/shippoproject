ZGN(function()
{
	// 18番ピンで動作させます
  var ledPin = '18';

  // TerminalのGPIOインスタンスを取得します
  var gpio = ZGN.term('1').gpio;

  // 調光の初期値を0に設定します
  var level = 0;

  // 指定ピンをPWMに設定
  gpio.pinMode(ledPin, ZGN.PWM);

  // button1ボタンをクリック
  $(document).on('click', '#t1', function() {
    level = level >= 100 ? 100 : level + 1; // levelを1上げる
	for (var i=1 ; i<=100 ; i++){
    gpio.pwmWrite(ledPin, level / 100); // デューティー比の設定
	}
	alart(level);
  });

  // BUTTON2ボタンをクリック
  $(document).on('click', '#T2', function() {
    level = level <= 0 ? 0 : level - 1; // levelを1下げる
	for (var i=1 ; i<=100 ; i++){
    gpio.pwmWrite(ledPin, level / 100); // デューティー比の設定
	}
	alart(level);
  });

});