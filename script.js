// For toggling between original and bg-img mode
$(document).ready(() => {
    $("#toggle").click(() => {
      $("body").toggleClass("active");
      $(".advice-container").toggleClass("active");
    });
});

$(document).ready(() => {
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

