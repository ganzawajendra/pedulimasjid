<?php include '../templates/header.php';

if ($_SESSION['role'] != 'pengurus') {
    header("Location: ../home/index.php");
} else {
    if (isset($_SESSION['id'])) {
        $user_id = $_SESSION['id'];
        $sql = "SELECT * FROM users WHERE id = $user_id";
        $result = mysqli_query($conn, $sql);
        $user = mysqli_fetch_assoc($result);
    }
}

$sqlMasjid = "SELECT * FROM masjid WHERE pengurus_id = $user_id";
$resultMasjid = mysqli_query($conn, $sqlMasjid);
$masjid = mysqli_fetch_assoc($resultMasjid);
$masjid_id = $masjid['id'];

if (isset($_POST['submit_progress'])) {
    $deskripsi = $_POST['deskripsi'];

    print_r($_FILES["foto_path"]);

    if ($_FILES["foto_path"]["error"] !== 0) {
        echo "<p class='text-red-500'>Image Doesn't Exist</p>";
    } else {
        $files_name = $_FILES["foto_path"]["name"];
        $file_size = $_FILES["foto_path"]["size"];
        $tmp_name = $_FILES["foto_path"]["tmp_name"];

        $valid_extensions = ["jpg", "jpeg", "png"];
        $image_extension = explode(".", $files_name);
        $image_extension = strtolower(end($image_extension));

        if (!in_array($image_extension, $valid_extensions)) {
            echo "<p class='text-red-500'>Invalid Image</p>";
        } else if ($file_size > 1000000) {
            echo "<p class='text-red-500'>Image Size too Large</p>";
        } else {
            $new_image_name = uniqid();
            $new_image_name .= "." . $image_extension;

            move_uploaded_file($tmp_name, "../asset/img/" . $new_image_name);

            $sqlInsertProgress = "INSERT INTO progres_pembangunan (masjid_id, user_id, deskripsi, foto_path) VALUES ('$masjid_id', '$user_id','$deskripsi', '$new_image_name');";
            $resultInsertProgress = mysqli_query($conn, $sqlInsertProgress);
            if ($resultInsertProgress) {
                header("Location: index.php?success=progress_added");
                if (isset($_GET['success']) && $_GET['success'] == 'progress_added') {
                    echo "<p class='text-green-500'>Progress added successfully!</p>";
                }
                exit();
            } else {
                echo "<p class='text-red-500'>Failed to add progress</p>";
            }
        }
    }
}

$sqlTotalDonasi = "SELECT SUM(nominal) FROM donasi WHERE masjid_id = $masjid_id;";
$resultTotalDonasi = mysqli_query($conn, $sqlTotalDonasi);
$dataTotalDonasi = mysqli_fetch_assoc($resultTotalDonasi);
$totalDonasi = $dataTotalDonasi['SUM(nominal)'] ?? 0;

$sqlDonasiTersalurkan = "SELECT SUM(nominal) FROM pencairan_dana WHERE masjid_id = $masjid_id AND status = 'disetujui';";
$resultDonasiTersalurkan = mysqli_query($conn, $sqlDonasiTersalurkan);
$dataDonasiTersalurkan = mysqli_fetch_assoc($resultDonasiTersalurkan);
$donasiTersalurkan = $dataDonasiTersalurkan['SUM(nominal)'] ?? 0;

$error = '';

if (isset($_POST['submit_pencairan'])) {
    $nominal = $_POST['nominal'];
    $tujuan = $_POST['tujuan'];

    if ($nominal > ($totalDonasi - $donasiTersalurkan)) {
        $error = "Nominal pencairan melebihi donasi tersalurkan";
        exit();
    } else {
        $sql_pencairan = "INSERT INTO pencairan_dana (masjid_id, user_id, nominal, tujuan, status) VALUES ('$masjid_id', '$user_id', '$nominal', '$tujuan', 'diajukan');";
        $result_pencairan = mysqli_query($conn, $sql_pencairan);
        if ($result_pencairan) {
            header("Location: index.php?success=pencairan_added");
            if (isset($_GET['success']) && $_GET['success'] == 'pencairan_added') {
                echo "<p class='text-green-500'>Pencairan added successfully!</p>";
            }
            exit();
        }
    }
}

?>
<div class="py-13 px-20">
    <!-- Dashboard Pengurus Masjid -->
    <div class="min-h-screen mt-10 grid grid-cols-3 gap-5">
        <!-- Header -->
        <div class="flex justify-between items-center mb-8 col-span-2">
            <div>
                <h1 class="text-lg font-semibold text-gray-800">Dashboard Pengurus</h1>
                <p class="text-gray-600">Selamat datang kembali, <span class="font-medium text-blue-500"><?= $user['nama_lengkap']; ?></span></p>
            </div>
            <div class="flex items-center space-x-4">
                <div class="flex items-center">
                    <i class="fa-solid fa-user-circle text-gray-600 text-4xl"></i>
                </div>
            </div>
        </div>
        <!-- Masjid -->
        <div class="flex items-center mb-6 p-4 bg-gray-50 rounded-lg">
            <img src="../asset/img/<?= $masjid['dokumen_path']; ?>" alt="<?= $masjid['nama']; ?>" class="w-16 h-16 rounded-md object-cover">
            <div class="ml-4">
                <h3 class="font-medium text-gray-800"><?= $masjid['nama']; ?></h3>
                <p class="text-sm text-gray-500"><?= $masjid['alamat']; ?></p>
            </div>
        </div>
        <!-- Total Donasi -->
        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-300">
            <div class="flex justify-between">
                <div>
                    <p class="text-gray-500 text-sm">Total Donasi</p>
                    <h3 class="text-2xl font-semibold text-gray-800 mt-1">Rp <span><?= number_format($totalDonasi, 0, ',', '.'); ?></span></h3>
                </div>
                <div class="bg-green-200 p-3 rounded-lg">
                    <i class="fa-solid fa-dollar-sign text-lg text-green-800"></i>
                </div>
            </div>
        </div>

        <!-- Dana Tersalurkan -->
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-300">
            <div class="flex justify-between">
                <div>
                    <p class="text-gray-500 text-sm">Dana Tersalurkan</p>
                    <h3 class="text-2xl font-semibold text-gray-800 mt-1">Rp <span><?= number_format($donasiTersalurkan, 0, ',', '.'); ?></span></h3>
                </div>
                <div class="bg-blue-100 p-3 rounded-lg">
                    <i class="fa-regular fa-clipboard text-lg text-blue-600"></i>
                </div>
            </div>
        </div>

        <!-- Sisa Dana -->
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-300">
            <div class="flex justify-between">
                <div>
                    <p class="text-gray-500 text-sm">Sisa Dana</p>
                    <h3 class="text-2xl font-semibold text-gray-800 mt-1">Rp <span><?= number_format($totalDonasi - $donasiTersalurkan, 0, ',', '.'); ?></span></h3>
                </div>
                <div class="bg-amber-100 p-3 rounded-lg">
                    <i class="fa-regular fa-clock text-lg text-amber-600"></i>
                </div>
            </div>
        </div>

        <!-- Recent Activity -->
        <div class="col-span-3 bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-lg font-semibold text-gray-800">Aktivitas Terkini</h2>
            </div>
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Donatur</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nominal</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <?php
                        $sqlDonasi = "SELECT donasi.id, users.nama_lengkap, users.email, donasi.nominal, donasi.created_at, donasi.status FROM donasi JOIN users ON donasi.user_id = users.id WHERE donasi.masjid_id = $masjid_id;";
                        $resultDonasi = mysqli_query($conn, $sqlDonasi);
                        while ($dataDonasi = mysqli_fetch_assoc($resultDonasi)) : ?>
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0 h-10 w-10">
                                            <img class="h-10 w-10 rounded-full" src="https://randomuser.me/api/portraits/women/44.jpg" alt="">
                                        </div>
                                        <div class="ml-4">
                                            <div class="text-sm font-medium text-gray-900"><?= $dataDonasi['nama_lengkap']; ?></div>
                                            <div class="text-sm text-gray-500"><?= $dataDonasi['email']; ?></div>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm text-gray-900">Rp <span><?= number_format($dataDonasi['nominal'], 0, ',', '.'); ?></span></div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm text-gray-500"><?= $dataDonasi['created_at']; ?></div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <?php
                                    if ($dataDonasi['status'] == 'pending') {
                                        echo '<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">' . $dataDonasi['status'] . '</span>';
                                    } elseif ($dataDonasi['status'] == 'berhasil') {
                                        echo '<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">' . $dataDonasi['status'] . '</span>';
                                    }
                                    ?>

                                </td>
                            </tr>
                        <?php endwhile; ?>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Progress Section -->
        <div class="bg-white p-6 rounded-xl shadow-sm border col-start-2 border-gray-300">
            <div class="flex items-center mb-6 gap-5">
                <div class="bg-blue-100 p-3 rounded-lg">
                    <i class="fa-regular fa-image text-lg text-blue-600"></i>
                </div>
                <h2 class="text-lg font-semibold text-gray-800">Update Progress Pembangunan</h2>
            </div>

            <form action="" method="post" autocomplete="off" enctype="multipart/form-data">

                <!-- Input Gambar -->
                <div class="mb-4">
                    <label for="foto_path">Foto</label>
                    <input type="file" name="foto_path" id="foto_path" accept=".jpg, .png, .jpeg " class="w-full px-4 py-2 border border-gray-400 border-b-1 focus:border-b-1 focus:border-b-gray-800 focus:border-x-0 focus:border-t-0 focus:ring-0 focus:outline-none transition-all duration-500 rounded focus:rounded-none">
                </div>
                <!-- Deskripsi Progress -->
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700 mb-1" for="deskripsi">Deskripsi Progress</label>
                    <textarea
                        name="deskripsi"
                        id="deskripsi"
                        rows="3"
                        class="w-full px-4 py-2 border border-gray-400 border-b-1 focus:border-b-1 focus:border-b-gray-800 focus:border-x-0 focus:border-t-0 focus:ring-0 focus:outline-none transition-all duration-500 rounded focus:rounded-none"
                        placeholder="Contoh: Pengecatan tembok bagian depan selesai 80%"
                        required></textarea>
                </div>
                <!-- Submit Button -->
                <input
                    type="submit"
                    class="w-full bg-gray-800 hover:bg-gray-900 crursor-pointer text-white font-medium py-2 px-4 rounded-md transition-colors text-sm"
                    value="Kirim Progress"
                    name="submit_progress"
                    id="submit_progress">
                </input>
            </form>
        </div>

        <!-- Pencairan Dana -->
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-300 max-h-max">
            <div class="flex items-center mb-6 gap-5">
                <div class="bg-green-200 p-3 rounded-lg">
                    <i class="fa-solid fa-plus text-lg text-green-800"></i>
                </div>
                <h2 class="text-lg font-semibold text-gray-800">Ajukan Pencairan Dana</h2>
            </div>

            <form action="" method="post" autocomplete="off">
                <?php if($error){
                    echo '<p class="text-red-500 text-sm mb-4">'.$error.'</p>';
                } ?>
                <div class="mb-4">
                    <label for="nominal">Nominal :</label>
                    <input type="number" name="nominal" id="nominal" class="w-full px-4 py-2 border border-gray-400 border-b-1 focus:border-b-1 focus:border-b-gray-800 focus:border-x-0 focus:border-t-0 focus:ring-0 focus:outline-none transition-all duration-500 rounded focus:rounded-none" placeholder="Masukkan nominal pencairan" required>
                </div>
                <div class="mb-4">
                    <label for="tujuan">Tujuan :</label>
                    <input type="text" name="tujuan" id="tujuan" class="w-full px-4 py-2 border border-gray-400 border-b-1 focus:border-b-1 focus:border-b-gray-800 focus:border-x-0 focus:border-t-0 focus:ring-0 focus:outline-none transition-all duration-500 rounded focus:rounded-none" placeholder="Masukkan tujuan pencairan" required>
                </div>
                <input type="submit"
                    name="submit_pencairan"
                    id="submit_pencairan"
                    class="w-full bg-gray-800 cursor-pointer hover:bg-gray-900 text-white font-medium py-2 px-4 rounded-md transition-colors text-sm"
                    value="Kirim Pencairan">
            </form>
        </div>
    </div>
</div>
<?php include '../templates/footer.php' ?>