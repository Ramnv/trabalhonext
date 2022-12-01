function SSR({ donos }) {
    return (
        <div>
            <h1>Aprendendo NextJS - CSR</h1>
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
                        predios.map(obj => (
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

export default SSR;

export async function getServerSideProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/donos`);
    const donos = await res.json();

    return {
        props: {
            donos
        }
    }
}