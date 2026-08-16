Escritor PWA V49 — corrección del guardado automático

La causa real encontrada en V48 era que el código llamaba a save() en todos los lugares importantes, pero V48 NO tenía ninguna función save(). Por lo tanto, las ediciones del editor quedaban solamente en el DOM y nunca se copiaban a state.chapters antes de persistir.

V49 agrega save(): sincroniza editor.innerHTML y title.value con state y luego ejecuta persistState(). Mantiene guardado automático, capítulos separados, modo oscuro y navegación interna. También usa claves V49 y un Service Worker V49 para evitar reutilizar el estado/caché de V48.
