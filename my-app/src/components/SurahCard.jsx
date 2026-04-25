import React from "react";
import { useNavigate } from "react-router-dom";
import "./SurahCard.css";

const SurahCard = ({ surah }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/surah/${surah.nomor}`);
  };

  return (
    <div className="surah-card" onClick={handleClick}>
      <div className="surah-number">{surah.nomor}</div>
      <div className="surah-info">
        <h3>{surah.namaLatin}</h3>
        <p className="arabic-name">{surah.nama}</p>
        <div className="surah-meta">
          <span className="meta-badge">{surah.tempatTurun}</span>
          <span className="meta-badge">{surah.jumlahAyat} Ayat</span>
        </div>
      </div>
      <div className="surah-arrow">→</div>
    </div>
  );
};

export default SurahCard;
