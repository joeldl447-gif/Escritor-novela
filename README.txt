V19 — IA LOCAL SEGURA PARA TELÉFONOS
- Se elimina el modelo Qwen2.5-0.5B que podía provocar cierres por consumo de memoria.
- Se usa SmolLM2-135M-Instruct-ONNX, cuya variante q4f16 es mucho menor.
- En Android/iPhone/iPad se bloquea la carga si navigator.deviceMemory es desconocido o menor a 6 GB.
- En móvil solo intenta WebGPU después del filtro de memoria; no hace fallback a WASM pesado.
- No muestra alertas bloqueantes cuando falla la carga.
- La búsqueda local de la novela y la lectura por voz siguen funcionando aunque la IA generativa esté bloqueada.
- Mantiene las demás funciones de V18.
