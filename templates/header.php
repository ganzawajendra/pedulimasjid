<?php
include '../config/db.php';
session_start();

if (isset($_SESSION['id'])) {
    $user_id = $_SESSION['id'];
    $sql = "SELECT * FROM users WHERE id = $user_id";
    $result = mysqli_query($conn, $sql);
    $user = mysqli_fetch_assoc($result);
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Peduli Masjid</title>
</head>

<body>
    <?php
    $currentPage = basename($_SERVER['PHP_SELF']);
    if ($currentPage !== 'login.php' && $currentPage !== 'register.php'):
    ?>
        <nav class=" z-10 w-full flex justify-between items-center h-13 px-20 bg-white shadow-lg">
            <p class="text-xl font-semibold text-gray-800">Peduli Masjid</p>
            <div class="flex space-x-4 items-center">
                <?php if (isset($_SESSION['id'])) : ?>
                    <div class="relative group">
                        <button type="button" class="flex items-center cursor-pointer space-x-2 p-2 hover:bg-gray-100 transition duration-150" id="menu-button" aria-expanded="false" aria-haspopup="true">
                            <i class="fa-solid fa-user-circle text-gray-600 text-2xl"></i>
                            <span class="text-sm font-medium text-gray-700 hidden md:block"><?php echo htmlspecialchars($_SESSION['nama_lengkap']); ?></span>
                            <i class="fa-solid fa-chevron-down text-gray-400 text-xs"></i>
                        </button>
                        <div class="absolute right-0 mt-2 w-30 bg-white opacity-0 invisible scale-95 group-hover:opacity-100 group-hover:visible group-hover:scale-100 transition-all duration-200 z-20 rounded-md">
                            <a href="../auth/logout.php" class="block text-xs font-semibold px-4 py-2 text-red-600 hover:bg-red-100 transition flex justify-between items-center border border-gray-300 rounded-md">
                                Logout <i class="fa-solid fa-arrow-right-from-bracket text-sm"></i>
                            </a>
                        </div>
                    </div>
                <?php else: ?>
                    <a href="../auth/login.php" class="hover:bg-gray-900 bg-gray-800 text-white rounded px-4 py-1 text-sm transition-all duration-300">Login</a>
                    <a href="../auth/register.php" class="text-sm px-4 py-1">Register</a>
                <?php endif; ?>
            </div>
        </nav>
    <?php endif; ?>