import client1 from '../images/image-emily.jpg'
import client2 from '../images/image-thomas.jpg'
import client3 from '../images/image-jennie.jpg'


export function Testimonials() {

    return (
        <div className='sTestWrapper'>
            <h1>Client Testimonial</h1>
            <div className="sTestContainer">
                <div className="sTestClients">
                        <img src={ client1 } alt="Emily picture" />
                        <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                        <h2>Emily R.</h2>
                        <h3>Marketing Director</h3>
                </div>
                
                <div className="sTestClients">
                        <img src={ client2 } alt="Thomas S" />
                        <p>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.   </p>
                        <h2>Thomas S.</h2>
                        <h3>Chief Operating Officer</h3>
                </div>
                <div className="sTestClients">
                        <img src={ client3 } alt="Emily picture" />
                        <p>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!  Business Owner About Services </p>
                        <h2>Jennie F.</h2>
                        <h3>Projects Contact</h3>
                </div>
            </div>

        </div>
    )
}