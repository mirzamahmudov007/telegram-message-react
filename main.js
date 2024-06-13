// // Telegram Bot tokeningizni va chat ID'nizni kiriting
// const BOT_TOKEN = '7009428471:AAHmS6Ju6tIbM3YDI1WreCCG-pY89KVnZEk';
// const CHAT_ID = '1381579135';
// // Telegram'ga xabar yuborish funksiyasi
// const sendMessageToTelegram = async (message) => {
//     try {
//         const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 chat_id: CHAT_ID,
//                 text: message
//             })
//         });

//         const data = await response.json();
//         return data.ok;
//     } catch (error) {
//         console.error('Telegramga yuborishda xatolik:', error);
//         return false;
//     }
// };

// // Formani yuborish funksiyasi
// const handleSubmit = async (event) => {
//     event.preventDefault();

//     const firstName = document.getElementById('firstName').value;
//     const lastName = document.getElementById('lastName').value;
//     const phone = document.getElementById('phone').value;
//     const messageText = document.getElementById('message').value;

//     const message = `SIZGA XABAR QOLDIRDI
//     Ism: ${firstName}
//     Familiya: ${lastName}
//     Telefon raqam: ${phone}
//     Xabar: ${messageText}
//   `;

//   console.log(message);
//     const success = await sendMessageToTelegram(message);
//     if (success) {
//         alert('Xabar muvaffaqiyatli yuborildi');
//     } else {
//         alert('Xabar yuborishda xatolik yuz berdi');
//     }
// };

// // Event listener qo'shish
// document.getElementById('registerForm').addEventListener('submit', handleSubmit);
    // document.getElementById('uploadForm').addEventListener('submit', async (event) => {
    //     event.preventDefault();
    // const fileInput = document.getElementById('fileInput');
    // const caption = document.getElementById('caption').value;
    //         const firstName = document.getElementById('firstName').value;
    //         const lastName = document.getElementById('lastName').value;
    //         const phone = document.getElementById('phone').value;
    // const file = fileInput.files[0];
    // const formData = new FormData();
    // formData.append('document', file);
    //     formData.append('caption', "\nIsm:" + firstName + "\nFamiliya: " + lastName +"\nTelefon: " + phone + "\nMuammo: "+caption);

    // const token = '7009428471:AAHmS6Ju6tIbM3YDI1WreCCG-pY89KVnZEk';
    // const chatId = '1381579135';

    // const progressContainer = document.getElementById('progressContainer');
    // const progressBar = document.getElementById('progressBar');
    // const responseElement = document.getElementById('response');

    // progressContainer.style.display = 'block';
    // progressBar.style.width = '0%';
    // responseElement.textContent = '';

    // try {
    //     const xhr = new XMLHttpRequest();
    // xhr.open('POST', `https://api.telegram.org/bot${token}/sendDocument?chat_id=${chatId}`, true);

    //     xhr.upload.onprogress = (event) => {
    //       if (event.lengthComputable) {
    //         const percentComplete = (event.loaded / event.total) * 100;
    // progressBar.style.width = percentComplete + '%';
    //       }
    //     };

    //     xhr.onload = () => {
    //       if (xhr.status === 200) {
    //         const result = JSON.parse(xhr.responseText);
    // if (result.ok) {
    //     responseElement.textContent = 'Fayl muvaffaqiyatli yuborildi!';
    //         } else {
    //     responseElement.textContent = 'Fayl yuborishda xato yuz berdi!';
    //         }
    //       } else {
    //     responseElement.textContent = 'Xato yuz berdi!';
    //           alert('Xato yuz berdi!')
    //       }
    // progressContainer.style.display = 'none';
    //     };

    //     xhr.onerror = () => {
    //     responseElement.textContent = 'Xato yuz berdi!';
    //         alert('Xato yuz berdi!')
    // progressContainer.style.display = 'none';
    //     };

    // xhr.send(formData);
    //   } catch (error) {
    //     console.error('Error:', error);
    //     alert('Xato yuz berdi!')
    // responseElement.textContent = 'Xato yuz berdi!';
    // progressContainer.style.display = 'none';
    //   }
    // });


document.getElementById('uploadForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const fileInput = document.getElementById('fileInput');
    const caption = document.getElementById('caption').value;
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const phone = document.getElementById('phone').value;

    const file = fileInput.files[0];

    if (!file) {
        alert('Please select a file.');
        return;
    }

    const formData = new FormData();
    formData.append('document', file);
    formData.append('caption', "Ism: "+firstName+"\nFamiliya: "+lastName+"\nTelefon: "+phone+"\nShikoyat: "+caption);
    const token = '7009428471:AAHmS6Ju6tIbM3YDI1WreCCG-pY89KVnZEk';
    const chatId = '1381579135';
    const url = `https://api.telegram.org/bot${token}/sendDocument?chat_id=${chatId}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error("Yuborishda xatolik yuz berdi. Iltimos keyinroq qayta urinib ko'ring");
        }

        const result = await response.json();

        if (result.ok) {
            alert('Muvaffaqiyatli yuborildi');
        } else {
            alert('Yuborishda xatolik yuz berdi');
        }
    } catch (error) {
        console.error('Error:', error);
        alert("Yuborishda xatolik yuz berdi. Iltimos keyinroq qayta urinib ko'ring.");
    }
});
