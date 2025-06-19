<?php include '../templates/header.php';

if (isset($_POST['daftar_pengurus'])) {
    $nama_lengkap = $_POST['nama_lengkap'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $no_telp = $_POST['no_telp'];
    $alamat = $_POST['alamat'];
    $error = '';

    $sqlCek = "SELECT * FROM users WHERE email = '$email'";
    $resultCek = mysqli_query($conn, $sqlCek);
    if (mysqli_num_rows($resultCek) > 0) {
        $error = 'Email sudah terdaftar. Silakan gunakan email lain.';
    } else {
        $sqlInsertPengurus = "INSERT INTO users (nama_lengkap, email, password, role, no_telp, alamat) VALUES ('$nama_lengkap', '$email', '$password', 'pengurus', '$no_telp', '$alamat');";
        $resultInsertPengurus = mysqli_query($conn, $sqlInsertPengurus);

        if ($resultInsertPengurus) {
            $sqlPengurus = "SELECT * FROM users WHERE email = '$email'";
            $resultPengurus = mysqli_query($conn, $sqlPengurus);
            $pengurus = mysqli_fetch_assoc($resultPengurus);

            $_SESSION['id'] = $pengurus['id'];
            $_SESSION['nama_lengkap'] = $pengurus['nama_lengkap'];
            $_SESSION['email'] = $pengurus['email'];
            $_SESSION['role'] = $pengurus['role'];
            $_SESSION['no_hp'] = $pengurus['no_hp'];
            $_SESSION['alamat'] = $pengurus['alamat'];

            header("Location: ../pengurus/tambah_masjid.php");
            exit;
        }
    }
}
?>
<div class="py-13 px-20">
    <!-- Hero -->
    <div class="bg-[url(../asset/img/hero.png)] bg-contain bg-no-repeat bg-center h-90 flex flex-col items-start px-20 justify-center text-start">
        <h1 class="text-5xl/15 text-gray-800 w-200">Donasi Masjid Mudah dan Cepat di Peduli Masjid</h1>
        <p class="text-lg text-gray-500 mt-2">Temukan informasi donasi masjid dengan mudah dan cepat</p>
    </div>
    <!-- Deskripsi Singkat -->
    <div class="w-full flex flex-col items-center justify-center text-center mt-10">
        <h1 class="text-2xl font-semibold text-gray-800">Bantu Wujudkan Masjid Layak untuk Umat</h1>
        <p class="text-gray-600">Platform donasi online transparan untuk pembangunan & renovasi masjid kurang mampu di seluruh Indonesia.</p>
    </div>
    <!-- Fungsi -->
    <div class="grid grid-cols-2 gap-10 mt-10">
        <div class="bg-white shadow-lg rounded-lg p-6 border border-gray-300">
            <h2 class="text-lg font-semibold text-gray-800 mb-4">Apa itu aplikasi Peduli Masjid?</h2>
            <p class="text-gray-600 mb-4">Aplikasi Peduli Masjid adalah platform digital yang menghubungkan donatur dengan <span class="font-semibold">masjid-masjid yang belum layak</span> di pelosok Indonesia. Kami menyediakan sistem:</p>
            <ul>
                <li class="flex items-start bg-white p-4">
                    <div class="bg-green-100 p-1 rounded-full mr-3">
                        <svg class="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <span class="font-semibold">Terpercaya:&nbsp;</span>Setiap masjid diverifikasi ketat oleh tim kami.
                </li>
                <li class="flex items-start bg-white p-4">
                    <div class="bg-green-100 p-1 rounded-full mr-3">
                        <svg class="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <span class="font-semibold">Transparan:&nbsp;</span>Pantau perkembangan dana & pembangunan secara real-time.
                </li>
                <li class="flex items-start bg-white p-4">
                    <div class="bg-green-100 p-1 rounded-full mr-3">
                        <svg class="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <span class="font-semibold">Tepat Sasaran:&nbsp;</span>Donasi 100% disalurkan untuk kebutuhan masjid.
                </li>
            </ul>
        </div>
        <div class="bg-white shadow-lg rounded-lg p-6 border border-gray-300">
            <h2 class="text-lg font-semibold text-gray-800 mb-4">Setiap Rupiah Anda Akan Membantu:</h2>
            <ul>
                <li class="flex items-start bg-white p-4">
                    <p class="text-lg mr-3">🕌</p>
                    Renovasi bangunan masjid yang rusak
                </li>
                <li class="flex items-start bg-white p-4">
                    <p class="text-lg mr-3">📿</p>
                    Penyediaan alat ibadah (mukena, sajadah, dll)
                </li>
                <li class="flex items-start bg-white p-4">
                    <p class="text-lg mr-3">🔊</p>
                    Perbaikan sound system untuk dakwah
                </li>
                <li class="flex items-start bg-white p-4">
                    <p class="text-lg mr-3">💡</p>
                    Biaya operasional (listrik, air, kebersihan)
                </li>
            </ul>
        </div>
    </div>
    <!-- Content -->
    <div class="w-full border border-gray-300 shadow-lg grid grid-cols-1 md:grid-cols-5 gap-5 mt-10 rounded-lg p-4 md:p-10">
        <!-- Search  -->
        <form class="flex justify-center w-full md:col-span-2 md:col-start-4 order-1 md:order-none">
            <input type="text" placeholder="Cari masjid terdekat..." class="w-full px-4 py-2 border border-gray-400 border-b-1 focus:border-b-1 focus:border-gray-800 focus:ring-0 focus:outline-none transition-all duration-500 rounded-l-full">
            <button type="submit" class="bg-blue-600 text-white rounded-r-full px-4 md:px-8 cursor-pointer py-2 hover:bg-blue-700 transition duration-300 text-sm"> Cari</button>
        </form>

        <!-- Filter  -->
        <!-- <div class="row-start-2 bg-white rounded-lg shadow-lg p-5 max-h-max order-2 md:order-none w-full md:w-auto">
            <h2 class="text-lg font-semibold text-gray-800">Filter Masjid</h2>
            <p class="text-sm text-gray-500">Cari masjid sesuai dengan filter di bawah ini</p>
        </div> -->

        <!-- Cards  -->
        <div class="col-span-1 md:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 order-3 md:order-none">
            <!-- card -->
             <?php 
             $sqlDataMasjid = "SELECT * FROM masjid WHERE status = 'terverifikasi';";
             $resultDataMasjid = mysqli_query($conn, $sqlDataMasjid);
             while($dataMasjid = mysqli_fetch_assoc($resultDataMasjid)):?>
            <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div class="bg-gray-400 h-32 shadow-lg">
                    <!-- Gambar -->
                     <img src="../asset/img/<?= $dataMasjid['dokumen_path']; ?>" alt="<?= $dataMasjid['nama']; ?>" class="w-full h-full object-cover">
                </div>
                <div class="p-4 md:p-6">
                    <!-- Header dengan nama masjid -->
                    <div class="flex justify-between items-start mb-3 md:mb-4">
                        <h2 class="text-lg md:text-xl font-semibold text-gray-800"><?= $dataMasjid['nama']; ?></h2>
                        <span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full"><?= $dataMasjid['status']; ?></span>
                    </div>

                    <!-- Alamat -->
                    <div class="flex items-center text-gray-600 mb-2 md:mb-3">
                        <i class="fas fa-map-marker-alt mr-2 text-blue-500 text-sm md:text-base"></i>
                        <p class="text-xs md:text-sm"><?= $dataMasjid['alamat']; ?></p>
                    </div>

                    <!-- Kebutuhan -->
                    <div class="mb-3 md:mb-4">
                        <h3 class="text-xs md:text-sm font-medium text-gray-700 mb-1">Kebutuhan:</h3>
                        <p class="text-xs md:text-sm text-gray-600"><?= $dataMasjid['deskripsi_kebutuhan']; ?></p>
                    </div>

                    <!-- Footer dengan tombol aksi -->
                    <div class="flex justify-between items-center pt-3 md:pt-4 border-t border-gray-100">
                        <span class="text-xs text-gray-500">Diinput: <span><?= $dataMasjid['created_at']; ?></span></span>
                        <a href="detailMasjid.php?id=<?= $dataMasjid['id']; ?>" class="text-blue-600 hover:text-blue-800 text-xs md:text-sm font-medium">
                            Detail <i class="fas fa-chevron-right ml-1"></i>
                        </a>
                    </div>
                </div>
            </div>
            <?php endwhile; ?>

            <!-- Additional cards would go here -->
        </div>
    </div>
    <!-- Statistik -->
    <?php
    $sqlTotalDonasi = "SELECT SUM(nominal) FROM donasi;";
    $resultTotalDonasi = mysqli_query($conn, $sqlTotalDonasi);
    $dataTotalDonasi = mysqli_fetch_assoc($resultTotalDonasi);
    $totalDonasi = $dataTotalDonasi['SUM(nominal)'] ?? 0;

    $sqlTotalMasjid = "SELECT COUNT(nama) FROM masjid;";
    $resultTotalMasjid = mysqli_query($conn, $sqlTotalMasjid);
    $dataTotalMasjid = mysqli_fetch_assoc($resultTotalMasjid);
    $totalMasjid = $dataTotalMasjid['COUNT(nama)'] ?? 0;

    $sqlTotalDonatur = "SELECT COUNT(nama_lengkap) FROM users WHERE role = 'donatur';";
    $resultTotalDonatur = mysqli_query($conn, $sqlTotalDonatur);
    $dataTotalDonatur = mysqli_fetch_assoc($resultTotalDonatur);
    $totalDonatur = $dataTotalDonatur['COUNT(nama)'] ?? 0;
    ?>
    <div class="w-full grid grid-cols-3 mt-10 px-20 border border-gray-300 rounded-lg shadow-lg py-10">
        <div class="border-l border-gray-800 flex flex-col items-center justify-center p-6">
            <p class="text-sm text-gray-500">Total Donasi</p>
            <h1 class="text-lg text-gray-800">Rp <span><?= number_format($totalDonasi, 0, ',', '.') ?></span></h1>
        </div>
        <div class="border-r border-l border-gray-800 flex flex-col items-center justify-center p-6">
            <p class="text-sm text-gray-500">Terbantu</p>
            <h1 class="text-lg text-gray-800"><span><?= $totalMasjid ?>&nbsp;</span>Masjid</h1>
        </div>
        <div class="border-r border-gray-800 flex flex-col items-center justify-center p-6">
            <p class="text-sm text-gray-500">Lebih dari</p>
            <h1 class="text-lg text-gray-800"><span><?= $totalDonatur ?>&nbsp;</span>Donatur</h1>
        </div>
    </div>
    <!-- Testimoni -->
    <div class="container mx-auto px-4 mt-10">
        <h2 class="text-2xl text-center mb-5 text-gray-800">Apa Kata Donatur Kami?</h2>
        <!-- Grid Container -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Testimonial Card 1 -->
            <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div class="p-6">
                    <div class="flex items-center mb-4">
                        <img
                            src="https://randomuser.me/api/portraits/women/32.jpg"
                            alt="Donatur"
                            class="w-12 h-12 rounded-full object-cover border-2 border-emerald-200">
                        <div class="ml-4">
                            <h4 class="font-semibold text-gray-800">Sarah Nurhaliza</h4>
                            <p class="text-sm text-emerald-600">Donatur Rutin</p>
                        </div>
                    </div>
                    <p class="text-gray-600 mb-4">
                        "Saya sangat puas bisa memantau perkembangan masjid yang saya donasikan. Sistemnya transparan dan update progress selalu dikirim via email."
                    </p>
                    <div class="flex text-yellow-400">
                        ★★★★★
                    </div>
                </div>
            </div>

            <!-- Testimonial Card 2 -->
            <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div class="p-6">
                    <div class="flex items-center mb-4">
                        <img
                            src="https://randomuser.me/api/portraits/men/54.jpg"
                            alt="Donatur"
                            class="w-12 h-12 rounded-full object-cover border-2 border-emerald-200">
                        <div class="ml-4">
                            <h4 class="font-semibold text-gray-800">Ahmad Fauzi</h4>
                            <p class="text-sm text-emerald-600">Donatur Corporate</p>
                        </div>
                    </div>
                    <p class="text-gray-600 mb-4">
                        "Platform yang sangat membantu untuk CSR perusahaan kami. Laporan keuangannya detail dan tim responsif saat kami butuh informasi tambahan."
                    </p>
                    <div class="flex text-yellow-400">
                        ★★★★☆
                    </div>
                </div>
            </div>

            <!-- Testimonial Card 3 -->
            <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div class="p-6">
                    <div class="flex items-center mb-4">
                        <img
                            src="https://randomuser.me/api/portraits/women/68.jpg"
                            alt="Donatur"
                            class="w-12 h-12 rounded-full object-cover border-2 border-emerald-200">
                        <div class="ml-4">
                            <h4 class="font-semibold text-gray-800">Dewi Lestari</h4>
                            <p class="text-sm text-emerald-600">Donatur Pertama Kali</p>
                        </div>
                    </div>
                    <p class="text-gray-600 mb-4">
                        "Proses donasinya mudah banget! Cuma 3 klik langsung terkirim. Senang bisa berkontribusi walau dari jarak jauh."
                    </p>
                    <div class="flex text-yellow-400">
                        ★★★★★
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Open Akun Pengurus -->
    <div class="bg-neutral-200 rounded-lg p-8 mt-10 grid grid-cols-3 gap-5">
        <!-- Text Content -->
        <div class="col-span-2 p-6">
            <h2 class="text-2xl text-gray-800 mb-3">Jadi Pengurus Masjid?</h2>
            <p class="text-gray-500 mb-4">
                Daftarkan masjid Anda untuk mendapatkan bantuan donasi dari masyarakat.
                Kami akan membantu memverifikasi dan mempromosikan kebutuhan masjid Anda.
            </p>
            <ul class="space-y-2 text-gray-700">
                <li class="flex items-start">
                    <svg class="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="ml-2 font-semibold">Kelola donasi dengan transparan</span>
                </li>
                <li class="flex items-start">
                    <svg class="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="ml-2 font-semibold">Update progress pembangunan</span>
                </li>
                <li class="flex items-start">
                    <svg class="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="ml-2 font-semibold">Ajukan pencairan dana mudah</span>
                </li>
            </ul>
        </div>

        <!-- Registration Form -->
        <div class="bg-white p-6 rounded-lg shadow-sm col-span-1">
            <h3 class="font-medium text-md mb-4 text-center text-gray-800">Daftar Pengurus Sekarang</h3>
            <form action="" method="post" autocomplete="off">
                <div class="mb-4">
                    <input
                        type="text"
                        required
                        name="nama_lengkap"
                        id="nama_lengkap"
                        placeholder="Nama Lengkap"
                        class="w-full px-4 py-2 border border-gray-400 border-b-1 focus:border-b-1 focus:border-b-gray-800 focus:border-x-0 focus:border-t-0 focus:ring-0 focus:outline-none transition-all duration-500 rounded focus:rounded-none">
                </div>
                <div class="mb-4">
                    <input
                        type="email"
                        required
                        name="email"
                        id="email"
                        placeholder="Email"
                        class="w-full px-4 py-2 border border-gray-400 border-b-1 focus:border-b-1 focus:border-b-gray-800 focus:border-x-0 focus:border-t-0 focus:ring-0 focus:outline-none transition-all duration-500 rounded focus:rounded-none">
                </div>
                <div class="mb-4">
                    <input
                        type="password"
                        required
                        name="password"
                        id="password"
                        placeholder="Password"
                        class="w-full px-4 py-2 border border-gray-400 border-b-1 focus:border-b-1 focus:border-b-gray-800 focus:border-x-0 focus:border-t-0 focus:ring-0 focus:outline-none transition-all duration-500 rounded focus:rounded-none">
                </div>
                <div class="mb-4">
                    <input
                        type="text"
                        required
                        name="no_telp"
                        id="no_telp"
                        placeholder="Nomor Telepon"
                        class="w-full px-4 py-2 border border-gray-400 border-b-1 focus:border-b-1 focus:border-b-gray-800 focus:border-x-0 focus:border-t-0 focus:ring-0 focus:outline-none transition-all duration-500 rounded focus:rounded-none">
                </div>
                <div class="mb-4">
                    <input
                        type="text"
                        required
                        name="alamat"
                        id="alamat"
                        placeholder="Alamat"
                        class="w-full px-4 py-2 border border-gray-400 border-b-1 focus:border-b-1 focus:border-b-gray-800 focus:border-x-0 focus:border-t-0 focus:ring-0 focus:outline-none transition-all duration-500 rounded focus:rounded-none">
                </div>
                <input type="submit" value="Daftar Pengurus" name="daftar_pengurus" class="w-full text-white px-6 py-2 rounded bg-gray-800 col-span-2 col-start-5 hover:bg-white transition-all duration-300 shadow-lg hover:scale-98 cursor-pointer hover:text-gray-800">
            </form>
            <p class="text-xs text-gray-500 mt-3 text-center">
                Dengan mendaftar, Anda menyetujui syarat dan ketentuan kami
            </p>
        </div>
    </div>
</div>
</div>
<?php include '../templates/footer.php'; ?>