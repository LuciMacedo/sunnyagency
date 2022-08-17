import { Link } from "react-router-dom"

export function Gallery() {

    return (
        <div className="sGallery">
            <section className="sGallery1">
            <h1 className="sGalleryh1">
                    Transform your Brand
                </h1>
                <p className='sGalleryp'>
                    We are a full service creative agency especializing in helping brands grow fast. Engage your clients through compelling visuals that do the most of the marketing for you.
                
                </p>

                <Link to='#' className="sGalleryLinky">
                    Learn more
                </Link>
            </section>
                
            <section className="sGallery2">
                
            </section>

            <section className="sGallery3">

            </section>

            <section className="sGallery4">
                <h1 className="sGalleryh1">
                    Stand out to the right audience 
                </h1>
                <p className='sGalleryp'>
                    Using a collaborative formula of designers, researchers, photographers, and copywriters. We will build and extend your brand in digital places. 
                </p>


                <Link to='#' className="sGalleryLinkr">
                    Learn more
                </Link>
            </section>

            <section className="sGallery5">
                <h1 className="sGallery56h">Graphic design</h1>
                <p className="sGallery56p">Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention. </p>
            </section>

            <section className="sGallery6">
                <h1 className="sGallery56h">Photography</h1>
                <p className="sGallery56p">Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
            </section>

        </div>
    )
}