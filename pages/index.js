import { useEffect } from "react"

function Home (){

    useEffect(() => {
        document.getElementById('show-message-btn').addEventListener('click', function() {
            document.getElementById('message-card').style.display = 'block'
        })

        document.getElementById('hide-message-btn').addEventListener('click', function() {
            document.getElementById('message-card').style.display = 'none'
        })
    }, [])

    return (
        <div class="container text-center">
        <h1 class="mb-4">Exemplo de Interatividade</h1>
        <button id="show-message-btn" class="btn btn-primary">Mostrar Mensagem</button>

        <div id="message-card" class="card mt-4">
            <div class="card-body">
                <h5 class="card-title">Mensagem Secreta</h5>
                <p class="card-text">Você clicou no botão! Esta mensagem foi revelada através do JavaScript.</p>
                <button id="hide-message-btn" class="btn btn-danger">Esconder Mensagem</button>
            </div>
        </div>
    </div>
    )
}


export default Home