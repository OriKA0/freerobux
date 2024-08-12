function updateSliderValue() {
    var slider = document.getElementById('robuxSlider');
    var output = document.getElementById('sliderValue');
    output.textContent = slider.value;
}

function downloadGift() {
    var sliderValue = document.getElementById('robuxSlider').value;
    
    // Create a link element
    var link = document.createElement('a');
    
    // Set the download attribute with a filename
    link.download = 'robux-gift-' + sliderValue + '.zip';
    
    // Set the href to the file URL
    link.href = 'path/to/your/robux-gift.zip'; // Change this to the actual path of your file
    
    // Append the link to the body
    document.body.appendChild(link);
    
    // Programmatically click the link to trigger the download
    link.click();
    
    // Remove the link from the document
    document.body.removeChild(link);
}
