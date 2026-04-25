import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import "./Landing.css";

const Landing = () => {
  const navigate = useNavigate();
  const { isDark } = useTheme();

  return (
    <div className={`landing ${isDark ? "dark" : ""}`}>
      <div className="landing-container">
        <div className="hero-section">
          <div className="hero-icon">📖</div>
          <h1 className="hero-title">Web MyQuran</h1>
          <p className="hero-subtitle">
            Baca Al-Qur'an Online dengan Mudah dan Nyaman
          </p>
          <p className="hero-description">
            Akses Al-Qur'an kapan saja dan di mana saja dengan fitur lengkap
            teks Arab, Latin, dan terjemahan Bahasa Indonesia
          </p>
          <button onClick={() => navigate("/home")} className="cta-button">
            Mulai Membaca →
          </button>
        </div>

        <div className="features-section">
          <h2>Fitur Unggulan</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>114 Surat Lengkap</h3>
              <p>Seluruh surat dalam Al-Qur'an tersedia lengkap</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌙</div>
              <h3>Dark Mode</h3>
              <p>Nyaman dibaca di malam hari</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Pencarian Mudah</h3>
              <p>Cari surat berdasarkan nama atau nomor</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Responsive Design</h3>
              <p>Akses dari berbagai perangkat</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
