-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `RFID` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `role` VARCHAR(191) NOT NULL DEFAULT 'user',
    `token` VARCHAR(191) NULL,

    UNIQUE INDEX `users_RFID_key`(`RFID`),
    UNIQUE INDEX `users_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `barang` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `namaBarang` VARCHAR(191) NOT NULL,
    `tipeBarang` VARCHAR(191) NULL,
    `stokBarang` INTEGER NOT NULL,

    UNIQUE INDEX `barang_namaBarang_key`(`namaBarang`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
