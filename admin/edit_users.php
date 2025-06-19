<?php include '../templates/header.php';
if($_SESSION['role'] != 'admin'){
    header("Location: ../home/index.php");
}
if(!isset($_GET['id'])){
    header("Location: management_users.php");
}

$id = $_GET['id'];
$query = "SELECT * FROM users WHERE id = $id";
$result = mysqli_query($conn, $query);
$editUser = mysqli_fetch_assoc($result);

if(isset($_POST['edit_admin'])){
    $nama_lengkap = $_POST['nama_lengkap'];
    $email = $_POST['email'];
    $no_telp = $_POST['no_telp'];
    $alamat = $_POST['alamat'];

    $query = "UPDATE users SET nama_lengkap = '$nama_lengkap', email = '$email', no_telp = '$no_telp', alamat = '$alamat' WHERE id = $id";
    $result = mysqli_query($conn, $query);

    if($result){
        header("Location: management_users.php");
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
        <h1 class="text-2xl font-semibold text-gray-800 col-span-2">Edit Pengguna (ID : <span><?= $editUser['id'] ?></span>)</h1>
        <p class="text-sm text-gray-500 col-span-2">Silahkan edit data pengguna</p>
        <form action="" method="post" class="grid grid-cols-4 gap-4 mt-5 items-center">
            <div class="col-span-4">
                <label for="nama_lengkap" class="text-xs text-gray-800">NAMA LENGKAP</label>
                <input type="text" name="nama_lengkap" id="nama_lengkap" class="w-full px-4 py-2 border border-gray-400 border-b-1 focus:border-b-1 focus:border-b-gray-800 focus:border-x-0 focus:border-t-0 focus:ring-0 focus:outline-none transition-all duration-500 rounded focus:rounded-none" value="<?= $editUser['nama_lengkap'] ?>">
            </div>
            <div class="col-span-2">
                <label for="email" class="text-xs text-gray-800">EMAIL</label>
                <input type="text" name="email" id="email" class="w-full px-4 py-2 border border-gray-400 border-b-1 focus:border-b-1 focus:border-b-gray-800 focus:border-x-0 focus:border-t-0 focus:ring-0 focus:outline-none transition-all duration-500 rounded focus:rounded-none" value="<?= $editUser['email'] ?>">
            </div>
            <div class="col-span-2">
                <label for="no_telp" class="text-xs text-gray-800">NO TELP</label>
                <input type="text" name="no_telp" id="no_telp" class="w-full px-4 py-2 border border-gray-400 border-b-1 focus:border-b-1 focus:border-b-gray-800 focus:border-x-0 focus:border-t-0 focus:ring-0 focus:outline-none transition-all duration-500 rounded focus:rounded-none" value="<?= $editUser['no_telp'] ?>">
            </div>
            <div class="col-span-3">
                <label for="alamat" class="text-xs text-gray-800">ALAMAT</label>
                <input type="text" name="alamat" id="alamat" class="w-full px-4 py-2 border border-gray-400 border-b-1 focus:border-b-1 focus:border-b-gray-800 focus:border-x-0 focus:border-t-0 focus:ring-0 focus:outline-none transition-all duration-500 rounded focus:rounded-none" value="<?= $editUser['alamat'] ?>">
            </div>
            <input type="submit" value="Edit Admin" name="edit_admin" class="col-start-4 px-4 py-2 rounded bg-gray-800 hover:bg-gray-900 cursor-pointer text-white font-medium transition-colors text-sm">
        </form>
    </div>
</div>
<?php include '../templates/footer.php' ?>