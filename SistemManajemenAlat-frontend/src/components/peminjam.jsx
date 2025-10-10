// Peminjam.js
import React, { useState } from 'react';

function Peminjam({ peminjam, fetchPeminjam, addPeminjam, updatePeminjam, deletePeminjam }) {
  const [newPeminjam, setNewPeminjam] = useState({ nama: '', nis: '', kelas_id: '' });
  const [editingPeminjam, setEditingPeminjam] = useState(null);

  const handleAddPeminjam = () => {
    addPeminjam(newPeminjam);
    setNewPeminjam({ nama: '', nis: '', kelas_id: '' });
  };

  const handleUpdatePeminjam = () => {
    updatePeminjam(editingPeminjam.id, editingPeminjam);
    setEditingPeminjam(null);
  };

  return (
    <section>
      <h2>Peminjam</h2>
      <table>
        <thead>
          <tr>
            <th>Nama Peminjam</th>
            <th>NIS</th>
            <th>Kelas ID</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {peminjam.map((item) => (
            <tr key={item.id}>
              <td>{item.nama}</td>
              <td>{item.nis}</td>
              <td>{item.kelas_id}</td>
              <td>
                <button onClick={() => setEditingPeminjam(item)}>Edit</button>
                <button onClick={() => deletePeminjam(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <input
        type="text"
        value={newPeminjam.nama}
        onChange={(e) => setNewPeminjam({ ...newPeminjam, nama: e.target.value })}
        placeholder="Nama Peminjam"
      />
      <input
        type="text"
        value={newPeminjam.nis}
        onChange={(e) => setNewPeminjam({ ...newPeminjam, nis: e.target.value })}
        placeholder="NIS"
      />
      <input
        type="text"
        value={newPeminjam.kelas_id}
        onChange={(e) => setNewPeminjam({ ...newPeminjam, kelas_id: e.target.value })}
        placeholder="Kelas ID"
      />
      <button onClick={handleAddPeminjam}>Add Peminjam</button>
      {editingPeminjam && (
        <div>
          <h3>Edit Peminjam</h3>
          <input
            type="text"
            value={editingPeminjam.nama}
            onChange={(e) => setEditingPeminjam({ ...editingPeminjam, nama: e.target.value })}
            placeholder="Nama Peminjam"
          />
          <input
            type="text"
            value={editingPeminjam.nis}
            onChange={(e) => setEditingPeminjam({ ...editingPeminjam, nis: e.target.value })}
            placeholder="NIS"
          />
          <input
            type="text"
            value={editingPeminjam.kelas_id}
            onChange={(e) => setEditingPeminjam({ ...editingPeminjam, kelas_id: e.target.value })}
            placeholder="Kelas ID"
          />
          <button onClick={handleUpdatePeminjam}>Update</button>
        </div>
      )}
    </section>
  );
}

export default Peminjam;