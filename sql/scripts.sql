/* Tabla Categorías */
CREATE TABLE IF NOT EXISTS `categorias` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(20) NOT NULL,
  PRIMARY KEY(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/* Tabla Productos */
CREATE TABLE IF NOT EXISTS `productos` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(60) NOT NULL,
  `descripcion` varchar(20) NOT NULL,
  `precio` float(10,2) NOT NULL,
  `categoria_id` int(10) NOT NULL,
  PRIMARY KEY(`id`),
  /*FOREIGN KEY (categoria_id) REFERENCES categorias(id) ON DELETE CASCADE ON UPDATE CASCADE*/
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/* Tabla Ofertas */
CREATE TABLE IF NOT EXISTS `ofertas` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(20) NOT NULL,
  PRIMARY KEY(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/* Modificar el campo Descripción de la Tabla Productos */
ALTER TABLE productos MODIFY descripcion Text NOT NULL;

/* Eliminar la tabla Ofertas */
/* DROP TABLE ofertas; */

/* Seleccionar todos los registros de la tabla Productos */
/* SELECT * FROM productos */

/* Seleccionar 1 cliente y defini un alias para cada campo */
/* SELECT customername as nombre, address as direccion, city as ciudad FROM Customers WHERE customerid = 3 */

/* Seleccionar productos por categoria y por precio */
/* SELECT prod.productname, prod.price, cat.categoryname FROM Categories as cat, products as prod WHERE cat.categoryname LIKE 'condiments' AND prod.price <= 10 */

/* Seleccionar productos que no sean condimentos y que este en ese rango de precios */
/* SELECT prod.productname, prod.price, cat.categoryname FROM Categories as cat, products as prod WHERE cat.categoryname NOT LIKE 'condiments' AND (prod.price >= 2 AND prod.price <= 5) */

/* Seleccionar productos que no sean condimentos y que este en ese rango de precios y esten ordenados de forma descendente*/
/* SELECT prod.productname, prod.price, cat.categoryname FROM Categories as cat, products as prod WHERE cat.categoryname NOT LIKE 'condiments' AND (prod.price >= 10 AND prod.price <= 20) ORDER BY prod.price DESC */

/* Insertar categorías */
INSERT INTO categorias (id, nombre) VALUES (1, 'iPhone');
INSERT INTO categorias (id, nombre) VALUES (2, 'Samsung');

/* Insertar productos */
INSERT INTO productos (id, nombre, descripcion, precio, categoria_id) VALUES (1, 'Samsung Galaxy S25 12GB + 512 GB móvil libre', 'Descubre el Galaxy S25 y el S25+. Un diseño elegante, prémium envuelto en un marco de aluminio resistente con una pantalla inmersiva, cámara sofisticada y ahora más fino para una sujeción más cómoda.', 849.90, 2);
INSERT INTO productos (id, nombre, descripcion, precio, categoria_id) VALUES (2, 'Samsung Galaxy S25 FE 8GB + 256GB móvil libre', 'Descubre el Galaxy S25 y el S25+. Un diseño elegante, prémium envuelto en un marco de aluminio resistente con una pantalla inmersiva, cámara sofisticada y ahora más fino para una sujeción más cómoda.', 759.90, 2);
INSERT INTO productos (id, nombre, descripcion, precio, categoria_id) VALUES (3, 'Apple iPhone 17 Pro 256GB Naranja cósmico móvil libre', 'Nuevo Modelo iPhone 17', 1100, 1);
INSERT INTO productos (id, nombre, descripcion, precio, categoria_id) VALUES (4, 'Apple iPhone 17 256GB Lavanda móvil libre', 'Nuevo Modelo iPhone 17', 959, 1);

/* SELECT productos.nombre, precio, categorias.nombre  FROM productos, categorias where (productos.categoria_id = categorias.id) AND (categorias.nombre LIKE 'iphone') */

/* Actualizar productos */
UPDATE productos SET precio = 899.00 WHERE id = 4;

/* Actualizar el precio de todos los productos con un incremento de un 10% */
UPDATE productos set precio = precio * 1.1;

/* Eliminar productos */ 
/* DELETE FROM productos WHERE id = 2; */


SELECT nombre, precio, categoria_id FROM productos;