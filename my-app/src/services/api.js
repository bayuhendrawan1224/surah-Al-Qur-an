const API_BASE = "https://equran.id/api/v2";

export const api = {
  // Get all surahs
  getAllSurahs: async () => {
    try {
      const response = await fetch(`${API_BASE}/surat`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.data || [];
    } catch (error) {
      console.error("Error fetching all surahs:", error);
      throw error;
    }
  },

  // Get surah by ID
  getSurahById: async (id) => {
    try {
      const response = await fetch(`${API_BASE}/surat/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.data || null;
    } catch (error) {
      console.error(`Error fetching surah ${id}:`, error);
      throw error;
    }
  },

  // Search surah
  searchSurah: async (keyword) => {
    try {
      const allSurahs = await api.getAllSurahs();
      return allSurahs.filter(
        (surah) =>
          surah.namaLatin.toLowerCase().includes(keyword.toLowerCase()) ||
          surah.nama.toLowerCase().includes(keyword.toLowerCase()) ||
          surah.nomor.toString().includes(keyword),
      );
    } catch (error) {
      console.error("Error searching surah:", error);
      throw error;
    }
  },
};
