Escritor PWA V44 — corrección de persistencia y caché

Cambios críticos:
- Se elimina la posibilidad de que el Service Worker entregue index.html viejo.
- Se eliminan cachés de V41/V42/V43 al activar V44.
- manifest.json y start_url actualizados a V44.
- localStorage sigue siendo la fuente síncrona de verdad.
- Se evita que una recuperación asíncrona de IndexedDB sobrescriba una novela válida.
- Las copias principal y de respaldo reciben marca temporal.
- Se conserva la navegación interna y el tema oscuro.
