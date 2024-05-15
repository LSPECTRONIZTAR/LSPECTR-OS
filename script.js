// Create an AudioContext instance
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Load the sound file asynchronously
fetch('https://lspectroniztar.github.io/lspectr-os/media/games/osu-3D/background-music.mp3')
  .then(response => response.arrayBuffer())
  .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
  .then(audioBuffer => {
    // Create an AudioBufferSourceNode
    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContext.destination);
    
    // Play the sound
    source.start();
  })
  .catch(error => {
    console.error('Error loading audio:', error);
  });
