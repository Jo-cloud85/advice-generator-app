// For toggling between original and bg-img mode
$(function() {
    $("#toggle").click(() => {
      $("body").toggleClass("active");
      $(".advice-container").toggleClass("active");
    });
});

$(function() {
  $('#button-dice').click(() => {
    $.ajax({
      url: 'https://api.adviceslip.com/advice',
      type: 'GET',
      success: (response) => {
        let advice = JSON.parse(response);
        $('#advice-id').text(`Advice #${advice.slip.id}`);
        $('#advice-quote').text(`"${advice.slip.advice}"`);
      },
      error: (error) => {
        console.log(error);
      }
    });
  });
});

