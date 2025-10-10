// Kelas.js
import React, { useState } from 'react';

function Kelas({ kelas, fetchKelas, addKelas, updateKelas, deleteKelas }) {
  const [newKelas, setNewKelas] = useState('');
  const [editingKelas, setEditingKelas] = useState(null);

  const handleAddKelas = () => {
    addKelas(newKelas);
    setNewKelas('');
  };

  const handleUpdateKelas = () => {
    updateKelas(editingKelas.id, editingKelas);
    setEditingKelas(null);
  };

  return (
    <section>
      <h2>Kelas</h2>
      <table>
        <thead>
          <tr>
            <th>Nama Kelas</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {kelas.map((item) => (
            <tr key={item.id}>
              <td>{item.nama_kelas}</td>
              <td>
                <button onClick={() => setEditingKelas(item)}>Edit</button>
                <button onClick={() => deleteKelas(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <input
        type="text"
        value={newKelas}
        onChange={(e) => setNewKelas(e.target.value)}
        placeholder="Nama Kelas"
      />
      <button onClick={handleAddKelas}>Add Kelas</button>
      {editingKelas && (
        <div>
          <h3>Edit Kelas</h3>
          <input
            type="text"
            value={editingKelas}
            onChange={(e) => setEditingKelas(e.target.value)}
            placeholder="Nama Kelas"
          />
          <button onClick={handleUpdateKelas}>Update</button>
        </div>
      )}
    </section>
  );
}

export default Kelas;