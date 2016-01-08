﻿ZGN(function()
{
  // 18番ピンで動作させます
  var ledPin = '1';

  // TerminalのGPIOインスタンスを取得します
  var gpio = ZGN.term('1').gpio;

  // 調光の初期値を0に設定します
  var level = 7.5;

  // 指定ピンをPWMに設定
  gpio.pinMode(ledPin, ZGN.PWM);

  // Brightボタンをクリック
  $(document).on('click', '#bright', function() {
    level = level >= 10 ? 10 : level + 0.5; // levelを1上げる
    gpio.pwmWrite(ledPin, level / 100); // デューティー比の設定
  });

  // Darkボタンをクリック
  $(document).on('click', '#dark', function() {
    level = level <= 5 ? 5 : level - 0.5; // levelを1下げる
    gpio.pwmWrite(ledPin, level / 100); // デューティー比の設定
  });
});