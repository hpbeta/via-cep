import axios from "axios";
import { useState } from "react";
import { Button, Container, ContainerInfo, Input, List } from "./styles";

export function Main() {
  const [input, setInput] = useState("");
  const [cepData, setCepData] = useState("");

  async function getCep() {

    if (input === "") {
      alert("Digite um cep ");
      return;
    }

    try {
      const response = await axios.get(
        `https://viacep.com.br/ws/${input}/json/`
      );
      setCepData(response.data);
    } catch (error) {
      console.error("Erro ao obter o CEP:", error);
    }
  }

  return (
    <Container>
      <div>
        <Input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder="Digite seu cep..."
        />
        <Button onClick={getCep}>Enviar</Button>
      </div>
      <ContainerInfo>
        <List>
          <li>
            {cepData ? (
              <>
                <span>Cep: </span>
                <span> {cepData.cep}</span>
              </>
            ) : (
              ""
            )}
          </li>

          <li>
            {cepData ? (
              <>
                <span>Logradouro: </span>
                <span> {cepData.logradouro}</span>
              </>
            ) : (
              ""
            )}
          </li>

          <li>
            {cepData ? (
              <>
                <span>Bairro: </span>
                <span> {cepData.bairro}</span>
              </>
            ) : (
              ""
            )}
          </li>

          <li>
            {cepData ? (
              <>
                <span>Localidade: </span>
                <span> {cepData.localidade}</span>
              </>
            ) : (
              ""
            )}
          </li>

          <li>
            {cepData ? (
              <>
                <span>Uf: </span>
                <span> {cepData.uf}</span>
              </>
            ) : (
              ""
            )}
          </li>

          <li>
            {cepData ? (
              <>
                <span>DDD: </span>
                <span> {cepData.ddd}</span>
              </>
            ) : (
              ""
            )}
          </li>
        </List>
      </ContainerInfo>
    </Container>
  );
}
