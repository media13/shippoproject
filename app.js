ZGN(function()
{
  // 17�ԃs���œ��삳���܂�
  var ledPin = '17';

  // id=1��Terminal�C���X�^���X���擾���܂�
  var term = ZGN.term('1');

  // Terminal�̒ʐM��Ԃ𔻒�
  if( term.isAlive() ){
    alert( 'OK' );
  }

  console.log(ledPin);

  // Terminal��GPIO�C���X�^���X���擾���܂�
  var gpio = term.gpio;

  // �w��s�����o�͂ɐݒ�
  gpio.pinMode(ledPin, ZGN.OUTPUT);

  // ON�{�^�����N���b�N
  $(document).on('click', '#on', function() {
    gpio.digitalWrite(ledPin, ZGN.HIGH, function() {
      // ���슮���� �u���E�U�̃R���\�[�����O�ɕ\�������܂�
      console.log('GPIO:HIGH');
    }); // �_��
  });

  // OFF�{�^�����N���b�N
  $(document).on('click', '#off', function() {
    gpio.digitalWrite(ledPin, ZGN.LOW, function() {
      // ���슮���� �u���E�U�̃R���\�[�����O�ɕ\�������܂�
      console.log('GPIO:LOW');
    }); // ����
  });

});