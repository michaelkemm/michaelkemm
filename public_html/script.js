$(document).ready(function () {
	document.getElementById("contact")
	$("#contact").validate({
		debug: true,
		errorClass: "alert alert-danger",
		ErrorLabelContainer: "#output-area",
		errorElement: "div",
		// these are the rules to define what data we want and what we don't want
		//each of these groups start with the form input NAME attribute
		rules: {
			name: {
				required: true,
			},
			email: {
				email: true,
				required: true,
			},
			message: {
				required: true,
				maxlength: 2000,
			},
		},
		messages: {
			name: {
				required: "Name is required",
			},
			email: {
				email: "Please provide a valid email.",
				required: "Email is required",
			},
			message: {
				required: "Message is required",
				maxlength: "Message must be 2000 characters or less.",
			},
		},
		submitHandler: () => {
			$("#contact").ajaxSubmit({
				type: "POST",
				url: $("#contact").attr("action"),
				success: (ajaxOutput) => {
					$("#output-area").css("display", "")
					$("#output-area").html(ajaxOutput)

					if ($(".alert-success" >= 1)) {
						$("#contact")[0].reset()
					}
				},
			})
		},
	})
})
