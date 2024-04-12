import { useState } from 'react';

const BanglaTTS = () => {
  const [text, setText] = useState('');
  
  const speakBangla = () => {
    if (!window.speechSynthesis) {
      alert('Speech synthesis not supported in your browser');
      return;
    }

    const utterance = new SpeechSynthesisUtterance();
    utterance.lang = 'bn-BD'; // Set language to Bengali (Bangladesh)
    utterance.text = text;

    const audioUrl = URL.createObjectURL(new Blob([text], { type: 'text/plain' }));
    const audioElement = new Audio(audioUrl);
    audioElement.play();
  };

  return (
    <div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={speakBangla}>Speak</button>
    </div>
  );
};

export default BanglaTTS;
