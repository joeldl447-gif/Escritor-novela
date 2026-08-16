Escritor PWA V52

Base: V41, no V51. Se volvió al sistema de estado original porque las versiones V42-V51 añadieron capas de persistencia que introdujeron fallos.

Corrección principal: el guardado automático ya no persiste historial ni copias automáticas completas. El historial local y las 12 copias automáticas eran capaces de llenar localStorage y hacer fallar el guardado. V52 elimina esas copias y guarda únicamente el estado actual de la novela.

También se mantiene el tema oscuro y se persiste la pantalla interna abierta.
