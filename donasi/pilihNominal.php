<?php include '../templates/header.php';
if($_SESSION['role'] != 'donatur'){
    header("Location: ../auth/login.php");
}

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $query = "SELECT * FROM masjid WHERE id = $id";
    $result = mysqli_query($conn, $query);
    $masjid = mysqli_fetch_assoc($result);
}

if (isset($_POST['lanjutkan'])) {
    $nominal = $_POST['nominal_donasi'];
    $metode_pembayaran = $_POST['metode_pembayaran'];

    $sql_get_id_pembayaran = "SELECT id FROM metode_pembayaran WHERE metode = '$metode_pembayaran';";
    $result_get_id_pembayaran = mysqli_query($conn, $sql_get_id_pembayaran);
    $id_pembayaran = mysqli_fetch_assoc($result_get_id_pembayaran);

    $sql_donasi = "INSERT INTO donasi (user_id, masjid_id, metode_pembayaran_id, nominal) VALUES ($user_id, $id, $id_pembayaran[id], $nominal)";
    $result_donasi = mysqli_query($conn, $sql_donasi);

    if ($result_donasi) {
        $get_id_donasi = "SELECT id FROM donasi WHERE user_id = $user_id AND masjid_id = $id AND metode_pembayaran_id = $id_pembayaran[id] AND nominal = $nominal";
        $result_get_id_donasi = mysqli_query($conn, $get_id_donasi);
        $id_donasi = mysqli_fetch_assoc($result_get_id_donasi);
        header("Location: pembayaran.php?id=$id_donasi[id]");
    }
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
        <div class="flex justify-around mb-8">
            <!-- Step Indicators -->
            <div class="flex flex-col items-center z-5">
                <div class="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">1</div>
                <span class="text-sm mt-2 font-medium text-blue-500">Pilih Nominal</span>
            </div>
            <div class="flex flex-col items-center z-5">
                <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">2</div>
                <span class="text-sm mt-2 font-medium text-gray-500">Pembayaran</span>
            </div>
            <div class="flex flex-col items-center z-5">
                <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">3</div>
                <span class="text-sm mt-2 font-medium text-gray-500">Selesai</span>
            </div>
        </div>
        <div>
            <div class="flex items-center mb-6 bg-gray-200 rounded-lg">
                <img src="../asset/img/<?= $masjid['dokumen_path']; ?>  " alt="<?= $masjid['nama']; ?>" class="w-16 h-16 rounded-md object-cover">
                <div class="ml-4">
                    <h3 class="font-medium text-gray-800"><?= $masjid['nama']; ?></h3>
                    <p class="text-sm text-gray-500"><?= $masjid['alamat']; ?></p>
                </div>
            </div>
            <form action="" class="grid grid-cols-2 gap-5 mb-5" method="POST">
                <div class="w-full bg-white">
                    <label for="nominal_donasi" class="text-sm text-gray-500">Nominal Donasi</label>
                    <input type="number" name="nominal_donasi" id="nominal_donasi" class="w-full px-2 py-2 border border-gray-400 border-b-1 focus:border-b-1 focus:border-b-gray-800 focus:border-x-0 focus:border-t-0 focus:ring-0 focus:outline-none transition-all duration-500 rounded focus:rounded-none" placeholder="70000" required>
                </div>
                <div class="w-full bg-white">
                    <label class="text-sm text-gray-500" for="metode_pembayaran">Pilih Metode Pembayaran</label>
                    <select name="metode_pembayaran" id="metode_pembayaran" class="px-2 w-full py-2 border border-gray-400 border-b-1 focus:border-b-1 focus:border-b-gray-800 focus:border-x-0 focus:border-t-0 focus:ring-0 focus:outline-none transition-all duration-500 rounded focus:rounded-none">
                        <option value="" selected disabled hidden>Pilih Metode Pembayaran</option>
                        <option value="Transfer Bank">Transfer Bank</option>
                        <option value="E-Wallet">E-Wallet</option>
                        <option value="Qris">Qris</option>
                    </select>
                </div>
                <input type="submit" value="Lanjutkan" name="lanjutkan" class="col-start-2 cursor-pointer bg-gray-800 hover:bg-gray-900  text-white font-medium py-2 px-4 rounded-md transition">
            </form>
        </div>
    </div>

</div>
<?php include '../templates/footer.php' ?>