ZGN(function()
{

/*--------------------------------------------------------------------
  ターミナル
--------------------------------------------------------------------*/

  var gpio        = ZGN.term('1').gpio;	// TerminalのGPIOインスタンスを取得

/*// PWM
  var motor_pwm  = '1';						// 18番ピンで動作させます
  gpio.pinMode(motor_pwm, ZGN.PWM);		// 指定ピンをPWMに設定 */

  // モータ１
  var motor_out11 = '2';						// 27番ピンで動作させます
  var motor_out12 = '3';						// 22番ピンで動作させます

  gpio.pinMode(motor_out11, ZGN.OUTPUT);	// 指定ピンを出力に設定
  gpio.pinMode(motor_out12, ZGN.OUTPUT);	// 指定ピンを出力に設定

  // モータ２
  var motor_out21 = '4';						// 23番ピンで動作させます
  var motor_out22 = '5';						// 24番ピンで動作させます

  gpio.pinMode(motor_out21, ZGN.OUTPUT);	// 指定ピンを出力に設定
  gpio.pinMode(motor_out22, ZGN.OUTPUT);	// 指定ピンを出力に設定

/*--------------------------------------------------------------------
  モータ制御
--------------------------------------------------------------------*/

  var motor_out = motor_out11;	// モータの種類、回転方向
  var time      = 10000;				// 動作時間
  var pwm_power = 0.5;				// モータのパワー

  // モータ回転
  function rotateMotor(){
    console.log(time, pwm_power);
    gpio.digitalWrite(motor_out, ZGN.HIGH);
//    gpio.pwmWrite(motor_pwm, pwm_power);
    console.log('start');
    var stop_motor = setInterval(function(){
      gpio.digitalWrite(motor_out, ZGN.LOW);
//      gpio.pwmWrite(motor_pwm, 0);
      console.log('stop');
      clearInterval(stop_motor);
    }, time);
  }

/*
  function buruburu(){
    var m1 = setInterval(function(){
      gpio.digitalWrite(motor_out11, ZGN.HIGH);
      clearInterval(m1);
    }, 200);

     var m2 = setInterval(function(){
      gpio.digitalWrite(motor_out11, ZGN.LOW);
      clearInterval(m2);
    }, 200);

     var m3 = setInterval(function(){
      gpio.digitalWrite(motor_out12, ZGN.HIGH);
      clearInterval(m3);
    }, 200);

    var m4 = setInterval(function(){
      gpio.digitalWrite(motor_out12, ZGN.LOW);
      clearInterval(m4);
    }, 200);
  }
*/

  function buruburu2(){
    var m1 = setInterval(function(){
      var m2 = setInterval(function(){
        var m3 = setInterval(function(){
          var m4 = setInterval(function(){
            gpio.digitalWrite(motor_out11, ZGN.HIGH);
            clearInterval(m4);
          }, 200);
          gpio.digitalWrite(motor_out11, ZGN.LOW);
          clearInterval(m3);
        }, 200);
        gpio.digitalWrite(motor_out12, ZGN.HIGH);
        clearInterval(m2);
      }, 200);
      gpio.digitalWrite(motor_out12, ZGN.LOW);
      clearInterval(m1);
    }, 200);
  }

//  function joy         (){}
//  function trust       (){}
//  function fear        (){}
//  function surprise    (){}
//  function sadness     (){}
//  function disgust     (){}
//  function anger       (){}
//  function anticipation(){}

  // cw5s
  function motion1(){
    gpio.digitalWrite(motor_out11, ZGN.LOW);
    var m1 = setInterval(function(){
      gpio.digitalWrite(motor_out11, ZGN.HIGH);
      clearInterval(m1);
    },1000) 
  }

  // ccw5s
  function motion2(){
    gpio.digitalWrite(motor_out12, ZGN.LOW);
    var m1 = setInterval(function(){
      gpio.digitalWrite(motor_out12, ZGN.HIGH);
      clearInterval(m1);
    },1000) 
  }

  // cw200ms stop200ms ccw200ms stop200ms
  function motion3(){
    var m1 = setInterval(function(){
      var m2 = setInterval(function(){
        var m3 = setInterval(function(){
          var m4 = setInterval(function(){
            gpio.digitalWrite(motor_out11, ZGN.HIGH);
            clearInterval(m4);
          }, 200);
          gpio.digitalWrite(motor_out11, ZGN.LOW);
          clearInterval(m3);
        }, 200);
        gpio.digitalWrite(motor_out12, ZGN.HIGH);
        clearInterval(m2);
      }, 200);
      gpio.digitalWrite(motor_out12, ZGN.LOW);
      clearInterval(m1);
    }, 200);
  }

  // cw200ms stop600ms ccw200ms stop600ms
  function motion4(){
    var m1 = setInterval(function(){
      var m2 = setInterval(function(){
        var m3 = setInterval(function(){
          var m4 = setInterval(function(){
            gpio.digitalWrite(motor_out11, ZGN.HIGH);
            clearInterval(m4);
          }, 200);
          gpio.digitalWrite(motor_out11, ZGN.LOW);
          clearInterval(m3);
        }, 800);
        gpio.digitalWrite(motor_out12, ZGN.HIGH);
        clearInterval(m2);
      }, 200);
      gpio.digitalWrite(motor_out12, ZGN.LOW);
      clearInterval(m1);
    }, 800);
  }

  // cw600ms stop200ms ccw600ms stop200ms
  function motion5(){
    var m1 = setInterval(function(){
      var m2 = setInterval(function(){
        var m3 = setInterval(function(){
          var m4 = setInterval(function(){
            gpio.digitalWrite(motor_out11, ZGN.HIGH);
            clearInterval(m4);
          }, 600);
          gpio.digitalWrite(motor_out11, ZGN.LOW);
          clearInterval(m3);
        }, 200);
        gpio.digitalWrite(motor_out12, ZGN.HIGH);
        clearInterval(m2);
      }, 600);
      gpio.digitalWrite(motor_out12, ZGN.LOW);
      clearInterval(m1);
    }, 200);
  }

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
    time = time >= 99999 ? 100000 : time+100;
  });
  // time-1ボタンをクリック
  $(document).on('click', '#time-1', function(){
    time = time <= 1 ? 0 : time-10;
  });

  // startボタンをクリック
  $(document).on('click', '#start', function(){ rotateMotor() });
    
  // buruburuボタンをクリック
//  $(document).on('click', '#buruburu', function(){ buruburu() });

  // buruburu2ボタンをクリック
  $(document).on('click', '#buruburu2', function(){ buruburu2() });

  // buruburu3ボタンをクリック
  $(document).on('click', '#buruburu3', function(){
    var m1 = setInterval(function(){
      var m2 = setInterval(function(){
        var m3 = setInterval(function(){
          var m4 = setInterval(function(){
            buruburu2();
            clearInterval(m4);
          }, 1000);
          buruburu2();
          clearInterval(m3);
        }, 1000);
        buruburu2();
        clearInterval(m2);
      }, 1000);
      buruburu2();
      clearInterval(m1);
    }, 1000);
  });

  // motion1ボタンをクリック
  $(document).on('click', '#motion1', function(){ motion1() });

  // motion1ボタンをクリック
  $(document).on('click', '#motion2', function(){ motion2() });

  // motion1ボタンをクリック
  $(document).on('click', '#motion3', function(){ motion3() });

  // motion1ボタンをクリック
  $(document).on('click', '#motion4', function(){ motion4() });

  // motion1ボタンをクリック
  $(document).on('click', '#motion5', function(){ motion5() });
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