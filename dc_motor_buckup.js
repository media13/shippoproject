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
  モータ制御(本体)
--------------------------------------------------------------------*/

  var motor_out = motor_out11;	// モータの種類、回転方向
  var time      = 1000;				// 動作時間

  // モータrotate
  function rotateMotor(){
    console.log(time);
    gpio.digitalWrite(motor_out, ZGN.HIGH);
    console.log('start');
    var stop_motor = setInterval(function(){
      gpio.digitalWrite(motor_out, ZGN.LOW);
      console.log('stop');
      clearInterval(stop_motor);
    }, time);
  }

  // モータstart
  function startMotor(){
    gpio.digitalWrite(motor_out, ZGN.HIGH);
    console.log('start');
  }

  // モータstop
  function stopMotor(){
    gpio.digitalWrite(motor_out, ZGN.LOW);
    console.log('stop');
  }

  function buruburu(){
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

  // cw200ms stop200ms ccw200ms stop200ms trust surprise anticipation
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

  // cw200ms stop1000ms ccw200ms stop1000ms
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
        }, 1000);
        gpio.digitalWrite(motor_out12, ZGN.HIGH);
        clearInterval(m2);
      }, 200);
      gpio.digitalWrite(motor_out12, ZGN.LOW);
      clearInterval(m1);
    }, 1000);
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

  // cw100ms stop1100ms ccw100ms stop1100ms
  function motion6(){
    var m1 = setInterval(function(){
      var m2 = setInterval(function(){
        var m3 = setInterval(function(){
          var m4 = setInterval(function(){
            gpio.digitalWrite(motor_out11, ZGN.HIGH);
            clearInterval(m4);
          }, 100);
          gpio.digitalWrite(motor_out11, ZGN.LOW);
          clearInterval(m3);
        },3000);
        gpio.digitalWrite(motor_out12, ZGN.HIGH);
        clearInterval(m2);
      }, 100);
      gpio.digitalWrite(motor_out12, ZGN.LOW);
      clearInterval(m1);
    }, 3000);
  }

/*--------------------------------------------------------------------
  モータ制御(先端)
--------------------------------------------------------------------*/

  // モータup(short)
  function usMotor(){
    gpio.digitalWrite(motor_out21, ZGN.HIGH);
    var stop_motor = setInterval(function(){
      gpio.digitalWrite(motor_out21, ZGN.LOW);
      clearInterval(stop_motor);
    }, 200);
  }

  // モータdown(short)
  function dsMotor(){
    gpio.digitalWrite(motor_out22, ZGN.HIGH);
    var stop_motor = setInterval(function(){
      gpio.digitalWrite(motor_out22, ZGN.LOW);
      clearInterval(stop_motor);
    }, 200);
  }

  // モータup(long)
  function ulMotor(){
    gpio.digitalWrite(motor_out21, ZGN.HIGH);
    var stop_motor = setInterval(function(){
      gpio.digitalWrite(motor_out21, ZGN.LOW);
      clearInterval(stop_motor);
    }, 500);
  }

  // モータdown(long)
  function dlMotor(){
    gpio.digitalWrite(motor_out22, ZGN.HIGH);
    var stop_motor = setInterval(function(){
      gpio.digitalWrite(motor_out22, ZGN.LOW);
      clearInterval(stop_motor);
    }, 500);
  }

  function UDMotor(){
    var m1 = setInterval(function(){
      var m2 = setInterval(function(){
        var m3 = setInterval(function(){
          ulMotor();
          clearInterval(m3);
        },1000);
        dlMotor();
        clearInterval(m2);
      },1000);
      ulMotor();
      clearInterval(m1);
    },1000);
  }

/*--------------------------------------------------------------------
  感情
--------------------------------------------------------------------*/

  function joy         (){
    var m1 = setInterval(function(){
      var m2 = setInterval(function(){
        motion3();
        clearInterval(m2);
      },1500);
      dlMotor();
      clearInterval(m1);
    }, 1500);
  }

  function trust       (){
    
  }

//  function fear        (){}
//  function surprise    (){}
//  function sadness     (){}
//  function disgust     (){}

  function anger       (){
    var m1 = setInterval(function(){
      motion5();
      clearInterval(m1);
    }, 1500);
  }

  function anticipation(){
    var m1 = setInterval(function(){
      ulMotor();
      clearInterval(m1);
      var m2 = setInterval(function(){
        dsMotor();
        clearInterval(m2);
      }
    }
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

  // time100ボタンをクリック
  $(document).on('click', '#time100', function(){
    time = time >= 9899 ? 10000 : time+100;
  });
  // time-100ボタンをクリック
  $(document).on('click', '#time-100', function(){
    time = time <= 101 ? 0 : time-100;
  });

  // rotateボタンをクリック
  $(document).on('click', '#rotate', function(){ rotateMotor() });

  // startボタンをクリック
  $(document).on('click', '#start', function(){ startMotor() });

  // stopボタンをクリック
  $(document).on('click', '#stop', function(){ stopMotor() });
    
  // buruburuボタンをクリック
  $(document).on('click', '#buruburu', function(){ buruburu() });

  // buruburu3ボタンをクリック
  $(document).on('click', '#buruburu2', function(){
    var m1 = setInterval(function(){
      var m2 = setInterval(function(){
        var m3 = setInterval(function(){
          var m4 = setInterval(function(){
            buruburu();
            clearInterval(m4);
          }, 1000);
          buruburu();
          clearInterval(m3);
        }, 1000);
        buruburu();
        clearInterval(m2);
      }, 1000);
      buruburu();
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

  // motion1ボタンをクリック
  $(document).on('click', '#motion6', function(){ motion6() });

  // motion1ボタンをクリック
  $(document).on('click', '#motion7', function(){
    var m1 = setInterval(function(){
      var m2 = setInterval(function(){
        motion4();
        clearInterval(m2); 
      }, 1000);
      motion4();
      clearInterval(m1);
    }, 1000);
  });

  // motion1ボタンをクリック
  $(document).on('click', '#motion8', function(){
    var m1 = setInterval(function(){
      var m2 = setInterval(function(){
        motion5();
        clearInterval(m2); 
      }, 1000);
      motion5();
      clearInterval(m1);
    }, 1000);
  });

  // upsmotorボタンをクリック
  $(document).on('click', '#upsmotor', function(){ usMotor() });

  // downsmotorボタンをクリック
  $(document).on('click', '#downsmotor', function(){ dsMotor() });

  // uplmotorボタンをクリック
  $(document).on('click', '#uplmotor', function(){ ulMotor() });

  // downlmotorボタンをクリック
  $(document).on('click', '#downlmotor', function(){ dlMotor() });

  // udmotorボタンをクリック
  $(document).on('click', '#udmotor', function(){ UDMotor() });

  $(document).on('click', '#joy'         , function(){joy();         });
//  $(document).on('click', '#trust'       , function(){trust();       });
//  $(document).on('click', '#fear'        , function(){fear();        });
//  $(document).on('click', '#surprise'    , function(){surprise();    });
//  $(document).on('click', '#sadness'     , function(){sadness();     });
//  $(document).on('click', '#disgust'     , function(){disgust();     });
  $(document).on('click', '#anger'       , function(){anger();       });
//  $(document).on('click', '#anticipation', function(){anticipation();});

});