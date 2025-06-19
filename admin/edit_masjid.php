<?php include '../templates/header.php';
if ($_SESSION['role'] != 'admin') {
    header("Location: ../home/index.php");
}

if (!isset($_GET['id'])) {
    header("Location: management_masjid.php");
}

$id = $_GET['id'];
$query = "SELECT * FROM masjid WHERE id = $id";
$result = mysqli_query($conn, $query);
$editMasjid = mysqli_fetch_assoc($result);

if(isset($_POST['edit_masjid'])) {
    $id = $_POST['id'];
    $nama = $_POST['nama'];
    $deskripsi_kebutuhan = $_POST['deskripsi_kebutuhan'];
    $alamat = $_POST['alamat'];
    $status = $_POST['status'];

    $query = "UPDATE masjid SET nama = '$nama', deskripsi_kebutuhan = '$deskripsi_kebutuhan', alamat = '$alamat', status = '$status' WHERE id = $id";
    $result = mysqli_query($conn, $query);

    if ($result) {
        header("Location: management_masjid.php");
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
    <div class="w-full bg-white rounded-tr-lg rounded-br-lg shadow-lg p-8">
        <h1 class="text-2xl font-semibold text-gray-800 col-span-2">Edit Masjid (ID : <span><?= $editMasjid['id'] ?></span>)</h1>
        <p class="text-sm text-gray-500 col-span-2">Silahkan edit data masjid</p>
        <form action="" method="post" class="grid grid-cols-4 gap-4 mt-5 items-center">
            <div>
                <label for="id" class="text-xs text-gray-500">ID</label>
                <input type="text" name="id" id="id" class="w-full text-gray-500 px-4 py-2 border border-gray-400 border-b-2 border-b-gray-800 focus:border-x-1 focus:border-t-1 focus:ring-0 focus:outline-none transition-all duration-300" readonly value="<?= $editMasjid['id'] ?>">
            </div>
            <div class="col-span-3">
                <label for="nama" class="text-xs text-gray-500">NAMA MASJID</label>
                <input type="text" name="nama" id="nama" class="w-full text-gray-500 px-4 py-2 border border-gray-400 border-b-2 border-b-gray-800 focus:border-x-1 focus:border-t-1 focus:ring-0 focus:outline-none transition-all duration-300" readonly value="<?= $editMasjid['nama'] ?>">
            </div>
            <div class="col-span-4">
                <label for="alamat" class="text-xs text-gray-500">ALAMAT</label>
                <input type="text" name="alamat" id="alamat" class="w-full text-gray-500 px-4 py-2 border border-gray-400 border-b-2 border-b-gray-800 focus:border-x-1 focus:border-t-1 focus:ring-0 focus:outline-none transition-all duration-300" readonly value="<?= $editMasjid['alamat'] ?>">
            </div>
            <div class="col-span-4">
                <label for="deskripsi_kebutuhan" class="text-xs text-gray-500">DESKRIPSI KEBUTUHAN</label>
                <input type="text" name="deskripsi_kebutuhan" id="deskripsi_kebutuhan" class="w-full text-gray-500 px-4 py-2 border border-gray-400 border-b-2 border-b-gray-800 focus:border-x-1 focus:border-t-1 focus:ring-0 focus:outline-none transition-all duration-300" readonly value="<?= $editMasjid['deskripsi_kebutuhan'] ?>">
            </div>
            <div class="col-span-2">
                <label for="status" class="text-xs text-gray-500">STATUS</label>
                <select name="status" id="status" class="w-full px-4 py-2 border border-gray-400 border-b-1 focus:border-b-1 focus:border-b-gray-800 focus:border-x-0 focus:border-t-0 focus:ring-0 focus:outline-none transition-all duration-500 rounded focus:rounded-none">
                    <option value="" selected disabled hidden>Pilih Opsi</option>
                    <option value="terverifikasi" class="bg-green-200 text-green-800">Terverifikasi</option>
                    <option value="ditolak" class="bg-red-200 text-red-500">Ditolak</option>
                </select>
            </div>
            <input type="submit" value="Simpan Perubahan" name="edit_masjid" class="col-span-2 px-4 py-2 rounded bg-gray-800 hover:bg-gray-900 cursor-pointer text-white font-medium transition-colors text-sm">
        </form>
    </div>
</div>
<?php include '../templates/footer.php' ?>