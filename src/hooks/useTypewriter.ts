import { useState, useCallback, useEffect } from 'react';

export const useTypewriter = (words: string[], typingSpeed = 150, deletingSpeed = 100, pauseTime = 1000) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  const type = useCallback(() => {
    const currentWord = words[wordIndex];
    
    if (isWaiting) {
      setIsWaiting(false);
      setIsDeleting(true);
      return;
    }

    if (!isDeleting && text === currentWord) {
      setIsWaiting(true);
      setTimeout(() => setIsWaiting(false), pauseTime);
      return;
    }
    
    if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }
    
    setText((prev) => {
      if (isDeleting) {
        return prev.slice(0, -1);
      } else {
        return currentWord.slice(0, prev.length + 1);
      }
    });

  }, [words, wordIndex, isDeleting, text, isWaiting, pauseTime]);

  useEffect(() => {
    const nextTypingDelay = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(type, nextTypingDelay);
    return () => clearTimeout(timer);
  }, [type, isDeleting, typingSpeed, deletingSpeed]);

  return text;
};