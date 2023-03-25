-- CreateTable
CREATE TABLE `Product` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `buyValue` INTEGER NOT NULL,
    `sellValue` INTEGER NOT NULL,
    `length` INTEGER NOT NULL,
    `height` INTEGER NOT NULL,
    `depth` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Delivery` (
    `id` VARCHAR(191) NOT NULL,
    `adressNumber` INTEGER NOT NULL,
    `adress` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `personName` VARCHAR(191) NOT NULL,
    `personNumber` INTEGER NOT NULL,
    `hour` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
