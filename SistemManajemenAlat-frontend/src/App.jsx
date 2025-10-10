// App.js
import React, { useEffect, useState } from 'react';
import Alat from './components/alat';
import Kelas from './components/kelas';
import Peminjam from './components/peminjam';
import Peminjaman from './components/peminjaman';

function App() {
  const [alat, setAlat] = useState([]);
  const [kelas, setKelas] = useState([]);
  const [peminjam, setPeminjam] = useState([]);
  const [peminjaman, setPeminjaman] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await Promise.all([
          fetch('http://localhost:8000/api/alat'),
          fetch('http://localhost:8000/api/kelas'),
          fetch('http://localhost:8000/api/peminjam'),
          fetch('http://localhost:8000/api/peminjaman')
        ]);
    
        // Check if any request fails
        if (response.some(res => !res.ok)) {
          throw new Error('API request failed');
        }
    
        const responses = await Promise.all(response.map(res => {
          if (res.headers.get('Content-Type').includes('application/json')) {
            return res.json(); // Only parse as JSON if the content type is JSON
          } else {
            return res.text(); // Otherwise, return raw text (for HTML or other formats)
          }
        }));
    
        console.log(responses); // Log the responses to check for issues
    
        const [alatData, kelasData, peminjamData, peminjamanData] = responses;
        setAlat(alatData);
        setKelas(kelasData);
        setPeminjam(peminjamData);
        setPeminjaman(peminjamanData);
        setLoading(false);
      } catch (err) {
        console.error('Error details:', err);
        setError(err.message || 'Error fetching data');
        setLoading(false);
      }
    };     
    fetchData();
  }, []);

  const addAlat = (newAlat) => {
    setAlat([...alat, { id: alat.length + 1, ...newAlat }]);
  };

  const updateAlat = (id, updatedAlat) => {
    setAlat(alat.map(item => (item.id === id ? updatedAlat : item)));
  };

  const deleteAlat = (id) => {
    setAlat(alat.filter(item => item.id !== id));
  };

  const addKelas = (newKelas) => {
    setKelas([...kelas, { id: kelas.length + 1, nama_kelas: newKelas }]);
  };

  const updateKelas = (id, updatedKelas) => {
    setKelas(kelas.map(item => (item.id === id ? updatedKelas : item)));
  };

  const deleteKelas = (id) => {
    setKelas(kelas.filter(item => item.id !== id));
  };

  const addPeminjam = (newPeminjam) => {
    setPeminjam([...peminjam, { id: peminjam.length + 1, ...newPeminjam }]);
  };

  const updatePeminjam = (id, updatedPeminjam) => {
    setPeminjam(peminjam.map(item => (item.id === id ? updatedPeminjam : item)));
  };

  const deletePeminjam = (id) => {
    setPeminjam(peminjam.filter(item => item.id !== id));
  };

  const addPeminjaman = (newPeminjaman) => {
    setPeminjaman([...peminjaman, { id: peminjaman.length + 1, ...newPeminjaman }]);
  };

  const updatePeminjaman = (id, updatedPeminjaman) => {
    setPeminjaman(peminjaman.map(item => (item.id === id ? updatedPeminjaman : item)));
  };

  const deletePeminjaman = (id) => {
    setPeminjaman(peminjaman.filter(item => item.id !== id));
  };

  return (
    <div>
      <h1>Data Peminjaman</h1>
      {loading ? <p>Loading...</p> : null}
      {error ? <p>{error}</p> : null}

      <Alat alat={alat} addAlat={addAlat} updateAlat={updateAlat} deleteAlat={deleteAlat} />
      <Kelas kelas={kelas} addKelas={addKelas} updateKelas={updateKelas} deleteKelas={deleteKelas} />
      <Peminjam peminjam={peminjam} addPeminjam={addPeminjam} updatePeminjam={updatePeminjam} deletePeminjam={deletePeminjam} />
      <Peminjaman peminjaman={peminjaman} addPeminjaman={addPeminjaman} updatePeminjaman={updatePeminjaman} deletePeminjaman={deletePeminjaman} />
    </div>
  );
}

export default App;