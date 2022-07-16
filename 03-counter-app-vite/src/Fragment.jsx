import PropTypes from 'prop-types';

const newMessage = {
  mesaage: 'Feliz día',
  nombre: 'Stephanie',
  apellido: 'Castillo'
};

export const Fragment = ({ title, subtitle }) => {
  if (!title) {
    throw new Error('El titulo no existe');
  }
  return (
    <>
      <h1>{title}</h1>
      <h2>Estamos dentro de un fragmento</h2>
      <code>{JSON.stringify(newMessage)}</code>
      <p>{subtitle}</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas similique quibusdam eum tempore eaque, dignissimos culpa corrupti. Sit, voluptatibus. Dolorum non, et veniam fugit doloribus corporis amet. Obcaecati, inventore veritatis?</p>
    </>
  )
}

Fragment.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}

Fragment.defaultProps = {
  title: 'No hay titulo',
  subtitle: 'No hay subtitulo'
}