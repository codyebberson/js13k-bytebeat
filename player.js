const audioCtx = new AudioContext();
const masterVolume = 0.5;
let scriptProcessor = null;

function play(song) {
  // Stop the current song
  stop();

  // Play the song
  playBytebeat(
    new Function("t", `return (${song.code})`),
    song.sampleRate || 8000,
    {
      Bytebeat: unsignedByteToFloat,
      "Signed Bytebeat": signedByteToFloat,
      Floatbeat: (x) => x,
    }[song.mode || "Bytebeat"]
  );

  // Resume the audio context if it was suspended
  audioCtx.resume();
}

function playBytebeat(f, sampleRate, mapFunc) {
  let t = 0;

  scriptProcessor = audioCtx.createScriptProcessor(4096, 1, 1);
  scriptProcessor.onaudioprocess = (e) => {
    const buf = e.outputBuffer.getChannelData(0);
    for (let i = 0; i < buf.length; i++) {
      buf[i] = masterVolume * mapFunc(f(int(t)));
      t += sampleRate / audioCtx.sampleRate;
    }
  };

  scriptProcessor.connect(audioCtx.destination);
}

function stop() {
  if (scriptProcessor) {
    scriptProcessor.disconnect();
    scriptProcessor = null;
  }
}

function unsignedByteToFloat(byte) {
  return (int(byte) % 256) / 128.0 - 1.0;
}

function signedByteToFloat(byte) {
  return (int(byte) % 256) / 128.0;
}

function int(x) {
  return x | 0;
}

// Export all the Math functions to the global scope
for (const key of Object.getOwnPropertyNames(Math)) {
  window[key] = Math[key];
}
