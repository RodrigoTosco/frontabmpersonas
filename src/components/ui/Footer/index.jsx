import React from "react";
import "./index.css";

export default function Footer() {
  return (
    <footer>
        <div className='container'>
            <div className='row'>
                <a href="https://www.argentina.gob.ar/">
                    <img src='data:image/png;base64,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' height={50} alt="" />
                </a>
            </div>
        </div>
    </footer>
  );
}