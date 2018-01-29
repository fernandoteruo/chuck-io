import React from 'react';
import "../styles/css/banner.css";
export class Banner extends React.Component {
    render() {
        return(
            <div className="banner">
                <picture>
                    <source srcSet="https://images.firstcovers.com/covers/c/chuck_norris_approved-4196.jpg" media="(min-width: 700px)"/>
                    <source srcSet="https://www.insp.com/content/uploads/15-IM-0478_INSPeBanners-October_WalkerTexasRanger_620x250-2zz7lj5a6etqlqmujd3dhc.jpg" media="(min-width: 500px)"/>
                    <img src="https://stuffpoint.com/chuck-norris/image/169271-chuck-norris-texas-banner.jpg" alt="banner"/>
                </picture>
            </div>
        );
    };
}