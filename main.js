// Telegram Bot tokeningizni va chat ID'nizni kiriting
const BOT_TOKEN = '7009428471:AAHmS6Ju6tIbM3YDI1WreCCG-pY89KVnZEk';
const CHAT_ID = '1381579135';
// Telegram'ga xabar yuborish funksiyasi
const sendMessageToTelegram = async (message) => {
    try {
        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message
            })
        });

        const data = await response.json();
        return data.ok;
    } catch (error) {
        console.error('Telegramga yuborishda xatolik:', error);
        return false;
    }
};

// Formani yuborish funksiyasi
const handleSubmit = async (event) => {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phone = document.getElementById('phone').value;
    const messageText = document.getElementById('message').value;

    const message = `
    Ism: ${firstName}
    Familiya: ${lastName}
    Telefon raqam: ${phone}
    Xabar: ${messageText}
  `;

  console.log(message);
    const success = await sendMessageToTelegram(message);
    if (success) {
        alert('Xabar muvaffaqiyatli yuborildi');
    } else {
        alert('Xabar yuborishda xatolik yuz berdi');
    }
};

// Event listener qo'shish
document.getElementById('registerForm').addEventListener('submit', handleSubmit);
