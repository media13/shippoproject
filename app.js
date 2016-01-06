﻿ZGN(function()
{
  // 17番ピンで動作させます
  var ledPin = '0';

  // TerminalのGPIOインスタンスを取得します
  var gpio = ZGN.term('1').gpio;

  // 指定ピンを出力に設定
  gpio.pinMode(ledPin, ZGN.OUTPUT);

  // ONボタンをクリック
  $(document).on('click', '#on', function() {
    var ms = new Date();
    alert(ms.getUTCMilliseconds()); 

    if(ms.getUTCMilliseconds() < 500){
      gpio.digitalWrite(ledPin, ZGN.HIGH); // 点灯
    }
  });

  // OFFボタンをクリック
  $(document).on('click', '#off', function() {
    gpio.digitalWrite(ledPin, ZGN.LOW); // 消灯
  });
});