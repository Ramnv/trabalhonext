import { useState, useEffect } from "react";

function CSR() {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/donos`)
            .then(response => response.json())
            .then(json => setLista(json))
    }, []);

    return (
        <div>
            <h1>Trabalho Next.js Etapa 02 - CSR</h1>
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Endereço</th>
                        <th>Telefone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lista.map(obj => (
                            <tr key={obj.codigo}>
                                <td>{obj.codigo}</td>
                                <td>{obj.nome}</td>
                                <td>{obj.endereco}</td>
                                <td>{obj.telefone}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CSR;