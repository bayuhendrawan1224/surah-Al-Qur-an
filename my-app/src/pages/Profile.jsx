import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import "./Profile.css";

const Profile = () => {
  const { isDark } = useTheme();

  return (
    <div className={`profile-page ${isDark ? "dark" : ""}`}>
      <div className="container">
        <div className="profile-card">
          <div className="profile-avatar">
            <div className="avatar-icon">👤</div>
          </div>
          <h1>Web MyQuran</h1>
          <p className="version">Version 1.0.0</p>

          <div className="profile-info">
            <div className="info-item">
              <span className="info-label">Developer:</span>
              <span className="info-value">MyQuran Team</span>
            </div>
            <div className="info-item">
              <span className="info-label">Email:</span>
              <span className="info-value">support@myquran.com</span>
            </div>
            <div className="info-item">
              <span className="info-label">API Source:</span>
              <span className="info-value">equran.id</span>
            </div>
          </div>

          <div className="about-section">
            <h2>Tentang Aplikasi</h2>
            <p>
              Web MyQuran adalah aplikasi Al-Qur'an digital yang menyediakan
              kemudahan dalam membaca dan mempelajari Al-Qur'an. Dilengkapi
              dengan teks Arab, latin, dan terjemahan dalam Bahasa Indonesia.
            </p>
            <p>
              Aplikasi ini menggunakan API dari equran.id yang menyediakan data
              Al-Qur'an secara lengkap dan akurat.
            </p>
          </div>

          <div className="features-list">
            <h2>Fitur</h2>
            <ul>
              <li>✓ 114 Surat Lengkap</li>
              <li>✓ Teks Arab, Latin, dan Terjemahan</li>
              <li>✓ Pencarian Surat</li>
              <li>✓ Dark Mode</li>
              <li>✓ Responsive Design</li>
              <li>✓ Loading Skeleton Animation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
