import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16}/>
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img src="https://github.com/ecthon.png" alt="Ecthon" />
          <div>
            <strong>ecthon/nlw-ecoleta</strong>
            <p>descrição do repositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1809</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="textejasbd">
          <div>
            <strong>asdasd</strong>
            <p>asasasa</p>
          </div>
          <FiChevronRight size={20}/>
        </Link>
      </Issues>
    </>
  );
}
export default Repository;
