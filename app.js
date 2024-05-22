
    const imageSelect = document.getElementById('imageSelect');
    const displayImage = document.getElementById('displayImage');

    imageSelect.addEventListener('change', () => {
        const selectedValue = imageSelect.value;
        
        if (selectedValue) {
            displayImage.src = selectedValue;
            displayImage.style.display = 'block';
        } else {
            displayImage.src = '';
            displayImage.style.display = 'none';
        }
    });
