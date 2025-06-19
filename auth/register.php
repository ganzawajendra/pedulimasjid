<?php include '../templates/header.php';

if (isset($_POST['register'])) {
    $nama_lengkap = $_POST['nama_lengkap'];
    $no_telp = $_POST['no_telp'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $alamat = $_POST['alamat'];

    $sqlCek = "SELECT * FROM users WHERE email = '$email'";
    $resultCek = mysqli_query($conn, $sqlCek);
    if (mysqli_num_rows($resultCek) > 0) {
        $error = 'Email sudah terdaftar. Silakan gunakan email lain.';
    } else {
        $sqlInsert = "INSERT INTO users (nama_lengkap, email, password, role, no_telp, alamat) VALUES ('$nama_lengkap', '$email', '$password', 'donatur', '$no_telp', '$alamat');";
        $resultInsert = mysqli_query($conn, $sqlInsert);

        if ($resultInsert) {
            echo "<script>alert('Registrasi Berhasil'); window.location.href = 'login.php';</script>";
        } else {
            echo "<script>alert('Registrasi Gagal'); window.location.href = 'register.php';</script>";
        }
    }
}

?>
<div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="grid grid-cols-2">
        <!-- Content Kiri -->
        <div class="flex flex-col items-center justify-center gap-4  p-8 rounded-tl-lg rounded-bl-lg shadow-lg bg-neutral-200">
            <div class="w-full text-left">
                <a href="javascript:history.back()" class="text-manual-white font-semibold text-sm ">
                    <i class="fa-solid fa-arrow-left"></i>
                    Kembali
                </a>
            </div>
            <div class="w-full h-full  flex items-center justify-center flex-col">
                <i class="fa-solid fa-mosque text-manual-white text-2xl"></i>
                <h1 class="text-manual-white text-2xl font-semibold">Peduli Masjid</h1>
            </div>
        </div>
        <!-- Content kanan -->
        <div class="w-full max-w-md bg-white rounded-tr-lg rounded-br-lg shadow-md p-8">
            <h1 class="text-2xl font-semibold">Register</h1>
            <p class="text-sm text-gray-500">Silakan masukkan email dan kata sandi Anda untuk masuk.</p>
            <form action="" method="post" class="flex flex-col mt-5 gap-3">
                <?php if(isset($error)): ?>
                    <p class="text-red-500 text-sm"><?= $error ?></p>
                <?php endif; ?>
                <div>
                    <label for="nama_lengkap" class="text-sm">Nama Lengkap</label>
                    <input type="text" name="nama_lengkap" placeholder="Masukkan Nama Lengkap" id="nama_lengkap" class="w-full px-4 py-2 border border-gray-400 border-b-1 focus:border-b-1 focus:border-b-gray-800 focus:border-x-0 focus:border-t-0 focus:ring-0 focus:outline-none transition-all duration-500 rounded focus:rounded-none" required autofocus autocomplete="off">
                </div>
                <div>
                    <label for="no_telp" class="text-sm">No Telepon</label>
                    <input type="text" name="no_telp" id="no_telp" class="w-full px-4 py-2 border border-gray-400 border-b-1 focus:border-b-1 focus:border-b-gray-800 focus:border-x-0 focus:border-t-0 focus:ring-0 focus:outline-none transition-all duration-500 rounded focus:rounded-none" placeholder="Masukkan No Telepon" required autocomplete="off">
                </div>
                <div>
                    <label for="alamat" class="text-sm">Alamat</label>
                    <input type="text" name="alamat" id="alamat" class="w-full px-4 py-2 border border-gray-400 border-b-1 focus:border-b-1 focus:border-b-gray-800 focus:border-x-0 focus:border-t-0 focus:ring-0 focus:outline-none transition-all duration-500 rounded focus:rounded-none" placeholder="Masukkan No Telepon" required autocomplete="off">
                </div>
                <div>
                    <label for="email" class="text-sm">Email</label>
                    <input type="email" name="email" id="email" class="w-full px-4 py-2 border border-gray-400 border-b-1 focus:border-b-1 focus:border-b-gray-800 focus:border-x-0 focus:border-t-0 focus:ring-0 focus:outline-none transition-all duration-500 rounded focus:rounded-none" placeholder="Masukkan Email" required autocomplete="off">
                </div>
                <div>
                    <label for="password" class="text-sm">Password</label>
                    <input type="password" name="password" id="password" class="w-full px-4 py-2 border border-gray-400 border-b-1 focus:border-b-1 focus:border-b-gray-800 focus:border-x-0 focus:border-t-0 focus:ring-0 focus:outline-none transition-all duration-500 rounded focus:rounded-none" placeholder="Masukkan Password" required>
                </div>
                <input type="submit" value="Register" name="register" class=" text-white px-6 py-2 rounded bg-gray-800 col-span-2 col-start-5 hover:bg-white transition-all duration-300 shadow-md hover:scale-98 cursor-pointer hover:text-gray-800">
            </form>
            <p class="text-sm mt-4 text-center">Sudah punya akun? <a href="login.php" class="text-blue-500">Login disini</a></p>
        </div>
    </div>
</div>
<?php include '../templates/footer.php'; ?>