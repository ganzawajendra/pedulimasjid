<?php include '../templates/header.php';

if($_SESSION['role'] != 'admin'){
    header("Location: ../home/index.php");
}
?>
<div class="min-h-screen py-13 px-20">
    <div class="mt-10">
        <div class="mb-8">
            <h1 class="text-lg font-semibold text-gray-800">Halaman Pengguna</h1>
            <p class="text-gray-600">Selamat datang kembali <span class="font-medium text-blue-500"><?= $_SESSION['nama_lengkap'] ?></span>, atur semua data di sini!</p>
        </div>
        <!-- Routing -->
        <div class="border-b border-gray-200">
            <div class="-mb-px flex space-x-8" aria-label="Tabs">
                <a href="dashboard.php" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors">Dashboard</a>
                <a href="management_masjid.php" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors">Masjid</a>
                <a href="management_pencairan_dana.php" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors">Pencairan Dana</a>
                <a href="management_users.php" class="border-manual-blue text-manual-blue whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">Users</a>
            </div>
        </div>
        <!-- Tambah Admin -->
         <div class="flex justify-end px-8 py-3">
            <a href="tambah_admin.php" class="text-sm text-white bg-gray-800 hover:bg-gray-900 py-2 px-4 rounded-md">
                <i class="fa-solid fa-plus mr-2 text-sm"></i>Tambah Admin</a>
         </div>
        <!-- Content -->
        <div class="p-8">
            <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                    <tr>
                        <td class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</td>
                        <td class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Lengkap</td>
                        <td class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</td>
                        <td class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No Telp</td>
                        <td class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</td>
                        <td class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Alamat</td>
                        <td class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</td>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <?php 
                    $sqlUsers = "SELECT * FROM users;";
                    $resultUsers = mysqli_query($conn, $sqlUsers);
                    $no = 1;
                    while($row = mysqli_fetch_assoc($resultUsers)) :?>
                    <tr>
                        <td class="px-6 py-4 whitespace-nowrap"><?= $no ?></td>
                        <td class="px-6 py-4"><?= $row['nama_lengkap'] ?></td>
                        <td class="px-6 py-4 whitespace-nowrap"><?= $row['email'] ?></td>
                        <td class="px-6 py-4 whitespace-nowrap"><?= $row['no_telp'] ?></td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <?php 
                            if ($row['role'] === 'donatur') {
                                echo '<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Donatur</span>';
                            } else if ($row['role'] === 'pengurus') {
                                echo '<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">Pengurus Masjid</span>';
                            } else {
                                echo '<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-slate-200 text-slate-800">Admin</span>';
                            }
                            ?>
                        <td class="px-6 py-4"><?= $row['alamat'] ?></td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <a href="edit_users.php?id=<?= $row['id'] ?>" class="text-orange-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                    <?php $no++; endwhile; ?>
                </tbody>
            </table>
        </div>
    </div>
</div>
<?php include '../templates/footer.php' ?>