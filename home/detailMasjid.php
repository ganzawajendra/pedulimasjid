<?php include '../templates/header.php';

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $query = "SELECT * FROM masjid WHERE id = $id";
    $result = mysqli_query($conn, $query);
    $masjid = mysqli_fetch_assoc($result);
}

?>
<div class="py-13 px-90">
    <div class="w-full mt-5 text-left">
        <a href="index.php" class="text-manual-white font-semibold text-sm ">
            <i class="fa-solid fa-arrow-left"></i>
            Kembali
        </a>
    </div>
    <!-- Masjid Detail Card -->
    <div class="max-w-4xl bg-white py-13 rounded-xl shadow-md overflow-hidden">
        <!-- Header with Masjid Image -->
        <div class="relative h-64">
            <img
                src="../asset/img/<?= $masjid['dokumen_path']; ?>"
                alt="<?= $masjid['nama']; ?>"
                class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div class="absolute bottom-4 left-4">
                <h1 class="text-3xl text-white"><?= $masjid['nama']; ?></h1>
                <p class="text-white text-sm flex items-center mt-1">
                    <i class="fa-solid fa-location-dot mr-2"></i>
                    <?= $masjid['alamat']; ?>
                </p>
            </div>
        </div>
        <!-- Main Content -->
        <div class="p-6 border-x border-gray-300">
            <!-- Description Section -->
            <div class="mb-6">
                <h2 class="text-xl font-semibold mb-3 text-gray-800">Deskripsi Kebutuhan</h2>
                <p class="text-gray-600 leading-relaxed">
                    <?= $masjid['deskripsi_kebutuhan']; ?>
                </p>
            </div>
            <!-- Gallery Section -->
            <div class="mb-6">
                <h2 class="text-xl font-semibold mb-3 text-gray-800">Galeri Kondisi Saat Ini</h2>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <img src="https://source.unsplash.com/random/300x200/?mosque,damage" alt="Kondisi atap bocor" class="rounded-lg h-32 w-full object-cover">
                    <img src="https://source.unsplash.com/random/300x200/?speaker,broken" alt="Sound system rusak" class="rounded-lg h-32 w-full object-cover">
                    <img src="https://source.unsplash.com/random/300x200/?ablution" alt="Tempat wudhu" class="rounded-lg h-32 w-full object-cover">
                </div>
            </div>
            <!-- Donasi -->
            <div class="w-full flex justify-end">
                <a href="../donasi/pilihNominal.php?id=<?= $masjid['id']; ?>" class="mt-6 bg-gray-800 hover:bg-gray-900 text-white py-2 px-5 rounded-md transition-all">
                    Donasi Sekarang
                </a>
            </div>
        </div>
    </div>
</div>
</div>
<?php include '../templates/footer.php'; ?>