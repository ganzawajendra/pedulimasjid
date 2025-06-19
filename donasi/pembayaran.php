<?php include '../templates/header.php';
if($_SESSION['role'] != 'donatur'){
    header("Location: ../home/index.php");
}

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $sql_get_donasi = "SELECT masjid.nama, masjid.dokumen_path, masjid.alamat, donasi.nominal, metode_pembayaran.metode FROM donasi JOIN masjid ON masjid.id = donasi.masjid_id JOIN metode_pembayaran ON metode_pembayaran.id = donasi.metode_pembayaran_id WHERE donasi.id = $id;";
    $result_get_donasi = mysqli_query($conn, $sql_get_donasi);
    $donasi = mysqli_fetch_assoc($result_get_donasi);
}

if (isset($_POST['bayar'])){
    $sql_update = "UPDATE donasi SET status = 'berhasil' WHERE id = $id";
    $result_update = mysqli_query($conn, $sql_update);
    header("Location: strukPembayaran.php?id=$id");
}

?>
<div class="py-13 px-90 min-h-screen">
    <div class="w-full mt-5 text-left">
        <a href="javascript:history.back()" class="text-manual-white font-semibold text-sm ">
            <i class="fa-solid fa-arrow-left"></i>
            Kembali
        </a>
    </div>
    <div class="w-full bg-white rounded-lg shadow-lg p-8 border border-gray-300 mt-5">
        <div class="flex justify-around mb-8 ">
            <div class="flex flex-col items-center z-5">
                <div class="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">1</div>
                <span class="text-sm mt-2 font-medium text-blue-500">Pilih Nominal</span>
            </div>
            <div class="flex flex-col items-center z-5">
                <div class="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">2</div>
                <span class="text-sm mt-2 font-medium text-blue-500">Pembayaran</span>
            </div>
            <div class="flex flex-col items-center z-5">
                <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">3</div>
                <span class="text-sm mt-2 font-medium text-gray-500">Selesai</span>
            </div>
        </div>
        <div class="flex items-center mb-6 p-4 bg-gray-50 rounded-lg">
            <img src="../asset/img/<?= $donasi['dokumen_path']; ?>" alt="<?= $donasi['nama']; ?>" class="w-16 h-16 rounded-md object-cover">
            <div class="ml-4">
                <h3 class="font-medium text-gray-800"><?= $donasi['nama']; ?></h3>
                <p class="text-sm text-gray-500"><?= $donasi['alamat']; ?></p>
            </div>
        </div>

        <!-- Payment Details -->
        <div class="mb-6">
            <h2 class="text-lg font-semibold mb-4 text-gray-800">Detail Pembayaran</h2>

            <div class="space-y-3">
                <!-- Nominal Donasi -->
                <div class="flex justify-between">
                    <span class="text-gray-600">Nominal Donasi</span>
                    <span class="font-medium">Rp <span><?= number_format($donasi['nominal'], 0, ',', '.'); ?></span></span>
                </div>

                <!-- Payment Method -->
                <div class="flex justify-between">
                    <span class="text-gray-600">Metode Pembayaran</span>
                    <span class="font-medium"><?= $donasi['metode']; ?></span>
                </div>

                <!-- Admin Fee -->
                <div class="flex justify-between text-gray-600">
                    <span>Biaya Admin</span>
                    <span>Rp 0</span>
                </div>

                <!-- Total -->
                <div class="border-t border-gray-300 py-5 flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span class="text-blue-500">Rp <span><?= number_format($donasi['nominal'], 0, ',', '.'); ?></span></span>
                </div>
            </div>
        </div>

        <!-- Action Buttons -->
         <form action="" method="post" class="w-full text-end">
            <input type="submit" value="Bayar" name="bayar" class="col-start-2 cursor-pointer bg-gray-800 hover:bg-gray-900  text-white font-medium py-2 px-4 rounded-md transition">
         </form>
    </div>
</div>
<?php include '../templates/footer.php' ?>