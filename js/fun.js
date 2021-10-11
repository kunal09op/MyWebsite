$(function () {
    $("#name_error_message").hide();
    $("#email_error_message").hide();
    $("#sub_error_message").hide();
    var name_error = false;
    var email_error = false;
    var sub_error = false;
    $("#name1").focusout(function () {
      check_name();
    });
    $("#email").focusout(function () {
      check_email();
    });
  
    $("#subject").focusout(function () {
      check_subject();
    });
    function check_name() {
        var pattern = /^([a-zA-Z]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
      var name = $("#name1").val();
      if (pattern.test(name) && name !== '') {
        $("#name_error_message").hide();
        $("#name1").css("border-color","#34F458");
      } else {
        $("#name_error_message").html("Please enter your full name");
        $("#name_error_message").show();
        $("#name1").css("border-color","red");
        $("#name_error_message").css("color","red","font-weigth","bold");
        
        name_error = true;
      }
    }
    function check_email() {
      var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  
      var email = $("#email").val();
      if (pattern.test(email) && email !== '') {
        $("#email_error_message").hide();
        $("#email").css("border-color","#34F458");
      } else {
        $("#email_error_message").html("Please enter the valid email");
        $("#email_error_message").show();
        $("#email").css("border-color","red");
        $("#email_error_message").css("color","red");
        email_error = true;
      }
    }
    function check_subject() {
      var subject = $("#subject").val();
      if (subject !== '') {
        $("#sub_error_message").hide();
        $("#subject").css("border-color","#34F458");
      } else {
        $("#sub_error_message").html("Please enter the subject");
        $("#sub_error_message").show();
        $("#subject").css("border-color","red");
        $("#sub_error_message").css("color","red");
        sub_error = true;
      }
    }
     $("#contact-form").submit(function(){
         name_error= false;
         email_error= false;
         sub_error=false;
         check_name();
         check_email();
         check_subject();
  
         if(name_error==false && email_error==false && sub_error==false)
         {
             alert("Registration Successfull");
             return true;
         }
         else{
             alert("please fill the details")
             return false;
         }
     });
  });
  