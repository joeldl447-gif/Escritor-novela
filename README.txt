V40 — MAPA, CAMBIO AISLADO
- Basada directamente en la V38 funcional.
- Mantiene la misma clave localStorage: escritor_novela_v1.
- Corregido selectStreetAt para que el JavaScript sea válido (era async pero no estaba declarado async).
- Punto: un único modo de clic Leaflet, sin listeners 'once' que compitan.
- Nota: crea un punto anotable desde el mapa.
- Buscar: Nominatim/OpenStreetMap; permite ir a resultados y marcar puntos o calles cuando hay geometría lineal.
- La selección manual de calle sigue disponible, pero buscar es la opción recomendada.
- El buscador requiere Internet.
