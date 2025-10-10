import React, { useState } from 'react';
import './alat.css';

function Alat({ alat, fetchAlat, addAlat, updateAlat, deleteAlat }) {
  const [newAlat, setNewAlat] = useState({ nama_alat: '', kategori: '', stok: 0 });
  const [editingAlat, setEditingAlat] = useState(null);

  const handleAddAlat = () => {
    addAlat(newAlat);
    setNewAlat({ nama_alat: '', kategori: '', stok: 0 });
  };

  const handleUpdateAlat = () => {
    updateAlat(editingAlat.id, editingAlat);
    setEditingAlat(null);
  };

  return (
    <section>
      <h2>Alat</h2>
      <table>
        <thead>
          <tr>
            <th>Nama Alat</th>
            <th>Kategori</th>
            <th>Stok</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
  {alat.map((item, index) => (
    <tr key={`${item.id}-${index}`}> {/* Use item.id and index to create a unique key */}
      <td>{item.nama_alat}</td>
      <td>{item.kategori}</td>
      <td>{item.stok}</td>
      <td>
        <button onClick={() => setEditingAlat(item)}>Edit</button>
        <button onClick={() => deleteAlat(item.id)}>Delete</button>
      </td>
    </tr>
  ))}
</tbody>

      </table>

      <div>
        <input
          type="text"
          value={newAlat.nama_alat}
          onChange={(e) => setNewAlat({ ...newAlat, nama_alat: e.target.value })}
          placeholder="Nama Alat"
        />
        <input
          type="text"
          value={newAlat.kategori}
          onChange={(e) => setNewAlat({ ...newAlat, kategori: e.target.value })}
          placeholder="Kategori"
        />
        <input
          type="number"
          value={newAlat.stok}
          onChange={(e) => setNewAlat({ ...newAlat, stok: parseInt(e.target.value) })}
          placeholder="Stok"
        />
        <button onClick={handleAddAlat}>Add Alat</button>
      </div>

      {editingAlat && (
        <div>
          <h3>Edit Alat</h3>
          <input
            type="text"
            value={editingAlat.nama_alat}
            onChange={(e) => setEditingAlat({ ...editingAlat, nama_alat: e.target.value })}
            placeholder="Nama Alat"
          />
          <input
            type="text"
            value={editingAlat.kategori}
            onChange={(e) => setEditingAlat({ ...editingAlat, kategori: e.target.value })}
            placeholder="Kategori"
          />
          <input
            type="number"
            value={editingAlat.stok}
            onChange={(e) => setEditingAlat({ ...editingAlat, stok: parseInt(e.target.value) })}
            placeholder="Stok"
          />
          <button onClick={handleUpdateAlat}>Update</button>
        </div>
      )}
    </section>
  );
}

export default Alat;
