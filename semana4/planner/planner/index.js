

function addTask() {

    let day = document.getElementById("dias-semana").value

    if (day === "domingo") {
        const sunday = document.getElementById("domingo")

        sunday.innerHTML += `<p>${tarefa.value}</p>`
        tarefa.value = ""
    } else if (day === "segunda") {
        const monday = document.getElementById("segunda")

        monday.innerHTML += `<p>${tarefa.value}</p>`
        tarefa.value = ""
    } else if (day === "terca") {
        const tuesday = document.getElementById("terca")

        tuesday.innerHTML += `<p>${tarefa.value}</p>`
        tarefa.value = ""
    } else if (day === "quarta") {
        const wednesday = document.getElementById("quarta")

        wednesday.innerHTML += `<p>${tarefa.value}</p>`
        tarefa.value = ""
    } else if (day === "quinta") {
        const thursday = document.getElementById("quinta")

        thursday.innerHTML += `<p>${tarefa.value}</p>`
        tarefa.value = ""
    } else if (day === "sexta") {
        const friday = document.getElementById("sexta")

        friday.innerHTML += `<p>${tarefa.value}</p>`
        tarefa.value = ""
    } else if (day === "sabado") {
        const saturday = document.getElementById("sabado")

        saturday.innerHTML += `<p>${tarefa.value}</p>`
        tarefa.value = ""
    }
   
} 
