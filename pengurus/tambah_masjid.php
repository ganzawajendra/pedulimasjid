<?php include '../templates/header.php';

if($_SESSION['role'] != 'pengurus'){
    header("Location: ../home/index.php");
}

if (isset($_POST['tambah_masjid'])) {
    $nama = $_POST['nama'];
    $deskripsi_kebutuhan = $_POST['deskripsi_kebutuhan'];
    $alamat = $_POST['alamat'];
    $pengurus_id = $_SESSION['id'];

    print_r($_FILES["dokumen_path"]);

    if ($_FILES["dokumen_path"]["error"] !== 0) {
        echo "<p class='text-red-500'>Image Doesn't Exist</p>";
    } else {
        $files_name = $_FILES["dokumen_path"]["name"];
        $file_size = $_FILES["dokumen_path"]["size"];
        $tmp_name = $_FILES["dokumen_path"]["tmp_name"];

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

            $sqlInsertMasjid = "INSERT INTO masjid (nama, alamat, deskripsi_kebutuhan, dokumen_path, status, pengurus_id) VALUES ('$nama', '$alamat', '$deskripsi_kebutuhan', '$new_image_name', 'pending', '$pengurus_id');";
            $resultInsertMasjid = mysqli_query($conn, $sqlInsertMasjid);
            if ($resultInsertMasjid) {
                header("Location: index.php?success=masjid_added");
                if (isset($_GET['success']) && $_GET['success'] == 'masjid_added') {
                    echo "<p class='text-green-500'>Masjid added successfully!</p>";
                }
                exit();
            } else {
                echo "<p class='text-red-500'>Failed to add masjid</p>";
            }
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
        <h1 class="text-2xl font-semibold text-gray-800 col-span-2">Tambahkan Masjid </h1>
        <p class="text-sm text-gray-500 col-span-2">Silahkan tambahkan masjid sesuai dengan masjid yang anda miliki</p>
        <form action="" method="post" class="grid grid-cols-4 gap-4 mt-5 items-center" enctype="multipart/form-data" autocomplete="off">
            <div class="col-span-2">
                <label for="nama" class="text-xs text-gray-500">NAMA MASJID</label>
                <input type="text" required name="nama" id="nama" class="w-full px-4 py-2 border border-gray-400 border-b-1 focus:border-b-1 focus:border-b-gray-800 focus:border-x-0 focus:border-t-0 focus:ring-0 focus:outline-none transition-all duration-500 rounded focus:rounded-none">
            </div>
            <div class="col-span-2">
                <label for="deskripsi_kebutuhan" class="text-xs text-gray-500">DESKRIPSI KEBUTUHAN MASJID</label>
                <input type="text" required name="deskripsi_kebutuhan" id="deskripsi_kebutuhan" class="w-full px-4 py-2 border border-gray-400 border-b-1 focus:border-b-1 focus:border-b-gray-800 focus:border-x-0 focus:border-t-0 focus:ring-0 focus:outline-none transition-all duration-500 rounded focus:rounded-none">
            </div>
            <div class="col-span-4">
                <label for="alamat" class="text-xs text-gray-500">ALAMAT</label>
                <input type="text" required name="alamat" id="alamat" class="w-full px-4 py-2 border border-gray-400 border-b-1 focus:border-b-1 focus:border-b-gray-800 focus:border-x-0 focus:border-t-0 focus:ring-0 focus:outline-none transition-all duration-500 rounded focus:rounded-none">
            </div>
            <div class="col-span-4">
                <label for="dokumen_path" class="text-xs text-gray-500">UPLOAD DOKUMEN MASJID</label>
                <input type="file" required name="dokumen_path" id="dokumen_path" class="w-full px-4 py-2 border border-gray-400 border-b-1 focus:border-b-1 focus:border-b-gray-800 focus:border-x-0 focus:border-t-0 focus:ring-0 focus:outline-none transition-all duration-500 rounded focus:rounded-none" accept=".jpg, .png, .jpeg">
            </div>
            <input type="submit" value="Tambah Masjid" name="tambah_masjid" class="col-start-4 px-4 py-2 rounded bg-gray-800 hover:bg-gray-900 cursor-pointer text-white font-medium transition-colors text-sm">
        </form>
    </div>
</div>
<?php include '../templates/footer.php' ?>