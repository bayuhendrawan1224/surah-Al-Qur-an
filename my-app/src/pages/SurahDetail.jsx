import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../services/api";
import LoadingSkeleton from "../components/LoadingSkeleton";
import "./SurahDetail.css";

const SurahDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [surah, setSurah] = useState(null);
  const [ayahs, setAyahs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSurahDetail();
  }, [id]);

  const fetchSurahDetail = async () => {
    setLoading(true);
    try {
      const data = await api.getSurahById(id);
      setSurah(data);
      setAyahs(data.ayat);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="surah-detail-page">
        <div className="container">
          <LoadingSkeleton type="ayah" count={5} />
        </div>
      </div>
    );
  }

  if (!surah) {
    return (
      <div className="surah-detail-page">
        <div className="container">
          <div className="error-message">
            <h2>Surat tidak ditemukan</h2>
            <button onClick={() => navigate("/home")}>
              Kembali ke Daftar Surat
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="surah-detail-page">
      <div className="container">
        <button onClick={() => navigate("/home")} className="back-button">
          ← Kembali ke Daftar Surat
        </button>

        <div className="surah-info-header">
          <div className="surah-number-badge">{surah.nomor}</div>
          <h1>{surah.namaLatin}</h1>
          <h2 className="arabic-header">{surah.nama}</h2>
          <div className="surah-metadata">
            <span>{surah.tempatTurun}</span>
            <span>{surah.jumlahAyat} Ayat</span>
          </div>
          <div className="bismillah">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </div>
        </div>

        <div className="ayahs-container">
          {ayahs.map((ayah) => (
            <div
              key={ayah.nomor}
              className="ayah-item"
              id={`ayat-${ayah.nomor}`}
            >
              <div className="ayah-number">{ayah.nomor}</div>
              <div className="ayah-content">
                <div className="arabic-text">{ayah.teksArab}</div>
                <div className="latin-text">{ayah.teksLatin}</div>
                <div className="translation-text">
                  <span className="translation-label">Terjemahan:</span>
                  {ayah.teksIndonesia}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SurahDetail;
