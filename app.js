ZGN(function()
{
  // 17�ԃs���œ��삳���܂�
  var ledPin = '17';

  // Terminal��GPIO�C���X�^���X���擾���܂�
  var gpio = ZGN.term('1').gpio;

  // �w��s�����o�͂ɐݒ�
  gpio.pinMode(ledPin, ZGN.OUTPUT);

  // ON�{�^�����N���b�N
  $(document).on('click', '#on', function() {
    gpio.digitalWrite(ledPin, ZGN.HIGH); // �_��
  });

  // OFF�{�^�����N���b�N
  $(document).on('click', '#off', function() {
    gpio.digitalWrite(ledPin, ZGN.LOW); // ����
  });
});