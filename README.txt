Escritor PWA V43 — corrección de persistencia

Esta versión corrige la pérdida de capítulos al recargar.
- Recupera el estado antes de renderizar el editor.
- Compara localStorage, copia de respaldo e IndexedDB.
- Prefiere la copia más reciente y evita que un estado inicial de un capítulo sobrescriba un manuscrito existente.
- Guarda una marca de tiempo de cada estado.
- Mantiene el modo oscuro y la navegación interna.

Abrir index.html o instalar como PWA.
