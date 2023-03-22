import "./Banner.css";

/**
 * Um componente de banner que exibe uma imagem com uma descrição opcional.
 *
 * @param {Object} props - As propriedades do componente.
 * @param {string} props.imageSrc - O caminho da imagem para exibir no banner.
 * @param {string} [props.description] - A descrição opcional para exibir abaixo da imagem.
 * @returns {React.Element} Um elemento React que exibe uma imagem com uma descrição opcional.
 */
const Banner = () => {
  return (
    <header className="banner">
      <img
        src="/imagens/banner.png"
        alt="Banner principal da página principal do Organo"
      />
    </header>
  );
};

export default Banner;
