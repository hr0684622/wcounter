import React,{useState} from 'react'

const Wordcounter = () => {
    
        const [text, setText] = useState('');
        const [wordCount, setWordCount] = useState(0);
      
        const handleTextChange = (event) => {
          const inputText = event.target.value;
          // Split the input text by spaces to count words
          const words = inputText.split(/\s+/);
          // Filter out empty strings (e.g., multiple spaces)
          const filteredWords = words.filter((word) => word.trim() !== '');
          setWordCount(filteredWords.length);
          setText(inputText);
        };




  return (
    <div>
      <h1>Word Count Tool</h1>
      <textarea
        rows="5"
        cols="50"
        placeholder="Enter your text here..."
        value={text}
        onChange={handleTextChange}
      ></textarea>
      <p>Word Count: {wordCount}</p>
    </div>
  )
}

export default Wordcounter