import { useState } from "react";
import "../styles/contact.css";

export default function Contact() {
  const [copied, setCopied] = useState("");

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(text);
      setTimeout(() => setCopied(""), 2000);
    });
  };



  return (
    <div className="contact-section">
      <h1>Contact Support</h1>
      
      <section className="deans-section">
        <h2>Contacts of Deans’ Offices</h2>
        <div className="deans-list">
          <div className="dean-item">
            <h3>Institute of Radioelectronics & Information Technology (IRIT-RTF)</h3>
            <p>Phone: <span className="contact-info" onClick={() => copyToClipboard("+7 (343) 375-97-00")}>+7 (343) 375-97-00</span></p>
            <p>Email: <span className="contact-info" onClick={() => copyToClipboard("irit-rtf@urfu.ru")}>irit-rtf@urfu.ru</span></p>
            <p>Address: <span className="contact-info" onClick={() => copyToClipboard("Mira Street, 32")}>Mira Street, 32</span></p>
          </div>
          <div className="dean-item">
            <h3>Institute of Physics and Technology</h3>
            <p>Phone: <span className="contact-info" onClick={() => copyToClipboard("+7 (343) 375-41-51")}>+7 (343) 375-41-51</span></p>
            <p>Email: <span className="contact-info" onClick={() => copyToClipboard("fizteh.urfu.ru")}>fizteh.urfu.ru</span></p>
            <p>Address: <span className="contact-info" onClick={() => copyToClipboard("st. Mira, 21")}>st. Mira, 21</span></p>
          </div>
          <div className="dean-item">
            <h3>Ural Power Engineering Institute</h3>
            <p>Phone: <span className="contact-info" onClick={() => copyToClipboard("+7 (343) 375-41-87")}>+7 (343) 375-41-87</span></p>
            <p>Email: <span className="contact-info" onClick={() => copyToClipboard("enin.urfu.ru")}>enin.urfu.ru</span></p>
            <p>Address: <span className="contact-info" onClick={() => copyToClipboard("5 S. Kovalevskaya St.")}>5 S. Kovalevskaya St.</span></p>
          </div>
          <div className="dean-item">
            <h3>Ural Humanitarian Institute</h3>
            <p>Phone: <span className="contact-info" onClick={() => copyToClipboard("+7 (343) 389-94-12")}>+7 (343) 389-94-12</span></p>
            <p>Email: <span className="contact-info" onClick={() => copyToClipboard("urgi.urfu.ru")}>urgi.urfu.ru</span></p>
            <p>Address: <span className="contact-info" onClick={() => copyToClipboard("Lenin Street, 51")}>Lenin Street, 51</span></p>
          </div>
          <div className="dean-item">
            <h3>Specialized educational and scientific center</h3>
            <p>Phone: <span className="contact-info" onClick={() => copyToClipboard("+7 (343) 341-06-59")}>+7 (343) 341-06-59</span></p>
            <p>Email: <span className="contact-info" onClick={() => copyToClipboard("lyceum.urfu.ru")}>lyceum.urfu.ru</span></p>
            <p>Address: <span className="contact-info" onClick={() => copyToClipboard("D. Zvereva St., 30")}>D. Zvereva St., 30</span></p>
          </div>
          <div className="dean-item">
            <h3>Institute of Economics and Management</h3>
            <p>Phone: <span className="contact-info" onClick={() => copyToClipboard("+7 (343) 371-10-03")}>+7 (343) 371-10-03</span></p>
            <p>Email: <span className="contact-info" onClick={() => copyToClipboard("gsem.urfu.ru")}>gsem.urfu.ru</span></p>
            <p>Address: <span className="contact-info" onClick={() => copyToClipboard("st. Mira, 19, st. Lenina, 13b, st. Gogol, 25")}>st. Mira, 19, st. Lenina, 13b, st. Gogol, 25</span></p>
          </div>
          <div className="dean-item">
            <h3>Institute of Fundamental Education</h3>
            <p>Phone: <span className="contact-info" onClick={() => copyToClipboard("+7 (343) 375-95-82")}>+7 (343) 375-95-82</span></p>
            <p>Email: <span className="contact-info" onClick={() => copyToClipboard("info.urfu.ru")}>info.urfu.ru</span></p>
            <p>Address: <span className="contact-info" onClick={() => copyToClipboard("5 S. Kovalevskaya St.")}>5 S. Kovalevskaya St.</span></p>
          </div>
          <div className="dean-item">
            <h3>Institute of Physical Culture, Sports and Youth Policy</h3>
            <p>Phone: <span className="contact-info" onClick={() => copyToClipboard("+7 (343) 375-97-61")}>+7 (343) 375-97-61</span></p>
            <p>Email: <span className="contact-info" onClick={() => copyToClipboard("ifksimp.urfu.ru")}>ifksimp.urfu.ru</span></p>
            <p>Address: <span className="contact-info" onClick={() => copyToClipboard("st. Comintern, 14")}>st. Comintern, 14</span></p>
          </div>
          <div className="dean-item">
            <h3>Institute of Open Education Technologies</h3>
            <p>Phone: <span className="contact-info" onClick={() => copyToClipboard("+7 (343) 375-47-54")}>+7 (343) 375-47-54</span></p>
            <p>Email: <span className="contact-info" onClick={() => copyToClipboard("itoo.urfu.ru")}>itoo.urfu.ru</span></p>
            <p>Address: <span className="contact-info" onClick={() => copyToClipboard("Mira Street, 19")}>Mira Street, 19</span></p>
          </div>
          <div className="dean-item">
            <h3>Institute of Construction and Architecture</h3>
            <p>Phone: <span className="contact-info" onClick={() => copyToClipboard("+7 (343) 375-44-70")}>+7 (343) 375-44-70</span></p>
            <p>Email: <span className="contact-info" onClick={() => copyToClipboard("sti.urfu.ru")}>sti.urfu.ru</span></p>
            <p>Address: <span className="contact-info" onClick={() => copyToClipboard("st. Mira, 17")}>st. Mira, 17</span></p>
          </div>
          <div className="dean-item">
            <h3>Institute of New Materials and Technologies</h3>
            <p>Phone: <span className="contact-info" onClick={() => copyToClipboard("+7 (343) 375-44-39")}>+7 (343) 375-44-39</span></p>
            <p>Email: <span className="contact-info" onClick={() => copyToClipboard("inmt.urfu.ru")}>inmt.urfu.ru</span></p>
            <p>Address: <span className="contact-info" onClick={() => copyToClipboard("st. Mira, 28")}>st. Mira, 28</span></p>
          </div>
          <div className="dean-item">
            <h3>Institute of Natural Sciences and Mathematics</h3>
            <p>Phone: <span className="contact-info" onClick={() => copyToClipboard("+7 (343) 389-97-03")}>+7 (343) 389-97-03</span></p>
            <p>Email: <span className="contact-info" onClick={() => copyToClipboard("insma.urfu.ru")}>insma.urfu.ru</span></p>
            <p>Address: <span className="contact-info" onClick={() => copyToClipboard("st. Kuibysheva, 48")}>st. Kuibysheva, 48</span></p>
          </div>
          <div className="dean-item">
            <h3>Military training center</h3>
            <p>Phone: <span className="contact-info" onClick={() => copyToClipboard("+7 (343) 374-50-23")}>+7 (343) 374-50-23</span></p>
            <p>Email: <span className="contact-info" onClick={() => copyToClipboard("vuc.urfu.ru")}>vuc.urfu.ru</span></p>
            <p>Address: <span className="contact-info" onClick={() => copyToClipboard("Komsomolskaya St., 62, room VO-310")}>Komsomolskaya St., 62, room VO-310</span></p>
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