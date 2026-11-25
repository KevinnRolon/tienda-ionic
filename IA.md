# Uso de inteligencia artificial en NÓVRA

## Autor del proyecto

Kevinn Rolón.

## Herramienta utilizada

Codex de OpenAI, mediante una conversación de asistencia durante el desarrollo.

## Forma de trabajo

Se solicitó una guía con código para evitar errores en Visual Studio Code.

La estructura inicial se generó con la plantilla tabs de Ionic. Parte del código específico de las pantallas y servicios fue propuesto por la IA. El autor incorporó los fragmentos, estilos, ejecutó la aplicación, realizó pruebas y aplicó correcciones.

Los datos del catálogo provienen de DummyJSON y se descargaron a un archivo JSON local.

## Solicitudes principales

Resumen de las solicitudes realizadas:

- Crear un ecommerce con Ionic y Angular siguiendo mis indicaciones.
- Evitar librerías y funciones deprecadas.
- Elaborar más el diseño, incorporando una portada, filtros y orden por precio.
- Revisar los errores y comprobar el cumplimiento de los indicadores.

## Partes generadas con ayuda de IA

- Interfaces de los productos y elementos del carrito.
- Servicio de lectura del JSON local.
- Servicio compartido del carrito y cálculo de cantidades y total.
- Configuración de HttpClient y de las rutas en environments.
- Catálogo con búsqueda, categorías y orden por precio.
- Indicador de carga, mensaje de error y recuperación mediante Reintentar.
- Controles del carrito y confirmación de vaciado.
- Formulario de perfil, validaciones y aviso de guardado.
- Plantillas HTML y estilos SCSS de las tres pantallas.
- Instrucciones para Git y GitHub.
- Borradores del README y de este documento.

El nombre NÓVRA y el eslogan fueron elegidos por el autor.

## Decisiones y correcciones posteriores

Durante la integración se realizaron estos ajustes:

- Se eligió la opción de ecommerce de la consigna.
- Se definió una identidad visual en negro, blanco y grises.
- Se revisó la agrupación de imports para respetar las reglas de formato.
- Se utilizó inyección por constructor para cumplir el requisito académico.
- Se recuperó un componente de la plantilla requerido por las pantallas iniciales.
- Se corrigió un cierre de div faltante en la pantalla de Perfil.
- Se eliminó una declaración duplicada de fondo blanco en las miniaturas.
- Se rediseñaron catálogo, carrito y perfil después de revisar las primeras versiones.
- Se ajustó la configuración de navegadores a la compatibilidad de Angular 22.
- Se adaptó el umbral de aviso de estilos al diseño actual, conservando el límite de error.

## Comprobaciones realizadas

Se ejecutó la compilación mediante npm run build.

También se realizaron comprobaciones funcionales con asistencia de Codex sobre:

- Carga de los 24 productos desde el JSON local.
- Búsqueda, filtros por categoría y orden por precio.
- Incorporación de productos, cambios de cantidad, total y contador.
- Cancelación y confirmación del vaciado del carrito.
- Validación, guardado y actualización del perfil.
- Navegación entre las tres pestañas.
- Presentación de las pantallas a 390 píxeles de ancho.
- Indicador de carga, mensaje de error y recuperación de la lectura del JSON.

## Alcance de la asistencia

La ayuda de IA fue moderada tanto en la implementación como en el diseño y la documentación.

Este registro declara esa asistencia.

## Evidencias y aplicación Android

El autor generó la APK en Android Studio, comprobó su funcionamiento en el emulador y la publicó en GitHub Releases. Codex verificó la firma del archivo y comprobó que la APK publicada coincidiera con la generada.

