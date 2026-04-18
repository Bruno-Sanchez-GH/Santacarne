# Santa Carne

Landing page institucional para Santa Carne, un servicio de comisión e intermediación de hacienda vacuna y porcina con foco en inspección, confianza comercial y trayectoria profesional.

## Stack

- HTML5 semántico
- CSS3 con variables y container queries
- JavaScript vanilla
- FormSubmit para el formulario
- GitHub Pages para publicación

## Estructura del proyecto

```text
/
├── index.html
├── styles.css
├── main.js
├── gracias.html
├── robots.txt
├── sitemap.xml
└── img/
```

## Objetivo del sitio

Mostrar de forma clara y profesional:

- el servicio de inspección y comisión
- la trayectoria del titular
- la confianza que genera en clientes y rubros con los que trabaja
- una vía directa de contacto comercial

## Estado actual

Actualmente la landing ya cuenta con:

- hero principal con CTA
- secciones de servicio, trayectoria, rubros, testimonios, beneficios y contacto
- testimonios con comportamiento diferenciado entre mobile y desktop
- SEO base implementado en `head`
- `robots.txt` y `sitemap.xml`
- datos estructurados con Schema.org

## Pendientes principales

- reemplazar textos placeholder por contenido real
- definir testimonios reales
- definir empresas o rubros que se pueden nombrar públicamente
- crear una imagen social final para compartir enlaces
- agregar política de privacidad
- revisar ajustes finos de SEO con el contenido definitivo

## Flujo de trabajo sugerido

Cada vez que retomemos trabajo en este repo:

1. revisar este `README.md`
2. actualizar la bitácora de sesión
3. hacer los cambios necesarios
4. dejar anotados avances, pendientes y próximos pasos

## Bitácora de sesiones

### 2026-04-14

Cambios realizados:

- reestructuración de la home con foco más profesional y SEO-friendly
- reincorporación del overlay del hero también en desktop
- eliminación visual del bloque de imágenes de transición entre hero y servicio
- incorporación de una nueva sección breve de `Cómo funciona`
- agregado de una banda de credenciales para reforzar confianza al inicio
- mejora de jerarquía de mensajes en hero, servicio, beneficios, trayectoria, rubros y contacto
- refinamiento visual de testimonios con sombreado lateral más suave y presencia más sobria
- simplificación general del recorrido para sostener conversión y dejar preparada la futura expansión a subpáginas

Pendientes de contenido:

- reemplazar placeholders por contenido real del cliente
- cargar el detalle real del proceso de trabajo
- validar testimonios aprobados y nombres/rubros a mostrar
- definir si se crearán subpáginas SEO específicas para servicio, proceso y trayectoria
- completar y pulir `servicio.html` con el contenido real del proceso y alcance del servicio

### 2026-04-08

Cambios realizados:

- mejora de metadatos SEO base en `index.html`
- incorporación de secciones nuevas para trayectoria, rubros y testimonios
- agregado de badge animado de 25 años
- ajustes responsive y de jerarquía visual en varias secciones
- diferenciación del comportamiento de testimonios entre mobile y desktop
- flechas manuales en hover para testimonios en desktop
- refinamiento del hero y proporciones de algunos bloques

Pendientes de contenido:

- información real del titular
- testimonios reales
- definición final de empresas/rubros a mostrar
- validación final de copy comercial

## Cómo publicar

El sitio está pensado para deploy simple en GitHub Pages. Los cambios de este repositorio pueden subirse directamente a GitHub para mantener una versión visible y profesional del proyecto.

## Nota de mantenimiento

Este archivo está preparado para seguir actualizándose en futuras sesiones como registro simple del proyecto.
