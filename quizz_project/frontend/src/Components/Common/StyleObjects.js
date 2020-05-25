import Background from '../Images/Background.png'

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
    transition: '0.5s'
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


// div#content{
//     width: 100vw; // The width of this element is 100% of the viewports width
//     height: 100vh; // The height of this element is 100% of the viewport height

//     font-size: 1vmax; // You can fiddle with this to mame sure the font gets
       