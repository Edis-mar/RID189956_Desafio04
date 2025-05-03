import './App.css'

function App() {
  return (
    <div className="container">
      <header>
        <h1>Meu Portfólio</h1>
        <p>Desenvolvedor Front-end | React | TypeScript</p>
      </header>

      <section>
        <h2>Sobre mim</h2>
        <p>
          Olá! Meu nome é Edis. Estou estudando programação com foco em front-end e busco me tornar um desenvolvedor profissional.
        </p>
      </section>

      <section>
        <h2>Projetos</h2>
        <ul>
          <li><strong>Projeto 1:</strong> Página de apresentação pessoal com HTML e CSS.</li>
          <li><strong>Projeto 2:</strong> To-Do List com React.</li>
          <li><strong>Projeto 3:</strong> Calculadora funcional com JavaScript puro.</li>
        </ul>
      </section>

      <section>
        <h2>Contato</h2>
        <p>Email: edis@email.com</p>
        <p>LinkedIn: <a href="https://linkedin.com" target="_blank">linkedin.com/in/edis</a></p>
      </section>
    </div>
  )
}