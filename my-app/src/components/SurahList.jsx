import React, { useState, useEffect } from "react";
import { api } from "../services/api";
import SurahCard from "./SurahCard";
import LoadingSkeleton from "./LoadingSkeleton";
import "./SurahList.css";

const SurahList = () => {
  const [surahs, setSurahs] = useState([]);
  const [filteredSurahs, setFilteredSurahs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchSurahs();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filtered = surahs.filter(
        (surah) =>
          surah.namaLatin.toLowerCase().includes(searchTerm.toLowerCase()) ||
          surah.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
          surah.nomor.toString().includes(searchTerm),
      );
      setFilteredSurahs(filtered);
    } else {
      setFilteredSurahs(surahs);
    }
  }, [searchTerm, surahs]);

  const fetchSurahs = async () => {
    try {
      const data = await api.getAllSurahs();
      setSurahs(data);
      setFilteredSurahs(data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="surah-list-container">
      <div className="search-section">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Cari surat (nama atau nomor)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          {searchTerm && (
            <button onClick={() => setSearchTerm("")} className="clear-search">
              ✕
            </button>
          )}
        </div>
        <div className="search-info">
          {!loading && (
            <p>
              Menampilkan {filteredSurahs.length} dari {surahs.length} surat
            </p>
          )}
        </div>
      </div>

      {loading ? (
        <LoadingSkeleton type="card" count={10} />
      ) : (
        <div className="surah-grid">
          {filteredSurahs.map((surah) => (
            <SurahCard key={surah.nomor} surah={surah} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SurahList;
