ZGN(function() {

    // Term�C���X�^���X���擾
    var term = ZGN.term(1);

    // 18�ԃs���œ��삳���܂�
    var pinNo = '18';

    // �w��s�����o�͂ɐݒ�
    term.gpio.pinMode(pinNo, ZGN.OUTPUT);

    // ON�{�^�����N���b�N
    $(document).on('click', '#on', function() {
        term.gpio.digitalWrite(pinNo, ZGN.HIGH);    // �_��
    });

    // OFF�{�^�����N���b�N
    $(document).on('click', '#off', function() {
        term.gpio.digitalWrite(pinNo, ZGN.LOW);     // ����
    });
});