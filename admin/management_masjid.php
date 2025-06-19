<?php include '../templates/header.php';

if($_SESSION['role'] != 'admin'){
    header("Location: ../home/index.php");
}
?>
<div class="min-h-screen py-13 px-20">
    <div class="mt-10">
        <div class="mb-8">
            <h1 class="text-lg font-semibold text-gray-800">Halaman Masjid</h1>
            <p class="text-gray-600">Selamat datang kembali <span class="font-medium text-blue-500"><?= $_SESSION['nama_lengkap'] ?></span>, atur semua data di sini!</p>
        </div>
        <!-- Routing -->
        <div class="border-b border-gray-200">
            <div class="-mb-px flex space-x-8" aria-label="Tabs">
                <a href="dashboard.php" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors">Dashboard</a>
                <a href="management_masjid.php" class="border-manual-blue text-manual-blue whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">Masjid</a>
                <a href="management_pencairan_dana.php" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors">Pencairan Dana</a>
                <a href="management_users.php" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors">Users</a>
            </div>
        </div>
        <!-- Content -->
        <div class="p-8">
            <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                    <tr>
                        <td class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">id</td>
                        <td class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Masjid</td>
                        <td class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Alamat</td>
                        <td class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deskripsi Kebutuhan</td>
                        <td class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</td>
                        <td class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal Dibuat</td>
                        <td class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</td>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <?php
                    $sqlFetchMasjid = "SELECT * FROM masjid";
                    $resultFetchMasjid = mysqli_query($conn, $sqlFetchMasjid);
                    $no = 1;
                    while ($masjid = mysqli_fetch_assoc($resultFetchMasjid)) :
                    ?>
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap"><?= $no ?></td>
                            <td class="px-6 py-4 whitespace-nowrap"><?= $masjid['nama'] ?></td>
                            <td class="px-6 py-4 whitespace-nowrap"><?= $masjid['alamat'] ?></td>
                            <td class="px-6 py-4"><?= $masjid['alamat'] ?></td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <?php
                                if ($masjid['status'] === 'terverifikasi') {
                                    echo '<span class="px-2 py-1 rounded bg-green-100 text-green-700 text-xs font-semibold">Terverifikasi</span>';
                                } elseif ($masjid['status'] === 'pending') {
                                    echo '<span class="px-2 py-1 rounded bg-orange-100 text-orange-700 text-xs font-semibold">Pending</span>';
                                } elseif ($masjid['status'] === 'ditolak') {
                                    echo '<span class="px-2 py-1 rounded bg-red-100 text-red-800 text-xs font-semibold">Ditolak</span>';
                                }
                                ?>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap"><?= $masjid['created_at'] ?></td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <a href="edit_masjid.php?id=<?= $masjid['id'] ?>" class="text-orange-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                    <?php
                        $no++;
                    endwhile; ?>
                </tbody>
            </table>
        </div>
    </div>
</div>
<?php include '../templates/footer.php' ?>