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

  // Bright�{�^�����N���b�N
  $(document).on('click', '#bright', function() {
    level = level >= 10 ? 10 : level + 1; // level��1�グ��
    gpio.pwmWrite(ledPin, level / 10); // �f���[�e�B�[��̐ݒ�
  });

  // Dark�{�^�����N���b�N
  $(document).on('click', '#dark', function() {
    level = level <= 0 ? 0 : level - 1; // level��1������
    gpio.pwmWrite(ledPin, level / 10); // �f���[�e�B�[��̐ݒ�
  });
});