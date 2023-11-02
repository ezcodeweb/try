function convertToVoice() {
  const urlInput = document.getElementById('urlInput');

  // Create a new SpeechSynthesisUtterance instance
  const utterance = new SpeechSynthesisUtterance(urlInput.value);

  // Use the SpeechSynthesis API to speak the text
  window.speechSynthesis.speak(utterance);
}
