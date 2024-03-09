// import React, { useState } from "react";
// import translate from "translate";

// function TextForm(props) {
//   const HandleUpClick = () => {
//     let newText = text.toLocaleUpperCase();
//     setText(newText);
//     props.foo("Converted to Upper-case","success");
//   };

//   const HandleDownClick = () => {
//     let newText = text.toLocaleLowerCase();
//     setText(newText);
//     props.foo("Converted to Lower-case","success");
//   };

//   const HandleTransClick = async () => {
//     try {
//       const translatedText = await translate(text, { to: "Sanskrit" });
//       setText(translatedText);
//     } catch (error) {
//       console.error("Translation error:", error);
//     }
//     props.foo("Translated to Sanskrit","success");
//   };

//   const HandleRevertClick = async () => {
//     try {
//       const oldText = await translate(text, { from: "Sanskrit", to: "English" });
//       setText(oldText);
//     } catch (error) {
//       console.error("Revert translation error:", error);
//     }
//     props.foo("Reverted back to original","success");
//   };

//   const HandleClearClick = () => {
//     setText("");
//     props.foo("Text cleared","success");
//   };

//   const handleOnChange = (event) => {
//     setText(event.target.value);
//   };

//   const [text, setText] = useState("Enter text here");

//   return (
//     <>
//       <div className="container my-4">
//         <h1
//         style={{color: props.mod==='dark'?'white':'black'}}
//         >{props.heading}</h1>
//         <div className="mb-3 my-3">
//           <textarea
//             className="form-control"
//             value={text}
//             onChange={handleOnChange}
//             id="exampleFormControlTextarea1"
//             rows="10"
//             style={{backgroundColor: props.mod==='dark'?'grey':'white'}}
//           ></textarea>
//         </div>
//         <button className="btn btn-primary mx-2" onClick={HandleUpClick}>
//           Convert to UpperCase
//         </button>
//         <button className="btn btn-primary mx-2" onClick={HandleDownClick}>
//           Convert to LowerCase
//         </button>
//         <button className="btn btn-primary mx-2" onClick={HandleClearClick}>
//           Clear Text
//         </button>
//         <button className="btn btn-primary mx-2" onClick={HandleTransClick}>
//           Convert to Sanskrit
//         </button>
//         <button className="btn btn-primary mx-2" onClick={HandleRevertClick}>
//           Revert
//         </button>
//       </div>
//       <div className="container my-3" style={{color: props.mod==='dark'?'white':'black'}}>
//         <h1>Your text summary</h1>
//         <p>
//           <strong>
//             Your text has {text.trim().length} characters, {text.length!=0?text.trim().split(" ").length:0} words
//           </strong>
//         </p>
//         <h3>Preview</h3>
//         <p>{text}</p>
//       </div>
//     </> 
//   );
// }

// export default TextForm;





import React, { useState } from "react";
import translate from "translate";

function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  const [summary, setSummary] = useState({ characters: 0, words: 0 });

  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
    // props.foo("Converted to Upper-case", "success");
  };

  const handleDownClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    // props.foo("Converted to Lower-case", "success");
  };

  const handleTransClick = async () => {
    try {
      const translatedText = await translate(text, { to: "Sanskrit" });
      setText(translatedText);
      updateSummary(translatedText);
      // props.foo("Translated to Sanskrit", "success");
    } catch (error) {
      console.error("Translation error:", error);
      // props.foo("Translation failed", "error");
    }
  };

  const handleRevertClick = async () => {
    try {
      const originalText = await translate(text, { from: "Sanskrit", to: "English" });
      setText(originalText);
      updateSummary(originalText);
      // props.foo("Reverted back to original", "success");
    } catch (error) {
      console.error("Revert translation error:", error);
      // props.foo("Revert failed", "error");
    }
  };

  const handleClearClick = () => {
    setText("");
    setSummary({ characters: 0, words: 0 });
    // props.foo("Text cleared", "success");
  };

  const handleOnChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    updateSummary(newText);
  };

  const updateSummary = (newText) => {
    const trimmedText = newText.trim();
    setSummary({
      characters: trimmedText.length,
      words: trimmedText.length !== 0 ? trimmedText.split(" ").length : 0,
    });
  };

  return (
    <>
      <div className="container my-4">
        <h1>{props.heading}</h1>
        <div className="mb-3 my-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="exampleFormControlTextarea1"
          rows="10"
          style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }}
        ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleDownClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleTransClick}>
          Convert to Sanskrit
        </button>
        <button className="btn btn-primary mx-2" onClick={handleRevertClick}>
          Revert
        </button>
      </div>
      <div className="container my-3" style={{ color: props.mod === "dark" ? "white" : "black" }}>
        <h1>Your text summary</h1>
        <p>
          <strong>
            Your text has {summary.characters} characters, {summary.words} words
          </strong>
        </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}

export default TextForm;
