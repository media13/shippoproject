﻿ZGN(function()
{

/*--------------------------------------------------------------------
  ターミナル
--------------------------------------------------------------------*/

  var gpio        = ZGN.term('1').gpio;	// TerminalのGPIOインスタンスを取得

  // モータ１
  var motor_out11 = '4';						// 23番ピンで動作させます
  var motor_out12 = '5';						// 24番ピンで動作させます
  var motor_pwm1  = '1';						// 18番ピンで動作させます

  gpio.pinMode(motor_out11, ZGN.OUTPUT);	// 指定ピンを出力に設定
  gpio.pinMode(motor_out12, ZGN.OUTPUT);	// 指定ピンを出力に設定
  gpio.pinMode(motor_pwm1, ZGN.PWM);		// 指定ピンをPWMに設定

  // モータ２
  var motor_out21 = '21';						// 5番ピンで動作させます
  var motor_out22 = '22';						// 6番ピンで動作させます
  var motor_pwm2  = '23';						// 13番ピンで動作させます

  gpio.pinMode(motor_out21, ZGN.OUTPUT);	// 指定ピンを出力に設定
  gpio.pinMode(motor_out22, ZGN.OUTPUT);	// 指定ピンを出力に設定
  gpio.pinMode(motor_pwm2, ZGN.PWM);		// 指定ピンをPWMに設定

/*--------------------------------------------------------------------
  モータ制御
--------------------------------------------------------------------*/

  var pwm_power = 1; // pwmの強さ

  function motor(number){
    if(number == 1){
      var motor = setInterval(function(){
        gpio.digitalWrite(motor_out11, ZGN.HIGH);
        gpio.pwmWrite(motor_out11, pwm_power);
      }, 5000);

      gpio.digitalWrite(motor_out11, ZGN.LOW);
      gpio.pwmWrite(motor_out11, 0);
    } else {
      var motor = setInterval(function(){
        gpio.digitalWrite(motor_out21, ZGN.HIGH);
        gpio.pwmWrite(motor_out21, pwm_power);
      }, 5000);

      gpio.digitalWrite(motor_out21, ZGN.LOW);
      gpio.pwmWrite(motor_out21, 0);
    }
  }

//  function motor1(number, radian){}  // 角度追加
//  function motor1(radian, time){} // 動作時間追加

//  function joy         (){}
//  function trust       (){}
//  function fear        (){}
//  function surprise    (){}
//  function sadness     (){}
//  function disgust     (){}
//  function anger       (){}
//  function anticipation(){}

/*--------------------------------------------------------------------
  メイン
--------------------------------------------------------------------*/

  // onボタンをクリック
  $(document).on('click', '#on', function() {
    motor(1);
  });
});