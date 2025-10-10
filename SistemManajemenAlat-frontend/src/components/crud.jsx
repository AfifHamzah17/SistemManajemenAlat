{/* <template>
    <div>
        <h1>Manajemen Alat</h1>
        <form @submit.prevent="createAlat">
            <input v-model="nama_alat" placeholder="Nama Alat" />
            <input v-model="kategori" placeholder="Kategori" />
            <input v-model="stok" type="number" placeholder="Stok" />
            <button type="submit">Tambah Alat</button>
        </form>
        <ul>
            <li v-for="alat in alats" :key="alat.id">
                {{ alat.nama_alat }} - {{ alat.kategori }} - {{ alat.stok }}
                <button @click="deleteAlat(alat.id)">Hapus</button>
            </li>
        </ul>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
    setup() {
        const alats = ref([]);
        const nama_alat = ref('');
        const kategori = ref('');
        const stok = ref('');

        const fetchAlats = async () => {
            const response = await fetch('/api/alats');
            alats.value = await response.json();
        };

        const createAlat = async () => {
            await fetch('/api/alats', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nama_alat: nama_alat.value,
                    kategori: kategori.value,
                    stok: stok.value
                })
            });
            fetchAlats(); // Refresh the list
        };

        const deleteAlat = async (id) => {
            await fetch(`/api/alats/${id}`, { method: 'DELETE' });
            fetchAlats(); // Refresh the list
        };

        onMounted(fetchAlats);

        return { alats, nama_alat, kategori, stok, createAlat, deleteAlat };
    }
};
</script> */}
