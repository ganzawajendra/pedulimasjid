<?php include '../templates/header.php';

if($_SESSION['role'] != 'admin'){
    header("Location: ../home/index.php");
}

if(isset($_POST['edit_pencairan_dana'])){
    $status = $_POST['status'];
    $sql_update_pencairan_dana = "UPDATE pencairan_dana SET status = '$status' WHERE id = 1";
    $result_update_pencairan_dana = mysqli_query($conn, $sql_update_pencairan_dana);
    if($result_update_pencairan_dana){
        header("Location: management_pencairan_dana.php");
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
        <h1 class="text-2xl font-semibold text-gray-800 col-span-2">Edit Pencairan Dana (ID : <span>1</span>)</h1>
        <p class="text-sm text-gray-500 col-span-2">Silahkan edit data pencairan dana</p>
        <form action="" method="post" class="grid grid-cols-4 gap-4 mt-5 items-center">
            <div>
                <label for="id" class="text-xs text-gray-500">ID</label>
                <input type="text" name="id" id="id" class="w-full text-gray-500 px-4 py-2 border border-gray-400 border-b-2 border-b-gray-800 focus:border-x-1 focus:border-t-1 focus:ring-0 focus:outline-none transition-all duration-300" readonly value="1">
            </div>
            <div class="col-span-3">
                <label for="nama_lengkap" class="text-xs text-gray-500">NAMA DONATUR</label>
                <input type="text" name="nama_lengkap" id="nama_lengkap" class="w-full text-gray-500 px-4 py-2 border border-gray-400 border-b-2 border-b-gray-800 focus:border-x-1 focus:border-t-1 focus:ring-0 focus:outline-none transition-all duration-300" readonly value="Taslim">
            </div>
            <div class="col-span-2">
                <label for="nama_masjid" class="text-xs text-gray-500">NAMA MASJID</label>
                <input type="text" name="nama_masjid" id="nama_masjid" class="w-full text-gray-500 px-4 py-2 border border-gray-400 border-b-2 border-b-gray-800 focus:border-x-1 focus:border-t-1 focus:ring-0 focus:outline-none transition-all duration-300" readonly value="Masjid An-Nur">
            </div>
            <div class="col-span-2">
                <label for="nominal" class="text-xs text-gray-500">NOMINAL</label>
                <input type="number" name="nominal" id="nominal" class="w-full text-gray-500 px-4 py-2 border border-gray-400 border-b-2 border-b-gray-800 focus:border-x-1 focus:border-t-1 focus:ring-0 focus:outline-none transition-all duration-300" readonly value="1000000">
            </div>
            <div class="col-start-3 col-span-2">
                <label for="status" class="text-xs text-gray-500">STATUS</label>
                <select name="status" id="status" class="w-full px-4 py-2 border border-gray-400 border-b-1 focus:border-b-1 focus:border-b-gray-800 focus:border-x-0 focus:border-t-0 focus:ring-0 focus:outline-none transition-all duration-500 rounded focus:rounded-none">
                    <option value="" selected disabled hidden>Pilih Opsi</option>
                    <option value="disetujui" class="bg-green-200 text-green-800">Disetujui</option>
                    <option value="ditolak" class="bg-red-200 text-red-500">Ditolak</option>
                </select>
            </div>
            <input type="submit" value="Simpan Perubahan" name="edit_pencairan_dana" class="col-start-4 px-4 py-2 rounded bg-gray-800 hover:bg-gray-900 cursor-pointer text-white font-medium transition-colors text-sm">
        </form>
    </div>
</div>
<?php include '../templates/footer.php' ?>