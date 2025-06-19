<?php include '../templates/header.php';

if($_SESSION['role'] != 'admin'){
    header("Location: ../home/index.php");
}

?>
<div class="min-h-screen py-13 px-20">
    <div class="mt-10">
        <div class="mb-8">
            <h1 class="text-lg font-semibold text-gray-800">Dashboard Admin</h1>
            <p class="text-gray-600">Selamat datang kembali <span class="font-medium text-blue-500"><?= $_SESSION['nama_lengkap'] ?></span>, atur semua data di sini!</p>
        </div>
        <!-- Routing -->
        <div class="border-b border-gray-200">
            <div class="-mb-px flex space-x-8" aria-label="Tabs">
                <a href="dashboard" class="border-manual-blue text-manual-blue whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" aria-current="page">Dashboard</a>
                <a href="management_masjid.php" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors">Masjid</a>
                <a href="management_pencairan_dana.php" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors">Pencairan Dana</a>
                <a href="management_users.php" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors">Users</a>
            </div>
        </div>
        <!-- Content -->
        <div class="grid grid-cols-8 my-10 gap-5">
            <!-- Card Masjid -->
             <?php 
             $sqlTotalMasjid = "SELECT COUNT(nama) FROM masjid;";
             $resultTotalMasjid = mysqli_query($conn, $sqlTotalMasjid);
             $dataTotalMasjid = mysqli_fetch_assoc($resultTotalMasjid);
             $totalMasjid = $dataTotalMasjid['COUNT(nama)'] ?? 0;
             ?>
            <div class="col-span-3 flex items-start p-5 justify-between rounded-lg shadow-lg border border-gray-300 hover:scale-98 hover:border-gray-800 transition-all duration-300 bg-white max-h-max">
                <div class="bg-gray-800 size-10 rounded-full relative">
                    <i class="fa-solid fa-mosque text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></i>
                </div>
                <div>
                    <div class="flex items-end flex-col mb-4">
                        <p class="text-xs text-gray-500">TOTAL MASJID</p>
                        <h1 class="text-xl font-semibold"><?= $totalMasjid ?></h1>
                    </div>
                    <div class="flex items-center justify-end gap-5">
                        <?php 
                        $sqlTotalPending = "SELECT COUNT(nama) FROM masjid WHERE status = 'pending';";
                        $resultTotalPending = mysqli_query($conn, $sqlTotalPending);
                        $dataTotalPending = mysqli_fetch_assoc($resultTotalPending);
                        $totalPending = $dataTotalPending['COUNT(nama)'] ?? 0;
                        $sqlTotalDitolak = "SELECT COUNT(nama) FROM masjid WHERE status = 'ditolak';"; 
                        $resultTotalDitolak = mysqli_query($conn, $sqlTotalDitolak);
                        $dataTotalDitolak = mysqli_fetch_assoc($resultTotalDitolak);
                        $totalDitolak = $dataTotalDitolak['COUNT(nama)'] ?? 0;
                        $sqlTotalTerverifikasi = "SELECT COUNT(nama) FROM masjid WHERE status = 'terverifikasi';"; 
                        $resultTotalTerverifikasi = mysqli_query($conn, $sqlTotalTerverifikasi);
                        $dataTotalTerverifikasi = mysqli_fetch_assoc($resultTotalTerverifikasi);
                        $totalTerverifikasi = $dataTotalTerverifikasi['COUNT(nama)'] ?? 0;
                        ?>
                        <p class="bg-orange-200 p-2 rounded-md text-orange-600 text-xs font-semibold">Pending : <span><?= $totalPending ?></span></p>
                        <p class="bg-red-200 p-2 rounded-md text-red-500 text-xs font-semibold">Ditolak : <span><?= $totalDitolak ?></span></p>
                        <p class="bg-green-200 p-2 rounded-md text-green-800 text-xs font-semibold">Terverifikasi : <span><?= $totalTerverifikasi ?></span></p>
                    </div>
                </div>
            </div>
            <!-- Card Users -->
             <?php 
             $sqlTotalUsers = "SELECT COUNT(nama_lengkap) FROM users;";
             $resultTotalUsers = mysqli_query($conn, $sqlTotalUsers);
             $dataTotalUsers = mysqli_fetch_assoc($resultTotalUsers);
             $totalUsers = $dataTotalUsers['COUNT(nama_lengkap)'] ?? 0;
             ?>
            <div class="col-span-3 flex items-start p-5 justify-between rounded-lg shadow-lg border border-gray-300 hover:scale-98 hover:border-gray-800 transition-all duration-300 bg-white max-h-max">
                <div class="bg-gray-800 size-10 rounded-full relative">
                    <i class="fa-solid fa-user text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></i>
                </div>
                <div>
                    <div class="flex items-end flex-col mb-4 ">
                        <p class="text-xs text-gray-500">TOTAL PENGGUNA</p>
                        <h1 class="text-xl font-semibold"><?= $totalUsers ?></h1>
                    </div>
                    <div class="flex items-center justify-end gap-5">
                        <?php 
                        $sqlTotalDonatur = "SELECT COUNT(nama_lengkap) FROM users WHERE role = 'donatur';";
                        $resultTotalDonatur = mysqli_query($conn, $sqlTotalDonatur);
                        $dataTotalDonatur = mysqli_fetch_assoc($resultTotalDonatur);
                        $totalDonatur = $dataTotalDonatur['COUNT(nama_lengkap)'] ?? 0;
                        $sqlTotalPengurus = "SELECT COUNT(nama_lengkap) FROM users WHERE role = 'pengurus';";
                        $resultTotalPengurus = mysqli_query($conn, $sqlTotalPengurus);
                        $dataTotalPengurus = mysqli_fetch_assoc($resultTotalPengurus);
                        $totalPengurus = $dataTotalPengurus['COUNT(nama_lengkap)'] ?? 0;
                        ?>
                        <p class="bg-blue-100 text-blue-800 p-2 rounded-md text-xs font-semibold">Donatur : <span><?= $totalDonatur ?></span></p>
                        <p class="bg-teal-100 text-teal-800 p-2 rounded-md text-xs font-semibold">Pengurus Masjid : <span><?= $totalPengurus ?></span></p>
                    </div>
                </div>
            </div>
            <!-- Card Income -->
             <?php 
             $sqlTotalDonasi = "SELECT SUM(nominal) FROM donasi;";
             $resultTotalDonasi = mysqli_query($conn, $sqlTotalDonasi);
             $dataTotalDonasi = mysqli_fetch_assoc($resultTotalDonasi);
             $totalDonasi = $dataTotalDonasi['SUM(nominal)'] ?? 0;
             ?>
            <div class="col-span-2 flex items-start p-5 justify-between rounded-lg shadow-lg border border-gray-300 hover:scale-98 hover:border-gray-800 transition-all duration-300 bg-white max-h-max">
                <div class="bg-gray-800 size-10 rounded-full relative">
                    <i class="fa-solid fa-dollar-sign text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></i>
                </div>
                <div>
                    <div class="flex items-end flex-col">
                        <p class="text-xs text-gray-500">TOTAL DONASI</p>
                        <h1 class="text-xl font-semibold">RP <span><?= number_format($totalDonasi, 2, ",", ".") ?></span></h1>
                    </div>
                </div>
            </div>
            <!-- Card Detail -->
            <div class="col-span-6 flex items-start p-5 gap-5 justify-between rounded-lg shadow-lg border border-gray-300 hover:scale-98 hover:border-gray-800 transition-all duration-300 bg-white max-h-max">
                <div class="bg-gray-800 size-10 rounded-full relative">
                    <i class="fa-solid fa-info text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></i>
                </div>
                <div class="w-full">
                    <div class="flex items-end flex-col">
                        <p class="text-xs text-gray-500">DONATUR TERAKHIR</p>
                    </div>
                    <table class="w-full mt-5">
                        <thead>
                            <tr class="text-center bg-gray-100 text-xs text-gray-500">
                                <td class="py-2">NO</td>
                                <td class="py-2">NAMA DONATUR</td>
                                <td class="py-2">NAMA MASJID</td>
                                <td class="py-2">TOTAL DONASI</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="text-center border-b border-gray-300">
                                <td class="py-2">1</td>
                                <td class="py-2">Donatur 1</td>
                                <td class="py-2">Masjid 1</td>
                                <td class="py-2">RP 1.000.000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
<?php include '../templates/footer.php' ?>