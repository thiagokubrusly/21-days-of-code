const btnCopy = document.getElementById("btnCopy");

const input = document.querySelector('.text');

const picker = new EmojiButton ({
    position: 'right-star'
})

picker.on('emoji', function(emoji){
    input.value += emoji;
})

input.addEventListener('click', function(){
    picker.pickerVisible ? picker.hidePicker() : picker.showPicker(input);
})

btnCopy.addEventListener("click", () => {
    navigator.clipboard.writeText(result.value);
    alert("texto copiado " + result.value);
  });
