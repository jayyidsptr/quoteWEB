function fetchQuote() {
    const category = document.getElementById('categorySelect').value;
    const display = document.getElementById('quoteDisplay');

    // Membuat permintaan ke server untuk mendapatkan kutipan
    fetch(`https://quotes-api-beta.vercel.app/api/quotes/${category}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error('Kategori tidak ditemukan.');
                } else {
                    throw new Error('Terjadi kesalahan pada server.');
                }
            }
            return response.json();
        })
        .then(data => {
            display.textContent = data.quote;
        })
        .catch(error => {
            if (error.message === 'Kategori tidak ditemukan.') {
                display.textContent = 'Tidak ada kutipan ditemukan untuk kategori ini.';
            } else {
                display.textContent = error.message;
            }
        });
}