function fetchQuote() {
    const category = $('#categorySelect').val();
    const display = $('#quoteDisplay');

    // Membuat permintaan ke server untuk mendapatkan kutipan
    $.ajax({
        url: `https://quotes-api-beta.vercel.app/api/quotes/${category}`,
        dataType: 'json',
        error: function (xhr, status, error) {
            display.text(error.message);
        },
        success: function (data) {
            display.text(data.quote);
        }
    });
}