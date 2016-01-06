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
    var ms = new Date();
    var i = 0;

    ms.setUTCMilliseconds();
    alert(ms.getUTCMilliseconds()); 
    do{
      ms.setUTCMilliseconds();
      if(ms.getUTCMilliseconds() < 500){
        gpio.digitalWrite(ledPin, ZGN.HIGH); // 点灯
        i++;
      }else{
        gpio.digitalWrite(ledPin, ZGN.LOW); // 消灯
        i++;
      }   
    }while(i<10000)
    alert("終了");
  });

  // OFFボタンをクリック
  $(document).on('click', '#off', function() {
    gpio.digitalWrite(ledPin, ZGN.LOW); // 消灯
  });
});