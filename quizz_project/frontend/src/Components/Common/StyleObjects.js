import Background from '../images/background.png'
// TODO: overlay ei pysy paikallaa skrollatessa 
export const overlay = {
    marginTop: '72px',
    fontFamily: 'Lato, sans-serif',
    height: '0%',
    width: '100%',
    position: 'fixed',
    zIndex: '1',
    top: '0',
    left: '0',
    backgroundColor: 'rgba(44,62,80, 0.9)',
    overflow: 'hidden',
    transition: '0.5s',
}
export const navbar = {
    backgroundColor: 'rgba(44,62,80, 0.9)'
}
export const bgImage = {
    backgroundImage: `url(${Background})`,
    width: '100vw',
    height: '50vw',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}
export const btnStyle = {
    width: '80%',
    float: 'center',
    margin: '2px',
    padding: '5px'
}
