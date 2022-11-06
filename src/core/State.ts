import { reactive, ref } from "vue";
import { Projeto } from "./model";

// https://vuejs.org/guide/scaling-up/state-management.html#simple-state-management-with-reactivity-api
export const PROJETO = reactive(new Projeto("AS Experiment"));
export const MODALS = reactive([])
export const NOTIFICACOES = ref([])
export const EMAIL = ref(null)
export const CACHE = ref({})

export const notificar = (msg, color = 'success', timeout?) => {
    NOTIFICACOES.value = NOTIFICACOES.value.filter(n => !n.close)
    const id = Date.now() + Math.random()
    NOTIFICACOES.value.push({ msg, color, timeout, id })
}

export const remove = (id) => {
    const ns = NOTIFICACOES.value.filter(n => n.id === id)
    if (ns && ns.length > 0) ns[0].close = true
}
