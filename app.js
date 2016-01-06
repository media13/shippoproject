ZGN(function()
{
  // 17番ピンで動作させます
  var ledPin = '0';

  // TerminalのGPIOインスタンスを取得します
  var gpio = ZGN.term('1').gpio;

  // 指定ピンを出力に設定
  gpio.pinMode(ledPin, ZGN.OUTPUT);

  // ONボタンをクリック
  $(document).on('click', '#on', function() {
    var i = 0;
/*    var light = setInterval(function(){
      if(i%2 == 0){
        gpio.digitalWrite(ledPin, ZGN.HIGH); // 点灯
        i++;
      }else{
        gpio.digitalWrite(ledPin, ZGN.LOW); // 消灯
        i++;
      }
      if(i == 2000){
        clearInterval(light);
        alert("終了");
      }
    }, 0.5);*/
    var servo = setInterval(function(){
      var servo_on = setInterval(function(){
        gpio.digitalWrite(ledPin, ZGN.HIGH);
        clearInterval(servo_on);
      }, 250);
      gpio.digitalWrite(ledPin, ZGN.LOW);
      i++;;
      if(i == 100){
        clearInterval(servo);
        alert("終了");
      }
    }, 500);

  });

  // OFFボタンをクリック
  $(document).on('click', '#off', function() {
    gpio.digitalWrite(ledPin, ZGN.LOW); // 消灯
  });
});