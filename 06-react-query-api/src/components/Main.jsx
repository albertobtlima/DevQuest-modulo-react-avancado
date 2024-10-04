import { useQuery } from "react-query";

export const Main = () => {
  const fetchDate = async () => {
    const response = await fetch("https://viacep.com.br/ws/01001000/json/");
    return await response.json();
  };

  const { data, isLoading, isErro, error } = useQuery("cep", fetchDate, {
    refetchOnWindowFocus: false,
  });
  console.log(data);

  if (isLoading) return <p>Está carregando as informações...</p>;
  if (isErro) return <p>Ocorreu um errro desconhecido {error}</p>;

  return (
    <ul>
      {
        <li>
          <p>{data.logradouro}</p>
          <p>{data.bairro}</p>
          <p>{data.localidade}</p>
          <p>{data.uf}</p>
          <p>{data.regiao}</p>
        </li>
      }
    </ul>
  );
};
