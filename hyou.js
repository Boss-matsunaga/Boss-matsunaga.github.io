function hyoji(num)
{
  if (num == 0)
  {
  	    //document.getElementById("disp").style.display="table";
    //document.getElementById("utenji").style.display="none";
    $(document).ready(function() {
  $('#seitenji').fadeIn(500);
  $('#utenji').hide();
 //  $('#seitenji').fadeIn(500);
	// $('#utenji').delay(500).fadeOut(500);
	});
  }
  else
  {
    //document.getElementById("utenji").style.display="table";
    //document.getElementById("seitenji").style.display="none";
	$(document).ready(function() {
  $('#utenji').fadeIn(500);
  $('#seitenji').hide();
  // $('#utenji').fadeIn(500);
  // $('#seitenji').delay(500).fadeOut(500);
	});
  }
}

$(function(){
    $('#page-top').click(function () {
        //id名#pagetopがクリックされたら、以下の処理を実行
        $("html,body").animate({scrollTop:0},"500");
    });
});
