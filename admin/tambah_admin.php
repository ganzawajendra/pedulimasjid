<?php include '../templates/header.php';

session_start();

if ($_SESSION['role'] != 'admin') {
    header("Location: ../home/index.php");
}

if (isset($_POST['tambah_admin'])) {
    $nama_lengkap = $_POST['nama_lengkap'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $no_telp = $_POST['no_telp'];
    $alamat = $_POST['alamat'];

    $sqlCek = "SELECT * FROM users WHERE email = '$email'";
    $resultCek = mysqli_query($conn, $sqlCek);
    if (mysqli_num_rows($resultCek) > 0) {
        $error = 'Email sudah terdaftar. Silakan gunakan email lain.';
    } else {
        $sqlInsert = "INSERT INTO users (nama_lengkap, email, password, role, no_telp, alamat) VALUES ('$nama_lengkap', '$email', '$password', 'admin', '$no_telp', '$alamat');";
        $resultInsert = mysqli_query($conn, $sqlInsert);

        if ($resultInsert) {
            header("Location: management_users.php");
        }
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
        <h1 class="text-2xl font-semibold text-gray-800 col-span-2">Tambah Admin</h1>
        <p class="text-sm text-gray-500 col-span-2">Silahkan menambahkan data admin</p>
        <form action="" method="post" class="grid grid-cols-4 gap-4 mt-5 items-center" autocomplete="off">
            <div class="col-span-4">
                <label for="nama_lengkap" class="text-xs text-gray-800">NAMA LENGKAP</label>
                <input type="text" required name="nama_lengkap" id="nama_lengkap" class="w-full px-4 py-2 border border-gray-400 border-b-1 focus:border-b-1 focus:border-b-gray-800 focus:border-x-0 focus:border-t-0 focus:ring-0 focus:outline-none transition-all duration-500 rounded focus:rounded-none">
            </div>
            <div class="col-span-2">
                <label for="email" class="text-xs text-gray-800">EMAIL</label>
                <input type="text" required name="email" id="email" class="w-full px-4 py-2 border border-gray-400 border-b-1 focus:border-b-1 focus:border-b-gray-800 focus:border-x-0 focus:border-t-0 focus:ring-0 focus:outline-none transition-all duration-500 rounded focus:rounded-none">
            </div>
            <div class="col-span-2">
                <label for="password" class="text-xs text-gray-800">PASSWORD</label>
                <input type="password" required name="password" id="password" class="w-full px-4 py-2 border border-gray-400 border-b-1 focus:border-b-1 focus:border-b-gray-800 focus:border-x-0 focus:border-t-0 focus:ring-0 focus:outline-none transition-all duration-500 rounded focus:rounded-none">
            </div>
            <div>
                <label for="no_telp" class="text-xs text-gray-800">NO TELP</label>
                <input type="text" required name="no_telp" id="no_telp" class="w-full px-4 py-2 border border-gray-400 border-b-1 focus:border-b-1 focus:border-b-gray-800 focus:border-x-0 focus:border-t-0 focus:ring-0 focus:outline-none transition-all duration-500 rounded focus:rounded-none">
            </div>
            <div class="col-span-3">
                <label for="alamat" class="text-xs text-gray-800">ALAMAT</label>
                <input type="text" required name="alamat" id="alamat" class="w-full px-4 py-2 border border-gray-400 border-b-1 focus:border-b-1 focus:border-b-gray-800 focus:border-x-0 focus:border-t-0 focus:ring-0 focus:outline-none transition-all duration-500 rounded focus:rounded-none">
            </div>
            <input type="submit" value="Tambah Admin" name="tambah_admin" class="col-start-4 px-4 py-2 rounded bg-gray-800 hover:bg-gray-900 cursor-pointer text-white font-medium transition-colors text-sm">
        </form>
    </div>
</div>
<?php include '../templates/footer.php' ?>