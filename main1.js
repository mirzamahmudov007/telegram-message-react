document.getElementById('uploadForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const fileInput = document.getElementById('fileInput');
    const caption = document.getElementById('caption').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phone = document.getElementById('phone').value;

    const file = fileInput.files[0];

    if (!file) {
        return;
    }

    const formData = new FormData();
    formData.append('document', file);
    formData.append('caption', `Ism: ${firstName}\nFamiliya: ${lastName}\nTelefon: ${phone}\nShikoyat: ${caption}`);
    const token = '7009428471:AAHmS6Ju6tIbM3YDI1WreCCG-pY89KVnZEk';
    const chatId = '1381579135';

    const url = `https://api.telegram.org/bot${token}/sendDocument?chat_id=${chatId}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const result = await response.json();
            if (result.ok) {
                fileInput.value = null;
                console.log(fileInput.value);
            } else {
            }
        } else {
        }
    } catch (error) {
    }
});

function showFileDetails() {
    const input = document.getElementById('fileInput');
    const label = document.getElementById('fileLabel');
    const icon = document.getElementById('fileIcon');
    const title = label.querySelector('.title');

    if (input.files.length > 0) {
        const file = input.files[0];
        title.textContent = file.name;

        const fileType = file.type;

        // Determine the icon based on file type
        let iconType;
        if (fileType.startsWith('image/')) {
            iconType = 'image';
        } else if (fileType === 'application/pdf') {
            iconType = 'picture_as_pdf';
        } else if (fileType.startsWith('video/')) {
            iconType = 'videocam';
        } else if (fileType.startsWith('audio/')) {
            iconType = 'audiotrack';
        } else if (fileType === 'application/msword' || fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
            iconType = 'description';
        } else if (fileType === 'application/vnd.ms-excel' || fileType === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
            iconType = 'table_chart';
        } else if (fileType === 'application/vnd.ms-powerpoint' || fileType === 'application/vnd.openxmlformats-officedocument.presentationml.presentation') {
            iconType = 'slideshow';
        } else {
            iconType = 'insert_drive_file';
        }

        icon.textContent = iconType;
    } else {
        title.textContent = 'Chekni yuborish uchun bosing';
        icon.textContent = 'cloud_upload';
    }
}
