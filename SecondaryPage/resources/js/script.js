
		$(document).ready(function () {
      $click = false;
			$(".toggle-sidebar").click(function () {
        $click = !$click;
        if($click == true){
          $(".sidebar").addClass('show');
        } else {
          $(".sidebar").removeClass('show');
        }
        
			});
		});
	