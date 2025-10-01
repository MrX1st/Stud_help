import "../styles/contact.css";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState("");

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(text);
      setTimeout(() => setCopied(""), 2000);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission
    alert("Question sent to UrFU Support!");
  };

  return (
    <div className="contact-section">
      <h1>Contact Support</h1>
      
      <section className="deans-section">
        <h2>Contacts of Deans’ Offices</h2>
        <div className="deans-list">
          <div className="dean-item">
            <h3>Institute of Radioelectronics & Information Technology (IRIT-RTF)</h3>
            <p>Phone: <span className="contact-info" onClick={() => copyToClipboard("+7 (343) 375-94-92")}>+7 (343) 375-94-92</span></p>
            <p>Email: <span className="contact-info" onClick={() => copyToClipboard("irit-rtf@urfu.ru")}>irit-rtf@urfu.ru</span></p>
            <p>Address: <span className="contact-info" onClick={() => copyToClipboard("Мира 32")}>Мира 32</span></p>
          </div>
          <div className="dean-item">
            <h3>Institute of Economics & Management (IEM)</h3>
            <p>Phone: <span className="contact-info" onClick={() => copyToClipboard("+7 (343) 350-75-57")}>+7 (343) 350-75-57</span></p>
            <p>Email: <span className="contact-info" onClick={() => copyToClipboard("iem@urfu.ru")}>iem@urfu.ru</span></p>
            <p>Address: <span className="contact-info" onClick={() => copyToClipboard("Мира 32")}>Мира 32</span></p>
          </div>
          <div className="dean-item">
            <h3>Institute of Civil Engineering (ICE)</h3>
            <p>Phone: <span className="contact-info" onClick={() => copyToClipboard("+7 (343) 374-09-14")}>+7 (343) 374-09-14</span></p>
            <p>Email: <span className="contact-info" onClick={() => copyToClipboard("ice@urfu.ru")}>ice@urfu.ru</span></p>
            <p>Address: <span className="contact-info" onClick={() => copyToClipboard("Мира 32")}>Мира 32</span></p>
          </div>
        </div>
      </section>

      <section className="support-section">
        <h2>Support Email & Phone</h2>
        <div className="support-items">
          <p>
            International Students Office: 
            <span className="contact-info" onClick={() => copyToClipboard("disa@urfu.ru")}>disa@urfu.ru</span>
          </p>
          <p>
            Phone: 
            <span className="contact-info" onClick={() => copyToClipboard("+7 (343) 375-44-44")}>+7 (343) 375-44-44</span>
          </p>
        </div>
      </section>


      <section className="emergency-section">
        <h2>Emergency Numbers</h2>
        <div className="emergency-list">
          <div className="emergency-item">
            <span className="emergency-label">Police:</span>
            <span className="emergency-number">102</span>
          </div>
          <div className="emergency-item">
            <span className="emergency-label">Ambulance:</span>
            <span className="emergency-number">103</span>
          </div>
          <div className="emergency-item">
            <span className="emergency-label">Fire:</span>
            <span className="emergency-number">101</span>
          </div>
          <div className="emergency-item">
            <span className="emergency-label">Unified emergency number:</span>
            <span className="emergency-number">112</span>
          </div>
        </div>
      </section>

      {copied && <div className="copy-feedback">Copied to clipboard!</div>}
    </div>
  );
}