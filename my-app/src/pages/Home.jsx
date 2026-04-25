import React from "react";
import SurahList from "../components/SurahList";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <div className="container">
        <div className="home-header">
          <h1>📚 Daftar Surat</h1>
          <p>Al-Qur'an - 114 Surat</p>
        </div>
        <SurahList />
      </div>
    </div>
  );
};

export default Home;
