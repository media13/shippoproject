ZGN(function()
{
	// 18�ԃs���œ��삳���܂�
  var ledPin = '18';

  // Terminal��GPIO�C���X�^���X���擾���܂�
  var gpio = ZGN.term('1').gpio;

  // �����̏����l��0�ɐݒ肵�܂�
  var level = 0;

  // �w��s����PWM�ɐݒ�
  gpio.pinMode(ledPin, ZGN.PWM);

  // button1�{�^�����N���b�N
  $(document).on('click', '#t1', function() {
    level = level >= 100 ? 100 : level + 1; // level��1�グ��
	for (var i=1 ; i<=100 ; i++){
    gpio.pwmWrite(ledPin, level / 100); // �f���[�e�B�[��̐ݒ�
	}
	alart(level);
  });

  // BUTTON2�{�^�����N���b�N
  $(document).on('click', '#T2', function() {
    level = level <= 0 ? 0 : level - 1; // level��1������
	for (var i=1 ; i<=100 ; i++){
    gpio.pwmWrite(ledPin, level / 100); // �f���[�e�B�[��̐ݒ�
	}
	alart(level);
  });

});