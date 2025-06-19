<?php include '../templates/header.php';
if($_SESSION['role'] != 'donatur'){
    header("Location: ../home/index.php");
}

if (isset($_GET['id'])) {
    $id_donasi = $_GET['id'];
    $sql_get_struk = "SELECT donasi.id, masjid.dokumen_path, masjid.nama, masjid.alamat, donasi.status, DATE_FORMAT(donasi.created_at, '%d/%m/%Y') as tanggal, metode_pembayaran.metode, donasi.nominal FROM donasi JOIN masjid ON masjid.id = donasi.masjid_id JOIN metode_pembayaran ON metode_pembayaran.id = donasi.metode_pembayaran_id WHERE donasi.id = $id_donasi;";
    $result_get_struk = mysqli_query($conn, $sql_get_struk);
    $struk = mysqli_fetch_assoc($result_get_struk);
}
?>
<div class="py-13 px-90 min-h-screen">
    <!-- Struk Pembayaran -->
    <div class="w-full bg-white rounded-lg shadow-lg p-8 border border-gray-300 mt-5">
        <div class="flex justify-around mb-8">
            <!-- Step Indicators -->
            <div class="flex flex-col items-center z-5">
                <div class="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">1</div>
                <span class="text-sm mt-2 font-medium text-blue-500">Pilih Nominal</span>
            </div>
            <div class="flex flex-col items-center z-5">
                <div class="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">2</div>
                <span class="text-sm mt-2 font-medium text-blue-500">Pembayaran</span>
            </div>
            <div class="flex flex-col items-center z-5">
                <div class="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">3</div>
                <span class="text-sm mt-2 font-medium text-blue-500">Selesai</span>
            </div>
        </div>
        <!-- Header Struk -->
        <div class="bg-blue-500 p-4 text-center rounded-t-lg shadow-lg">
            <h2 class="text-xl font-semibold text-white">Donasi Masjid Berhasil</h2>
            <p class="text-white/90 text-sm mt-1">Terima kasih atas donasi Anda</p>
        </div>

        <!-- Body Struk -->
        <div class="p-5 border-x border-gray-300 border-b rounded-b-lg shadow-lg">
            <!-- Info Masjid -->
            <div class="flex items-start mb-4">
                <img src="../asset/img/<?= $struk['dokumen_path']; ?>" alt="<?= $struk['nama']; ?>" class="w-12 h-12 rounded-md object-cover mr-3">
                <div>
                    <h3 class="font-semibold text-gray-800"><?= $struk['nama']; ?></h3>
                    <p class="text-sm text-gray-500"><?= $struk['alamat']; ?></p>
                </div>
            </div>

            <!-- Detail Transaksi -->
            <div class="border-t border-b border-gray-300 py-4 mb-4">
                <div class="flex justify-between mb-2">
                    <span class="text-gray-500 text-sm">ID Transaksi</span>
                    <span class="font-mono text-sm"><?= substr($struk['status'],0,3) ?>-<?= str_replace("/","",$struk['tanggal']) ?>-<?= $struk['id'] ?></span>
                </div>
                <div class="flex justify-between mb-2">
                    <span class="text-gray-500 text-sm">Tanggal/Waktu</span>
                    <span class="text-sm"><?= $struk['tanggal']; ?></span>
                </div>
                <div class="flex justify-between mb-2">
                    <span class="text-gray-500 text-sm">Metode Pembayaran</span>
                    <span class="text-sm"><?= $struk['metode']; ?></span>
                </div>
                <div class="flex justify-between">
                    <span class="text-gray-500 text-sm">Status</span>
                    <span class="text-blue-500 font-semibold"><?= $struk['status']; ?></span>
                </div>
            </div>

            <!-- Rincian Donasi -->
            <div class="mb-4">
                <h4 class="font-medium text-gray-700 mb-2">Rincian Donasi</h4>
                <div class="flex justify-between mb-1">
                    <span class="text-gray-500 text-sm">Nominal Donasi</span>
                    <span>Rp <?= number_format($struk['nominal'], 0, ',', '.'); ?></span>
                </div>
                <div class="flex justify-between mb-1">
                    <span class="text-gray-500 text-sm">Biaya Admin</span>
                    <span>Rp 0</span>
                </div>
                <div class="flex justify-between mt-3 pt-2 border-t border-gray-200">
                    <span class="font-medium text-gray-700 mb-2">Total</span>
                    <span class="text-blue-500 font-semibold">Rp <?= number_format($struk['nominal'], 0, ',', '.'); ?></span>
                </div>
            </div>

            <!-- Footer Struk -->
            <div class="text-center text-xs text-gray-500">
                <p>Struk ini sah sebagai bukti transaksi</p>
                <p class="mt-1">www.pedulimasjid.com | 0800-1234-5678</p>
            </div>
        </div>
    </div>
    <div>
        <div class="w-full flex justify-end mt-5">
            <a href="../home/index.php" class="bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-4 rounded-md transition">
                Kembali ke Beranda
            </a>
        </div>
    </div>
</div>
<?php include '../templates/footer.php' ?>