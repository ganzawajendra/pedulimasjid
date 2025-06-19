<?php include '../templates/header.php';

if($_SESSION['role'] != 'admin'){
    header("Location: ../home/index.php");
}
?>
<div class="min-h-screen py-13 px-20">
    <div class="mt-10">
        <div class="mb-8">
            <h1 class="text-lg font-semibold text-gray-800">Halaman Pencairan Dana</h1>
            <p class="text-gray-600">Selamat datang kembali <span class="font-medium text-blue-500"><?= $_SESSION['nama_lengkap'] ?></span>, atur semua data di sini!</p>
        </div>
        <!-- Routing -->
        <div class="border-b border-gray-200">
            <div class="-mb-px flex space-x-8" aria-label="Tabs">
                <a href="dashboard.php" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors" >Dashboard</a>
                <a href="management_masjid.php" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors">Masjid</a>
                <a href="management_pencairan_dana.php" class="border-manual-blue text-manual-blue whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">Pencairan Dana</a>
                <a href="management_users.php" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors">Users</a>
            </div>
        </div>
        <!-- Content -->
        <div class="p-8">
            <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                    <tr>
                        <td class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Id</td>
                        <td class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Donatur</td>
                        <td class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Masjid</td>
                        <td class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nominal</td>
                        <td class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tujuan</td>
                        <td class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</td>
                        <td class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</td>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <?php 
                    $sqlPencairanDana = "SELECT pencairan_dana.id, users.nama_lengkap, masjid.nama, pencairan_dana.nominal, tujuan, pencairan_dana.status FROM pencairan_dana JOIN users ON pencairan_dana.user_id = users.id JOIN masjid ON pencairan_dana.masjid_id = masjid.id;";
                    $resultPencairanDana = mysqli_query($conn, $sqlPencairanDana);
                    $no = 1;
                    while($pencairanDana = mysqli_fetch_assoc($resultPencairanDana)) :?>
                    <tr>
                        <td class="px-6 py-4 whitespace-nowrap"><?= $no ?></td>
                        <td class="px-6 py-4 whitespace-nowrap"><?= $pencairanDana['nama_lengkap'] ?></td>
                        <td class="px-6 py-4 whitespace-nowrap"><?= $pencairanDana['nama'] ?></td>
                        <td class="px-6 py-4 whitespace-nowrap">RP <span><?= number_format($pencairanDana['nominal'], 0, ",", ".") ?></span></td>
                        <td class="px-6 py-4"><?= $pencairanDana['tujuan'] ?></td>
                        <td class="px-6 py-4 whitespace-nowrap"><span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"><?= $pencairanDana['status'] ?></span></td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <a href="edit_pencairan_dana.php?id=<?= $pencairanDana['id'] ?>" class="text-orange-500 hover:underline">Detail</a>
                        </td>
                    </tr>
                    <?php $no++; endwhile; ?>
                </tbody>
            </table>
        </div>
    </div>
</div>
<?php include '../templates/footer.php' ?>