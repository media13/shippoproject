ZGN(function()
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

  var motor_out = motor_out11;	// モータの種類、回転方向
  var motor_pwm = motor_pwm1;		// 
  var time      = 50;				// 動作時間
  var pwm_power = 0.5;				// モータのパワー

  // モータ回転
  function rotateMotor(){
    console.log(time, pwm_power);
    gpio.digitalWrite(motor_out, ZGN.HIGH);
    gpio.pwmWrite(motor_pwm, pwm_power);
    console.log('start');
    var stop_motor = setInterval(function(){
      gpio.digitalWrite(motor_out, ZGN.LOW);
      gpio.pwmWrite(motor_pwm, 0);
      console.log('stop');
      clearInterval(stop_motor);
    }, time);
  }

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

  // m1cwボタンをクリック
  $(document).on('click', '#m1cw', function(){ motor_out = motor_out11; });
  // m1ccwボタンをクリック
  $(document).on('click', '#m1ccw', function(){ motor_out = motor_out12; });
  // m2cwボタンをクリック
  $(document).on('click', '#m2cw', function(){ motor_out = motor_out21; });
  // m2ccwボタンをクリック
  $(document).on('click', '#m2ccw', function(){ motor_out = motor_out22; });

  // time1ボタンをクリック
  $(document).on('click', '#time1', function(){
    time = time >= 100 ? 100 : time+1;
  });
  // time-1ボタンをクリック
  $(document).on('click', '#time-1', function(){
    time = time <= 0 ? 0 : time-1;
  });
  // pwm1ボタンをクリック
  $(document).on('click', '#pwm1', function(){
    pwm_power = pwm_power >= 1 ? 1 : pwm_power+0.01;
  });
  // pwm-1ボタンをクリック
  $(document).on('click', '#pwm-1', function(){
    pwm_power = pwm_power <= 0 ? 0 : pwm_power-0.01;
  });

  // startボタンをクリック
  $(document).on('click', '#start', function(){ rotateMotor() })

/*
  $(document).on('click', '#joy'         , function(){joy();         });
  $(document).on('click', '#trust'       , function(){trust();       });
  $(document).on('click', '#fear'        , function(){fear();        });
  $(document).on('click', '#surprise'    , function(){surprise();    });
  $(document).on('click', '#sadness'     , function(){sadness();     });
  $(document).on('click', '#disgust'     , function(){disgust();     });
  $(document).on('click', '#anger'       , function(){anger();       });
  $(document).on('click', '#anticipation', function(){anticipation();});
*/
});