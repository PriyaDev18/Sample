eval(function (p, a, c, k, e, d) { e = function (c) { return c }; if (!''.replace(/^/, String)) { while (c--) { d[c] = k[c] || c } k = [function (e) { return d[e] } ]; e = function () { return '\\w+' }; c = 1 }; while (c--) { if (k[c]) { p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]) } } return p } ('(6($){$.58.5=6(2){3 31={5:10,13:33,9:30};3 2=$.54(31,2);20 14.42(6(){3 4=$(14);12(2.13){12(2.9==30||2.9.11==0){3 32=\'<27 41 = "66:\'+4[0].49+\'48;47-50:51"></27>\';4.53(32)}}4.7(4.7().28(0,2.5));18(14,2.5,2.9,2.13);4.25("46",6(19){3 23=19.23?19.23:19.44;3 29=36 35(8,37,38,39,40);55(3 21=0;21<29.11;21++){12(23==29[21])20 33}20 18(14,2.5,2.9,2.13)});4.25("67",6(19){18(14,2.5,2.9,2.13)});4.25(\'62 57 56\',6(){3 24=$(14);59(6(){24.7(24.7().28(0,2.5));18(24,2.5,2.9,2.13)},63)})})}})(68);6 18(16,22,15,34){3 11=$(16).7().11;3 17=22-11;12(17<0){$(16).7($(16).7().28(0,22));17=0}12(34){12(15==30||15.11==0){15=$(16).52()}3 26=15[0].45.65();12(26=="61"||26=="27"){15.64(17+" 69"+(17>1?"60":"")+" 43.")}}20 11<=22-1}', 10, 70, '||options|var|textBox|MaxLength|function|val||CharacterCountControl||length|if|DisplayCharacterCount|this|control|t|characters|SetCharacterCount|e|return|i|maxLength|keyCode|textarea|bind|tagName|div|substring|codes|null|defaults|counter|true|isVisible|Array|new|||||style|each|left|which|nodeName|keypress|text|px|offsetWidth|align|right|next|after|extend|for|blur|drop|fn|setTimeout|s|span|paste|100|html|toLowerCase|width|keyup|jQuery|character'.split('|'), 0, {}))
 $("#password").MaxLength({
    MaxLength: 8,
    DisplayCharacterCount: false
 });
 $("#mobile").MaxLength({
    MaxLength: 10,
    DisplayCharacterCount: false
  });
 $('#password').blur(function(){
     var str = $('#password').val();
     if(str.length>3){
      if(/^[a-zA-Z0-9- ]*$/.test(str) ==false) {
        $('.check-len').addClass('hidden');
        $('.spec-char').addClass('hidden');
        $('#confirm_password').focus();
        }
       else{
        $('#password').focus();
        $('.check-len').addClass('hidden');
        $('.spec-char').removeClass('hidden')
            
          }
       }
        
    });
/***************email validation*************/
 	$('#email').blur(function(){
        if($('#email').val()!=''){ 
        ValidateEmail($('#email').val());
        }
        
    });

    function ValidateEmail(inputText)
        {
        var atposition=inputText.indexOf("@");  
        var dotposition=inputText.lastIndexOf(".");  
        if (atposition<1 || dotposition<atposition+2 || dotposition+2>=inputText.length){
        
        $('#email').focus();
        $('.check-mail').removeClass('hidden');
        $('.check-mail').text("**You have entered an invalid email address!**");  
          
          return false;  
          }  
        else{
        $('.check-mail').addClass('hidden');  
        $('#mobile').focus();
        return true;
        }
        
     }

    function popupOpen(ele){
    $("#"+ele).addClass('popup-close');
    $("#"+ele).removeClass('popup-open');
    $('#dim-bg').removeClass("dim-open");
    $('#dim-bg').addClass("dim-close");
     }
     function popupClose(popupEle,redirect){
    $("#"+popupEle).addClass('popup-close');
    $("#"+popupEle).removeClass('popup-open');
    $('#dim-bg').removeClass("dim-open");
    $('#dim-bg').addClass("dim-close");
    if(redirect!=""){
    window.location.href =redirect;
    }
  }
