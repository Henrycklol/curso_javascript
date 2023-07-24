var momentoPresenteAtual = new Date()
var horas = momentoPresenteAtual.getHours()
console.log(`Agora são exatamente e precisamente ${horas}`)
if (horas < 12 && horas >= 11) {
    console.log(`Falta bem pouquinho pra daqui a pouco`)
} else if (horas < 18) {
    console.log(`Boa tarde, sinhá moça`)
} else if (horas < 23) {
    console.log(`Boa noite!`)
} else {
    console.log(`volta a dormir meu rei`)
}