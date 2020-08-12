$( document).ready(function(){
    console.log("Page Ready");
     $("#loginform").submit(function(event){
        event.preventDefault();
        ajaxPost();
     });

     function ajaxPost(){
         var fromData = {
             email : $("#email").val(),
             upwd : $("#upwd").val()
         }
         $.ajax({
           type : "POST",
           contentType : "application/json",
           url : window.location + "api/login",
           data : JSON.stringify(formData),
           dataType : 'json',
           success : function(customer){
               if (customer.valid == true){
                 $("#loginform").addclass("success");
                   $("#loginform").removeclass("fail");
                
               }else{
                   $("#loginform").removeclass("success");
                   $("#loginform").addclass("fail");

               }
            $("#postResultDiv").html("<p>" + "Post Successfully! <br>" + "Email Address" + customer.email+ "</br>"+
            "Password" + customer.upwd+ "</br>"+ "Valid USer" + customer.valid+ "</p>");
           },
           error : function(e) {
               alert("Error!")
               console.log("ERROR:", e);
           }
         });

         resetData();
     }
     
     function resetData(){
         $("#email").val("");
         $("#upwd").val("");
    
     }
});
