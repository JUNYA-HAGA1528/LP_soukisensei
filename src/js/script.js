
$(document).ready(function(){
    $('#form').submit(function(event){
        var error = false;

        // ①性別
        if ($('input[name="sex"]:checked').length === 0) {
            error = true;
        }

        // ②生年月日
        if ($('#BirthYear').val() === '' || $('#BirthMonth').val() === '' || $('#BirthDay').val() === '') {
            error = true;
        }

        // ③名前
        if ($('input[name="content"]').val() === '') {
            error = true;
        }

        // ④メールアドレス
        if ($('input[name="email"]').val() === '') {
            error = true;
        }

        if (error) {
            $('.contact__error').slideDown(); // エラーメッセージ表示
            event.preventDefault(); // フォームの送信を防止
        } else {
            window.location.href = 'contact-check.html';
        }
    });
});
